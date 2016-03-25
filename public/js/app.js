/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});

/*
 * Jquery Kenburns Image Gallery
 * Original author: John [at] Toymakerlabs
 * Further changes, comments: [at]Toymakerlabs
 * Licensed under the MIT license
 * 
 * Copyright (c) 2013 ToymakerLabs

 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software 
 * and associated documentation files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge, publish, distribute, 
 * sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is 
 * furnished to do so, subject to the following conditions: The above copyright notice and this 
 * permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR 
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY 
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */

;(function ( $, window, document, undefined ) {

  /*  Plugin Parameters
   ------------------------------------------------------------------------------------------------- */
  var pluginName = 'Kenburns',
    defaults = {
      images:[],
      duration:400,
      fadeSpeed:500,
      scale:1,
      ease3d:'cubic-bezier(.81, 0, .26, 1)',
      onLoadingFirstComplete:function(){},
      onLoadingComplete:function(){},
      onSlideComplete:function(){},
      onListComplete:function(){},
      getSlideIndex:function(){
        return currentSlide;
      }
    };

  var imagesObj = {};
  var currentSlide = 0;

  function Plugin( element, options ) {
    this.element = element;
    this.options = $.extend( {}, defaults, options) ;
    this._defaults = defaults;
    this._name = pluginName;
    this.maxSlides = this.options.images.length;

    this.init();
  }


  /*  1. Initialization
   ------------------------------------------------------------------------------------------------- */
  /**
   * Init
   * Initial setup - dermines width, height, and adds the loading icon.
   */
  Plugin.prototype.init = function () {

    var list = this.options.images;
    var that = this;

    this.width = $(this.element).width();
    this.height = $(this.element).height();

    this.has3d = has3DTransforms();

    for (i in list) {
      imagesObj["image"+i] = {};
      imagesObj["image"+i].loaded = false;
      this.attachImage(list[i], "image"+i , i);

    }

    var loader = $('<div/>');
    loader.addClass('loader');
    loader.css({'position':'absolute','z-index':10000});
    $(this.element).prepend(loader);
  };



  /*  2. Loading and Setup
   ------------------------------------------------------------------------------------------------- */

  /**
   * Attach image
   * creates a wrapper div for the image along with the image tag. The reason for the additional
   * wrapper is that we are transitioning multiple properties at the same time: scale, position, and
   * opacity. But we want opacity to finish first. This function also determines if the browser
   * has 3d transform capabilities and initializes the starting CSS values.
   */
  Plugin.prototype.attachImage = function(url,alt_text,index) {
    var that = this;

    //put the image in an empty div to separate the animation effects of fading and moving
    var wrapper = $('<div/>');
    wrapper.attr('class','kb-slide');
    wrapper.css({'opacity':0});

    var img = $("<img />");
    img.attr('src', url);
    img.attr('alt', alt_text);

    wrapper.html(img);

    //First check if the browser supports 3D transitions, initialize the CSS accordingly
    if(this.has3d) {
      img.css({'-webkit-transform-origin':'left top'});
      img.css({'-moz-transform-origin':'left top'});
      img.css({'-webkit-transform':'scale('+that.options.scale+') translate3d(0,0,0)'});
      img.css({'-moz-transform':'scale('+that.options.scale+') translate3d(0,0,0)'});
    }

    //Switch the transition to the 3d version if it does exist
    this.doTransition = (this.has3d)?this.transition3d:this.transition;


    //set up the image OBJ parameters - used to track loading and initial dimensions
    img.load(function() {
      if (!imagesObj["image"+index]) {
        return;
      }
      imagesObj["image"+index].element = this;
      imagesObj["image"+index].loaded  = true;
      imagesObj["image"+index].width = $(this).width();
      imagesObj["image"+index].width = $(this).height();
      that.insertAt(index,wrapper);
      that.resume(index);
    });

  }

  /**
   * Resume
   * Resume will continue the transition after the stalled image loads
   * it also fires the complete action when the series of images finishes loading
   */
  Plugin.prototype.resume = function(index){

    //first image has loaded
    if(index == 0) {
      this.startTransition(0);
      $(this.element).find('.loader').hide();
      this.options.onLoadingFirstComplete();
    }

    //if the next image hasnt loaded yet, but the transition has started,
    // this will match the image index to the image holding the transition.
    // it will then resume the transition.
    if(index == this.holdup) {
      $('#status').html("");
      $(this.element).find('.loader').hide();
      this.startTransition(this.holdup);
    }

    //if the last image in the set has loaded, add the images in order
    if(this.checkLoadProgress() == true) {
      //reset the opacities and z indexes except the last and first images
      $(this.element).find('.stalled').each(function(){
        $(this).css({'opacity':1,'z-index':1});
        $(this).removeClass('stalled');
      });

      //fire the complete thing
      this.options.onLoadingComplete();
    }
  }

  //if any of the slides are not loaded, the set has not finished loading.
  Plugin.prototype.checkLoadProgress = function() {
    var imagesLoaded = true;
    for(i=0;i<this.maxSlides;i++){
      if (!imagesObj["image"+i] || imagesObj["image"+i].loaded == false){
        imagesLoaded = false;
      }
    }
    return imagesLoaded;
  }

  /**
   * Wait
   * Stops the transition interval, shows the loader and
   * applies the stalled class to the visible image.
   */
  Plugin.prototype.wait = function() {
    clearInterval(this.interval);
    $('#status').html("loading");
    $(this.element).find('.loader').show();

    var image = imagesObj["image"+(currentSlide-1)].element;
    $(image).parent().stop(true,true);
    $(image).parent().addClass('stalled');
  }

  /**
   * Destroy
   * Stops the transition interval, stops current animation
   * and destroys all image objects
   */
  Plugin.prototype.destroy = function() {
    clearInterval(this.interval);

    var image = imagesObj["image"+(currentSlide)].element;
    $(image).parent().stop(true,true).css({
      'opacity': '',
      'z-index': ''
    });

    $(image).stop(true,true).css({
      '-webkit-transition' : '',
      '-moz-transition'    : '',
      '-webkit-transform'  : '',
      '-moz-transform'     : ''
    });

    $(this.element).html('');
    imagesObj = {};
    currentSlide = 0;

    $.removeData(this.element, 'plugin_' + pluginName);
  };

  /* 3. Transitions and Movement
   ------------------------------------------------------------------------------------------------- */

  /**
   * startTransition
   * Begins the Gallery Transition and tracks the current slide
   * Also manages loading - if the interval encounters a slide
   * that has not loaded, the transition pauses.
   */
  Plugin.prototype.startTransition = function(start_index) {
    var that = this;
    currentSlide = start_index; //current slide

    that.doTransition();
    this.interval = setInterval(function(){

      //Advance the current slide
      if(currentSlide < that.maxSlides-1){
        currentSlide++;
      }else {
        currentSlide = 0;
      }

      //Check if the next slide is loaded. If not, wait.
      if(imagesObj["image"+currentSlide].loaded == false){
        that.holdup = currentSlide;
        that.wait();

        //if the next slide is loaded, go ahead and do the transition.
      }else {
        that.doTransition();
      }

    },this.options.duration);
  }


  /**
   * chooseCorner
   * This function chooses a random start corner and a random end corner
   * that is different from the start. This gives a random direction effect
   * it returns coordinates used by the transition functions.
   */

  Plugin.prototype.chooseCorner = function() {
    var scale = this.options.scale;
    var image = imagesObj["image"+currentSlide].element;

    var ratio = image.height/image.width;
    var sw = Math.floor($(this.element).width()*(1/scale));
    var sh = Math.floor($(this.element).width()*ratio*(1/scale));

    $(image).width(sw);
    $(image).height(sh);

    var w = $(this.element).width();
    var h = $(this.element).height();

    //console.log(sw+ ", " + this.width);

    var corners = [
      {x:0,y:0},
      {x:1,y:0},
      {x:0,y:1},
      {x:1,y:1}
    ];

    //Pick the first corner. Remove it from the array
    var choice = Math.floor(Math.random()*4);
    var start = corners[choice];

    //Pick the second corner from the subset
    corners.splice(choice,1);
    var end = corners[Math.floor(Math.random()*3)];

    //build the new coordinates from the chosen coordinates
    var coordinates = {
      startX: start.x * (w - sw*scale) ,
      startY: start.y * (h - sh*scale),
      endX: end.x * (w - sw),
      endY: end.y * (h - sh)
    }

    //
    //  console.log(coordinates.startX + " , "+coordinates.startY + " , " +coordinates.endX + " , " +coordinates.endY);

    return coordinates;
  }



  /**
   *  Transiton3D
   *  Transition3d Function works by setting the webkit and moz translate3d properties. These
   *  are hardware accellerated and give a very smooth animation. Since only one animation
   *  can be applied at a time, I wrapped the images in a div. The shorter fade is applied to
   *  the parent, while the translation and scaling is applied to the image.
   */

  Plugin.prototype.transition3d = function () {
    var that  = this;
    var scale = this.options.scale;
    var image = imagesObj["image"+currentSlide].element;
    var position = this.chooseCorner();


    //First clear any existing transition
    $(image).css({'-webkit-transition':'none'});
    $(image).css({'-moz-transition':'none'});
    $(image).css({'-webkit-transform':'scale('+scale+') translate3d('+position.startX+'px,'+position.startY+'px,0)'});
    $(image).css({'-moz-transform':'scale('+scale+') translate3d('+position.startX+'px,'+position.startY+'px,0)'});

    //Set the wrapper to fully transparent and start it's animation
    $(image).parent().css({'opacity':0,'z-index':'3'});
    $(image).parent().animate({'opacity':1},that.options.fadeSpeed);

    //Add the transition back in
    $(image).css({'-webkit-transition':'-webkit-transform '+(that.options.duration+that.options.fadeSpeed)+'ms '+that.options.ease3d});
    $(image).css({'-moz-transition':'-moz-transform '+(that.options.duration+that.options.fadeSpeed)+'ms '+that.options.ease3d});

    //set the end position and scale, which fires the transition
    $(image).css({'-webkit-transform':'scale(1) translate3d('+position.endX+'px,'+position.endY+'px,0)'});
    $(image).css({'-moz-transform':'scale(1) translate3d('+position.endX+'px,'+position.endY+'px,0)'});

    this.transitionOut();
    this.options.onSlideComplete();
  }



  /**
   *  Transition
   *  The regular JQuery animation function. Sets the currentSlide initial scale and position to
   *  the value from chooseCorner before triggering the animation. It starts the image moving to
   *  the new position, starts the fade on the wrapper, and delays the fade out animation. Adding
   *  fadeSpeed to duration gave me a nice crossfade so the image continues to move as it fades out
   *  rather than just stopping.
   */

  Plugin.prototype.transition = function() {
    var that  = this;
    var scale = this.options.scale;
    var image = imagesObj["image"+currentSlide].element;
    var sw = $(image).width();
    var sh = $(image).height();
    var position = this.chooseCorner();

    $(image).css({'left':position.startX,'top':position.startY,'width':sw*(scale),'height':sh*(scale)});
    $(image).animate({'left':position.endX,'top':position.endY,'width':sw,'height':sh}, that.options.duration + that.options.fadeSpeed);

    $(image).parent().css({'opacity':0,'z-index':3});
    $(image).parent().animate({'opacity':1},that.options.fadeSpeed);

    this.transitionOut();
    this.options.onSlideComplete();
  }

  Plugin.prototype.transitionOut = function() {
    var that = this;
    var image = imagesObj["image"+currentSlide].element;

    $(image).parent().delay(that.options.duration).animate({'opacity':0},that.options.fadeSpeed, function(){
      $(this).css({'z-index':1});
    });
  }



  /* 4. Utility Functions
   ------------------------------------------------------------------------------------------------- */
  /**
   *  has3DTransforms
   *  Tests the browser to determine support for Webkit and Moz Transforms
   *  Creates an element, translates the element, and tests the values. If the
   *  values return true, the browser supports 3D transformations.
   */
  function has3DTransforms() {
    var el = document.createElement('p'),
      has3d,
      transforms = {
        'WebkitTransform':'-webkit-transform',
        'MozTransform':'-moz-transform',
      };

    document.body.insertBefore(el, null);

    for (var t in transforms) {
      if (el.style[t] !== undefined) {
        el.style[t] = "translate3d(1px,1px,1px)";
        has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]);
      }
    }

    document.body.removeChild(el);
    return (has3d !== undefined && has3d.length > 0 && has3d !== "none");
  }

  /**
   *  insertAt
   *  Utility function that inserts objects at a specific index
   *  Used to maintain the order of images as they are loaded and
   *  added to the DOM
   */
  Plugin.prototype.insertAt = function (index, element) {
    var lastIndex = $(this.element).children().size();
    if (index < 0) {
      index = Math.max(0, lastIndex + 1 + index);
    }
    var imgWrapper = $(this.element).append(element);
    if (index < lastIndex) {
      $(this.element).children().eq(index).before($(this.element).children().last());
    }
  }

  $.fn[pluginName] = function ( options ) {
    return this.each(function () {
      if (!$.data(this, 'plugin_' + pluginName)) {
        $.data(this, 'plugin_' + pluginName, new Plugin( this, options ));
      }
    });
  }

})( jQuery, window, document );

/*
 * Tracelytics PageGuide
 *
 * Copyright 2013 Tracelytics
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Contributing Author: Tracelytics Team
 */

/*
 * PageGuide usage:
 *
 *  Preferences:
 *  auto_show_first:    Whether or not to focus on the first visible item
 *                      immediately on PG open (default true)
 *  loading_selector:   The CSS selector for the loading element. pageguide
 *                      will wait until this element is no longer visible
 *                      starting up.
 *  track_events_cb:    Optional callback for tracking user interactions
 *                      with pageguide.  Should be a method taking a single
 *                      parameter indicating the name of the interaction.
 *                      (default none)
 *  handle_doc_switch:  Optional callback to enlight or adapt interface
 *                      depending on current documented element. Should be a
 *                      function taking 2 parameters, current and previous
 *                      data-tourtarget selectors. (default null)
 *  custom_open_button: Optional id for toggling pageguide. Default null.
 *                      If not specified then the default button is used.
 *  pg_caption:         Optional - Sets the visible caption
 *  dismiss_welcome:    Optional function to permanently dismiss the welcome
 *                      message, corresponding to check_welcome_dismissed.
 *                      Default: sets a localStorage or cookie value for the
 *                      (hashed) current URL to indicate the welcome message
 *                      has been dismissed, corresponds to default
 *                      check_welcome_dismissed function.
 *  check_welcome_dismissed: Optional function to check whether or not the
 *                      welcome message has been dismissed. Must return true
 *                      or false. This function should check against whatever
 *                      state change is made in dismiss_welcome. Default:
 *                      checks whether a localStorage or cookie value has been
 *                      set for the (hashed) current URL, corresponds to default
 *                      dismiss_welcome function.
 *  ready_callback:     A function to run once the pageguide ready event fires.
 *  pointer_fallback:   Specify whether or not to provide a fallback for css
 *                      pointer-events in browsers that do not support it
 *                      (default true).
 *  default_zindex:     The css z-index to apply to the tlypageguide_shadow
 *                      overlay elements (default 100);
 *  steps_element:      Selector for the ul element whose steps you wish to use
 *                      in this particular pageguide object (default '#tlyPageGuide');
 *  auto_refresh:       If set to true, pageguide will run a timer to constantly
 *                      monitor the DOM for changes in the target elements and
 *                      adjust the pageguide display (bubbles, overlays, etc)
 *                      accordingly. The timer will only run while pageguide is open.
 *                      Useful for single-page or heavily dynamic apps where
 *                      pageguide steps or visible DOM elements can change often.
 *                      (default false)
 *  welcome_refresh:    Similar to auto_refresh, welcome_refresh enables a timer to
 *                      monitor the DOM for new .tlyPageGuideWelcome elements. This is
 *                      useful if your welcome element isn't loaded immediately, or if
 *                      you want to show different welcome elements on different pages.
 *                      The timer will run constantly, whether or not the pageguide is
 *                      open, so enable at your discretion. (default false)
 *  refresh_interval:   If auto_refresh or welcome_refresh is enabled, refresh_interval
 *                      indicates in ms how often to poll the DOM for changes. (default 500)
 *
 */
