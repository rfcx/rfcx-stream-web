//--------------------------------------------------------------------
// WebGL Analyser
//

var ANALYSISTYPE_FREQUENCY = 0;
var ANALYSISTYPE_SONOGRAM = 1;
var ANALYSISTYPE_3D_SONOGRAM = 2;
var ANALYSISTYPE_WAVEFORM = 3;

// The "model" matrix is the "world" matrix in Standard Annotations and Semantics
var model = 0;
var view = 0;
var projection = 0;

function createGLErrorWrapper(context, fname) {
    return function() {
        var rv = context[fname].apply(context, arguments);
        var err = context.getError();
        if (err != 0)
            throw "GL error " + err + " in " + fname;
        return rv;
    };
}

function create3DDebugContext(context) {
    // Thanks to Ilmari Heikkinen for the idea on how to implement this so elegantly.
    var wrap = {};
    for (var i in context) {
        try {
            if (typeof context[i] == 'function') {
                wrap[i] = createGLErrorWrapper(context, i);
            } else {
                wrap[i] = context[i];
            }
        } catch (e) {
            // console.log("create3DDebugContext: Error accessing " + i);
        }
    }
    wrap.getError = function() {
        return context.getError();
    };
    return wrap;
}

/**
 * Class AnalyserView
 */

AnalyserView = function(canvasElementID, analysisType) {
    this.canvasElementID = canvasElementID;

    // NOTE: the default value of this needs to match the selected radio button

    // This analysis type may be overriden later on if we discover we don't support the right shader features.
    this.analysisType = analysisType || ANALYSISTYPE_3D_SONOGRAM;

    this.sonogram3DWidth = 256;
    this.sonogram3DHeight = 256;
    this.sonogram3DGeometrySize = 10;
    this.freqByteData = 0;
    this.texture = 0;
    this.TEXTURE_HEIGHT = 256;
    this.yoffset = 0;

    this.frequencyShader = 0;
    this.waveformShader = 0;
    this.sonogramShader = 0;
    this.sonogram3DShader = 0;

    // Background color
    // set to #222222
    this.backgroundColor = [0.135, 0.135, 0.135, 1.0];
    // Foreground color
    // set to rfcx green color
    this.foregroundColor = [0.07, 0.6, 0.07, 1.0];

    this.initGL();

    var resizeTimeout;
    $(window).resize(function() {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(function() {
        if (this.canvas && this.gl) {
          this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
        }
      }.bind(this), 500);
    }.bind(this));
};

var COLOR_BUFFER_BIT,
    DEPTH_BUFFER_BIT,
    TRIANGLES,
    UNSIGNED_SHORT,
    GLFLOAT;

