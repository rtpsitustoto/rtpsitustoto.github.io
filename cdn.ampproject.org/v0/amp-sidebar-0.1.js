;
(self.AMP=self.AMP||[]).push({m:0,v:"2210272257000",n:"amp-sidebar",ev:"0.1",l:!0,f:function(t,i){!function(){function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function n(t,i){return(n=Object.setPrototypeOf||function(t,i){return t.__proto__=i,t})(t,i)}function r(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(i&&i.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),i&&n(t,i)}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,n){if(n&&("object"===e(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return i(t)}function a(t){var i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=s(t);if(i){var e=s(this).constructor;n=Reflect.construct(r,arguments,e)}else n=r.apply(this,arguments);return o(this,n)}}function h(t){return t?Array.prototype.slice.call(t):[]}var u=Array.isArray;function f(t,i){(null==i||i>t.length)&&(i=t.length);for(var n=0,r=new Array(i);n<i;n++)r[n]=t[n];return r}function c(t,i){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(n)return(n=n.call(t)).next.bind(n);if(Array.isArray(t)||(n=function(t,i){if(t){if("string"==typeof t)return f(t,i);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(t,i):void 0}}(t))||i&&t&&"number"==typeof t.length){n&&(t=n);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,v,d=Object.prototype;function m(t){return 1==(null==t?void 0:t.nodeType)}function p(t,i,n,r,s,e,o,a,h,u,f){return t}function b(t){return(t.ownerDocument||t).defaultView}function y(t,i){return t.replace(/^|,/g,"$&".concat(i," "))}function w(t,i){return t.closest?t.closest(i):function(t,i,n){var r;for(r=t;r&&void 0!==r;r=r.parentElement)if(i(r))return r;return null}(t,(function(t){return function(t,i){var n=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector;return!!n&&n.call(t,i)}(t,i)}))}function g(t){return function(t,i){for(var n=[],r=t.firstElementChild;r;r=r.nextElementSibling)void 0,o=void 0,"string"==typeof(e=s=r)?o=e:m(e)&&(o=e.tagName),!(o&&o.toLowerCase().startsWith("i-")||s.nodeType===Node.ELEMENT_NODE&&(s.hasAttribute("placeholder")||s.hasAttribute("fallback")||s.hasAttribute("overflow")))&&n.push(r);var s,e,o;return n}(t)}function k(t){var i=t.isConnected;if(void 0!==i)return i;for(var n=t;(n=x(n)).host;)n=n.host;return n.nodeType===Node.DOCUMENT_NODE}function x(t){if(Node.prototype.getRootNode)return t.getRootNode();var i,n;for(i=t;i.parentNode&&(!(n=i)||"I-AMPHTML-SHADOW-ROOT"!=n.tagName&&(11!=n.nodeType||"[object ShadowRoot]"!==Object.prototype.toString.call(n)));i=i.parentNode);return i}function M(t){try{t.focus()}catch(t){}}function A(t){var i=Object.getOwnPropertyDescriptor(t,"message");if(null!=i&&i.writable)return t;var n=t.message,r=t.stack,s=new Error(n);for(var e in t)s[e]=t[e];return s.stack=r,s}function O(t){for(var i,n=null,r="",s=c(arguments,!0);!(i=s()).done;){var e=i.value;e instanceof Error&&!n?n=A(e):(r&&(r+=" "),r+=e)}return n?r&&(n.message=r+": "+n.message):n=new Error(r),n}function S(t){var i,n;null===(i=(n=self).__AMP_REPORT_ERROR)||void 0===i||i.call(n,t)}function E(t){var i=O.apply(null,arguments);setTimeout((function(){throw S(i),i}))}function j(t){try{for(var i=arguments.length,n=new Array(i>1?i-1:0),r=1;r<i;r++)n[r-1]=arguments[r];return t.apply(null,n)}catch(t){E(t)}}d.hasOwnProperty,d.toString;var D=["Webkit","webkit","Moz","moz","ms","O","o"],X={"getPropertyPriority":function(){return""},"getPropertyValue":function(){return""}};function z(t,i,n,r,s){var e=function(t,i,n){if(i.startsWith("--"))return i;var r;v||(r=Object.create(null),v=r);var s=v[i];if(!s||n){if(s=i,void 0===t[i]){var e=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(i),o=function(t,i){for(var n=0;n<D.length;n++){var r=D[n]+i;if(void 0!==t[r])return r}return""}(t,e);void 0!==t[o]&&(s=o)}n||(v[i]=s)}return s}(t.style,i,s);if(e){var o,a=r?n+r:n;t.style.setProperty((o=e.replace(/[A-Z]/g,(function(t){return"-"+t.toLowerCase()})),D.some((function(t){return o.startsWith(t+"-")}))?"-".concat(o):o),a)}}function R(t,i){for(var n in i)z(t,n,i[n])}function P(t,i){void 0===i&&(i=t.hasAttribute("hidden")),i?t.removeAttribute("hidden"):t.setAttribute("hidden","")}function _(t,i){return t.getComputedStyle(i)||X}var I=/vertical/,T=new WeakMap,C=new WeakMap,W=new WeakMap;function B(t){var i=T.get(t);return i||(i=new t.ResizeObserver(L),T.set(t,i)),i}function L(t){for(var i=new Set,n=t.length-1;n>=0;n--){var r=t[n],s=r.target;if(!i.has(s)){i.add(s);var e=C.get(s);if(e){W.set(s,r);for(var o=0;o<e.length;o++){var a=e[o],h=a.callback;N(a.type,h,r)}}}}}function N(t,i,n){if(0==t){var r=n.contentRect,s=r.height;j(i,{width:r.width,height:s})}else if(1==t){var e,o=n.borderBoxSize;if(o)e=o.length>0?o[0]:{inlineSize:0,blockSize:0};else{var a,h,u=n.target,f=b(u),c=I.test(_(f,u).writingMode),l=u,v=l.offsetHeight,d=l.offsetWidth;c?(h=d,a=v):(a=d,h=v),e={inlineSize:a,blockSize:h}}j(i,e)}}var Y=[],V="__AMP_MODAL_SAVED_TAB_INDEX";function q(t){for(var i=[],n=t;n;n=n.parentNode||n.host)i.push(n);return i}function F(t,i,n){null===n||null==n?t.removeAttribute(i):t.setAttribute(i,n)}var H="i-amphtml-element",U=function(t){return t.unmount()};function $(t,i,n,r){for(var s,e=u(s=t)?s:[s],o=0;o<e.length;o++)G(e[o],i,n,r)}function G(t,i,n,r){if(i&&t.classList.contains(H)){var s=t;if(j(r,s),!n){var e=s.getPlaceholder();return void(e&&G(e,!0,!1,r))}}for(var o=t.getElementsByClassName(H),a=null,h=0;h<o.length;h++){var u=o[h];if(n)j(r,u);else{a=a||[];for(var f=!1,c=0;c<a.length;c++)if(a[c].contains(u)){f=!0;break}f||(a.push(u),j(r,u))}}}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var Z,J=self.__AMP_LOG;function K(t){return J.user||(J.user=Q()),function(t,i){return i&&i.ownerDocument.defaultView!=t}(J.user.win,t)?J.userForEmbed||(J.userForEmbed=Q()):J.user}function Q(t){return function(t,i){throw new Error("failed to call initLogConstructor")}()}function tt(t,i,n,r,s,e,o,a,h,u,f){return t}function it(t,i){return ot(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),i)}function nt(t,i){return ot(et(st(t)),i)}function rt(t,i){var n=et(st(t));return at(n,i)?ot(n,i):null}function st(t){return t.nodeType?(i=b(t),it(i,"ampdoc")).getAmpDoc(t):t;var i}function et(t){var i=st(t);return i.isSingleDoc()?i.win:i}function ot(t,i){tt(at(t,i));var n=function(t){var i=t.__AMP_SERVICES;return i||(i=t.__AMP_SERVICES={}),i}(t)[i];return n.obj||(tt(n.ctor),tt(n.context),n.obj=new n.ctor(n.context),tt(n.obj),n.context=null,n.resolve&&n.resolve(n.obj)),n.obj}function at(t,i){var n=t.__AMP_SERVICES&&t.__AMP_SERVICES[i];return!(!n||!n.ctor)}var ht,ut=function(t){return nt(t,"owners")},ft=function(t){return ot(t,"timer")};function ct(t){if(void 0!==ht)return ht;ht=!1;try{var i={get passive(){return ht=!0,!1}};t.addEventListener("test-options",null,i),t.removeEventListener("test-options",null,i)}catch(t){}return ht}function lt(t,i){var n,r=function(t,i){if(void 0!==l?l:l=function(t){try{var i=t.ownerDocument,n=i.createElement("div"),r=i.createElement("div");return n.appendChild(r),n.querySelector(":scope div")===r}catch(t){return!1}}(t))return t.querySelector(y(i,":scope"));var n=function(t,i){var n=t.classList,r="i-amphtml-scoped";n.add(r);var s=y(":not([toolbar]) [autoscroll]",".".concat(r)),e=t.querySelectorAll(s);return n.remove(r),e}(t)[0];return void 0===n?null:n}(i,":not([toolbar]) [autoscroll]");if(r){var s=_(t.win,i)["overflow-y"];"scroll"==s||"auto"==s?(n=t,nt(n,"viewport")).animateScrollWithinParent(r,i,"center",0):K().error("AMP-SIDEBAR","for 'autoscroll', 'nav [toolbar]' element must be set to overflow\n        'scroll' or 'auto' for 'autoscroll' to work.")}}function vt(t,i){var n=ft(t);return n.promise(1).then((function(){return n.promise(i)}))}var dt=function(){function t(){this.Ft=null}var i=t.prototype;return i.add=function(t){var i=this;return this.Ft||(this.Ft=[]),this.Ft.push(t),function(){i.remove(t)}},i.remove=function(t){var i,n,r;this.Ft&&(n=t,-1!=(r=(i=this.Ft).indexOf(n))&&i.splice(r,1))},i.removeAll=function(){this.Ft&&(this.Ft.length=0)},i.fire=function(t){if(this.Ft)for(var i,n=c(this.Ft.slice(),!0);!(i=n()).done;)(0,i.value)(t)},i.getHandlerCount=function(){var t,i;return null!==(t=null===(i=this.Ft)||void 0===i?void 0:i.length)&&void 0!==t?t:0},t}(),mt=function(){function t(t,i,n){var r=this;this.je=ft(t),this.ze=i,this.Ue=n||0,this.Le=-1,this.He=0,this.Vn=!1,this.Ge=function(){r.Ve()}}var i=t.prototype;return i.isPending=function(){return-1!=this.Le},i.schedule=function(t){var i=t||this.Ue;this.Vn&&i<10&&(i=10);var n=Date.now()+i;return(!this.isPending()||n-this.He<-10)&&(this.cancel(),this.He=n,this.Le=this.je.delay(this.Ge,i),!0)},i.Ve=function(){this.Le=-1,this.He=0,this.Vn=!0,this.ze(),this.Vn=!1},i.cancel=function(){this.isPending()&&(this.je.cancel(this.Le),this.Le=-1)},t}(),pt="__AMP_Gestures",bt=function(t,i,n,r){this.type=t,this.data=i,this.time=n,this.event=r},yt=function(){function t(t){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.Gn=t,this.WM=[],this.Eg=[],this.ki=[],this.XM=[],this.qM=null;var r=t.ownerDocument.defaultView,s=ct(r);this.ZM=i||s,this.$M=n,this.KM=!1,this.Ve=new mt(b(t),this.ad.bind(this)),this.JM=new dt,this.QM=Object.create(null),this.tI=this.Wp.bind(this),this.iI=this.Qp.bind(this),this.nI=this.Kp.bind(this),this.rI=this._g.bind(this),this.Gn.addEventListener("touchstart",this.tI,!!s&&{passive:!0}),this.Gn.addEventListener("touchend",this.iI),this.Gn.addEventListener("touchmove",this.nI,!!s&&{passive:!0}),this.Gn.addEventListener("touchcancel",this.rI),this.oI=!1}t.get=function(i){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=i[pt];return s||(s=new t(i,n,r),i[pt]=s),s};var i=t.prototype;return i.cleanup=function(){this.Gn.removeEventListener("touchstart",this.tI),this.Gn.removeEventListener("touchend",this.iI),this.Gn.removeEventListener("touchmove",this.nI),this.Gn.removeEventListener("touchcancel",this.rI),delete this.Gn[pt],this.Ve.cancel()},i.onGesture=function(t,i){var n=new t(this),r=n.getType(),s=this.QM[r];return s||(this.WM.push(n),s=new dt,this.QM[r]=s),s.add(i)},i.removeGesture=function(t){var i=new t(this).getType(),n=this.QM[i];if(n){n.removeAll();var r=function(t,n){for(var r=0;r<t.length;r++)if(t[r].getType()==i)return r;return-1}(this.WM);return!(r<0||(this.WM.splice(r,1),this.ki.splice(r,1),this.XM.splice(r,1),this.Eg.splice(r,1),delete this.QM[i],0))}return!1},i.onPointerDown=function(t){return this.JM.add(t)},i.Wp=function(t){var i=Date.now();this.KM=!1,this.JM.fire(t);for(var n=0;n<this.WM.length;n++)this.ki[n]||(this.XM[n]&&this.XM[n]<i&&this.Cg(n),this.WM[n].onTouchStart(t)&&this.Ng(n));this.aI(t)},i.Kp=function(t){for(var i=Date.now(),n=0;n<this.WM.length;n++)this.Eg[n]&&(this.XM[n]&&this.XM[n]<i?this.Cg(n):this.WM[n].onTouchMove(t)||this.Cg(n));this.aI(t)},i.Qp=function(t){for(var i=Date.now(),n=0;n<this.WM.length;n++)if(this.Eg[n])if(this.XM[n]&&this.XM[n]<i)this.Cg(n);else{this.WM[n].onTouchEnd(t);var r=!this.XM[n],s=this.XM[n]<i;this.qM==this.WM[n]||!r&&!s||this.Cg(n)}this.aI(t)},i._g=function(t){for(var i=0;i<this.WM.length;i++)this.sI(i);this.aI(t)},i.Zp=function(t,i){if(this.qM)t.acceptCancel();else{for(var n=Date.now(),r=0;r<this.WM.length;r++)this.WM[r]==t&&(this.ki[r]=n+i,this.XM[r]=0);this.oI=!0}},i.eI=function(t,i){if(this.qM)t.acceptCancel();else for(var n=Date.now(),r=0;r<this.WM.length;r++)this.WM[r]==t&&(this.XM[r]=n+i)},i.uI=function(t){this.qM==t&&(this.qM=null,this.KM=!0)},i.hI=function(t,i,n){p(this.qM==t);var r=this.QM[t.getType()];r&&r.fire(new bt(t.getType(),i,Date.now(),n))},i.aI=function(t){var i=!!this.qM||this.KM;if(this.KM=!1,!i)for(var n=Date.now(),r=0;r<this.WM.length;r++)if(this.ki[r]||this.XM[r]&&this.XM[r]>=n){i=!0;break}i?(t.stopPropagation(),this.ZM||t.preventDefault()):this.$M&&t.stopPropagation(),this.oI&&(this.oI=!1,this.ad())},i.ad=function(){for(var t=Date.now(),i=-1,n=0;n<this.WM.length;n++)this.ki[n]?(-1==i||this.ki[n]>this.ki[i])&&(i=n):this.XM[n]&&this.XM[n]<t&&this.Cg(n);if(-1!=i){for(var r=0,s=0;s<this.WM.length;s++)!this.ki[s]&&this.Eg[s]&&(r=Math.max(r,this.XM[s]-t));r<2?this.cI(i):this.Ve.schedule(r)}},i.cI=function(t){for(var i=this.WM[t],n=0;n<this.WM.length;n++)n!=t&&this.sI(n);this.ki[t]=0,this.XM[t]=0,this.qM=i,i.acceptStart()},i.Ng=function(t){this.Eg[t]=!0,this.XM[t]=0},i.Cg=function(t){this.Eg[t]=!1,this.XM[t]=0,this.ki[t]||this.WM[t].acceptCancel()},i.sI=function(t){this.ki[t]=0,this.Cg(t)},t}(),wt=function(){function t(t,i){this.lI=t,this.Uy=i}var i=t.prototype;return i.getType=function(){return this.lI},i.signalReady=function(t){this.Uy.Zp(this,t)},i.signalPending=function(t){this.Uy.eI(this,t)},i.signalEnd=function(){this.Uy.uI(this)},i.signalEmit=function(t,i){this.Uy.hI(this,t,i)},i.acceptStart=function(){},i.acceptCancel=function(){},i.onTouchStart=function(t){return!1},i.onTouchMove=function(t){return!1},i.onTouchEnd=function(t){},t}();function gt(t,i,n){i<1&&(i=1);var r=t/i,s=.5+Math.min(i/33.34,.5);return r*s+n*(1-s)}Math.round(-16.67/Math.log(.95));var kt=function(t){r(n,t);var i=a(n);function n(t){return i.call(this,"swipe-x",t,!0,!1)}return n}(function(t){r(n,t);var i=a(n);function n(t,n,r,s){var e;return(e=i.call(this,t,n)).mI=r,e.pI=s,e.qM=!1,e.fI=0,e.dI=0,e.vI=0,e.yI=0,e.gI=0,e.bI=0,e.ca=0,e.xI=0,e.wI=0,e.kI=0,e.AI=0,e}var s=n.prototype;return s.onTouchStart=function(t){var i=t.touches;return!!(this.qM&&i&&i.length>1)||!(!i||1!=i.length)&&(this.ca=Date.now(),this.fI=i[0].clientX,this.dI=i[0].clientY,!0)},s.onTouchMove=function(t){var i=t.touches;if(i&&i.length>=1){var n=i[0],r=n.clientX,s=n.clientY;if(this.vI=r,this.yI=s,this.qM)this.TI(!1,!1,t);else{var e=Math.abs(r-this.fI),o=Math.abs(s-this.dI);if(this.mI&&this.pI)(e>=8||o>=8)&&this.signalReady(-10);else if(this.mI){if(e>=8&&e>o)this.signalReady(-10);else if(o>=8)return!1}else{if(!this.pI)return!1;if(o>=8&&o>e)this.signalReady(-10);else if(e>=8)return!1}}return!0}return!1},s.onTouchEnd=function(t){var i=t.touches;i&&0==i.length&&this.SI(t)},s.acceptStart=function(){this.qM=!0,this.gI=this.fI,this.bI=this.dI,this.wI=this.ca,this.fI=this.vI,this.dI=this.yI,this.TI(!0,!1,null)},s.acceptCancel=function(){this.qM=!1},s.TI=function(t,i,n){this.xI=Date.now();var r=this.xI-this.wI;if(!i&&r>4||i&&r>16){var s=gt(this.vI-this.gI,r,this.kI),e=gt(this.yI-this.bI,r,this.AI);(!i||r>32||0!=s||0!=e)&&(this.kI=Math.abs(s)>1e-4?s:0,this.AI=Math.abs(e)>1e-4?e:0),this.gI=this.vI,this.bI=this.yI,this.wI=this.xI}this.signalEmit({first:t,last:i,time:this.xI,deltaX:this.vI-this.fI,deltaY:this.yI-this.dI,startX:this.fI,startY:this.dI,lastX:this.vI,lastY:this.yI,velocityX:this.kI,velocityY:this.AI},n)},s.SI=function(t){this.qM&&(this.qM=!1,this.TI(!1,!0,t),this.signalEnd())},n}(wt)),xt="backward",Mt="horizontal",At=function(){function t(t,i,n){this.t=t,this.Ix=i,this.M1=n,this.S1=xt,this.D1=Mt,this.X1=null,this._1=null}var i=t.prototype;return i.R1=function(){return this.D1==Mt?this.X1.offsetWidth:this.X1.offsetHeight},i.P1=function(t,i){var n=this.D1==Mt?t:i;return this.S1==xt?-Math.min(n,0):Math.max(n,0)},i.T1=function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=this.S1==xt?-t:t,r=this.D1==Mt?"".concat(n).concat(i):0,s=this.D1==Mt?0:"".concat(n).concat(i);return"translate(".concat(r,", ").concat(s,")")},i.startSwipe=function(t){var i=t.direction,n=t.mask,r=t.orientation,s=t.swipeElement;this.X1=s,this._1=n,this.S1=i,this.D1=r},i.swipeMove=function(t){this.I1(t,!1)},i.endSwipe=function(t){this.I1(t,!0)},i.W1=function(t,i){var n=.75*i;return R(this.X1,{transform:this.T1(t,"px"),transition:"".concat(n,"ms transform ").concat("cubic-bezier(0.15, .55, .3, 0.95)")}),vt(this.t,n)},i.B1=function(t){var i=this,n=.8*t;return this.Ix((function(){R(i.X1,{transform:i.T1(0),transition:"".concat(n,"ms transform ease-in")}),R(i._1,{opacity:"",transition:"".concat(n,"ms opacity ease-in")})})).then((function(){return vt(i.t,n)}))},i.Y1=function(t){var i=this,n=.75*(this.R1()-t);return this.Ix((function(){R(i.X1,{transform:i.T1(100,"%"),transition:"".concat(n,"ms transform ease-out")}),R(i._1,{opacity:0,transition:"".concat(n,"ms opacity ease-out")})})).then((function(){return vt(i.t,n)})).then((function(){return i.M1()}))},i.F1=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";R(this.X1,{transform:t,transition:""}),R(this._1,{opacity:i,transition:""})},i.G1=function(t,i,n,r){var s=this,e=22.5*t+n,o=22.5*i+r,a=this.P1(e,o),h=this.P1(t,i),u=.5*this.R1();return a<u&&h<.65?this.W1(a,h).then((function(){return s.B1(a)})):this.Y1(a)},i.I1=function(t,i){var n=this,r=t.deltaX,s=t.deltaY,e=t.velocityX,o=t.velocityY;this.Ix((function(){if(i)n.G1(e,o,r,s).then((function(){n.F1()}));else{var t=n.P1(r,s),a=t/n.R1(),h=Math.max(0,1-a);n.F1(n.T1(t,"px"),h)}}))},t}(),Ot=function(){function t(t,i){this.Qn=i,this.U1=t,this.tr=i.getAmpDoc(),this.V1=this.U1.getAttribute("toolbar"),this.H1=null,this.q1=void 0,this.J1=!1,this.U1.classList.add("amp-sidebar-toolbar-target-hidden"),this.Z1()}var i=t.prototype;return i.onLayoutChange=function(){this.tr.win.matchMedia(this.V1).matches?this.K1():this.Q1()},i.Z1=function(){this.H1=this.U1.cloneNode(!0);var t,i,n=(t=this.U1.getAttribute("toolbar-target"),'"toolbar-target" is required',i=this.U1,K().assert(t,'"toolbar-target" is required',i,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined)),r=this.tr.getElementById(n);if(!r)throw K().createError("Could not find the toolbar-target element with an id: ".concat(n));this.q1=r,this.H1.classList.add("i-amphtml-toolbar"),P(this.q1,!1)},i.t2=function(){return this.J1},i.K1=function(){var t=this;return this.t2()?Z||(Z=Promise.resolve(void 0)):this.Qn.mutateElement((function(){t.q1&&(P(t.q1,!0),t.q1.contains(t.H1)||t.q1.appendChild(t.H1),t.U1.classList.add("amp-sidebar-toolbar-target-shown"),t.U1.classList.remove("amp-sidebar-toolbar-target-hidden"),t.J1=!0,lt(t.tr,t.H1))}))},i.Q1=function(){var t=this;this.t2()&&this.Qn.mutateElement((function(){t.q1&&(P(t.q1,!1),t.U1.classList.add("amp-sidebar-toolbar-target-hidden"),t.U1.classList.remove("amp-sidebar-toolbar-target-shown"),t.J1=!1)}))},t}();function St(t){var i=t.indexOf("#");return-1==i?t:t.substring(0,i)}new Set(["c","v","a","ad"]);var Et="amp-sidebar toolbar",jt="left",Dt="right",Xt=function(t){r(s,t);var n=a(s);function s(t){var r;(r=n.call(this,t)).So=null,r.Ye=null,r.i2=null,r.j$=null,r.Qf=r.win.document,r.n2=r.Qf.documentElement,r.e2=null,r.s2=[];var s=it(r.win,"platform");return r.SY=s.isIos(),r.fR=s.isSafari(),r.sY=-1,r.o2=!1,r.wY=null,r.vY=null,r.a2=0,r.h2=!1,r.u2=null,r.f2=new At(r.win,(function(t){return r.mutateElement(t)}),(function(){return r.c2(!0,3)})),r.tst=!1,r.ist=!1,r._b=r._b.bind(i(r)),r.l2=null,r}var e=s.prototype;return e.buildCallback=function(){var t,i=this,n=this.element;n.classList.add("i-amphtml-overlay"),n.classList.add("i-amphtml-scrollable"),this.e2=n.getAttribute("side"),this.ist=n.hasAttribute("data-disable-swipe-close"),this.So=this.getViewport(),this.Ye=function(t){return rt(t,"action")}(n),this.element.parentNode!=this.element.ownerDocument.body&&this.element.parentNode!=this.getAmpDoc().getBody()&&this.user().warn(Et,"".concat(Et," is recommended to be a direct child of the <body> element to preserve a logical DOM order.")),this.e2!=jt&&this.e2!=Dt&&(this.e2=this.v2("rtl"==((t=this.Qf).body.getAttribute("dir")||t.documentElement.getAttribute("dir")||"ltr")?Dt:jt),n.setAttribute("side",this.e2)),this.d2(),n.addEventListener("amp:dom-update",(function(){i.d2()})),this.getAmpDoc().whenReady().then((function(){h(n.querySelectorAll("nav[toolbar]")).forEach((function(t){try{i.s2.push(new Ot(t,i))}catch(t){i.user().error(Et,"Failed to instantiate toolbar",t)}})),i._b()})),this.SY&&this.m2(),n.hasAttribute("role")||n.setAttribute("role","menu"),n.tabIndex=-1,this.n2.addEventListener("keydown",(function(t){"Escape"==t.key&&i.EA(3)&&t.preventDefault()})),this.wY=this.GY(),this.wY||(this.wY=this.createScreenReaderCloseButton(),n.insertBefore(this.wY,this.element.firstChild)),n.appendChild(this.createScreenReaderCloseButton()),this.registerDefaultAction((function(t){var n=t.caller,r=t.trust;i.jY(r,n)}),"open"),this.registerAction("close",(function(t){i.EA(t.trust)})),this.registerAction("toggle",(function(t){var n=t.caller,r=t.trust;i.h2?i.EA(r):i.jY(r,n)})),this.Ye.addToAllowlist("amp-sidebar",["open","close","toggle"],["email"]),n.addEventListener("click",(function(t){var r=w(t.target,"A");if(r&&r.href){var s=function(t){return rt(t,"url")}(n).parse(r.href),e=i.getAmpDoc().getUrl();if(St(r.href)!=St(e))return;s.hash&&i.EA(3)}}),!0),this.qX(this.element)},e.attachedCallback=function(){this.l2=this.So.onResize(function(t,i,n){var r=0,s=0,e=null;function o(){r=0;var n,a=100-(t.Date.now()-s);a>0?r=t.setTimeout(o,a):(n=e,e=null,i.apply(null,n))}return function(){s=t.Date.now();for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];e=n,r||(r=t.setTimeout(o,100))}}(this.win,this._b)),this._b()},e.detachedCallback=function(){this.l2&&(this.l2(),this.l2=null)},e.d2=function(){if(!this.u2){var t=this.element.querySelector("amp-nested-menu");t&&((i=this.win,it(i,"extensions")).installExtensionForDoc(this.getAmpDoc(),"amp-nested-menu"),this.u2=t)}var i},e.GY=function(){for(var t=this.element.querySelectorAll("[on]"),i=0;i<t.length;i++){var n=t[i],r=this.Ye.hasResolvableActionForTarget(n,"tap",this.element,tt(n.parentElement)),s=w(n,"[toolbar]");if(r&&!s)return n}return null},e.createScreenReaderCloseButton=function(){var t=this,i=this.element.getAttribute("data-close-button-aria-label")||"Close the sidebar",n=this.Qf.createElement("button");return n.textContent=i,n.classList.add("i-amphtml-screen-reader"),n.tabIndex=-1,n.addEventListener("click",(function(){t.EA(3)})),n},e._b=function(){var t=this;this.getAmpDoc().whenReady().then((function(){t.s2.forEach((function(t){t.onLayoutChange()}))}))},e.b2=function(t,i){var n=this;this.i2=t;var r=function(){n.i2===t&&n.mutateElement(t)};i?ft(this.win).delay(r,i):r()},e.w2=function(t){var i=this;P(this.element,!0),P(this.g2(),!0),this.So.addToFixedLayer(this.element,!0),this.mutateElement((function(){!function(t){p(Y.every((function(i){return i.element!==t}))),p(k(t));var i=function(t){for(var i=[],n=q(t),r=function(t){var r=n[t];if(!r.parentNode)return"continue";h(r.parentNode.children).filter((function(t){return t!=r})).forEach((function(t){return i.push(t)}))},s=0;s<n.length;s++)r(s);return i}(t),n=q(t).filter(m),r=function(t){for(var i=[],n=t;n;){var r=x(n),s=r.querySelectorAll(["a[href]","area[href]","button","details summary","iframe","input","select","textarea","[contenteditable]","[draggable]","[tabindex]"].join(","));Array.prototype.push.apply(i,s),n=r.host}return i}(t),s=r.filter((function(i){return t.contains(i)&&void 0!==i[V]})),e=r.filter((function(i){return!t.contains(i)&&void 0===i[V]})),o=i.concat(n).map((function(t){return{element:t,prevValue:t.getAttribute("aria-hidden")}}));n.forEach((function(t){return t.removeAttribute("aria-hidden")})),i.forEach((function(t){return t.setAttribute("aria-hidden","true")})),e.forEach((function(t){t[V]=t.getAttribute("tabindex"),t.setAttribute("tabindex","-1")})),s.forEach((function(t){p(void 0!==t[V]),F(t,"tabindex",t[V])})),Y.push({element:t,hiddenElementInfos:o,focusableExternalElements:e,focusableInternalElements:s})}(i.element)})),this.SY&&this.fR&&this.O2(),this.element.scrollTop=1,this.element.setAttribute("open",""),this.g2().setAttribute("open",""),this.b2((function(){return i.j2(t)}),350),lt(this.getAmpDoc(),this.element)},e.j2=function(t){var i=g(this.element),n=ut(this.element);n.scheduleLayout(this.element,i),n.scheduleResume(this.element,i),this.M2()||M(tt(this.wY)),this.fD("sidebarOpen",t),this.element.setAttribute("i-amphtml-sidebar-opened",""),this.g2().setAttribute("i-amphtml-sidebar-opened",""),this.setAsContainer()},e.E2=function(t,i){var n=this;this.g2().removeAttribute("open"),this.g2().removeAttribute("i-amphtml-sidebar-opened"),this.mutateElement((function(){!function(t){var i=Y.pop();p(i);var n=i.element,r=i.focusableExternalElements,s=i.focusableInternalElements,e=i.hiddenElementInfos;p(k(t)),p(n===t),e.forEach((function(t){return F(t.element,"aria-hidden",t.prevValue)})),s.forEach((function(t){return t.setAttribute("tabindex","-1")})),r.forEach((function(t){p(void 0!==t[V]),F(t,"tabindex",t[V]),t[V]=void 0}))}(n.element)})),this.element.removeAttribute("open"),this.element.removeAttribute("i-amphtml-sidebar-opened"),this.b2((function(){return n.S2(i)}),t?0:350)},e.S2=function(t){P(this.element,!1),P(this.g2(),!1),ut(this.element).schedulePause(this.element,g(this.element)),this.fD("sidebarClose",t),this.removeAsContainer(),function(t){$(t,!(arguments.length>1&&void 0!==arguments[1])||arguments[1],!0,U)}(this.element,!1)},e.jY=function(t,i){var n=this;this.h2||(this.h2=!0,this.So.enterOverlayMode(),this.b2((function(){return n.w2(t)})),this.aZ().push((function(){n.SY?n.c2(!0,t):n.EA(t)})).then((function(t){n.sY=t})),i&&(this.vY=i,this.a2=this.So.getScrollTop()),function(t,i,n){var r=t.ownerDocument.defaultView;if(r){var s=C.get(t);if(s||(s=[],C.set(t,s),B(r).observe(t)),!s.some((function(t){return t.callback===n&&0===t.type}))){s.push({type:0,callback:n});var e=W.get(t);e&&setTimeout((function(){return N(0,n,e)}))}}}(this.element,0,this._b))},e.EA=function(t){return this.c2(!1,t)},e.c2=function(t,i){var n=this;if(!this.h2)return!1;this.h2=!1,this.So.leaveOverlayMode();var r=this.a2==this.So.getScrollTop(),s=this.element.contains(this.Qf.activeElement);return this.b2((function(){return n.E2(t,i)})),t&&(P(this.element,!1),P(this.g2(),!1)),-1!=this.sY&&(this.aZ().pop(this.sY),this.sY=-1),this.vY&&s&&r&&(this.M2()||M(this.vY)),function(t,i,n){var r=C.get(t);if(r&&(function(t,i){for(var r=[],s=0,e=0;e<t.length;e++){var o=t[e];(a=o).callback===n&&0===a.type?r.push(o):(s<e&&(t[s]=o),s++)}var a;s<t.length&&(t.length=s)}(r),0==r.length)){C.delete(t),W.delete(t);var s=t.ownerDocument.defaultView;s&&B(s).unobserve(t)}}(this.element,0,this._b),!0},e.qX=function(t){var i=this;this.ist||yt.get(t,!0,!0).onGesture(kt,(function(t){var n=t.data,r=t.event;i.A2(n,r)}))},e.A2=function(t,i){var n;if(!t.first)return t.last?(this.tst&&this.f2.endSwipe(t),void(this.tst=!1)):void(i&&i.target&&(n=i.target,"input"!==n.nodeName.toLowerCase()||"range"!==n.getAttribute("type"))&&(this.tst=!0,this.f2.swipeMove(t)));this.f2.startSwipe({swipeElement:this.element,mask:this.j$,direction:this.e2==jt?xt:"forward",orientation:Mt})},e.v2=function(t){return w(this.element,"amp-story")?t==jt?Dt:jt:t},e.g2=function(){var t=this;if(!this.j$){var i=this.Qf.createElement("div");i.classList.add("amp-sidebar-mask","i-amphtml-sidebar-mask"),i.addEventListener("click",(function(){t.EA(3)})),this.getAmpDoc().getBody().appendChild(i),i.addEventListener("touchmove",(function(t){t.preventDefault()})),this.qX(i),this.j$=i}return this.j$},e.m2=function(){var t=this;this.element.addEventListener("scroll",(function(i){t.h2&&(t.element.scrollTop<1?(t.element.scrollTop=1,i.preventDefault()):t.element.scrollHeight==t.element.scrollTop+t.element.offsetHeight&&(t.element.scrollTop=t.element.scrollTop-1,i.preventDefault()))}))},e.O2=function(){if(!this.o2){var t=this.Qf.createElement("div");R(t,{"height":"54px","width":"100%","background-color":"transparent"}),this.element.appendChild(t),this.o2=!0}},e.aZ=function(){return nt(this.getAmpDoc(),"history")},e.fD=function(t,i){var n=function(t,i,n,r){var s={detail:n};if(Object.assign(s,void 0),"function"==typeof t.CustomEvent)return new t.CustomEvent(i,s);var e=t.document.createEvent("CustomEvent");return e.initCustomEvent(i,!!s.bubbles,!!s.cancelable,n),e}(this.win,"".concat(Et,".").concat(t),{});this.Ye.trigger(this.element,t,n,i)},e.M2=function(){return this.SY&&(t=this.element,nt(t,"viewer")).isEmbedded();var t},s}(t.BaseElement);t.registerElement("amp-sidebar",Xt,"amp-sidebar{--story-page-vh:1vh;position:fixed!important;top:0;max-height:100vh!important;height:100vh;max-width:80vw;background-color:#efefef;min-width:45px!important;outline:none;overflow-x:hidden!important;overflow-y:auto!important;z-index:2147483647;-webkit-overflow-scrolling:touch;will-change:transform}amp-sidebar[side=left]{left:0!important;transform:translateX(-100%);animation-name:i-amphtml-sidebar-slide-out-left}amp-sidebar[side=left][open]{animation-name:i-amphtml-sidebar-slide-in-left}amp-sidebar[side=right]{right:0!important;transform:translateX(100%);animation-name:i-amphtml-sidebar-slide-out-right}amp-sidebar[side=right][open]{animation-name:i-amphtml-sidebar-slide-in-right}amp-sidebar[side][i-amphtml-sidebar-opened]{transform:none;animation:none}.i-amphtml-sidebar-mask,amp-sidebar[side]{animation-duration:233ms;animation-timing-function:cubic-bezier(0,0,.21,1);animation-fill-mode:forwards}.i-amphtml-toolbar>ol,.i-amphtml-toolbar>ul{display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-wrap:wrap;flex-wrap:wrap;overflow:auto;list-style-type:none;padding:0;margin:0}.amp-sidebar-mask{background-color:rgba(0,0,0,0.5)}.i-amphtml-sidebar-mask{position:fixed!important;top:0!important;left:0!important;width:100vw!important;height:100vh!important;background-image:none!important;animation-name:i-amphtml-sidebar-mask-fade-out;z-index:2147483646}.i-amphtml-sidebar-mask[open]{animation-name:i-amphtml-sidebar-mask-fade-in}.i-amphtml-sidebar-mask[i-amphtml-sidebar-opened]{animation:none}@keyframes i-amphtml-sidebar-slide-in-left{0%{transform:translateX(-100%)}to{transform:translateX(0)}}@keyframes i-amphtml-sidebar-slide-out-left{0%{transform:translateX(0)}to{transform:translateX(-100%)}}@keyframes i-amphtml-sidebar-slide-in-right{0%{transform:translateX(100%)}to{transform:translateX(0)}}@keyframes i-amphtml-sidebar-slide-out-right{0%{transform:translateX(0)}to{transform:translateX(100%)}}@keyframes i-amphtml-sidebar-mask-fade-in{0%{opacity:0}to{opacity:1}}@keyframes i-amphtml-sidebar-mask-fade-out{0%{opacity:1}to{opacity:0}}\n/*# sourceURL=/extensions/amp-sidebar/0.1/amp-sidebar.css*/")}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-sidebar-0.1.js.map