tl = window.tl || {};
tl.pg = tl.pg || {};
tl.pg.pageGuideList = tl.pg.pageGuideList || [];
tl.pg.interval = {};

(function ($) {
    /**
     * default preferences. can be overridden by user settings passed into
     * tl.pg.init().
     **/
    tl.pg.default_prefs = {
        'auto_show_first': true,
        'loading_selector' : '#loading',
        'track_events_cb': function() { return; },
        'handle_doc_switch': null,
        'custom_open_button': null,
        'pg_caption' : 'page guide',
        'tourtitle': 'Open Page Guide for help',
        'check_welcome_dismissed': function () {
            var key = 'tlypageguide_welcome_shown_' + tl.pg.hashUrl();
            // first, try to use localStorage
            try {
                if (localStorage.getItem(key)) {
                    return true;
                }
            // cookie fallback for older browsers
            } catch(e) {
                if (document.cookie.indexOf(key) > -1) {
                    return true;
                }
            }
            return false;
        },
        'dismiss_welcome': function () {
            var key = 'tlypageguide_welcome_shown_' + tl.pg.hashUrl();
            try {
                localStorage.setItem(key, true);
            } catch(e) {
                var exp = new Date();
                exp.setDate(exp.getDate() + 365);
                document.cookie = (key + '=true; expires=' + exp.toUTCString());
            }
        },
        'ready_callback': null,
        'pointer_fallback': true,
        'default_zindex': 100,
        'steps_element': '#tlyPageGuide',
        'auto_refresh': false,
        'refresh_welcome': false,
        'refresh_interval': 500
    };

    // boilerplate markup for the message display element and shadow/index bubble container.
    tl.pg.wrapper_markup =
        '<div id="tlyPageGuideWrapper">' +
            '<div id="tlyPageGuideOverlay"></div>' +
            '<div id="tlyPageGuideMessages">' +
                '<a href="#" class="tlypageguide_close" title="Close Guide">close</a>' +
                '<span class="tlypageguide_index"></span>' +
                '<div class="tlypageguide_text"></div>' +
                '<a href="#" class="tlypageguide_back" title="Previous">Previous</a>' +
                '<a href="#" class="tlypageguide_fwd" title="Next">Next</a>' +
            '</div>' +
            '<div id="tlyPageGuideContent"></div>' +
            '<div id="tlyPageGuideToggles"></div>' +
        '</div>';

    // boilerplate markup for the toggle element.
    tl.pg.toggle_markup =
        '<div class="tlypageguide_toggle" title="Launch Page Guide">' +
            '<div><span class="tlypageguide_toggletitle"></span></div>' +
            '<a href="#" class="tlypageguide_close" title="close guide">close guide &raquo;</a>' +
        '</div>';

    /**
     * initiates the pageguide using the given preferences. must be idempotent, that is,
     * able to run multiple times without changing state.
     * preferences (object): any preferences the user wishes to override.
     **/
    tl.pg.init = function(preferences) {
        preferences = $.extend({}, tl.pg.default_prefs, preferences);
        var $guide = $(preferences.steps_element);
        var uuid = tl.pg.hashCode(preferences.steps_element);
        clearInterval(tl.pg.interval[uuid]);

        /* page guide object, for pages that have one */
        if ($guide.length === 0) {
            return;
        }

        // only worry about pointer_fallback if pointers are not supported in
        // the user's browser
        if (preferences.pointer_fallback && tl.pg.pointerEventSupport()) {
            preferences.pointer_fallback = false;
        }

        var $wrapper = $('#tlyPageGuideWrapper');
        var wrapperExists = true;
        if (!$wrapper.length) {
            wrapperExists = false;
            $wrapper = $(tl.pg.wrapper_markup);
        }

        if (preferences.custom_open_button == null &&
            $('#tlyPageGuideToggle' + uuid).length < 1) {
            var tourtitle = $guide.data('tourtitle') || preferences.tourtitle;
            var $toggle = $(tl.pg.toggle_markup)
                .attr('id', ('tlyPageGuideToggle' + uuid))
                .prepend(preferences.pg_caption);

            $toggle.find('.tlypageguide_toggletitle').text(tourtitle);
            $wrapper.find('#tlyPageGuideToggles').append($toggle);
        }

        if (!wrapperExists) {
            $('body').prepend($wrapper);
        }

        var pg = new tl.pg.PageGuide($('#tlyPageGuideWrapper'), preferences);

        pg.ready(function() {
            pg.setup_welcome();
            // start (neverending) welcome watch timer if preference is enabled
            if (pg.preferences.welcome_refresh) {
                pg.updateTimer(function () {
                    pg.setup_welcome();
                }, 'welcome');
            }
            pg.setup_handlers();
            pg.$base.find(".tlypageguide_toggle").animate({ "right": "-120px" }, 250);
            if (typeof(preferences.ready_callback) === 'function') {
                preferences.ready_callback();
            }
        });
        tl.pg.pageGuideList.push(pg);
        return pg;
    };

    /**
     * constructor for the base PageGuide object. contains: relevant elements,
     * user-defined preferences, and state information. all of this data is public.
     * pg_elem (jQuery element): the base wrapper element which contains all the pg
     *     elements
     * preferences (object): combined user-defined and default preferences.
     **/
    tl.pg.PageGuide = function (pg_elem, preferences) {
        this.preferences = preferences;
        this.$base = pg_elem;
        this.$message = this.$base.find('#tlyPageGuideMessages');
        this.$fwd = this.$base.find('a.tlypageguide_fwd');
        this.$back = this.$base.find('a.tlypageguide_back');
        this.$content = this.$base.find('#tlyPageGuideContent');
        this.$steps = $(preferences.steps_element);
        this.uuid = tl.pg.hashCode(preferences.steps_element);
        this.$toggle = this.$base.find('#tlyPageGuideToggle' + this.uuid);
        this.cur_idx = 0;
        this.cur_selector = null;
        this.track_event = this.preferences.track_events_cb;
        this.handle_doc_switch = this.preferences.handle_doc_switch;
        this.custom_open_button = this.preferences.custom_open_button;
        this.is_open = false;
        this.targetData = {};
        this.hashTable = {};
        this.changeQueue = [];
        this.visibleTargets = [];
        this.timer = {
            overlay: null,
            welcome: null
        };
    };

    /**
     * hash the current page's url. used in the default check_welcome_dismissed
     * and dismiss_welcome functions
     **/
    tl.pg.hashUrl = function () {
        return tl.pg.hashCode(window.location.href);
    };

    /**
     * generate a random numeric hash for a given string. originally from:
     * http://stackoverflow.com/a/7616484/1135244
     * str (string): the string to be hashed
     **/
    tl.pg.hashCode = function (str) {
        var hash = 0, i, c;
        if (str == null || str.length === 0) {
            return hash;
        }
        for (i = 0; i < str.length; i++) {
            c = str.charCodeAt(i);
            hash = ((hash<<5)-hash)+c;
            hash = hash & hash;
        }
        return hash.toString();
    };

    /**
     * check whether the element targeted by the given selector is within the
     * currently scrolled viewport.
     * elem (string): selector for the element in question
     **/
    tl.pg.isScrolledIntoView = function(elem, height) {
        var dvtop = $(window).scrollTop(),
            dvbtm = dvtop + $(window).height(),
            eltop = $(elem).offset().top,
            elbtm = eltop + $(elem).height();

        return (eltop >= dvtop) && (elbtm <= dvbtm - height);
    };

    /**
     * remove all traces of pageguide from the DOM.
     **/
    tl.pg.destroy = function () {
        $('#tlyPageGuideWrapper').remove();
        $('body').removeClass('tlypageguide-open');
        $('body').removeClass('tlyPageGuideWelcomeOpen');
        for (var k in tl.pg.interval) {
            if (tl.pg.interval.hasOwnProperty(k)) {
                clearInterval(tl.pg.interval[k]);
            }
        }
    };

    /**
     * check whether pointer events are supported in the user's browser.
     * from http://stackoverflow.com/a/8898475/1135244
     **/
    tl.pg.pointerEventSupport = function () {
        var element = document.createElement('x');
        var documentElement = document.documentElement;
        var getComputedStyle = window.getComputedStyle;
        var supports = null;
        if(!('pointerEvents' in element.style)){
            return false;
        }
        element.style.pointerEvents = 'auto';
        element.style.pointerEvents = 'x';
        documentElement.appendChild(element);
        supports = getComputedStyle && getComputedStyle(element, '').pointerEvents === 'auto';
        documentElement.removeChild(element);
        return !!supports;
    };

    /**
     * close any other open pageguides
     * uuid (string): the uuid of the pageguide that should remain open
     **/
    tl.pg.closeOpenGuides = function (uuid) {
        for (var i=0; i<tl.pg.pageGuideList.length; i++) {
            if (tl.pg.pageGuideList[i].uuid !== uuid) {
                tl.pg.pageGuideList[i].close();
            }
        }
    }

    /**
     * check for a welcome message. if it exists, determine whether or not to show it,
     * using self.preferences.check_welcome_dismissed. then, bind relevant handlers to
     * the buttons included in the welcome message element.
     **/
    tl.pg.PageGuide.prototype.setup_welcome = function () {
        var $welcome = $('.tlyPageGuideWelcome, #tlyPageGuideWelcome')
            .not('#tlyPageGuideWrapper > .tlyPageGuideWelcome, #tlyPageGuideWrapper > #tlyPageGuideWelcome')
            .eq(0);
        var self = this;
        if ($welcome.length > 0) {
            self.preferences.show_welcome = !self.preferences.check_welcome_dismissed();
            if (self.preferences.show_welcome) {
                $welcome.appendTo(self.$base);
            }

            if ($welcome.find('.tlypageguide_ignore').length) {
                $welcome.on('click', '.tlypageguide_ignore', function () {
                    self.close_welcome();
                    self.track_event('PG.ignoreWelcome');
                });
            }
            if ($welcome.find('.tlypageguide_dismiss').length) {
                $welcome.on('click', '.tlypageguide_dismiss', function () {
                    self.close_welcome();
                    self.preferences.dismiss_welcome();
                    self.track_event('PG.dismissWelcome');
                });
            }
            $welcome.on('click', '.tlypageguide_start', function () {
                self.open();
                self.track_event('PG.startFromWelcome');
            });

            if (self.preferences.show_welcome) {
                self.pop_welcome();
            }
        }
    };

    /**
     * timer function. will poll the DOM at 250ms intervals until the user-defined
     * self.preferences.loading_selector becomes visible, at which point it will
     * execute the given callback. useful in cases where the DOM elements pageguide
     * depends on are loaded asynchronously.
     * callback (function): executes when loading selector is visible
     **/
    tl.pg.PageGuide.prototype.ready = function(callback) {
        var self = this;
        tl.pg.interval[self.uuid] = window.setInterval(function() {
                if (!$(self.preferences.loading_selector).is(':visible')) {
                    callback();
                    clearInterval(tl.pg.interval[self.uuid]);
                }
            }, 250);
        return this;
    };

    /**
     * grab any pageguide steps on the page that have not yet been added
     * to the pg object. for each one, append a shadow element and corresponding
     * index bubble to #tlyPageGuideContent.
     **/
    tl.pg.PageGuide.prototype.addSteps = function () {
        var self = this;
        self.$steps.find('li').each(function (i, el) {
            var $el = $(el);
            var tourTarget = $el.data('tourtarget');
            var positionClass = $el.attr('class');
            if (self.targetData[tourTarget] == null) {
                self.targetData[tourTarget] = {
                    targetStyle: {},
                    content: $el.html()
                };
                var hashCode = tl.pg.hashCode(tourTarget) + '';
                self.hashTable[hashCode] = tourTarget;
                self.$content.append(
                    '<div class="tlypageguide_shadow tlypageguide_shadow' + hashCode +
                    '" data-selectorhash="' + hashCode + '">' +
                        '<span class="tlyPageGuideStepIndex ' + positionClass +'"></span>' +
                    '</div>'
                );
            }
        });
    };

    /**
     * go through all the current targets and check whether the elements are
     * on the page and visible. if so, record all appropriate css data in self.targetData.
     * any changes in each self.targetData element get pushed to self.changeQueue.
     **/
    tl.pg.PageGuide.prototype.checkTargets = function () {
        var self = this;
        var visibleIndex = 0;
        var newVisibleTargets = [];
        for (var target in self.targetData) {
            var $elements = $(target);
            var $el;
            // assume all invisible
            var newTargetData = {
                targetStyle: {
                    display: 'none'
                }
            };
            // find first visible instance of target selector per issue #4798
            for(var i = 0; i < $elements.length; i++){
                if($($elements[i]).is(':visible') ){
                    $el = $($elements[i]); // is it weird to '$($x)'?
                    newTargetData.targetStyle.display = 'block';
                    var offset = $el.offset();
                    $.extend(newTargetData.targetStyle, {
                        top: offset.top,
                        left: offset.left,
                        width: $el.outerWidth(),
                        height: $el.outerHeight(),
                        'z-index': $el.css('z-index')
                    });
                    visibleIndex++;
                    newTargetData.index = visibleIndex;
                    newVisibleTargets.push(target);
                    break;
                }
            }
            var diff = {
                target: target
            };
            // compare new styles with existing ones
            for (var prop in newTargetData.targetStyle) {
                if (newTargetData.targetStyle[prop] !== self.targetData[target][prop]) {
                    if (diff.targetStyle == null) {
                        diff.targetStyle = {};
                    }
                    diff.targetStyle[prop] = newTargetData.targetStyle[prop];
                }
            }
            // compare index with existing index
            if (newTargetData.index !== self.targetData[target].index) {
                diff.index = newTargetData.index;
            }
            // push diff onto changequeue if changes have been made
            if (diff.targetStyle != null || diff.index != null) {
                self.changeQueue.push(diff);
            }
            $.extend(self.targetData[target], newTargetData);
        }
        self.visibleTargets = newVisibleTargets;
    };

    /**
     * position the shadow elements (and their attached index bubbles) in their
     * appropriate places over the visible targets. executes by iterating through
     * all the changes that have been pushed to changeQueue
     **/
    tl.pg.PageGuide.prototype.positionOverlays = function () {
        for (var i=0; i<this.changeQueue.length; i++) {
            var changes = this.changeQueue[i];
            var selector = '.tlypageguide_shadow' + tl.pg.hashCode(changes.target);
            var $el = this.$content.find(selector);
            if (changes.targetStyle != null) {
                var style = $.extend({}, changes.targetStyle);
                for (var prop in style) {
                    // fix this
                    if (prop === 'z-index') {
                        style[prop] = (typeof style[prop] === 'number') ?
                            style[prop] + 1 : this.preferences.default_zindex;
                    }
                }
                $el.css(style);
            }
            if (changes.index != null) {
                $el.find('.tlyPageGuideStepIndex').text(changes.index);
            }
        }
        this.changeQueue = [];
    };

    /**
     * find all pageguide steps and appropriately position their corresponding pageguide
     * elements. ideal to run on its own whenever pageguide is opened, or when a DOM
     * change takes place that will not affect the visibility of the target elements
     * (e.g. resize)
     **/
    tl.pg.PageGuide.prototype.refreshVisibleSteps = function () {
        this.addSteps();
        this.checkTargets();
        this.positionOverlays();
    };

    /**
     * update visible steps on page, and also navigate to the next available step if
     * necessary. this is especially useful when DOM changes take place while the
     * pageguide is open, meaning its target elements may be affected.
     **/
    tl.pg.PageGuide.prototype.updateVisible = function () {
        this.refreshVisibleSteps();
        if (this.cur_selector != null && this.cur_selector !== this.visibleTargets[this.cur_idx]) {
            // mod by target length in case user was viewing last target and it got removed
            var newIndex = this.cur_idx % this.visibleTargets.length;
            this.show_message(newIndex);
        }
    };

    /**
     * show the step specified by either a numeric index or a selector.
     * index (number): index of the currently visible step to show.
     **/
    tl.pg.PageGuide.prototype.show_message = function (index) {
        var targetKey = this.visibleTargets[index];
        var target = this.targetData[targetKey];
        if (target != null) {
            var selector = '.tlypageguide_shadow' + tl.pg.hashCode(targetKey);

            if (this.handle_doc_switch) {
                var len = this.visibleTargets.length;
                var prevTargetKey = this.visibleTargets[(index - 1 + len) % len];
                this.handle_doc_switch(targetKey, prevTargetKey);
            }

            this.$content.find('.tlypageguide-active').removeClass('tlypageguide-active');
            this.$content.find(selector).addClass('tlypageguide-active');

            this.$message.find('.tlypageguide_text').html(target.content);
            this.cur_idx = index;
            this.cur_selector = targetKey;

            // DOM stuff
            var defaultHeight = 100;
            var oldHeight = parseFloat(this.$message.css("height"));
            this.$message.css("height", "auto");
            var height = parseFloat(this.$message.outerHeight());
            this.$message.css("height", oldHeight);
            if (height < defaultHeight) {
                height = defaultHeight;
            }
            if (height > $(window).height()/2) {
                height = $(window).height()/2;
            }

            this.$message.show().animate({'height': height}, 500);
            if (!tl.pg.isScrolledIntoView($(targetKey), this.$message.outerHeight())) {
                $('html,body').animate({scrollTop: target.targetStyle.top - 50}, 500);
            }
            this.roll_number(this.$message.find('span'), target.index);
        }
    };

    /**
     * navigate to the previous step. if at the first step, loop around to the last.
     **/
    tl.pg.PageGuide.prototype.navigateBack = function () {
        /*
         * If -n < x < 0, then the result of x % n will be x, which is
         * negative. To get a positive remainder, compute (x + n) % n.
         */
        var new_index = (this.cur_idx + this.visibleTargets.length - 1) % this.visibleTargets.length;

        this.track_event('PG.back');
        this.show_message(new_index, true);
        return false;
    };

    /**
     * navigate to the next step. if at last step, loop back to the first.
     **/
    tl.pg.PageGuide.prototype.navigateForward = function () {
        var new_index = (this.cur_idx + 1) % this.visibleTargets.length;

        this.track_event('PG.fwd');
        this.show_message(new_index, true);
        return false;
    };

    /**
     * open the pageguide! can be fired at any time, though it's usually done via
     * the toggle element (either boilerplate or user-specified) or the welcome
     * modal.
     **/
    tl.pg.PageGuide.prototype.open = function() {
        if (this.is_open) {
            return;
        } else {
            tl.pg.closeOpenGuides(this.uuid);
            this._open();
        }
    };

    tl.pg.PageGuide.prototype._open = function () {
        if (this.preferences.show_welcome) {
            this.preferences.dismiss_welcome();
            this.close_welcome();
        }
        this.is_open = true;
        this.track_event('PG.open');

        this.refreshVisibleSteps();

        if (this.preferences.auto_show_first && this.visibleTargets.length) {
            this.show_message(0);
        }
        $('body').addClass('tlypageguide-open');
        this.$toggle.addClass('tlyPageGuideToggleActive');

        var self = this;
        if (self.preferences.auto_refresh) {
            self.updateTimer(function () {
                self.updateVisible();
            }, 'overlay');
        }
    };

    tl.pg.PageGuide.prototype.updateTimer = function (cb, prop) {
        var self = this;
        cb();
        self.timer[prop] = setTimeout(function () {
            self.updateTimer(cb, prop);
        }, self.preferences.refresh_interval);
    };

    /**
     * close the pageguide. can also be fired at any time, though usually done via
     * the toggle or the close button.
     **/
    tl.pg.PageGuide.prototype.close = function() {
        if (!this.is_open) {
            return;
        } else {
            this._close();
        }
    };

    tl.pg.PageGuide.prototype._close = function () {
        this.is_open = false;
        this.track_event('PG.close');
        if (this.preferences.auto_refresh) {
            clearTimeout(this.timer.overlay);
        }

        this.$content.find('.tlypageguide_shadow').css('display', 'none');
        this.$content.find('.tlypageguide-active').removeClass('tlypageguide-active');
        this.$message.animate({ height: "0" }, 500, function() {
            $(this).hide();
        });

        $('body').removeClass('tlypageguide-open');
        this.$toggle.removeClass('tlyPageGuideToggleActive');
    };

    /**
     * bind all relevant event handlers within the document.
     **/
    tl.pg.PageGuide.prototype.setup_handlers = function () {
        var self = this;

        /* interaction: open/close PG interface */
        var interactor = (self.custom_open_button == null) ?
                        self.$base.find('#tlyPageGuideToggle' + self.uuid) :
                        $(self.custom_open_button);
        interactor.off();
        interactor.on('click', function() {
            if (self.is_open) {
                self.close();
            } else if (self.preferences.show_welcome &&
                      !self.preferences.check_welcome_dismissed() &&
                      !$('body').hasClass('tlyPageGuideWelcomeOpen')) {
                self.pop_welcome();
            } else {
                self.open();
            }
        });

        /* close guide */
        $('.tlypageguide_close', self.$message.add($('.tlypageguide_toggle')))
            .on('click', function() {
                self.close();
                return false;
        });

        /* interaction: item click */
        self.$base.on('click', '.tlyPageGuideStepIndex', function () {
            var selector = self.hashTable[$(this).parent().data('selectorhash')];
            var target = self.targetData[selector];
            var index = (target) ? target.index : 1;
            self.track_event('PG.specific_elt');
            self.show_message(index - 1);
        });

        /* interaction: fwd/back click */
        self.$fwd.on('click', function() {
            if (self.is_open) {
                self.navigateForward();
            }
            return false;
        });

        self.$back.on('click', function() {
            if (self.is_open) {
                self.navigateBack();
            }
            return false;
        });

        // pass through click events on overlays if necessary
        if (self.preferences.pointer_fallback) {
            self.$base.on('click', '.tlypageguide_shadow', function (e) {
                $(this).hide();
                var $bottomElement = $(document.elementFromPoint(e.clientX, e.clientY));
                if ($bottomElement.is('a')) {
                    $bottomElement.get(0).click(); // required for anchor click
                } else {
                    $bottomElement.trigger(e.type);
                }
                $(this).show();
            });
        }

        /* register resize callback */
        $(window).resize(function() {
            if (self.is_open) {
                self.refreshVisibleSteps();
            }
        });
    };

    /**
     * animate a given number to roll to the side.
     * num_wrapper (jQuery element): the element whose number to roll
     * new_text (string): the new text to roll across the element
     * left (boolean): whether or not to roll to the left-hand side
     **/
    tl.pg.PageGuide.prototype.roll_number = function (num_wrapper, new_text, left) {
        num_wrapper.animate({ 'text-indent': (left ? '' : '-') + '50px' }, 'fast', function() {
            num_wrapper.html(new_text);
            num_wrapper.css({ 'text-indent': (left ? '-' : '') + '50px' }, 'fast').animate({ 'text-indent': "0" }, 'fast');
        });
    };

    /**
     * pop up the welcome modal.
     **/
    tl.pg.PageGuide.prototype.pop_welcome = function () {
        $('body').addClass('tlyPageGuideWelcomeOpen');
        this.track_event('PG.welcomeShown');
    };

    /**
     * close the welcome modal.
     **/
    tl.pg.PageGuide.prototype.close_welcome = function () {
        $('body').removeClass('tlyPageGuideWelcomeOpen');
    };
}(jQuery));