AnalyserView.prototype.initGL = function() {
    model = new Matrix4x4();
    view = new Matrix4x4();
    projection = new Matrix4x4();

    var sonogram3DWidth = this.sonogram3DWidth;
    var sonogram3DHeight = this.sonogram3DHeight;
    var sonogram3DGeometrySize = this.sonogram3DGeometrySize;
    var backgroundColor = this.backgroundColor;

    var canvas = document.getElementById(this.canvasElementID);
    this.canvas = canvas;

    // var gl = create3DDebugContext(canvas.getContext("experimental-webgl"));
    var gl = canvas.getContext("experimental-webgl");
    this.gl = gl;

    COLOR_BUFFER_BIT = gl.COLOR_BUFFER_BIT;
    DEPTH_BUFFER_BIT = gl.DEPTH_BUFFER_BIT;
    TRIANGLES = gl.TRIANGLES;
    UNSIGNED_SHORT = gl.UNSIGNED_SHORT;
    GLFLOAT = gl.FLOAT;

    // If we're missing this shader feature, then we can't do the 3D visualization.
    this.has3DVisualizer = (gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS) > 0);

    if (!this.has3DVisualizer && this.analysisType == ANALYSISTYPE_3D_SONOGRAM)
        this.analysisType = ANALYSISTYPE_FREQUENCY;

    var cameraController = new CameraController(canvas);
    this.cameraController = cameraController;

    var xR   = -32,
        yR   = 5,
        toUp = true,
        delta = 0.2;

    cameraController.xRot = xR;
    cameraController.yRot = yR;

    function setDelta() {
      delta = toUp? 0.2 : -0.2;
    }
    function checkYRot() {
      if (cameraController.yRot > 20) {
        toUp = false;
      }
      else if (cameraController.yRot < -16) {
        toUp = true;
      }
    }

    // set sonogram dragging automatically
    setInterval(function() {
      if (window.isVisualizationEnabled) {
        checkYRot();
        setDelta();
        cameraController.yRot = cameraController.yRot + delta;
      }
    }, 100);

    gl.clearColor(backgroundColor[0], backgroundColor[1], backgroundColor[2], backgroundColor[3]);
    gl.enable(gl.DEPTH_TEST);

    // Initialization for the 2D visualizations
    var vertices = new Float32Array([
        1.0,  1.0, 0.0,
        -1.0,  1.0, 0.0,
        -1.0, -1.0, 0.0,
        1.0,  1.0, 0.0,
        -1.0, -1.0, 0.0,
        1.0, -1.0, 0.0]);
    var texCoords = new Float32Array([
        1.0, 1.0,
        0.0, 1.0,
        0.0, 0.0,
        1.0, 1.0,
        0.0, 0.0,
        1.0, 0.0]);

    var vboTexCoordOffset = vertices.byteLength;
    this.vboTexCoordOffset = vboTexCoordOffset;

    // Create the vertices and texture coordinates
    var vbo = gl.createBuffer();
    this.vbo = vbo;

    gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
    gl.bufferData(gl.ARRAY_BUFFER,
        vboTexCoordOffset + texCoords.byteLength,
        gl.STATIC_DRAW);
        gl.bufferSubData(gl.ARRAY_BUFFER, 0, vertices);
        gl.bufferSubData(gl.ARRAY_BUFFER, vboTexCoordOffset, texCoords);

    // Initialization for the 3D visualizations
    var numVertices = sonogram3DWidth * sonogram3DHeight;
    if (numVertices > 65536) {
        throw "Sonogram 3D resolution is too high: can only handle 65536 vertices max";
    }
    vertices = new Float32Array(numVertices * 3);
    texCoords = new Float32Array(numVertices * 2);

    for (var z = 0; z < sonogram3DHeight; z++) {
        for (var x = 0; x < sonogram3DWidth; x++) {
            // Generate a reasonably fine mesh in the X-Z plane
            vertices[3 * (sonogram3DWidth * z + x) + 0] =
            sonogram3DGeometrySize * (x - sonogram3DWidth / 2) / sonogram3DWidth;
            vertices[3 * (sonogram3DWidth * z + x) + 1] = 0;
            vertices[3 * (sonogram3DWidth * z + x) + 2] =
            sonogram3DGeometrySize * (z - sonogram3DHeight / 2) / sonogram3DHeight;

            texCoords[2 * (sonogram3DWidth * z + x) + 0] =
            x / (sonogram3DWidth - 1);
            texCoords[2 * (sonogram3DWidth * z + x) + 1] =
            z / (sonogram3DHeight - 1);
        }
    }

    var vbo3DTexCoordOffset = vertices.byteLength;
    this.vbo3DTexCoordOffset = vbo3DTexCoordOffset;

    // Create the vertices and texture coordinates
    var sonogram3DVBO = gl.createBuffer();
    this.sonogram3DVBO = sonogram3DVBO;

    gl.bindBuffer(gl.ARRAY_BUFFER, sonogram3DVBO);
    gl.bufferData(gl.ARRAY_BUFFER, vbo3DTexCoordOffset + texCoords.byteLength, gl.STATIC_DRAW);
    gl.bufferSubData(gl.ARRAY_BUFFER, 0, vertices);
    gl.bufferSubData(gl.ARRAY_BUFFER, vbo3DTexCoordOffset, texCoords);

    // Now generate indices
    this.sonogram3DNumIndices = (sonogram3DWidth - 1) * (sonogram3DHeight - 1) * 6;

    var indices = new Uint16Array(this.sonogram3DNumIndices);
    // We need to use TRIANGLES instead of for example TRIANGLE_STRIP
    // because we want to make one draw call instead of hundreds per
    // frame, and unless we produce degenerate triangles (which are very
    // ugly) we won't be able to split the rows.
    var idx = 0;
    for (var z = 0; z < sonogram3DHeight - 1; z++) {
        for (var x = 0; x < sonogram3DWidth - 1; x++) {
            indices[idx++] = z * sonogram3DWidth + x;
            indices[idx++] = z * sonogram3DWidth + x + 1;
            indices[idx++] = (z + 1) * sonogram3DWidth + x + 1;
            indices[idx++] = z * sonogram3DWidth + x;
            indices[idx++] = (z + 1) * sonogram3DWidth + x + 1;
            indices[idx++] = (z + 1) * sonogram3DWidth + x;
        }
    }

  var sonogram3DIBO = gl.createBuffer();
  this.sonogram3DIBO = sonogram3DIBO;

  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, sonogram3DIBO);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);
  // Note we do not unbind this buffer -- not necessary

  // Load the shaders
  this.frequencyShader = o3djs.shader.loadFromURL(gl, "shaders/common-vertex.shader", "shaders/frequency-fragment.shader");
  this.waveformShader = o3djs.shader.loadFromURL(gl, "shaders/common-vertex.shader", "shaders/waveform-fragment.shader");
  this.sonogramShader = o3djs.shader.loadFromURL(gl, "shaders/common-vertex.shader", "shaders/sonogram-fragment.shader");

  if (this.has3DVisualizer)
    this.sonogram3DShader = o3djs.shader.loadFromURL(gl, "shaders/sonogram-vertex.shader", "shaders/sonogram-fragment.shader");
};