function getElementCoordinates(element, event) {
    var c = getAbsolutePosition(element);
    c.x = event.x - c.x;
    c.y = event.y - c.y;
    
    var position = c;
    
    // This isn't the best, should abstract better.
    if (isNaN(c.y)) {
        var eventInfo = {event:event, element:element};
        position = getRelativeCoordinates(eventInfo);
    }    
    
    return position;
}

function getAbsolutePosition(element) {
  var r = { x: element.offsetLeft, y: element.offsetTop };
  if (element.offsetParent) {
    var tmp = getAbsolutePosition(element.offsetParent);
    r.x += tmp.x;
    r.y += tmp.y;
  }
  return r;
};


function getRelativeCoordinates(eventInfo, opt_reference) {
    var x, y;
    var event = eventInfo.event;
    var element = eventInfo.element;
    var reference = opt_reference || eventInfo.element;
    if (!window.opera && typeof event.offsetX != 'undefined') {
      // Use offset coordinates and find common offsetParent
      var pos = { x: event.offsetX, y: event.offsetY };
      // Send the coordinates upwards through the offsetParent chain.
      var e = element;
      while (e) {
        e.mouseX = pos.x;
        e.mouseY = pos.y;
        pos.x += e.offsetLeft;
        pos.y += e.offsetTop;
        e = e.offsetParent;
      }
      // Look for the coordinates starting from the reference element.
      var e = reference;
      var offset = { x: 0, y: 0 }
      while (e) {
        if (typeof e.mouseX != 'undefined') {
          x = e.mouseX - offset.x;
          y = e.mouseY - offset.y;
          break;
        }
        offset.x += e.offsetLeft;
        offset.y += e.offsetTop;
        e = e.offsetParent;
      }
      // Reset stored coordinates
      e = element;
      while (e) {
        e.mouseX = undefined;
        e.mouseY = undefined;
        e = e.offsetParent;
      }
    } else {
      // Use absolute coordinates
      var pos = getAbsolutePosition(reference);
      x = event.pageX - pos.x;
      y = event.pageY - pos.y;
    }
    // Subtract distance to middle
    return { x: x, y: y };
  };




  function addSlider(name) {
    var controls = document.getElementById("controls");

    var divName = name + "Slider";


    var sliderText = '<div style="width:500px; height:20px;"> <input id="' + divName + '" '
     + 'type="range" min="0" max="1" step="0.01" value="0" style="height: 20px; width: 450px;"> <div id="'
     + name
     + '-value" style="position:relative; left:30em; top:-18px;">'
     + name
     + '</div> </div> <br>  ';

    controls.innerHTML = controls.innerHTML + sliderText;
  }

  function configureSlider(name, value, min, max, handler) {
      // var controls = document.getElementById("controls");
      // 

      var divName = name + "Slider";

      var slider = document.getElementById(divName);

      slider.min = min;
      slider.max = max;
      slider.value = value;
      slider.onchange = function() { handler(0, this); };
  }

  function addSliderOld(name) {
    var controls = document.getElementById("controls");

    var divName = name + "Slider";

    var sliderText = '<div id="' 
     + divName
     + '" style="width:500px;"> <div id="'
     + name
     + '-value" style="position:relative; left:30em;">'
     + name
     + '</div> </div> <br>  ';

    controls.innerHTML = controls.innerHTML + sliderText;
  }

  function configureSliderOld(name, value, min, max, handler) {
   var controls = document.getElementById("controls");

   var divName = name + "Slider";

   // var slider = document.getElementById(divName);
   var slider = $("#" + divName);
   // var slider = document.getElementById("#" + divName);
   slider.slider({ min: min } );
   slider.slider('option', 'max', max);
   slider.slider('option', 'step', 0.001);
   slider.slider('value', value);

   slider.bind('slide', handler);
  }

/*
 * Copyright 2009, Google Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */


/**
 * @fileoverview Base for all o3d sample utilties.
 *    For more information about o3d see
 *    http://code.google.com/p/o3d.
 *
 *
 * The main point of this module is to provide a central place to
 * have an init function to register an o3d namespace object because many other
 * modules need access to it.
 */

/**
 * A namespace for all the o3djs utility libraries.
 * @namespace
 */
var o3djs = o3djs || {};

/**
 * Define this because the Google internal JSCompiler needs goog.typedef below.
 */
var goog = goog || {};

/**
 * A macro for defining composite types.
 *
 * By assigning goog.typedef to a name, this tells Google internal JSCompiler
 * that this is not the name of a class, but rather it's the name of a composite
 * type.
 *
 * For example,
 * /** @type {Array|NodeList} / goog.ArrayLike = goog.typedef;
 * will tell JSCompiler to replace all appearances of goog.ArrayLike in type
 * definitions with the union of Array and NodeList.
 *
 * Does nothing in uncompiled code.
 */
goog.typedef = true;

/**
 * Reference to the global context.  In most cases this will be 'window'.
 */
o3djs.global = this;

/**
 * Flag used to force a function to run in the browser when it is called
 * from V8.
 * @type {boolean}
 */
o3djs.BROWSER_ONLY = true;

/**
 * Array of namespaces that have been provided.
 * @private
 * @type {!Array.<string>}
 */
o3djs.provided_ = [];

/**
 * Creates object stubs for a namespace. When present in a file,
 * o3djs.provide also indicates that the file defines the indicated
 * object.
 * @param {string} name name of the object that this file defines.
 */
o3djs.provide = function(name) {
  // Ensure that the same namespace isn't provided twice.
  if (o3djs.getObjectByName(name) &&
      !o3djs.implicitNamespaces_[name]) {
    throw 'Namespace "' + name + '" already declared.';
  }

  var namespace = name;
  while ((namespace = namespace.substring(0, namespace.lastIndexOf('.')))) {
    o3djs.implicitNamespaces_[namespace] = true;
  }

  o3djs.exportPath_(name);
  o3djs.provided_.push(name);
};


/**
 * Namespaces implicitly defined by o3djs.provide. For example,
 * o3djs.provide('o3djs.events.Event') implicitly declares
 * that 'o3djs' and 'o3djs.events' must be namespaces.
 *
 * @type {Object}
 * @private
 */
o3djs.implicitNamespaces_ = {};

/**
 * Builds an object structure for the provided namespace path,
 * ensuring that names that already exist are not overwritten. For
 * example:
 * "a.b.c" -> a = {};a.b={};a.b.c={};
 * Used by o3djs.provide and o3djs.exportSymbol.
 * @param {string} name name of the object that this file defines.
 * @param {Object} opt_object the object to expose at the end of the path.
 * @param {Object} opt_objectToExportTo The object to add the path to; default
 *     is |o3djs.global|.
 * @private
 */
o3djs.exportPath_ = function(name, opt_object, opt_objectToExportTo) {
  var parts = name.split('.');
  var cur = opt_objectToExportTo || o3djs.global;
  var part;

  // Internet Explorer exhibits strange behavior when throwing errors from
  // methods externed in this manner.  See the testExportSymbolExceptions in
  // base_test.html for an example.
  if (!(parts[0] in cur) && cur.execScript) {
    cur.execScript('var ' + parts[0]);
  }

  // Parentheses added to eliminate strict JS warning in Firefox.
  while (parts.length && (part = parts.shift())) {
    if (!parts.length && o3djs.isDef(opt_object)) {
      // last part and we have an object; use it.
      cur[part] = opt_object;
    } else if (cur[part]) {
      cur = cur[part];
    } else {
      cur = cur[part] = {};
    }
  }
};


/**
 * Returns an object based on its fully qualified external name.  If you are
 * using a compilation pass that renames property names beware that using this
 * function will not find renamed properties.
 *
 * @param {string} name The fully qualified name.
 * @param {Object} opt_obj The object within which to look; default is
 *     |o3djs.global|.
 * @return {Object} The object or, if not found, null.
 */
o3djs.getObjectByName = function(name, opt_obj) {
  var parts = name.split('.');
  var cur = opt_obj || o3djs.global;
  for (var pp = 0; pp < parts.length; ++pp) {
    var part = parts[pp];
    if (cur[part]) {
      cur = cur[part];
    } else {
      return null;
    }
  }
  return cur;
};


/**
 * Implements a system for the dynamic resolution of dependencies.
 * @param {string} rule Rule to include, in the form o3djs.package.part.
 */
o3djs.require = function(rule) {
  // TODO(gman): For some unknown reason, when we call
  // o3djs.util.getScriptTagText_ it calls
  // document.getElementsByTagName('script') and for some reason the scripts do
  // not always show up. Calling it here seems to fix that as long as we
  // actually ask for the length, at least in FF 3.5.1 It would be nice to
  // figure out why.
  var dummy = document.getElementsByTagName('script').length;

  // if the object already exists we do not need do do anything
  if (o3djs.getObjectByName(rule)) {
    return;
  }
  var path = o3djs.getPathFromRule_(rule);
  if (path) {
    o3djs.included_[path] = true;
    o3djs.writeScripts_();
  } else {
    throw new Error('o3djs.require could not find: ' + rule);
  }
};


/**
 * Path for included scripts.
 * @type {string}
 */
o3djs.basePath = '';


/**
 * Object used to keep track of urls that have already been added. This
 * record allows the prevention of circular dependencies.
 * @type {Object}
 * @private
 */
o3djs.included_ = {};


/**
 * This object is used to keep track of dependencies and other data that is
 * used for loading scripts.
 * @private
 * @type {Object}
 */
o3djs.dependencies_ = {
  visited: {},  // used when resolving dependencies to prevent us from
                // visiting the file twice.
  written: {}  // used to keep track of script files we have written.
};


/**
 * Tries to detect the base path of the o3djs-base.js script that
 * bootstraps the o3djs libraries.
 * @private
 */
o3djs.findBasePath_ = function() {
  var doc = o3djs.global.document;
  if (typeof doc == 'undefined') {
    return;
  }
  if (o3djs.global.BASE_PATH) {
    o3djs.basePath = o3djs.global.BASE_PATH;
    return;
  } else {
    // HACKHACK to hide compiler warnings :(
    o3djs.global.BASE_PATH = null;
  }
  var scripts = doc.getElementsByTagName('script');
  for (var script, i = 0; script = scripts[i]; i++) {
    var src = script.src;
    var l = src.length;
    if (src.substr(l - 13) == 'o3djs/base.js') {
      o3djs.basePath = src.substr(0, l - 13);
      return;
    }
  }
};


/**
 * Writes a script tag if, and only if, that script hasn't already been added
 * to the document.  (Must be called at execution time.)
 * @param {string} src Script source.
 * @private
 */
o3djs.writeScriptTag_ = function(src) {
  var doc = o3djs.global.document;
  if (typeof doc != 'undefined' &&
      !o3djs.dependencies_.written[src]) {
    o3djs.dependencies_.written[src] = true;
    doc.write('<script type="text/javascript" src="' +
              src + '"></' + 'script>');
  }
};


/**
 * Resolves dependencies based on the dependencies added using addDependency
 * and calls writeScriptTag_ in the correct order.
 * @private
 */
o3djs.writeScripts_ = function() {
  // the scripts we need to write this time.
  var scripts = [];
  var seenScript = {};
  var deps = o3djs.dependencies_;

  function visitNode(path) {
    if (path in deps.written) {
      return;
    }

    // we have already visited this one. We can get here if we have cyclic
    // dependencies.
    if (path in deps.visited) {
      if (!(path in seenScript)) {
        seenScript[path] = true;
        scripts.push(path);
      }
      return;
    }

    deps.visited[path] = true;

    if (!(path in seenScript)) {
      seenScript[path] = true;
      scripts.push(path);
    }
  }

  for (var path in o3djs.included_) {
    if (!deps.written[path]) {
      visitNode(path);
    }
  }

  for (var i = 0; i < scripts.length; i++) {
    if (scripts[i]) {
      o3djs.writeScriptTag_(o3djs.basePath + scripts[i]);
    } else {
      throw Error('Undefined script input');
    }
  }
};


/**
 * Looks at the dependency rules and tries to determine the script file that
 * fulfills a particular rule.
 * @param {string} rule In the form o3djs.namespace.Class or
 *     project.script.
 * @return {string?} Url corresponding to the rule, or null.
 * @private
 */
o3djs.getPathFromRule_ = function(rule) {
  var parts = rule.split('.');
  return parts.join('/') + '.js';
};

o3djs.findBasePath_();

/**
 * Returns true if the specified value is not |undefined|.
 * WARNING: Do not use this to test if an object has a property. Use the in
 * operator instead.
 * @param {*} val Variable to test.
 * @return {boolean} Whether variable is defined.
 */
o3djs.isDef = function(val) {
  return typeof val != 'undefined';
};


/**
 * Exposes an unobfuscated global namespace path for the given object.
 * Note that fields of the exported object *will* be obfuscated,
 * unless they are exported in turn via this function or
 * o3djs.exportProperty.
 *
 * <p>Also handy for making public items that are defined in anonymous
 * closures.
 *
 * ex. o3djs.exportSymbol('Foo', Foo);
 *
 * ex. o3djs.exportSymbol('public.path.Foo.staticFunction',
 *                        Foo.staticFunction);
 *     public.path.Foo.staticFunction();
 *
 * ex. o3djs.exportSymbol('public.path.Foo.prototype.myMethod',
 *                        Foo.prototype.myMethod);
 *     new public.path.Foo().myMethod();
 *
 * @param {string} publicPath Unobfuscated name to export.
 * @param {Object} object Object the name should point to.
 * @param {Object} opt_objectToExportTo The object to add the path to; default
 *     is |o3djs.global|.
 */
o3djs.exportSymbol = function(publicPath, object, opt_objectToExportTo) {
  o3djs.exportPath_(publicPath, object, opt_objectToExportTo);
};

/**
 * This string contains JavaScript code to initialize a new V8 instance.
 * @private
 * @type {string}
 */
o3djs.v8Initializer_ = '';

/**
 * This array contains references to objects that v8 needs to bind to when
 * it initializes.
 * @private
 * @type {!Array.<Object>}
 */
o3djs.v8InitializerArgs_ = [];

/**
 * Converts any JavaScript value to a string representation that when evaluated
 * will result in an equal value.
 * @param {*} value Any value.
 * @return {string} A string representation for the value.
 * @private
 */
o3djs.valueToString_ = function(value) {
  switch (typeof(value)) {
    case 'undefined':
      return 'undefined';
    case 'string':
      var escaped = escape(value);
      if (escaped === value) {
        return '"' + value + '"';
      } else {
        return 'unescape("' + escaped + '")';
      }
    case 'object':
      if (value === null) {
        return 'null';
      } else {
        // TODO: all the other builtin JavaScript objects like Date,
        // Number, Boolean, etc.
        if (value instanceof RegExp) {
          var result =
              'new RegExp(' + o3djs.valueToString_(value.source) + ', "';
          if (value.global) {
            result += 'g';
          }
          if (value.ignoreCase) {
            result += 'i';
          }
          if (value.multiline) {
            result += 'm';
          }
          result += '")';
          return result;
        } else if (o3djs.base.isArray(value)) {
          var valueAsArray = /** @type {!Array} */ (value);
          var result = '[';
          var separator = '';
          for (var i = 0; i < valueAsArray.length; ++i) {
            result += separator + o3djs.valueToString_(valueAsArray[i]);
            separator = ',';
          }
          result += ']\n';
          return result;
        } else {
          var valueAsObject = /** @type {!Object} */ (value);
          var result = '{\n';
          var separator = '';
          for (var propertyName in valueAsObject) {
            result += separator + '"' + propertyName + '": ' +
              o3djs.valueToString_(valueAsObject[propertyName]);
            separator = ',';
          }
          result += '}\n';
          return result;
        }
      }
    default:
      return value.toString()
  }
};

/**
 * Given an object holding a namespace and the name of that namespace,
 * generates a string that when evaluated will populate the namespace.
 * @param {!Object} namespaceObject An object holding a namespace.
 * @param {string} namespaceName The name of the namespace.
 * @param {!Array.<Object>} opt_args An array of objects that will be used
 *     together with the initializer string to populate a namespace. The args
 *     may be referenced from initializer code as args_[i] where i is the index
 *     in the array.
 * @return {string} A string that will populate the namespace.
 * @private
 */
o3djs.namespaceInitializer_ = function(namespaceObject,
                                       namespaceName,
                                       opt_args) {
  var result = namespaceName + ' = {};\n';
  for (var propertyName in namespaceObject) {
    var propertyNamespaceName = namespaceName + '.' + propertyName;
    var propertyValue = namespaceObject[propertyName];
    if (typeof(propertyValue) === 'object' && propertyValue !== null &&
        !o3djs.base.isArray(propertyValue) &&
        !(propertyValue instanceof RegExp)) {
      result += o3djs.namespaceInitializer_(propertyValue,
                                            propertyNamespaceName);
    } else {
      var valueAsString = o3djs.valueToString_(propertyValue);

      // If this is a browser only function then bind to the browser version
      // of the function rather than create a new function in V8.
      if (typeof(propertyValue) == 'function' &&
          valueAsString.indexOf('o3djs.BROWSER_ONLY') != -1) {
        valueAsString = 'args_[' + opt_args.length + ']';
        opt_args.push(propertyValue);
      }
      result += propertyNamespaceName + ' = ' + valueAsString + ';\n';

      if (typeof(propertyValue) === 'function' && propertyValue.prototype) {
        result += o3djs.namespaceInitializer_(
            propertyValue.prototype,
            propertyNamespaceName + '.prototype');
      }
    }
  }
  return result;
};

o3djs.provide('o3djs.base');

/**
 * The base module for o3djs.
 * @namespace
 */
o3djs.base = o3djs.base || {};

/**
 * The a Javascript copy of the o3d namespace object. (holds constants, enums,
 * etc...)
 * @type {o3d.o3d}
 */
o3djs.base.o3d = null;

/**
 * Snapshots the current state of all provided namespaces. This state will be
 * used to initialize future V8 instances. It is automatically
 * called by o3djs.util.makeClients.
 */
o3djs.base.snapshotProvidedNamespaces = function()  {
  // Snapshot the V8 initializer string from the current state of browser
  // JavaScript the first time this is called.
  o3djs.v8Initializer_ = 'function(args_) {\n';
  o3djs.v8InitializerArgs_ = [];
  for (var i = 0; i < o3djs.provided_.length; ++i) {
    var object = o3djs.getObjectByName(o3djs.provided_[i]);
    o3djs.v8Initializer_ += o3djs.namespaceInitializer_(
        /** @type {!Object} */ (object),
        o3djs.provided_[i],
        o3djs.v8InitializerArgs_);
  }

  o3djs.v8Initializer_ += '}\n';
};

/**
 * Initializes the o3djs.sample library in a v8 instance. This should be called
 * for every V8 instance that uses the sample library. It is automatically
 * called by o3djs.util.makeClients.
 * @param {!o3d.plugin} clientObject O3D.Plugin Object.
 */
o3djs.base.initV8 = function(clientObject)  {
  var v8Init = function(initializer, args) {
    // Set up the o3djs namespace.
    var o3djsBrowser = o3djs;
    o3djs = {};
    o3djs.browser = o3djsBrowser;
    o3djs.global = (function() { return this; })();

    o3djs.require = function(rule) {}
    o3djs.provide = function(rule) {}

    // Evaluate the initializer string with the arguments containing bindings
    // to browser side objects.
    eval('(' + initializer + ')')(args);

    // Make sure this points to the o3d namespace for this particular
    // instance of the plugin.
    o3djs.base.o3d = plugin.o3d;
  };

  clientObject.eval(v8Init.toString())(o3djs.v8Initializer_,
                                       o3djs.v8InitializerArgs_);
};

/**
 * Initializes the o3djs.sample library.
 * Basically all it does is record the o3djs.namespace object which is used by
 * other functions to look up o3d constants.
 *
 * @param {!Element} clientObject O3D.Plugin Object.
 */