AnalyserView.prototype.initByteBuffer = function() {
    var gl = this.gl;
    var TEXTURE_HEIGHT = this.TEXTURE_HEIGHT;

    if (!this.freqByteData || this.freqByteData.length != analyser.frequencyBinCount) {
        this.freqByteData = new Uint8Array(analyser.frequencyBinCount);

        // (Re-)Allocate the texture object
        if (this.texture) {
            gl.deleteTexture(this.texture);
            this.texture = null;
        }
        this.texture = gl.createTexture();

        gl.bindTexture(gl.TEXTURE_2D, this.texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        // TODO(kbr): WebGL needs to properly clear out the texture when null is specified
        var tmp = new Uint8Array(this.freqByteData.length * TEXTURE_HEIGHT);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.ALPHA, this.freqByteData.length, TEXTURE_HEIGHT, 0, gl.ALPHA, gl.UNSIGNED_BYTE, tmp);
        tmp = null;
    }
};

AnalyserView.prototype.setAnalysisType = function(type) {
    // Check for read textures in vertex shaders.
    if (!this.has3DVisualizer && type == ANALYSISTYPE_3D_SONOGRAM)
        return;

    this.analysisType = type;
};

AnalyserView.prototype.analysisType = function() {
    return this.analysisType;
};


AnalyserView.prototype.doFrequencyAnalysis = function(event) {
    switch(this.analysisType) {
      case ANALYSISTYPE_FREQUENCY:
          analyser.smoothingTimeConstant = 0.75;
          analyser.getByteFrequencyData(this.freqByteData);
          break;

      case ANALYSISTYPE_SONOGRAM:
      case ANALYSISTYPE_3D_SONOGRAM:
          analyser.smoothingTimeConstant = 0.1;
          analyser.getByteFrequencyData(this.freqByteData);
          break;

      case ANALYSISTYPE_WAVEFORM:
          analyser.smoothingTimeConstant = 0.1;
          analyser.getByteTimeDomainData(this.freqByteData);
          break;
    }

    this.drawGL();
};