o3djs.base.init = function(clientObject)  {
  function recursivelyCopyProperties(object) {
    var copy = {};
    var hasProperties = false;
    for (var key in object) {
      var property = object[key];
      if (typeof property == 'object' || typeof property == 'function') {
        property = recursivelyCopyProperties(property);
      }
      if (typeof property != 'undefined') {
        copy[key] = property;
        hasProperties = true;
      }
    }
    return hasProperties ? copy : undefined;
  }
  try {
    o3djs.base.o3d = recursivelyCopyProperties(clientObject.o3d);
  } catch (e) {
    // Firefox 2 raises an exception when trying to enumerate a NPObject
    o3djs.base.o3d = clientObject.o3d;
  }
  // Because of a bug in chrome, it is not possible for the browser to enumerate
  // the properties of an NPObject.
  // Chrome bug: http://code.google.com/p/chromium/issues/detail?id=5743
  o3djs.base.o3d = o3djs.base.o3d || clientObject.o3d;
};

/**
 * Determine whether a value is an array. Do not use instanceof because that
 * will not work for V8 arrays (the browser thinks they are Objects).
 * @param {*} value A value.
 * @return {boolean} Whether the value is an array.
 */
o3djs.base.isArray = function(value) {
  var valueAsObject = /** @type {!Object} */ (value);
  return typeof(value) === 'object' && value !== null &&
      'length' in valueAsObject && 'splice' in valueAsObject;
};

/**
 * Check if the o3djs library has been initialized.
 * @return {boolean} true if ready, false if not.
 */
o3djs.base.ready = function() {
  return o3djs.base.o3d != null;
};

/**
 * A stub for later optionally converting obfuscated names
 * @private
 * @param {string} name Name to un-obfuscate.
 * @return {string} un-obfuscated name.
 */
o3djs.base.maybeDeobfuscateFunctionName_ = function(name) {
  return name;
};

/**
 * Makes one class inherit from another.
 * @param {!Object} subClass Class that wants to inherit.
 * @param {!Object} superClass Class to inherit from.
 */
o3djs.base.inherit = function(subClass, superClass) {
  /**
   * TmpClass.
   * @ignore
   * @constructor
   */
  var TmpClass = function() { };
  TmpClass.prototype = superClass.prototype;
  subClass.prototype = new TmpClass();
};

/**
 * Parses an error stack from an exception
 * @param {!Exception} excp The exception to get a stack trace from.
 * @return {!Array.<string>} An array of strings of the stack trace.
 */
o3djs.base.parseErrorStack = function(excp) {
  var stack = [];
  var name;
  var line;

  if (!excp || !excp.stack) {
    return stack;
  }

  var stacklist = excp.stack.split('\n');

  for (var i = 0; i < stacklist.length - 1; i++) {
    var framedata = stacklist[i];

    name = framedata.match(/^([a-zA-Z0-9_$]*)/)[1];
    if (name) {
      name = o3djs.base.maybeDeobfuscateFunctionName_(name);
    } else {
      name = 'anonymous';
    }

    var result = framedata.match(/(.*:[0-9]+)$/);
    line = result && result[1];

    if (!line) {
      line = '(unknown)';
    }

    stack[stack.length] = name + ' : ' + line
  }

  // remove top level anonymous functions to match IE
  var omitRegexp = /^anonymous :/;
  while (stack.length && omitRegexp.exec(stack[stack.length - 1])) {
    stack.length = stack.length - 1;
  }

  return stack;
};

/**
 * Gets a function name from a function object.
 * @param {!function(...): *} aFunction The function object to try to get a
 *      name from.
 * @return {string} function name or 'anonymous' if not found.
 */
o3djs.base.getFunctionName = function(aFunction) {
  var regexpResult = aFunction.toString().match(/function(\s*)(\w*)/);
  if (regexpResult && regexpResult.length >= 2 && regexpResult[2]) {
    return o3djs.base.maybeDeobfuscateFunctionName_(regexpResult[2]);
  }
  return 'anonymous';
};

/**
 * Pretty prints an exception's stack, if it has one.
 * @param {Array.<string>} stack An array of errors.
 * @return {string} The pretty stack.
 */
o3djs.base.formatErrorStack = function(stack) {
  var result = '';
  for (var i = 0; i < stack.length; i++) {
    result += '> ' + stack[i] + '\n';
  }
  return result;
};

/**
 * Gets a stack trace as a string.
 * @param {number} stripCount The number of entries to strip from the top of the
 *     stack. Example: Pass in 1 to remove yourself from the stack trace.
 * @return {string} The stack trace.
 */
o3djs.base.getStackTrace = function(stripCount) {
  var result = '';

  if (typeof(arguments.caller) != 'undefined') { // IE, not ECMA
    for (var a = arguments.caller; a != null; a = a.caller) {
      result += '> ' + o3djs.base.getFunctionName(a.callee) + '\n';
      if (a.caller == a) {
        result += '*';
        break;
      }
    }
  } else { // Mozilla, not ECMA
    // fake an exception so we can get Mozilla's error stack
    var testExcp;
    try {
      eval('var var;');
    } catch (testExcp) {
      var stack = o3djs.base.parseErrorStack(testExcp);
      result += o3djs.base.formatErrorStack(stack.slice(3 + stripCount,
                                                        stack.length));
    }
  }

  return result;
};

/**
 * Sets the error handler on a client to a handler that displays an alert on the
 * first error.
 * @param {!o3d.Client} client The client object of the plugin.
 */
o3djs.base.setErrorHandler = function(client) {
  client.setErrorCallback(
      function(msg) {
        // Clear the error callback. Otherwise if the callback is happening
        // during rendering it's possible the user will not be able to
        // get out of an infinite loop of alerts.
        client.clearErrorCallback();
        alert('ERROR: ' + msg + '\n' + o3djs.base.getStackTrace(1));
      });
};

/**
 * Returns true if the user's browser is Microsoft IE.
 * @return {boolean} true if the user's browser is Microsoft IE.
 */
o3djs.base.IsMSIE = function() {
  var ua = navigator.userAgent.toLowerCase();
  var msie = /msie/.test(ua) && !/opera/.test(ua);
  return msie;
};
/**
 * Returns true if the user's browser is Chrome 1.0, that requires a workaround
 * to create the plugin.
 * @return {boolean} true if the user's browser is Chrome 1.0.
 */
o3djs.base.IsChrome10 = function() {
  return navigator.userAgent.indexOf('Chrome/1.0') >= 0;
};

/*
 * Copyright (c) 2009 The Chromium Authors. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *    * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *    * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *    * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

// A simple camera controller which uses an HTML element as the event
// source for constructing a view matrix. Assign an "onchange"
// function to the controller as follows to receive the updated X and
// Y angles for the camera:
//
//   var controller = new CameraController(canvas);
//   controller.onchange = function(xRot, yRot) { ... };
//
// The view matrix is computed elsewhere.
//
// opt_canvas (an HTMLCanvasElement) and opt_context (a
// WebGLRenderingContext) can be passed in to make the hit detection
// more precise -- only opaque pixels will be considered as the start
// of a drag action.
function CameraController(element, opt_canvas, opt_context) {
    var controller = this;
    this.onchange = null;
    this.xRot = 0;
    this.yRot = 0;
    this.scaleFactor = 3.0;
    this.dragging = false;
    this.curX = 0;
    this.curY = 0;

    if (opt_canvas)
        this.canvas_ = opt_canvas;

    if (opt_context)
        this.context_ = opt_context;

    // Assign a mouse down handler to the HTML element.
    element.onmousedown = function(ev) {
        controller.curX = ev.clientX;
        controller.curY = ev.clientY;
        var dragging = false;
        if (controller.canvas_ && controller.context_) {
            var rect = controller.canvas_.getBoundingClientRect();
            // Transform the event's x and y coordinates into the coordinate
            // space of the canvas
            var canvasRelativeX = ev.pageX - rect.left;
            var canvasRelativeY = ev.pageY - rect.top;
            var canvasWidth = controller.canvas_.width;
            var canvasHeight = controller.canvas_.height;

            // Read back a small portion of the frame buffer around this point
            if (canvasRelativeX > 0 && canvasRelativeX < canvasWidth &&
                canvasRelativeY > 0 && canvasRelativeY < canvasHeight) {
                var pixels = controller.context_.readPixels(canvasRelativeX,
                                                            canvasHeight - canvasRelativeY,
                                                            1,
                                                            1,
                                                            controller.context_.RGBA,
                                                            controller.context_.UNSIGNED_BYTE);
                if (pixels) {
                    // See whether this pixel has an alpha value of >= about 10%
                    if (pixels[3] > (255.0 / 10.0)) {
                        dragging = true;
                    }
                }
            }
        } else {
            dragging = true;
        }

        controller.dragging = dragging;
    };

    // Assign a mouse up handler to the HTML element.
    element.onmouseup = function(ev) {
        controller.dragging = false;
    };

    // Assign a mouse move handler to the HTML element.
    element.onmousemove = function(ev) {
        if (controller.dragging) {
            // Determine how far we have moved since the last mouse move
            // event.
            var curX = ev.clientX;
            var curY = ev.clientY;
            var deltaX = (controller.curX - curX) / controller.scaleFactor;
            var deltaY = (controller.curY - curY) / controller.scaleFactor;
            controller.curX = curX;
            controller.curY = curY;
            // Update the X and Y rotation angles based on the mouse motion.
            controller.yRot = (controller.yRot + deltaX) % 360;
            controller.xRot = (controller.xRot + deltaY);
            // Clamp the X rotation to prevent the camera from going upside
            // down.
            if (controller.xRot < -90) {
                controller.xRot = -90;
            } else if (controller.xRot > 90) {
                controller.xRot = 90;
            }
            // Send the onchange event to any listener.
            if (controller.onchange != null) {
                controller.onchange(controller.xRot, controller.yRot);
            }
        }
    };
}

/*
 * Copyright (c) 2009, Mozilla Corp
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the <organization> nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY <copyright holder> ''AS IS'' AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL <copyright holder> BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/*
 * Based on sample code from the OpenGL(R) ES 2.0 Programming Guide, which carriers
 * the following header:
 *
 * Book:      OpenGL(R) ES 2.0 Programming Guide
 * Authors:   Aaftab Munshi, Dan Ginsburg, Dave Shreiner
 * ISBN-10:   0321502795
 * ISBN-13:   9780321502797
 * Publisher: Addison-Wesley Professional
 * URLs:      http://safari.informit.com/9780321563835
 *            http://www.opengles-book.com
 */

//
// A simple 4x4 Matrix utility class
//

function Matrix4x4() {
  this.elements = Array(16);
  this.loadIdentity();
}

Matrix4x4.prototype = {
  scale: function (sx, sy, sz) {
    this.elements[0*4+0] *= sx;
    this.elements[0*4+1] *= sx;
    this.elements[0*4+2] *= sx;
    this.elements[0*4+3] *= sx;

    this.elements[1*4+0] *= sy;
    this.elements[1*4+1] *= sy;
    this.elements[1*4+2] *= sy;
    this.elements[1*4+3] *= sy;

    this.elements[2*4+0] *= sz;
    this.elements[2*4+1] *= sz;
    this.elements[2*4+2] *= sz;
    this.elements[2*4+3] *= sz;

    return this;
  },

  translate: function (tx, ty, tz) {
    this.elements[3*4+0] += this.elements[0*4+0] * tx + this.elements[1*4+0] * ty + this.elements[2*4+0] * tz;
    this.elements[3*4+1] += this.elements[0*4+1] * tx + this.elements[1*4+1] * ty + this.elements[2*4+1] * tz;
    this.elements[3*4+2] += this.elements[0*4+2] * tx + this.elements[1*4+2] * ty + this.elements[2*4+2] * tz;
    this.elements[3*4+3] += this.elements[0*4+3] * tx + this.elements[1*4+3] * ty + this.elements[2*4+3] * tz;

    return this;
  },

  rotate: function (angle, x, y, z) {
    var mag = Math.sqrt(x*x + y*y + z*z);
    var sinAngle = Math.sin(angle * Math.PI / 180.0);
    var cosAngle = Math.cos(angle * Math.PI / 180.0);

    if (mag > 0) {
      var xx, yy, zz, xy, yz, zx, xs, ys, zs;
      var oneMinusCos;
      var rotMat;

      x /= mag;
      y /= mag;
      z /= mag;

      xx = x * x;
      yy = y * y;
      zz = z * z;
      xy = x * y;
      yz = y * z;
      zx = z * x;
      xs = x * sinAngle;
      ys = y * sinAngle;
      zs = z * sinAngle;
      oneMinusCos = 1.0 - cosAngle;

      rotMat = new Matrix4x4();

      rotMat.elements[0*4+0] = (oneMinusCos * xx) + cosAngle;
      rotMat.elements[0*4+1] = (oneMinusCos * xy) - zs;
      rotMat.elements[0*4+2] = (oneMinusCos * zx) + ys;
      rotMat.elements[0*4+3] = 0.0;

      rotMat.elements[1*4+0] = (oneMinusCos * xy) + zs;
      rotMat.elements[1*4+1] = (oneMinusCos * yy) + cosAngle;
      rotMat.elements[1*4+2] = (oneMinusCos * yz) - xs;
      rotMat.elements[1*4+3] = 0.0;

      rotMat.elements[2*4+0] = (oneMinusCos * zx) - ys;
      rotMat.elements[2*4+1] = (oneMinusCos * yz) + xs;
      rotMat.elements[2*4+2] = (oneMinusCos * zz) + cosAngle;
      rotMat.elements[2*4+3] = 0.0;

      rotMat.elements[3*4+0] = 0.0;
      rotMat.elements[3*4+1] = 0.0;
      rotMat.elements[3*4+2] = 0.0;
      rotMat.elements[3*4+3] = 1.0;

      rotMat = rotMat.multiply(this);
      this.elements = rotMat.elements;
    }

    return this;
  },

  frustum: function (left, right, bottom, top, nearZ, farZ) {
    var deltaX = right - left;
    var deltaY = top - bottom;
    var deltaZ = farZ - nearZ;
    var frust;

    if ( (nearZ <= 0.0) || (farZ <= 0.0) ||
         (deltaX <= 0.0) || (deltaY <= 0.0) || (deltaZ <= 0.0) )
         return this;

    frust = new Matrix4x4();

    frust.elements[0*4+0] = 2.0 * nearZ / deltaX;
    frust.elements[0*4+1] = frust.elements[0*4+2] = frust.elements[0*4+3] = 0.0;

    frust.elements[1*4+1] = 2.0 * nearZ / deltaY;
    frust.elements[1*4+0] = frust.elements[1*4+2] = frust.elements[1*4+3] = 0.0;

    frust.elements[2*4+0] = (right + left) / deltaX;
    frust.elements[2*4+1] = (top + bottom) / deltaY;
    frust.elements[2*4+2] = -(nearZ + farZ) / deltaZ;
    frust.elements[2*4+3] = -1.0;

    frust.elements[3*4+2] = -2.0 * nearZ * farZ / deltaZ;
    frust.elements[3*4+0] = frust.elements[3*4+1] = frust.elements[3*4+3] = 0.0;

    frust = frust.multiply(this);
    this.elements = frust.elements;

    return this;
  },

  perspective: function (fovy, aspect, nearZ, farZ) {
    var frustumH = Math.tan(fovy / 360.0 * Math.PI) * nearZ;
    var frustumW = frustumH * aspect;

    return this.frustum(-frustumW, frustumW, -frustumH, frustumH, nearZ, farZ);
  },

  ortho: function (left, right, bottom, top, nearZ, farZ) {
    var deltaX = right - left;
    var deltaY = top - bottom;
    var deltaZ = farZ - nearZ;

    var ortho = new Matrix4x4();

    if ( (deltaX == 0.0) || (deltaY == 0.0) || (deltaZ == 0.0) )
        return this;

    ortho.elements[0*4+0] = 2.0 / deltaX;
    ortho.elements[3*4+0] = -(right + left) / deltaX;
    ortho.elements[1*4+1] = 2.0 / deltaY;
    ortho.elements[3*4+1] = -(top + bottom) / deltaY;
    ortho.elements[2*4+2] = -2.0 / deltaZ;
    ortho.elements[3*4+2] = -(nearZ + farZ) / deltaZ;

    ortho = ortho.multiply(this);
    this.elements = ortho.elements;

    return this;
  },

  multiply: function (right) {
    var tmp = new Matrix4x4();

    for (var i = 0; i < 4; i++) {
      tmp.elements[i*4+0] =
	(this.elements[i*4+0] * right.elements[0*4+0]) +
	(this.elements[i*4+1] * right.elements[1*4+0]) +
	(this.elements[i*4+2] * right.elements[2*4+0]) +
	(this.elements[i*4+3] * right.elements[3*4+0]) ;

      tmp.elements[i*4+1] =
	(this.elements[i*4+0] * right.elements[0*4+1]) +
	(this.elements[i*4+1] * right.elements[1*4+1]) +
	(this.elements[i*4+2] * right.elements[2*4+1]) +
	(this.elements[i*4+3] * right.elements[3*4+1]) ;

      tmp.elements[i*4+2] =
	(this.elements[i*4+0] * right.elements[0*4+2]) +
	(this.elements[i*4+1] * right.elements[1*4+2]) +
	(this.elements[i*4+2] * right.elements[2*4+2]) +
	(this.elements[i*4+3] * right.elements[3*4+2]) ;

      tmp.elements[i*4+3] =
	(this.elements[i*4+0] * right.elements[0*4+3]) +
	(this.elements[i*4+1] * right.elements[1*4+3]) +
	(this.elements[i*4+2] * right.elements[2*4+3]) +
	(this.elements[i*4+3] * right.elements[3*4+3]) ;
    }

    this.elements = tmp.elements;
    return this;
  },

  copy: function () {
    var tmp = new Matrix4x4();
    for (var i = 0; i < 16; i++) {
      tmp.elements[i] = this.elements[i];
    }
    return tmp;
  },

  get: function (row, col) {
    return this.elements[4*row+col];
  },

  // In-place inversion
  invert: function () {
    var tmp_0 = this.get(2,2) * this.get(3,3);
    var tmp_1 = this.get(3,2) * this.get(2,3);
    var tmp_2 = this.get(1,2) * this.get(3,3);
    var tmp_3 = this.get(3,2) * this.get(1,3);
    var tmp_4 = this.get(1,2) * this.get(2,3);
    var tmp_5 = this.get(2,2) * this.get(1,3);
    var tmp_6 = this.get(0,2) * this.get(3,3);
    var tmp_7 = this.get(3,2) * this.get(0,3);
    var tmp_8 = this.get(0,2) * this.get(2,3);
    var tmp_9 = this.get(2,2) * this.get(0,3);
    var tmp_10 = this.get(0,2) * this.get(1,3);
    var tmp_11 = this.get(1,2) * this.get(0,3);
    var tmp_12 = this.get(2,0) * this.get(3,1);
    var tmp_13 = this.get(3,0) * this.get(2,1);
    var tmp_14 = this.get(1,0) * this.get(3,1);
    var tmp_15 = this.get(3,0) * this.get(1,1);
    var tmp_16 = this.get(1,0) * this.get(2,1);
    var tmp_17 = this.get(2,0) * this.get(1,1);
    var tmp_18 = this.get(0,0) * this.get(3,1);
    var tmp_19 = this.get(3,0) * this.get(0,1);
    var tmp_20 = this.get(0,0) * this.get(2,1);
    var tmp_21 = this.get(2,0) * this.get(0,1);
    var tmp_22 = this.get(0,0) * this.get(1,1);
    var tmp_23 = this.get(1,0) * this.get(0,1);

    var t0 = ((tmp_0 * this.get(1,1) + tmp_3 * this.get(2,1) + tmp_4 * this.get(3,1)) -
              (tmp_1 * this.get(1,1) + tmp_2 * this.get(2,1) + tmp_5 * this.get(3,1)));
    var t1 = ((tmp_1 * this.get(0,1) + tmp_6 * this.get(2,1) + tmp_9 * this.get(3,1)) -
              (tmp_0 * this.get(0,1) + tmp_7 * this.get(2,1) + tmp_8 * this.get(3,1)));
    var t2 = ((tmp_2 * this.get(0,1) + tmp_7 * this.get(1,1) + tmp_10 * this.get(3,1)) -
              (tmp_3 * this.get(0,1) + tmp_6 * this.get(1,1) + tmp_11 * this.get(3,1)));
    var t3 = ((tmp_5 * this.get(0,1) + tmp_8 * this.get(1,1) + tmp_11 * this.get(2,1)) -
              (tmp_4 * this.get(0,1) + tmp_9 * this.get(1,1) + tmp_10 * this.get(2,1)));

    var d = 1.0 / (this.get(0,0) * t0 + this.get(1,0) * t1 + this.get(2,0) * t2 + this.get(3,0) * t3);

    var out_00 = d * t0;
    var out_01 = d * t1;
    var out_02 = d * t2;
    var out_03 = d * t3;

    var out_10 = d * ((tmp_1 * this.get(1,0) + tmp_2 * this.get(2,0) + tmp_5 * this.get(3,0)) -
                      (tmp_0 * this.get(1,0) + tmp_3 * this.get(2,0) + tmp_4 * this.get(3,0)));
    var out_11 = d * ((tmp_0 * this.get(0,0) + tmp_7 * this.get(2,0) + tmp_8 * this.get(3,0)) -
                      (tmp_1 * this.get(0,0) + tmp_6 * this.get(2,0) + tmp_9 * this.get(3,0)));
    var out_12 = d * ((tmp_3 * this.get(0,0) + tmp_6 * this.get(1,0) + tmp_11 * this.get(3,0)) -
                      (tmp_2 * this.get(0,0) + tmp_7 * this.get(1,0) + tmp_10 * this.get(3,0)));
    var out_13 = d * ((tmp_4 * this.get(0,0) + tmp_9 * this.get(1,0) + tmp_10 * this.get(2,0)) -
                      (tmp_5 * this.get(0,0) + tmp_8 * this.get(1,0) + tmp_11 * this.get(2,0)));

    var out_20 = d * ((tmp_12 * this.get(1,3) + tmp_15 * this.get(2,3) + tmp_16 * this.get(3,3)) -
                      (tmp_13 * this.get(1,3) + tmp_14 * this.get(2,3) + tmp_17 * this.get(3,3)));
    var out_21 = d * ((tmp_13 * this.get(0,3) + tmp_18 * this.get(2,3) + tmp_21 * this.get(3,3)) -
                      (tmp_12 * this.get(0,3) + tmp_19 * this.get(2,3) + tmp_20 * this.get(3,3)));
    var out_22 = d * ((tmp_14 * this.get(0,3) + tmp_19 * this.get(1,3) + tmp_22 * this.get(3,3)) -
                      (tmp_15 * this.get(0,3) + tmp_18 * this.get(1,3) + tmp_23 * this.get(3,3)));
    var out_23 = d * ((tmp_17 * this.get(0,3) + tmp_20 * this.get(1,3) + tmp_23 * this.get(2,3)) -
                      (tmp_16 * this.get(0,3) + tmp_21 * this.get(1,3) + tmp_22 * this.get(2,3)));
    
    var out_30 = d * ((tmp_14 * this.get(2,2) + tmp_17 * this.get(3,2) + tmp_13 * this.get(1,2)) -
                      (tmp_16 * this.get(3,2) + tmp_12 * this.get(1,2) + tmp_15 * this.get(2,2)));
    var out_31 = d * ((tmp_20 * this.get(3,2) + tmp_12 * this.get(0,2) + tmp_19 * this.get(2,2)) -
                      (tmp_18 * this.get(2,2) + tmp_21 * this.get(3,2) + tmp_13 * this.get(0,2)));
    var out_32 = d * ((tmp_18 * this.get(1,2) + tmp_23 * this.get(3,2) + tmp_15 * this.get(0,2)) -
                      (tmp_22 * this.get(3,2) + tmp_14 * this.get(0,2) + tmp_19 * this.get(1,2)));
    var out_33 = d * ((tmp_22 * this.get(2,2) + tmp_16 * this.get(0,2) + tmp_21 * this.get(1,2)) -
                      (tmp_20 * this.get(1,2) + tmp_23 * this.get(2,2) + tmp_17 * this.get(0,2)));

    this.elements[0*4+0] = out_00;
    this.elements[0*4+1] = out_01;
    this.elements[0*4+2] = out_02;
    this.elements[0*4+3] = out_03;
    this.elements[1*4+0] = out_10;
    this.elements[1*4+1] = out_11;
    this.elements[1*4+2] = out_12;
    this.elements[1*4+3] = out_13;
    this.elements[2*4+0] = out_20;
    this.elements[2*4+1] = out_21;
    this.elements[2*4+2] = out_22;
    this.elements[2*4+3] = out_23;
    this.elements[3*4+0] = out_30;
    this.elements[3*4+1] = out_31;
    this.elements[3*4+2] = out_32;
    this.elements[3*4+3] = out_33;
    return this;
  },

  // Returns new matrix which is the inverse of this
  inverse: function () {
    var tmp = this.copy();
    return tmp.invert();
  },
  
  // In-place transpose
  transpose: function () {
    var tmp = this.elements[0*4+1];
    this.elements[0*4+1] = this.elements[1*4+0];
    this.elements[1*4+0] = tmp;

    tmp = this.elements[0*4+2];
    this.elements[0*4+2] = this.elements[2*4+0];
    this.elements[2*4+0] = tmp;

    tmp = this.elements[0*4+3];
    this.elements[0*4+3] = this.elements[3*4+0];
    this.elements[3*4+0] = tmp;

    tmp = this.elements[1*4+2];
    this.elements[1*4+2] = this.elements[2*4+1];
    this.elements[2*4+1] = tmp;

    tmp = this.elements[1*4+3];
    this.elements[1*4+3] = this.elements[3*4+1];
    this.elements[3*4+1] = tmp;

    tmp = this.elements[2*4+3];
    this.elements[2*4+3] = this.elements[3*4+2];
    this.elements[3*4+2] = tmp;

    return this;
  },

  loadIdentity: function () {
    for (var i = 0; i < 16; i++)
      this.elements[i] = 0;
    this.elements[0*4+0] = 1.0;
    this.elements[1*4+1] = 1.0;
    this.elements[2*4+2] = 1.0;
    this.elements[3*4+3] = 1.0;
    return this;
  }
};

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

/*
 * Copyright 2009, Google Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */


/**
 * @fileoverview This file contains a class which assists with the
 * loading of GLSL shaders.
 */

o3djs.provide('o3djs.shader');

/**
 * A module for shaders.
 * @namespace
 */
o3djs.shader = o3djs.shader || {};

/**

 * Loads a shader from vertex and fragment programs specified in
 * "script" nodes in the HTML page. This provides a convenient
 * mechanism for writing GLSL snippets without the burden of
 * additional syntax like per-line quotation marks.
 * @param {!WebGLRenderingContext} gl The WebGLRenderingContext
 *     into which the shader will be loaded.
 * @param {!string} vertexScriptName The name of the HTML Script node
 *     containing the vertex program.
 * @param {!string} fragmentScriptName The name of the HTML Script node
 *     containing the fragment program.
 */
o3djs.shader.loadFromScriptNodes = function(gl,
                                            vertexScriptName,
                                            fragmentScriptName) {
  var vertexScript = document.getElementById(vertexScriptName);
  var fragmentScript = document.getElementById(fragmentScriptName);
  if (!vertexScript || !fragmentScript)
    return null;
  return new o3djs.shader.Shader(gl,
                                 vertexScript.text,
                                 fragmentScript.text);
}


/**
 * Loads text from an external file. This function is synchronous.
 * @param {string} url The url of the external file.
 * @return {string} the loaded text if the request is synchronous.
 */
o3djs.shader.loadTextFileSynchronous = function(url) {
  var error = 'loadTextFileSynchronous failed to load url "' + url + '"';
  var request;

  request = new XMLHttpRequest();
  if (request.overrideMimeType) {
    request.overrideMimeType('text/plain');
  }

  request.open('GET', url, false);
  request.send(null);
  if (request.readyState != 4) {
    throw error;
  }
  return request.responseText;
};


o3djs.shader.loadFromURL = function(gl,
                                    vertexURL,
                                    fragmentURL) {

  var vertexText = o3djs.shader.loadTextFileSynchronous(vertexURL);
  var fragmentText = o3djs.shader.loadTextFileSynchronous(fragmentURL);

  if (!vertexText || !fragmentText)
    return null;
  return new o3djs.shader.Shader(gl,
                                 vertexText,
                                 fragmentText);
}


/**
 * Helper which convers GLSL names to JavaScript names.
 * @private
 */
o3djs.shader.glslNameToJs_ = function(name) {
  return name.replace(/_(.)/g, function(_, p1) { return p1.toUpperCase(); });
}

/**
 * Creates a new Shader object, loading and linking the given vertex
 * and fragment shaders into a program.
 * @param {!WebGLRenderingContext} gl The WebGLRenderingContext
 *     into which the shader will be loaded.
 * @param {!string} vertex The vertex shader.
 * @param {!string} fragment The fragment shader.
 */
o3djs.shader.Shader = function(gl, vertex, fragment) {
  this.program = gl.createProgram();
  this.gl = gl;

  var vs = this.loadShader(this.gl.VERTEX_SHADER, vertex);
  if (vs == null) {
    return;
  }
  this.gl.attachShader(this.program, vs);
  this.gl.deleteShader(vs);

  var fs = this.loadShader(this.gl.FRAGMENT_SHADER, fragment);
  if (fs == null) {
    return;
  }
  this.gl.attachShader(this.program, fs);
  this.gl.deleteShader(fs);

  this.gl.linkProgram(this.program);
  this.gl.useProgram(this.program);

  // Check the link status
  var linked = this.gl.getProgramParameter(this.program, this.gl.LINK_STATUS);
  if (!linked) {
    var infoLog = this.gl.getProgramInfoLog(this.program);
    output("Error linking program:\n" + infoLog);
    this.gl.deleteProgram(this.program);
    this.program = null;
    return;
  }

  // find uniforms and attributes
  var re = /(uniform|attribute)\s+\S+\s+(\S+)\s*;/g;
  var match = null;
  while ((match = re.exec(vertex + '\n' + fragment)) != null) {
    var glslName = match[2];
    var jsName = o3djs.shader.glslNameToJs_(glslName);
    var loc = -1;
    if (match[1] == "uniform") {
      this[jsName + "Loc"] = this.getUniform(glslName);
    } else if (match[1] == "attribute") {
      this[jsName + "Loc"] = this.getAttribute(glslName);
    }
    if (loc >= 0) {
      this[jsName + "Loc"] = loc;
    }
  }
}