AnalyserView.prototype.drawGL = function() {
    var canvas = this.canvas;
    var gl = this.gl;
    var vbo = this.vbo;
    var vboTexCoordOffset = this.vboTexCoordOffset;
    var sonogram3DVBO = this.sonogram3DVBO;
    var vbo3DTexCoordOffset = this.vbo3DTexCoordOffset;
    var sonogram3DGeometrySize = this.sonogram3DGeometrySize;
    var sonogram3DWidth = this.sonogram3DWidth;
    var sonogram3DHeight = this.sonogram3DHeight;
    var freqByteData = this.freqByteData;
    var texture = this.texture;
    var TEXTURE_HEIGHT = this.TEXTURE_HEIGHT;

    var frequencyShader = this.frequencyShader;
    var waveformShader = this.waveformShader;
    var sonogramShader = this.sonogramShader;
    var sonogram3DShader = this.sonogram3DShader;


    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);
    if (this.analysisType != ANALYSISTYPE_SONOGRAM && this.analysisType != ANALYSISTYPE_3D_SONOGRAM) {
        this.yoffset = 0;
    }

    gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, this.yoffset, freqByteData.length, 1, gl.ALPHA, gl.UNSIGNED_BYTE, freqByteData);

    if (this.analysisType == ANALYSISTYPE_SONOGRAM || this.analysisType == ANALYSISTYPE_3D_SONOGRAM) {
        this.yoffset = (this.yoffset + 1) % TEXTURE_HEIGHT;
    }
    var yoffset = this.yoffset;

    // Point the frequency data texture at texture unit 0 (the default),
    // which is what we're using since we haven't called activeTexture
    // in our program

    var vertexLoc;
    var texCoordLoc;
    var frequencyDataLoc;
    var foregroundColorLoc;
    var backgroundColorLoc;
    //var texCoordOffset;

    var currentShader;

    switch (this.analysisType) {
      case ANALYSISTYPE_FREQUENCY:
      case ANALYSISTYPE_WAVEFORM:
          gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
          currentShader = this.analysisType == ANALYSISTYPE_FREQUENCY ? frequencyShader : waveformShader;
          currentShader.bind();
          vertexLoc = currentShader.gPositionLoc;
          texCoordLoc = currentShader.gTexCoord0Loc;
          frequencyDataLoc = currentShader.frequencyDataLoc;
          foregroundColorLoc = currentShader.foregroundColorLoc;
          backgroundColorLoc = currentShader.backgroundColorLoc;
          gl.uniform1f(currentShader.yoffsetLoc, 0.5 / (TEXTURE_HEIGHT - 1));
          //texCoordOffset = vboTexCoordOffset;
          break;

      case ANALYSISTYPE_SONOGRAM:
          gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
          sonogramShader.bind();
          vertexLoc = sonogramShader.gPositionLoc;
          texCoordLoc = sonogramShader.gTexCoord0Loc;
          frequencyDataLoc = sonogramShader.frequencyDataLoc;
          foregroundColorLoc = sonogramShader.foregroundColorLoc;
          backgroundColorLoc = sonogramShader.backgroundColorLoc;
          gl.uniform1f(sonogramShader.yoffsetLoc, yoffset / (TEXTURE_HEIGHT - 1));
          //texCoordOffset = vboTexCoordOffset;
          break;

      case ANALYSISTYPE_3D_SONOGRAM:
          gl.bindBuffer(gl.ARRAY_BUFFER, sonogram3DVBO);
          sonogram3DShader.bind();
          vertexLoc = sonogram3DShader.gPositionLoc;
          texCoordLoc = sonogram3DShader.gTexCoord0Loc;
          frequencyDataLoc = sonogram3DShader.frequencyDataLoc;
          foregroundColorLoc = sonogram3DShader.foregroundColorLoc;
          backgroundColorLoc = sonogram3DShader.backgroundColorLoc;
          gl.uniform1i(sonogram3DShader.vertexFrequencyDataLoc, 0);
          var normalizedYOffset = this.yoffset / (TEXTURE_HEIGHT - 1);
          gl.uniform1f(sonogram3DShader.yoffsetLoc, normalizedYOffset);
          var discretizedYOffset = Math.floor(normalizedYOffset * (sonogram3DHeight - 1)) / (sonogram3DHeight - 1);
          gl.uniform1f(sonogram3DShader.vertexYOffsetLoc, discretizedYOffset);
          gl.uniform1f(sonogram3DShader.verticalScaleLoc, sonogram3DGeometrySize / 4.0);

          // Set up the model, view and projection matrices
          projection.loadIdentity();
          projection.perspective(55, canvas.width / canvas.height, 1, 100);
          view.loadIdentity();
          view.translate(0, 0, -10.0);

          // Add in camera controller's rotation
          model.loadIdentity();
          model.rotate(this.cameraController.xRot, 1, 0, 0);
          model.rotate(this.cameraController.yRot, 0, 1, 0);

          // Compute necessary matrices
          var mvp = new Matrix4x4();
          mvp.multiply(model);
          mvp.multiply(view);
          mvp.multiply(projection);
          gl.uniformMatrix4fv(sonogram3DShader.worldViewProjectionLoc, gl.FALSE, mvp.elements);
          mvp = null;
          //texCoordOffset = vbo3DTexCoordOffset;
          break;
      }

    if (frequencyDataLoc) {
        gl.uniform1i(frequencyDataLoc, 0);
    }
    if (foregroundColorLoc) {
        gl.uniform4fv(foregroundColorLoc, this.foregroundColor);
    }
    if (backgroundColorLoc) {
        gl.uniform4fv(backgroundColorLoc, this.backgroundColor);
    }

    // Set up the vertex attribute arrays
    gl.enableVertexAttribArray(vertexLoc);
    gl.vertexAttribPointer(vertexLoc, 3, GLFLOAT, false, 0, 0);
    gl.enableVertexAttribArray(texCoordLoc);
    //gl.vertexAttribPointer(texCoordLoc, 2, gl.FLOAT, gl.FALSE, 0, texCoordOffset);
    switch (this.analysisType) {
      case ANALYSISTYPE_FREQUENCY:
      case ANALYSISTYPE_WAVEFORM:
      case ANALYSISTYPE_SONOGRAM:
        gl.vertexAttribPointer(texCoordLoc, 2, GLFLOAT, gl.FALSE, 0, vboTexCoordOffset);
        break;
      case ANALYSISTYPE_3D_SONOGRAM:
        gl.vertexAttribPointer(texCoordLoc, 2, GLFLOAT, gl.FALSE, 0, vbo3DTexCoordOffset);
        break;
    }

    // Clear the render area
    gl.clear(COLOR_BUFFER_BIT | DEPTH_BUFFER_BIT);

    // Actually draw
    if (this.analysisType == ANALYSISTYPE_FREQUENCY || this.analysisType == ANALYSISTYPE_WAVEFORM || this.analysisType == ANALYSISTYPE_SONOGRAM) {
        gl.drawArrays(TRIANGLES, 0, 6);
    } else if (this.analysisType == ANALYSISTYPE_3D_SONOGRAM) {
        // Note: this expects the element array buffer to still be bound
        gl.drawElements(TRIANGLES, this.sonogram3DNumIndices, UNSIGNED_SHORT, 0);
    }

    // Disable the attribute arrays for cleanliness
    gl.disableVertexAttribArray(vertexLoc);
    gl.disableVertexAttribArray(texCoordLoc);

  canvas = null;
  gl = null;
  vbo = null;

  vboTexCoordOffset = null;
  sonogram3DVBO = null;
  vbo3DTexCoordOffset = null;
  sonogram3DGeometrySize = null;
  sonogram3DWidth = null;
  sonogram3DHeight = null;
  freqByteData = null;
  texture = null;
  TEXTURE_HEIGHT = null;

  frequencyShader = null;
  waveformShader = null;
  sonogramShader = null;
  sonogram3DShader = null;
  vertexLoc = null;
  texCoordLoc = null;
  frequencyDataLoc = null;
  foregroundColorLoc = null;
  backgroundColorLoc = null;
};