/**
 * Binds the shader's program.
 */
o3djs.shader.Shader.prototype.bind = function() {
  this.gl.useProgram(this.program);
}

/**
 * Helper for loading a shader.
 * @private
 */
o3djs.shader.Shader.prototype.loadShader = function(type, shaderSrc) {
  var shader = this.gl.createShader(type);
  if (shader == null) {
    return null;
  }

  // Load the shader source
  this.gl.shaderSource(shader, shaderSrc);
  // Compile the shader
  this.gl.compileShader(shader);
  // Check the compile status
  if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
    var infoLog = this.gl.getShaderInfoLog(shader);
    output("Error compiling shader:\n" + infoLog);
    this.gl.deleteShader(shader);
    return null;
  }
  return shader;
}

/**
 * Helper for looking up an attribute's location.
 * @private
 */
o3djs.shader.Shader.prototype.getAttribute = function(name) {
  return this.gl.getAttribLocation(this.program, name);
};

/**
 * Helper for looking up an attribute's location.
 * @private
 */
o3djs.shader.Shader.prototype.getUniform = function(name) {
  return this.gl.getUniformLocation(this.program, name);
}

"use strict";

function webglSupported() {
  if (!!window.WebGLRenderingContext) {
    var canvas = document.createElement("canvas"),
      names = ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"],
      context = false;

    for(var i=0;i<4;i++) {
      try {
        context = canvas.getContext(names[i]);
        if (context && typeof context.getParameter == "function") {
          // WebGL is enabled
          return true;
        }
      } catch(e) {}
    }

    // WebGL is supported, but disabled
    return false;
  }

  // WebGL not supported
  return false;
}

function audioContextSupported() {
  // This feature is still prefixed in Safari
  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  return !!window.AudioContext;
}

window.isVisualizationSupported = webglSupported();
window.isAudioContextSupported  = audioContextSupported();

$(function() {

  function updateMediaQueriesVars() {
    window.isPhone  = $('#phoneDeviceContainer').css('display') == 'none';
    window.isTablet = $('#tabletDeviceContainer').css('display') == 'none';
  }

  updateMediaQueriesVars();

  $(window).resize(updateMediaQueriesVars);

});
function output(str) {
  console.log(str);
}

// Temporary patch until all browsers support unprefixed context.
if (window.hasOwnProperty('AudioContext') && !window.hasOwnProperty('webkitAudioContext'))
  window.webkitAudioContext = AudioContext;

// if set to false, then webgl rendering is suspended
window.isVisualizationEnabled = true;

var context;
var analyser,
    analyser2,
    splitter,
    gain;

var analyserView1,
    analyserView2;

function initCanvases() {
  updateAnalyzersDimensions();

  $(window).resize(updateAnalyzersDimensions);
}

function initAnalysers() {
  initCanvases();

  analyserView1 = new AnalyserView("3dSonogramView");
  analyserView2 = new AnalyserView("waveformView", ANALYSISTYPE_WAVEFORM);

  initAudio();
  analyserView1.initByteBuffer();
  analyserView2.initByteBuffer();
}

function updateAnalyzersDimensions() {
  var $sonogramCanvas = $('#3dSonogramView');
  $sonogramCanvas.attr('width', $sonogramCanvas.parent().width());
  $sonogramCanvas.attr('height', parseInt(parseInt($sonogramCanvas.attr('width')) / 1.8));

  var $waveform = $('#waveformView');
  $waveform.attr('width', $waveform.parent().width());
  $waveform.attr('height', parseInt(parseInt($waveform.attr('width')) / 3.3));
}

function loadAudioBuffer(url, cb) {
  // Load asynchronously

  var request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.responseType = "arraybuffer";

  request.onload = function () {
    context.decodeAudioData(
      request.response,
      function (b) {
        if (cb) cb(b);
      },

      function (buffer) {
        console.log("Error decoding audio!");
      }
    );
  };

  request.send();
}

function initAudio() {
  context = new webkitAudioContext();

  gain = context.createGain();
  gain.gain.value = 1;

  analyser = context.createAnalyser();
  analyser2 = context.createAnalyser();
  analyser.fftSize = 2048;
  analyser2.fftSize = 2048;

  splitter = context.createChannelSplitter();
  splitter.connect(analyser,0,0);
  splitter.connect(analyser2,1,0);

  splitter.connect(gain, 0);
  splitter.connect(gain, 1);

  gain.connect(context.destination);
}

if (!window.requestAnimationFrame) {

  window.requestAnimationFrame = (function () {

    return window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame || // comment out if FF4 is slow (it caps framerate at ~30fps: https://bugzilla.mozilla.org/show_bug.cgi?id=630127)
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (/* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {

        window.setTimeout(callback, 1000 / 60);

      };

  })();

}

function draw() {
  if (window.isVisualizationEnabled) {
    analyserView1.doFrequencyAnalysis();
  }
  analyserView2.doFrequencyAnalysis();
  window.requestAnimationFrame(draw);
}
"use strict";

var menu = {
  $el: $('#playerMenu'),
  init: function(data) {
    this.parseData(data);
    this.bindEvents();
  },
  bindEvents: function() {
    this.$el.on('click', '.js-audio-item', this.onAudioLinkClicked.bind(this));
    $(audio).on('loading', this.onAudioLoading.bind(this));
  },
  onAudioLinkClicked: function(ev) {
    $('.js-audio-item.active').removeClass('active');
    var $this              = $(ev.target),
        name               = $this.attr('data-name'),
        type               = $this.attr('data-type'),
        url                = $this.attr('data-url'),
        timezone_offset    = $this.attr('data-timezone-offset'),
        timezone_label     = $this.attr('data-timezone-label'),
        flickr_photoset_id = $this.attr('data-flickr-photoset-id');
    $this.addClass('active');
    queue.setupAudio({
      type: type,
      name: name,
      url : url,
      flickr_photoset_id: flickr_photoset_id,
      timezone: {
        offset: timezone_offset,
        label: timezone_label
      }
    });
  },
  onAudioLoading: function(ev, isLoading) {
    this.$el.toggleClass('loading', isLoading);
  },
  parseData: function (data) {
    if (!data.streams) {
      return;
    }
    for (var i = 0; i < data.streams.length; i++) {
      var stream = data.streams[i];
      this.addButton({
        name: stream.name,
        shortname: stream.shortname,
        audio_url: stream.urls.audio,
        type: stream.type,
        timezone_offset: stream.timezone_offset,
        timezone_label: stream.location,
        flickr_photoset_id: stream.flickr_photoset_id
      })
    }
  },
  addButton: function(data) {
    var $button = $('<button/>', {
      class: 'btn btn-default js-audio-item',
      type: 'button',
      'data-name': data.name,
      'data-url': data.audio_url,
      'data-type': data.type,
      'data-timezone-offset': data.timezone_offset,
      'data-timezone-label': data.timezone_label,
      'data-flickr-photoset-id': data.flickr_photoset_id,
      text: data.shortname
    });
    $button.addClass(data.type);
    this.$el.append($button);
    $button.wrap("<div class='dropup'></div>");
  }
};
"use strict";

var login = {
  $info: $('#passwordErrorLabel'),
  $form: $('#loginForm'),
  $input: $('#passwordInput'),
  $keypadControls: $('#keypadControls'),
  $keypadLoader: $('#keypadLoader'),
  init: function() {
    this.$input.val('');
    this.bindEvents();
  },
  bindEvents: function() {
    this.$form.submit(this.onSubmit.bind(this));
    this.$input.on('change', this.onInputChanged.bind(this));
    this.$form.on('click touchstart', '.js-keypad-btn',       this.onKeypadBtnClicked.bind(this));
    this.$form.on('click touchstart', '.js-keypad-backspace', this.onKeypadBackspaceClicked.bind(this));
  },
  onSubmit: function(ev) {
    ev.preventDefault();
    this.submitForm();
    return false;
  },
  onInputChanged: function(ev) {
    var $this = $(ev.target),
        val   = $this.val();
    this.$form.find('.js-keypad-backspace').toggleClass('visible', !!val.length);
    if (val.length === 4) {
      this.submitForm();
    }
  },
  onKeypadBtnClicked: function(ev) {
    var $this = $(ev.target),
        val   = $this.attr('data-value');
    var inputVal = this.$input.val();
    if (inputVal.length > 4) {
      return;
    }
    this.clearMessage();
    this.$input.removeClass('error');
    this.$input.val(inputVal + val).trigger('change');
    ev.preventDefault();
  },
  onKeypadBackspaceClicked: function(ev) {
    var currentVal = this.$input.val();
    if (!currentVal.length) {
      return;
    }
    this.clearMessage();
    this.$input.removeClass('error');
    this.$input.val(currentVal.substr(0, currentVal.length-1)).trigger('change');
    ev.preventDefault();
  },
  submitForm: function() {
    if (!this.$input.val().length) {
      return;
    }
    this.clearMessage();
    this.$input.removeClass('error');
    this.clearMessage();
    this.savePassphrase();
    this.checkPassword();
  },
  savePassphrase: function() {
    window.rfcxPassphrase = this.$input.val();
  },
  checkPassword: function() {
    this.toggleLoadingState(true);
    queue.checkPassword()
      .done(function () {
        this.hideOverlay();
        this.toggleLoadingState(false);
        $(this).trigger('successful-login');
      }.bind(this))
      .fail(function(err) {
        this.toggleLoadingState(false);
        this.$input.val('').trigger('change');
        if (err.status == 401) {
          this.setMessage('Invalid Password');
        }
        else {
          this.setMessage('Error while initialization');
        }
      }.bind(this));
  },
  hideOverlay: function() {
    $('#loginOverlay').fadeOut('fast');
  },
  clearMessage: function() {
    this.setMessage('');
  },
  setMessage: function(mes) {
    this.$info.text(mes);
  },
  toggleLoadingState: function(isLoading) {
    this.$keypadControls.toggleClass('loading', isLoading);
    this.$keypadLoader.toggleClass('visible', isLoading);
  }
};

$(function() {
  login.init();
});
'use strict';

var slideshow = {
  // set disabled mode for slideshow by default - let's say most browsers support webgl, so we will not show slideshow on load
  currentMode: '3d',
  isInitialized: false,
  // array of current photoset's photos
  photos: [],
  // photosets ajax responses will be stored here
  photosCache: {},
  init: function() {
    // if browser doesn't support webgl, then set current view mode to slideshow
    if (!window.isVisualizationSupported || !window.isAudioContextSupported) {
      this.currentMode = 'slideshow';
    }
    this.bindEvents();
  },
  bindEvents: function() {
    // when we change stream by clicking on menu button
    $(queue).on('stream-changed', this.onStreamChanged.bind(this));
    $('#btnShowCarousel').click(this.onBtnShowClicked.bind(this));
    $('#btnHideCarousel').click(this.onBtnHideClicked.bind(this));
  },
  onStreamChanged: function() {
    // if slideshow was initialized, then destroy it to init new one
    if (this.isInitialized) {
      this.destroyCarousel();
    }
    if (this.currentMode === 'slideshow') {
      this.showCarousel();
    }
  },
  onBtnShowClicked: function() {
    // set current mode to slideshow when user clicked on "Show Slideshow" button while he see webgl canvases
    this.currentMode = 'slideshow';
    this.showCarousel();
  },
  onBtnHideClicked: function() {
    // set current mode to 3d when user closes slideshow by clicking on X button
    this.currentMode = '3d';
    this.hideCarousel();
  },
  showCarousel: function() {
    this.getPhotoset();
    $('#btnShowCarousel').hide();
    $('#btnHideCarousel').show();
    $('#imgSlideshow').fadeIn();
    window.isVisualizationEnabled = false;
  },
  hideCarousel: function() {
    $('#btnHideCarousel').hide();
    $('#imgSlideshow').fadeOut('fast', function() {
      this.destroyCarousel();
    }.bind(this));
    $('#btnShowCarousel').show();
    window.isVisualizationEnabled = true;
  },
  setUncloseable: function() {
    // when browser doesn't support webgl, we will show only slideshow, so X button is redundant in this case
    $('#btnHideCarousel').addClass('unclosable');
    return this;
  },
  getPhotoset: function() {
    var photosetId = queue.stream.flickr_photoset_id;
    this.toggleLoader(true);
    // if we have already requested this photosed in current session, then get it from cache
    if (this.photosCache[photosetId]) {
      this.getPhotos(this.photosCache[photosetId]);
    }
    else {
      $.ajax({
        url: 'https://api.flickr.com/services/rest',
        type: 'GET',
        dataType: "jsonp",
        jsonp: "jsoncallback",
        data: {
          method: 'flickr.photosets.getPhotos',
          format: 'json',
          api_key: '7b547aa9677a147677cfa44f21151be1',
          photoset_id: photosetId
        },
        success: function(res) {
          if (res && res.photoset && res.photoset.photo) {
            // save photoset data to local cache
            this.photosCache[photosetId] = res;
            this.getPhotos(res);
          }
        }.bind(this),
        error: function(err) {
          console.log('err', err);
          this.toggleLoader(false);
          this.hideCarousel();
        }.bind(this)
      });
    }
  },
  getPhotos: function(data) {
    for (var i = 0; i < data.photoset.photo.length; i++) {
      this.photos.push(this.getImageUrl(data.photoset.photo[i]));
    }
    this.initCarousel();
  },
  getImageUrl: function(photo) {
    return 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret +'_b.jpg';
  },
  initCarousel: function() {
    $("#imgSlideshow").Kenburns({
      images: this.photos,
      scale:0.9,
      duration:10000,
      fadeSpeed:800,
      ease3d: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      onLoadingFirstComplete: function() {
        this.toggleLoader(false);
        this.isInitialized = true;
      }.bind(this)
    });
  },
  destroyCarousel: function() {
    if ($.data($("#imgSlideshow")[0])['plugin_Kenburns']) {
      $.data($("#imgSlideshow")[0])['plugin_Kenburns'].destroy();
    }
    this.photos = [];
  },
  toggleLoader: function(isVisible) {
    $('#loaderContainer').toggleClass('loading-carousel', isVisible);
    this.isInitialized = false;
  }
};

$(function() {
  slideshow.init();
});
"use strict";

var queue = {
  apiUrl: 'https://api.rfcx.org',
  list: [],
  measureList: [],
  token: '',
  guid: '',
  stream: {
    url: undefined,
    name: undefined,
    type: undefined,
    timezone: {
      offset: undefined,
      label: undefined
    }
  },
  timeout: undefined,
  isStopped: false,
  reset: function() {
    clearTimeout(this.timeout);
    this.list = [];
    this.measureList = [];
    this.stream.url = undefined;
    this.stream.name = undefined;
    this.stream.type = undefined;
    this.stream.timezone.offset = undefined;
    this.stream.timezone.label = undefined;
    this.isStopped = false;
  },
  setupUI: function() {
    this.isStopped = false;
    this.list = [];

    audio.initVisualization();

    this.firstRequest();
  },
  firstRequest: function() {
    var def = this.requestData()
      .then(function(res) {
        menu.init(res);
        // Play first stream automatically
        $('.js-audio-item').first().click();
      }.bind(this));

    def.fail(function() {
      console.log('RFCX | Error Receiving Data from Server. Retry in 10 seconds');
      setTimeout(this.firstRequest.bind(this), 10000);
    }.bind(this));
  },
  setupAudio: function(opts) {
    // do not setup one stream twice
    if (this.stream.url == opts.url) {
      return;
    }
    audio.reset();
    audio.setLoadingState(true);
    this.reset();
    this.stream = opts;
    this.pullAudio();
    $(this).trigger('stream-changed');
  },
  pullAudio: function() {
    this.pullStream()
      .then(function(res) {
        this.setStreamName();
        this.refreshAudios(res);
        this.sendAudio();
      }.bind(this));
  },
  resetAudio: function() {
    this.list = [];
    this.isStopped = false;
    this.pullAudio();
  },
  bindEvents: function() {
    $(audio).on('refresh', this.resetAudio.bind(this));
    $(audio).on('stopped', this.onAudioStopped.bind(this));
  },
  checkPassword: function() {
    var def = this.requestToken();
    def.done(function(data) {
      this.bindEvents();
      this.saveTokens(data);
      this.setupUI();
    }.bind(this));
    return def;
  },
  requestToken: function() {
    return $.ajax({
      type: 'POST',
      url: this.apiUrl + '/v1/player/login',
      data: {
        'password': window.rfcxPassphrase
      }
    })
  },
  setStreamName: function() {
    if (this.stream.name) {
      $('#streamName').text(this.stream.name);
    }
  },
  saveTokens: function(data) {
    this.token = data.token.token;
    this.guid  = data.token.guid;
  },
  requestData: function() {
    return $.ajax({
      type: 'GET',
      url: this.apiUrl + '/v1/player/web',
      beforeSend: function (request) {
        // x-auth-token and x-auth-user are required for backend api call.
        request.setRequestHeader("x-auth-user", 'token/' + this.guid);
        request.setRequestHeader("x-auth-token", this.token);
      }.bind(this)
    })
  },
  pullStream: function() {
    if (this.stream.type == 'stream' || (this.stream.type == 'playlist' && this.list.length < 20)) {
      this.createRequestTimeout();
    }
    return $.ajax({
      type: 'GET',
      //url: this.apiUrl + this.stream.urls.audio + '?limit=3',
      url: this.apiUrl + this.stream.url + (this.stream.type == 'stream'? '?limit=3' : ''),
      beforeSend: function (request) {
        // x-auth-token and x-auth-user are required for backend api call.
        request.setRequestHeader("x-auth-user", 'token/' + this.guid);
        request.setRequestHeader("x-auth-token", this.token);
      }.bind(this)
    })
  },
  refreshAudios: function(data) {
    console.log('RFCX | Received from server:', data);
    // iterate through all new items in inverse order
    if (this.stream.type == 'stream') {
      for (var i = data.length-1; i >= 0; i--) {
        var item = data[i];
        // if current url was not presented in the list than append it to the end of array
        if (this.list.indexOf(item.urls['mp3']) === -1) {
          this.list.push(item.urls['mp3']);
          this.measureList.push(item['measured_at']);
        }
      }
    }
    else if (this.stream.type == 'playlist') {
      for (var j = 0; j < data.length; j++) {
        var item = data[j];
        // if current url was not presented in the list than append it to the end of array
        if (this.list.indexOf(item.urls['mp3']) === -1) {
          this.list.push(item.urls['mp3']);
          this.measureList.push(item['measured_at']);
        }
      }
    }
  },
  prepareNext: function() {
    if (this.stream.type === 'playlist') {
      this.increaseUrlTime();
    }
    // new data request
    this.pullStream().then(
      function(res) {
        if (res && res.length) {
          // add new urls to local array
          this.refreshAudios(res);
        }
        this.sendAudio();
      }.bind(this)
    );
  },
  sendAudio: function() {
    // send event to audio object with new audio file url
    $(this).trigger('newurl', {
      urls: this.list
    });
  },
  createRequestTimeout: function() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    // request new audio files every 100 seconds
    if (!this.isStopped) {
      this.timeout = setTimeout(this.prepareNext.bind(this), 100000)
    }
  },
  onAudioStopped: function() {
    this.isStopped = true;
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  },
  increaseUrlTime: function() {
    // get startinf_atter parameter from current playlist url
    var startingAfter = this.getParameterByName('starting_after', this.stream.url);
    // time has not standard value (e.g. 2016-03-12t21:49:00z) apply uppercase to avoid bug in IE
    var time = new Date(startingAfter.toUpperCase());
    // increase this time by 90 seconds
    time.setSeconds(time.getSeconds() + 90);
    // update url with new time
    this.stream.url = this.updateUrlParameter('starting_after', time.toISOString(), this.stream.url);
  },
  // get url parameter
  getParameterByName: function(param, url) {
    if (!url) url = window.location.href;
    url = url.toLowerCase(); // This is just to avoid case sensitiveness
    param = param.replace(/[\[\]]/g, "\\$&").toLowerCase();// This is just to avoid case sensitiveness for query parameter name
    var regex = new RegExp("[?&]" + param + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  },
  // set new value to url parameter
  updateUrlParameter: function(param, value, url){
    var pattern = new RegExp('\\b('+ param +'=).*?(&|$)');
    if(url.search(pattern) >= 0){
      return url.replace(pattern,'$1' + value + '$2');
    }
    return url + (url.indexOf('?')>0 ? '&' : '?') + param + '=' + value;
  }
};
window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext;


var audio = {
  // array to store all urls
  urls: [],
  // array to store all audio objects
  list: [],
  // current index to play
  index: 0,
  // current audio object or audio source
  currentAudio: undefined,
  // is stop button was pressed
  isStopped: false,
  // is audio source and visualization is supported by current browser
  isModernBrowser: window.isVisualizationSupported && window.isAudioContextSupported,
  // how many streams/playlists were requested
  loadsCount: 0,
  // is audio muted
  isMuted: false,
  init: function() {
    this.bindEvents();
  },
  reset: function() {
    this.stopPlayback();
    this.urls = [];
    this.list = [];
    this.index = 0;
    this.currentAudio = undefined;
  },
  bindEvents: function() {
    // listen to the queue object for the new audio files
    $(queue).on('newurl', this._onNewUrls.bind(this));
    // Mute button clicked
    $('#muteBtn').click(this._onMuteBtnClicked.bind(this));
    // Mobile play button clicked
    $('#playBtn').click(this._onPlayBtnClicked.bind(this));
  },
  initVisualization: function () {
    if (this.isModernBrowser) {
      // init waveform and sonogram if visualization is supported by current browser
      initAnalysers();
    }
    else {
      // if visualization is not supported init slideshow
      initCanvases();
      slideshow.setUncloseable();
    }
  },
  parseAudioData: function() {
    // create html audio instances for each of audio file
    // after that all audio files will be requested, cached and ready to play immediately
    var _this     = this,
        urlsCount = this.urls.length;
    for (var i=0; i < urlsCount; i++) {
      if (!this.list[i]) {
        (function(index) {
          _this.loadAudioFile(index);
        })(i);
      }
      else {
        // set loop for last audio
        this.list[i].loop = (i == urlsCount-1);
      }
    }
  },
  loadAudioFile: function(index) {
    var isLooped = (index == this.urls.length-1),
        url      = this.urls[index];

    function autoplay() {
      this.setLoadingState(false);
      if ((!window.isTablet && !window.isPhone && this.loadsCount === 0) || this.loadsCount > 0) {
        this.startPlayback();
      }
    }

    if (this.isModernBrowser) {
      // if audio source is supported then load audio buffer
      loadAudioBuffer(url, function (buffer) {
        this.list[index] = this.createAudioBuffer({
          buffer: buffer,
          // set loop for last audio
          loop: isLooped,
          loopStart: 1.5,
          loopEnd: buffer.duration
        });
        if (index == 1) {
          // trigger play on first load
          autoplay.call(this);
        }
      }.bind(this));
    }
    else {
      // if audio source is supported then create html Audio object
      this.list[index] = this.createAudioTag({
        src: url,
        // set loop for last audio
        loop: isLooped
      });
      if (index == 1) {
        // trigger play on first load
        autoplay.call(this);
      }
    }
  },
  createAudioBuffer: function(data) {
    var source = context.createBufferSource();
    source.buffer    = data.buffer;
    source.loop      = data.loop;
    source.loopStart = data.loopStart;
    source.loopEnd   = data.loopEnd;
    return source;
  },
  createAudioTag: function(data) {
    var audio = new Audio();
    audio.src = data.src;
    audio.loop = data.loop;
    // Start playback with offset of 2000 ms to avoid empty gap in the start of audio
    audio.addEventListener('loadedmetadata', function() {
      audio.currentTime = 2;
    }, false);
    audio.muted = this.isMuted;
    return audio;
  },
  _onPlayEnd: function(ev) {
    console.log('AUDIO | Playback Finished:', ev);
    // if audio is not last in the list then play the next
    if (!this.isStopped) {
      this.playAudio();
    }
  },
  _onNewUrls: function(ev, data) {
    if (data && data.urls) {
      // save all urls to local array
      this.urls = data.urls;
      console.log('AUDIO | Total:', this.urls.length, 'audio files');
      // create new audio instances
      this.parseAudioData();
    }
  },
  _onMuteBtnClicked: function(ev) {
    this.isMuted = !this.isMuted;
    $(ev.target).toggleClass('muted', this.isMuted).attr('title', this.isMuted? 'Unmute' : 'Mute');
    if (this.isModernBrowser) {
      gain.gain.value = this.isMuted? 0 : 1;
    }
    else {
      this.toggleAudiosMute(this.isMuted);
    }
  },
  _onPlayBtnClicked: function(ev) {
    var $this = $(ev.target);
    if ($this.prop('disabled')) {
      return;
    }
    this.startPlayback();
  },
  toggleAudiosMute: function(isMuted) {
    for (var i = 0; i < this.list.length; i++) {
      this.list[i].muted = isMuted;
    }
  },
  startPlayback: function() {
    this.loadsCount++;
    this.isStopped = false;
    $('#muteBtn').removeClass('stopped');
    $('#bigPlayBtnContainer').hide();
    this.playAudio();
  },
  stopPlayback: function () {
    if (this.isModernBrowser) {
      if (this.currentAudio) {
        this.currentAudio.stop();
      }
      this.index = 0;
      this.list = [];
    }
    else {
      if (this.currentAudio) {
        this.currentAudio.pause();
      }
    }
    this.isStopped = true;
    $(this).trigger('stopped');
  },
  changeButtonState: function(opts) {
    $('#muteBtn').prop('disabled', opts.disabled);
    $('#playBtn').prop('disabled', opts.disabled);
  },
  playAudio: function() {
    var toPlayNewSong = false;
    if(this.index + 1 < this.list.length) {
      this.index++;
      toPlayNewSong = true;
    }
    // if audio was last in the list then play it again
    console.log('AUDIO | Play', this.index+1, this.list[this.index], this.urls[this.index]);
    if (toPlayNewSong) {
      var audio = this.list[this.index];
      audio.onended = this._onPlayEnd.bind(this);
      if (this.isModernBrowser) {
        // Start playback with offset of 1500 ms to avoid empty gap in the start of audio
        audio.start(0, 1.5);
        audio.connect(splitter);
        audio.connect(gain);
      }
      else {
        audio.play();
      }
      this.currentAudio = audio;
    }
    if(this.index == 1) {
        if (this.isModernBrowser) {
          window.requestAnimationFrame(draw);
        }
    }
    $(this).trigger('started');
  },
  setLoadingState: function (isLoading) {
    this.changeButtonState({disabled: isLoading});
    this.toggleLoader({visible: isLoading});
    $(this).trigger('loading', isLoading);
  },
  toggleLoader: function(opts) {
    $('#loaderContainer').toggleClass('hidden', !opts.visible);
  }
};

$(function() {
  audio.init();
});
"use strict";

var clock = {
  $el: $('#clock'),
  init: function() {
    this.bindEvents();
  },
  bindEvents: function() {
    $(audio).on('started', this.onPlaybackStarded.bind(this));
    $(audio).on('stopped', this.stopTimer.bind(this));
    $(audio).on('continued', this.startTimer.bind(this));
  },
  onPlaybackStarded: function(ev) {
    this.initTime(queue.measureList[ev.target.index]);
  },
  initTime: function(date) {
    this.time = new Date(date);
    // get actual hours which were in ISO time (GMT 00:00))
    this.time.setTime(this.time.getTime() + (this.time.getTimezoneOffset() * 60000));
    // substract guardian's timezone offset
    this.time.setHours(this.time.getHours() + parseFloat(queue.stream.timezone.offset));
    setTimeout(this.setTimezone, 1000);
    this.startTimer();
  },
  startTimer: function() {
    this.stopTimer();
    this.timer = setInterval(function(){
      this.parseTime();
      this.render();
      this.increaseTime();
    }.bind(this), 1000);
  },
  stopTimer: function() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },
  parseTime: function() {
    this.h = this.time.getHours();
    this.m = this.time.getMinutes();
    this.s = this.time.getSeconds();

    this.h = this.checkTime(this.h);
    this.m = this.checkTime(this.m);
    this.s = this.checkTime(this.s);
  },
  increaseTime: function() {
    this.time.setSeconds(this.time.getSeconds() + 1);
  },
  render: function() {
    this.$el.html(this.h + ":" + this.m + ":" + this.s);
  },
  setTimezone: function() {
    $('#clockLabel').show();
    $('#timezone').html(queue.stream.timezone.label);
  },
  checkTime: function(i) {
    if (i < 10) {i = "0" + i} // add zero in front of numbers < 10
    return i;
  }
};

$(function() {
  clock.init();
});
'use strict';

var tour = {
  init: function() {
    this.bindEvents();
  },
  bindEvents: function() {
    // when login is sucessful, we register the tourguide 
    $(login).on('successful-login', this._onSuccessfulLogin);
  },
  _onSuccessfulLogin: function() {

    setTimeout(function(){
      tl.pg.init({ custom_open_button: 'hidePageGuideToggle' });
    }, 30000);
    
  }
};

$(function() {
  tour.init();
});