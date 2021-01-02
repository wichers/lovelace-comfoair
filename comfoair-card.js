/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function e(e,t,i,n){var s,o=arguments.length,r=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(o<3?s(r):o>3?s(t,i,r):s(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */}const t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(e,t,i=null)=>{for(;t!==i;){const i=t.nextSibling;e.removeChild(t),t=i}},n=`{{lit-${String(Math.random()).slice(2)}}}`,s=`\x3c!--${n}--\x3e`,o=new RegExp(`${n}|${s}`);class r{constructor(e,t){this.parts=[],this.element=t;const i=[],s=[],r=document.createTreeWalker(t.content,133,null,!1);let l=0,h=-1,u=0;const{strings:p,values:{length:m}}=e;for(;u<m;){const e=r.nextNode();if(null!==e){if(h++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:i}=t;let n=0;for(let e=0;e<i;e++)a(t[e].name,"$lit$")&&n++;for(;n-- >0;){const t=p[u],i=d.exec(t)[2],n=i.toLowerCase()+"$lit$",s=e.getAttribute(n);e.removeAttribute(n);const r=s.split(o);this.parts.push({type:"attribute",index:h,name:i,strings:r}),u+=r.length-1}}"TEMPLATE"===e.tagName&&(s.push(e),r.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(n)>=0){const n=e.parentNode,s=t.split(o),r=s.length-1;for(let t=0;t<r;t++){let i,o=s[t];if(""===o)i=c();else{const e=d.exec(o);null!==e&&a(e[2],"$lit$")&&(o=o.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),i=document.createTextNode(o)}n.insertBefore(i,e),this.parts.push({type:"node",index:++h})}""===s[r]?(n.insertBefore(c(),e),i.push(e)):e.data=s[r],u+=r}}else if(8===e.nodeType)if(e.data===n){const t=e.parentNode;null!==e.previousSibling&&h!==l||(h++,t.insertBefore(c(),e)),l=h,this.parts.push({type:"node",index:h}),null===e.nextSibling?e.data="":(i.push(e),h--),u++}else{let t=-1;for(;-1!==(t=e.data.indexOf(n,t+1));)this.parts.push({type:"node",index:-1}),u++}}else r.currentNode=s.pop()}for(const e of i)e.parentNode.removeChild(e)}}const a=(e,t)=>{const i=e.length-t.length;return i>=0&&e.slice(i)===t},l=e=>-1!==e.index,c=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function h(e,t){const{element:{content:i},parts:n}=e,s=document.createTreeWalker(i,133,null,!1);let o=p(n),r=n[o],a=-1,l=0;const c=[];let d=null;for(;s.nextNode();){a++;const e=s.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(c.push(e),null===d&&(d=e)),null!==d&&l++;void 0!==r&&r.index===a;)r.index=null!==d?-1:r.index-l,o=p(n,o),r=n[o]}c.forEach(e=>e.parentNode.removeChild(e))}const u=e=>{let t=11===e.nodeType?0:1;const i=document.createTreeWalker(e,133,null,!1);for(;i.nextNode();)t++;return t},p=(e,t=-1)=>{for(let i=t+1;i<e.length;i++){const t=e[i];if(l(t))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const m=new WeakMap,f=e=>"function"==typeof e&&m.has(e),g={},_={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class v{constructor(e,t,i){this.__parts=[],this.template=e,this.processor=t,this.options=i}update(e){let t=0;for(const i of this.__parts)void 0!==i&&i.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),i=[],n=this.template.parts,s=document.createTreeWalker(e,133,null,!1);let o,r=0,a=0,c=s.nextNode();for(;r<n.length;)if(o=n[r],l(o)){for(;a<o.index;)a++,"TEMPLATE"===c.nodeName&&(i.push(c),s.currentNode=c.content),null===(c=s.nextNode())&&(s.currentNode=i.pop(),c=s.nextNode());if("node"===o.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(c.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,o.name,o.strings,this.options));r++}else this.__parts.push(void 0),r++;return t&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const y=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),w=` ${n} `;class b{constructor(e,t,i,n){this.strings=e,this.values=t,this.type=i,this.processor=n}getHTML(){const e=this.strings.length-1;let t="",i=!1;for(let o=0;o<e;o++){const e=this.strings[o],r=e.lastIndexOf("\x3c!--");i=(r>-1||i)&&-1===e.indexOf("--\x3e",r+1);const a=d.exec(e);t+=null===a?e+(i?w:s):e.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+n}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==y&&(t=y.createHTML(t)),e.innerHTML=t,e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const S=e=>null===e||!("object"==typeof e||"function"==typeof e),x=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class C{constructor(e,t,i){this.dirty=!0,this.element=e,this.name=t,this.strings=i,this.parts=[];for(let e=0;e<i.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new T(this)}_getValue(){const e=this.strings,t=e.length-1,i=this.parts;if(1===t&&""===e[0]&&""===e[1]){const e=i[0].value;if("symbol"==typeof e)return String(e);if("string"==typeof e||!x(e))return e}let n="";for(let s=0;s<t;s++){n+=e[s];const t=i[s];if(void 0!==t){const e=t.value;if(S(e)||!x(e))n+="string"==typeof e?e:String(e);else for(const t of e)n+="string"==typeof t?t:String(t)}}return n+=e[t],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class T{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===g||S(e)&&e===this.value||(this.value=e,f(e)||(this.committer.dirty=!0))}commit(){for(;f(this.value);){const e=this.value;this.value=g,e(this)}this.value!==g&&this.committer.commit()}}class P{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(c()),this.endNode=e.appendChild(c())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=c()),e.__insert(this.endNode=c())}insertAfterPart(e){e.__insert(this.startNode=c()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;f(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=g,e(this)}const e=this.__pendingValue;e!==g&&(S(e)?e!==this.value&&this.__commitText(e):e instanceof b?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):x(e)?this.__commitIterable(e):e===_?(this.value=_,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,i="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=i:this.__commitNode(document.createTextNode(i)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof v&&this.value.template===t)this.value.update(e.values);else{const i=new v(t,e.processor,this.options),n=i._clone();i.update(e.values),this.__commitNode(n),this.value=i}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let i,n=0;for(const s of e)i=t[n],void 0===i&&(i=new P(this.options),t.push(i),0===n?i.appendIntoPart(this):i.insertAfterPart(t[n-1])),i.setValue(s),i.commit(),n++;n<t.length&&(t.length=n,this.clear(i&&i.endNode))}clear(e=this.startNode){i(this.startNode.parentNode,e.nextSibling,this.endNode)}}class ${constructor(e,t,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=i}setValue(e){this.__pendingValue=e}commit(){for(;f(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=g,e(this)}if(this.__pendingValue===g)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=g}}class D extends C{constructor(e,t,i){super(e,t,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new M(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class M extends T{}let N=!1;(()=>{try{const e={get capture(){return N=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class A{constructor(e,t,i){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=i,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;f(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=g,e(this)}if(this.__pendingValue===g)return;const e=this.__pendingValue,t=this.value,i=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),n=null!=e&&(null==t||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=E(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=g}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const E=e=>e&&(N?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function k(e){let t=V.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},V.set(e.type,t));let i=t.stringsArray.get(e.strings);if(void 0!==i)return i;const s=e.strings.join(n);return i=t.keyString.get(s),void 0===i&&(i=new r(e,e.getTemplateElement()),t.keyString.set(s,i)),t.stringsArray.set(e.strings,i),i}const V=new Map,O=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const H=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(e,t,i,n){const s=t[0];if("."===s){return new D(e,t.slice(1),i).parts}if("@"===s)return[new A(e,t.slice(1),n.eventContext)];if("?"===s)return[new $(e,t.slice(1),i)];return new C(e,t,i).parts}handleTextExpression(e){return new P(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const q=(e,...t)=>new b(e,t,"html",H)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,j=(e,t)=>`${e}--${t}`;let Y=!0;void 0===window.ShadyCSS?Y=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),Y=!1);const R=e=>t=>{const i=j(t.type,e);let s=V.get(i);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},V.set(i,s));let o=s.stringsArray.get(t.strings);if(void 0!==o)return o;const a=t.strings.join(n);if(o=s.keyString.get(a),void 0===o){const i=t.getTemplateElement();Y&&window.ShadyCSS.prepareTemplateDom(i,e),o=new r(t,i),s.keyString.set(a,o)}return s.stringsArray.set(t.strings,o),o},U=["html","svg"],F=new Set,L=(e,t,i)=>{F.add(e);const n=i?i.element:document.createElement("template"),s=t.querySelectorAll("style"),{length:o}=s;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(n,e);const r=document.createElement("style");for(let e=0;e<o;e++){const t=s[e];t.parentNode.removeChild(t),r.textContent+=t.textContent}(e=>{U.forEach(t=>{const i=V.get(j(t,e));void 0!==i&&i.keyString.forEach(e=>{const{element:{content:t}}=e,i=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{i.add(e)}),h(e,i)})})})(e);const a=n.content;i?function(e,t,i=null){const{element:{content:n},parts:s}=e;if(null==i)return void n.appendChild(t);const o=document.createTreeWalker(n,133,null,!1);let r=p(s),a=0,l=-1;for(;o.nextNode();){l++;for(o.currentNode===i&&(a=u(t),i.parentNode.insertBefore(t,i));-1!==r&&s[r].index===l;){if(a>0){for(;-1!==r;)s[r].index+=a,r=p(s,r);return}r=p(s,r)}}}(i,r,a.firstChild):a.insertBefore(r,a.firstChild),window.ShadyCSS.prepareTemplateStyles(n,e);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(i){a.insertBefore(r,a.firstChild);const e=new Set;e.add(r),h(i,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const z={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},I=(e,t)=>t!==e&&(t==t||e==e),B={attribute:!0,type:String,converter:z,reflect:!1,hasChanged:I};class W extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,i)=>{const n=this._attributeNameForProperty(i,t);void 0!==n&&(this._attributeToPropertyMap.set(n,i),e.push(n))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=B){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const i="symbol"==typeof e?Symbol():"__"+e,n=this.getPropertyDescriptor(e,i,t);void 0!==n&&Object.defineProperty(this.prototype,e,n)}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(n){const s=this[e];this[t]=n,this.requestUpdateInternal(e,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||B}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const i of t)this.createProperty(i,e[i])}}static _attributeNameForProperty(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,i=I){return i(e,t)}static _propertyValueFromAttribute(e,t){const i=t.type,n=t.converter||z,s="function"==typeof n?n:n.fromAttribute;return s?s(e,i):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const i=t.type,n=t.converter;return(n&&n.toAttribute||z.toAttribute)(e,i)}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,i){t!==i&&this._attributeToProperty(e,i)}_propertyToAttribute(e,t,i=B){const n=this.constructor,s=n._attributeNameForProperty(e,i);if(void 0!==s){const e=n._propertyValueToAttribute(t,i);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(s):this.setAttribute(s,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const i=this.constructor,n=i._attributeToPropertyMap.get(e);if(void 0!==n){const e=i.getPropertyOptions(n);this._updateState=16|this._updateState,this[n]=i._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,i){let n=!0;if(void 0!==e){const s=this.constructor;i=i||s.getPropertyOptions(e),s._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):n=!1}!this._hasRequestedUpdate&&n&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}W.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const J=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:i,elements:n}=t;return{kind:i,elements:n,finisher(t){window.customElements.define(e,t)}}})(e,t),Z=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(i){i.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};function Q(e){return(t,i)=>void 0!==i?((e,t,i)=>{t.constructor.createProperty(i,e)})(e,t,i):Z(e,t)}function X(e){return Q({attribute:!1,hasChanged:null==e?void 0:e.hasChanged})}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const G=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,K=Symbol();class ee{constructor(e,t){if(t!==K)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(G?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const te=(e,...t)=>{const i=t.reduce((t,i,n)=>t+(e=>{if(e instanceof ee)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+e[n+1],e[0]);return new ee(i,K)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const ie={};class ne extends W{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,i)=>e.reduceRight((e,i)=>Array.isArray(i)?t(i,e):(e.add(i),e),i),i=t(e,new Set),n=[];i.forEach(e=>n.unshift(e)),this._styles=n}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map(e=>{if(e instanceof CSSStyleSheet&&!G){const t=Array.prototype.slice.call(e.cssRules).reduce((e,t)=>e+t.cssText,"");return new ee(String(t),K)}return e})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?G?this.renderRoot.adoptedStyleSheets=e.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==ie&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return ie}}ne.finalized=!0,ne.render=(e,t,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const s=n.scopeName,o=O.has(t),r=Y&&11===t.nodeType&&!!t.host,a=r&&!F.has(s),l=a?document.createDocumentFragment():t;if(((e,t,n)=>{let s=O.get(t);void 0===s&&(i(t,t.firstChild),O.set(t,s=new P(Object.assign({templateFactory:k},n))),s.appendInto(t)),s.setValue(e),s.commit()})(e,l,Object.assign({templateFactory:R(s)},n)),a){const e=O.get(l);O.delete(l);const n=e.value instanceof v?e.value.template:void 0;L(s,l,n),i(t,t.firstChild),t.appendChild(l),O.set(t,e)}!o&&r&&window.ShadyCSS.styleElement(t.host)};var se=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,oe="[^\\s]+",re=/\[([^]*?)\]/gm;function ae(e,t){for(var i=[],n=0,s=e.length;n<s;n++)i.push(e[n].substr(0,t));return i}var le=function(e){return function(t,i){var n=i[e].map((function(e){return e.toLowerCase()})).indexOf(t.toLowerCase());return n>-1?n:null}};function ce(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];for(var n=0,s=t;n<s.length;n++){var o=s[n];for(var r in o)e[r]=o[r]}return e}var de=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],he=["January","February","March","April","May","June","July","August","September","October","November","December"],ue=ae(he,3),pe={dayNamesShort:ae(de,3),dayNames:de,monthNamesShort:ue,monthNames:he,amPm:["am","pm"],DoFn:function(e){return e+["th","st","nd","rd"][e%10>3?0:(e-e%10!=10?1:0)*e%10]}},me=ce({},pe),fe=function(e,t){for(void 0===t&&(t=2),e=String(e);e.length<t;)e="0"+e;return e},ge={D:function(e){return String(e.getDate())},DD:function(e){return fe(e.getDate())},Do:function(e,t){return t.DoFn(e.getDate())},d:function(e){return String(e.getDay())},dd:function(e){return fe(e.getDay())},ddd:function(e,t){return t.dayNamesShort[e.getDay()]},dddd:function(e,t){return t.dayNames[e.getDay()]},M:function(e){return String(e.getMonth()+1)},MM:function(e){return fe(e.getMonth()+1)},MMM:function(e,t){return t.monthNamesShort[e.getMonth()]},MMMM:function(e,t){return t.monthNames[e.getMonth()]},YY:function(e){return fe(String(e.getFullYear()),4).substr(2)},YYYY:function(e){return fe(e.getFullYear(),4)},h:function(e){return String(e.getHours()%12||12)},hh:function(e){return fe(e.getHours()%12||12)},H:function(e){return String(e.getHours())},HH:function(e){return fe(e.getHours())},m:function(e){return String(e.getMinutes())},mm:function(e){return fe(e.getMinutes())},s:function(e){return String(e.getSeconds())},ss:function(e){return fe(e.getSeconds())},S:function(e){return String(Math.round(e.getMilliseconds()/100))},SS:function(e){return fe(Math.round(e.getMilliseconds()/10),2)},SSS:function(e){return fe(e.getMilliseconds(),3)},a:function(e,t){return e.getHours()<12?t.amPm[0]:t.amPm[1]},A:function(e,t){return e.getHours()<12?t.amPm[0].toUpperCase():t.amPm[1].toUpperCase()},ZZ:function(e){var t=e.getTimezoneOffset();return(t>0?"-":"+")+fe(100*Math.floor(Math.abs(t)/60)+Math.abs(t)%60,4)},Z:function(e){var t=e.getTimezoneOffset();return(t>0?"-":"+")+fe(Math.floor(Math.abs(t)/60),2)+":"+fe(Math.abs(t)%60,2)}},_e=function(e){return+e-1},ve=[null,"[1-9]\\d?"],ye=[null,oe],we=["isPm",oe,function(e,t){var i=e.toLowerCase();return i===t.amPm[0]?0:i===t.amPm[1]?1:null}],be=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(e){var t=(e+"").match(/([+-]|\d\d)/gi);if(t){var i=60*+t[1]+parseInt(t[2],10);return"+"===t[0]?i:-i}return 0}],Se=(le("monthNamesShort"),le("monthNames"),{default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",isoDate:"YYYY-MM-DD",isoDateTime:"YYYY-MM-DDTHH:mm:ssZ",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"});var xe=function(e,t,i){if(void 0===t&&(t=Se.default),void 0===i&&(i={}),"number"==typeof e&&(e=new Date(e)),"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))throw new Error("Invalid Date pass to format");var n=[];t=(t=Se[t]||t).replace(re,(function(e,t){return n.push(t),"@@@"}));var s=ce(ce({},me),i);return(t=t.replace(se,(function(t){return ge[t](e,s)}))).replace(/@@@/g,(function(){return n.shift()}))},Ce=(function(){try{(new Date).toLocaleDateString("i")}catch(e){return"RangeError"===e.name}}(),function(){try{(new Date).toLocaleString("i")}catch(e){return"RangeError"===e.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(e){return"RangeError"===e.name}}(),function(e,t,i,n){n=n||{},i=null==i?{}:i;var s=new Event(t,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return s.detail=i,e.dispatchEvent(s),s});function Te(e){return void 0!==e&&"none"!==e.action}const Pe={required:{icon:"tune",name:"CA350/550 MQTT Device",secondary:"Select your Comfoair Device (climate, sensors)",show:!0},actions:{icon:"gesture-tap-hold",name:"Actions",secondary:"Perform actions based on tapping/clicking",show:!1,options:{tap:{icon:"gesture-tap",name:"Tap",secondary:"Set the action to perform on tap",show:!1},hold:{icon:"gesture-tap-hold",name:"Hold",secondary:"Set the action to perform on hold",show:!1},double_tap:{icon:"gesture-double-tap",name:"Double Tap",secondary:"Set the action to perform on double tap",show:!1}}},appearance:{icon:"palette",name:"Appearance",secondary:"Customize the name, icon, etc",show:!1}};let $e=class extends ne{constructor(){super(...arguments),this._initialized=!1}setConfig(e){this._config=e,this.loadCardHelpers()}shouldUpdate(){return this._initialized||this._initialize(),!0}get _name(){var e;return(null===(e=this._config)||void 0===e?void 0:e.name)||""}get _entity(){var e;return(null===(e=this._config)||void 0===e?void 0:e.entity)||""}get _tempSensor1(){var e;return(null===(e=this._config)||void 0===e?void 0:e.tempSensor1)||""}get _tempSensor2(){var e;return(null===(e=this._config)||void 0===e?void 0:e.tempSensor2)||""}get _tempSensor3(){var e;return(null===(e=this._config)||void 0===e?void 0:e.tempSensor3)||""}get _tempSensor4(){var e;return(null===(e=this._config)||void 0===e?void 0:e.tempSensor4)||""}get _filterstatus(){var e;return(null===(e=this._config)||void 0===e?void 0:e.filterstatus)||""}get _bypass_valve(){var e;return(null===(e=this._config)||void 0===e?void 0:e.bypass_valve)||""}get _summer_mode(){var e;return(null===(e=this._config)||void 0===e?void 0:e.summer_mode)||""}get _fan_speed_supply(){var e;return(null===(e=this._config)||void 0===e?void 0:e.fan_speed_supply)||""}get _fan_speed_exhaust(){var e;return(null===(e=this._config)||void 0===e?void 0:e.fan_speed_exhaust)||""}get _return_air_level(){var e;return(null===(e=this._config)||void 0===e?void 0:e.return_air_level)||""}get _supply_air_level(){var e;return(null===(e=this._config)||void 0===e?void 0:e.supply_air_level)||""}get _show_warning(){var e;return(null===(e=this._config)||void 0===e?void 0:e.show_warning)||!1}get _show_error(){var e;return(null===(e=this._config)||void 0===e?void 0:e.show_error)||!1}get _tap_action(){var e;return(null===(e=this._config)||void 0===e?void 0:e.tap_action)||{action:"more-info"}}get _hold_action(){var e;return(null===(e=this._config)||void 0===e?void 0:e.hold_action)||{action:"none"}}get _double_tap_action(){var e;return(null===(e=this._config)||void 0===e?void 0:e.double_tap_action)||{action:"none"}}render(){if(!this.hass||!this._helpers)return q``;this._helpers.importMoreInfoControl("climate");const e=Object.keys(this.hass.states).filter(e=>"climate"===e.substr(0,e.indexOf("."))),t=Object.keys(this.hass.states).filter(e=>"sensor"===e.substr(0,e.indexOf("."))),i=Object.keys(this.hass.states).filter(e=>"binary_sensor"===e.substr(0,e.indexOf(".")));return q`
      <div class="card-config">
        <div class="option" @click=${this._toggleOption} .option=${"required"}>
          <div class="row">
            <ha-icon .icon=${"mdi:"+Pe.required.icon}></ha-icon>
            <div class="title">${Pe.required.name}</div>
          </div>
          <div class="secondary">${Pe.required.secondary}</div>
        </div>
        ${Pe.required.show?q`
              <div class="values">
                <paper-dropdown-menu
                  label="Select CA350/550 MQTT Climate Entity"
                  @value-changed=${this._valueChanged}
                  .configValue=${"entity"}
                >
                  <paper-listbox slot="dropdown-content" .selected=${this._getSelectedValue(t,this._entity)}>
                    ${this._getDefaultPropertyClimate(e)}
                  </paper-listbox>
                </paper-dropdown-menu>
              </div>
            `:""}
        ${Pe.required.show?q`
              <div class="values">
                <paper-dropdown-menu
                  label="Comfoair Outside Temperature [Temperature Sensor]"
                  @value-changed=${this._valueChanged}
                  .configValue=${"tempSensor1"}
                >
                  <paper-listbox slot="dropdown-content" .selected=${this._getSelectedValue(t,this._tempSensor1)}>
                    ${this._getDefaultPropertyTemperature(t,"sensor.ca350_outsidetemp")}
                  </paper-listbox>
                </paper-dropdown-menu>
              </div>
            `:""}
        ${Pe.required.show?q`
              <div class="values">
                <paper-dropdown-menu
                  label="Comfoair Exhaust Temperature [Temperature Sensor]"
                  @value-changed=${this._valueChanged}
                  .configValue=${"tempSensor2"}
                >
                  <paper-listbox slot="dropdown-content" .selected=${this._getSelectedValue(t,this._tempSensor2)}>
                    ${this._getDefaultPropertyTemperature(t,"sensor.ca350_exhausttemp")}
                  </paper-listbox>
                </paper-dropdown-menu>
              </div>
            `:""}
        ${Pe.required.show?q`
              <div class="values">
                <paper-dropdown-menu
                  label="Comfoair Return Temperature [Temperature Sensor]"
                  @value-changed=${this._valueChanged}
                  .configValue=${"tempSensor3"}
                >
                  <paper-listbox slot="dropdown-content" .selected=${this._getSelectedValue(t,this._tempSensor3)}>
                    ${this._getDefaultPropertyTemperature(t,"sensor.ca350_returntemp")}
                  </paper-listbox>
                </paper-dropdown-menu>
              </div>
            `:""}
        ${Pe.required.show?q`
              <div class="values">
                <paper-dropdown-menu
                  label="Comfoair Supply Temperature [Temperature Sensor]"
                  @value-changed=${this._valueChanged}
                  .configValue=${"tempSensor4"}
                >
                  <paper-listbox slot="dropdown-content" .selected=${this._getSelectedValue(t,this._tempSensor4)}>
                    ${this._getDefaultPropertyTemperature(t,"sensor.ca350_supplytemp")}
                  </paper-listbox>
                </paper-dropdown-menu>
              </div>
            `:""}
        ${Pe.required.show?q`
              <div class="values">
                <paper-dropdown-menu
                  label="Comfoair Filterstatus [Binary Sensor]"
                  @value-changed=${this._valueChanged}
                  .configValue=${"filterstatus"}
                >
                  <paper-listbox slot="dropdown-content" .selected=${this._getSelectedValue(i,this._filterstatus)}>
                    ${this._getDefaultPropertyTemperature(i,"binary_sensor.ca350_filterstatus")}
                  </paper-listbox>
                </paper-dropdown-menu>
              </div>
            `:""}
        ${Pe.required.show?q`
              <div class="values">
                <paper-dropdown-menu
                  label="Comfoair Bypass Valve [Binary Sensor]"
                  @value-changed=${this._valueChanged}
                  .configValue=${"bypass_valve"}
                >
                  <paper-listbox slot="dropdown-content" .selected=${this._getSelectedValue(i,this._bypass_valve)}>
                    ${this._getDefaultPropertyTemperature(i,"binary_sensor.ca350_bypass_valve")}
                  </paper-listbox>
                </paper-dropdown-menu>
              </div>
            `:""}
        ${Pe.required.show?q`
              <div class="values">
                <paper-dropdown-menu
                  label="Comfoair Summer Mode [Binary Sensor]"
                  @value-changed=${this._valueChanged}
                  .configValue=${"summer_mode"}
                >
                  <paper-listbox slot="dropdown-content" .selected=${this._getSelectedValue(i,this._summer_mode)}>
                    ${this._getDefaultPropertyTemperature(i,"binary_sensor.ca350_summer_mode")}
                  </paper-listbox>
                </paper-dropdown-menu>
              </div>
            `:""}
        ${Pe.required.show?q`
              <div class="values">
                <paper-dropdown-menu
                  label="Comfoair Fan Speed Supply [Sensor]"
                  @value-changed=${this._valueChanged}
                  .configValue=${"fan_speed_supply"}
                >
                  <paper-listbox slot="dropdown-content" .selected=${this._getSelectedValue(t,this._fan_speed_supply)}>
                    ${this._getDefaultPropertyTemperature(t,"sensor.ca350_fan_speed_supply")}
                  </paper-listbox>
                </paper-dropdown-menu>
              </div>
            `:""}
        ${Pe.required.show?q`
              <div class="values">
                <paper-dropdown-menu
                  label="Comfoair Fan Speed Exhaust [Sensor]"
                  @value-changed=${this._valueChanged}
                  .configValue=${"fan_speed_exhaust"}
                >
                  <paper-listbox slot="dropdown-content" .selected=${this._getSelectedValue(t,this._fan_speed_exhaust)}>
                    ${this._getDefaultPropertyTemperature(t,"sensor.ca350_fan_speed_exhaust")}
                  </paper-listbox>
                </paper-dropdown-menu>
              </div>
            `:""}
        ${Pe.required.show?q`
              <div class="values">
                <paper-dropdown-menu
                  label="Comfoair Return Air Level [Sensor]"
                  @value-changed=${this._valueChanged}
                  .configValue=${"return_air_level"}
                >
                  <paper-listbox slot="dropdown-content" .selected=${this._getSelectedValue(t,this._return_air_level)}>
                    ${this._getDefaultPropertyTemperature(t,"sensor.ca350_return_air_level")}
                  </paper-listbox>
                </paper-dropdown-menu>
              </div>
            `:""}
        ${Pe.required.show?q`
              <div class="values">
                <paper-dropdown-menu
                  label="Comfoair Supply Air Level [Sensor]"
                  @value-changed=${this._valueChanged}
                  .configValue=${"supply_air_level"}
                >
                  <paper-listbox slot="dropdown-content" .selected=${this._getSelectedValue(t,this._supply_air_level)}>
                    ${this._getDefaultPropertyTemperature(t,"sensor.ca350_supply_air_level")}
                  </paper-listbox>
                </paper-dropdown-menu>
              </div>
            `:""}
      </div>
    `}_getDefaultPropertyClimate(e){if(Array.isArray(e)&&e.indexOf("climate.ca350_climate"))return q`
        <paper-item>climate.ca350_climate</paper-item>
      `;{let t="";return e.map(e=>{t+="<paper-item>"+e+"</paper-item>"}),q`${t}`}}_getSelectedValue(e,t){return Array.isArray(e)&&e.indexOf(t)?0:e.indexOf(t)}_getDefaultPropertyTemperature(e,t){if(!this.hass||!this._helpers)return q``;if(Array.isArray(e)&&e.indexOf(t))return q`
        <paper-item>${t}</paper-item>
      `;{let t="";return e.map(e=>{t+="<paper-item>"+e+"</paper-item>"}),q`${t}`}}_initialize(){void 0!==this.hass&&void 0!==this.hass.states&&void 0!==this._config&&void 0!==this._helpers&&(this._initialized=!0)}async loadCardHelpers(){this._helpers=await window.loadCardHelpers()}_toggleAction(e){this._toggleThing(e,Pe.actions.options)}_toggleOption(e){this._toggleThing(e,Pe)}_toggleThing(e,t){const i=!t[e.target.option].show;for(const[e]of Object.entries(t))t[e].show=!1;t[e.target.option].show=i,this._toggle=!this._toggle}_valueChanged(e){if(!this._config||!this.hass)return;const t=e.target;this["_"+t.configValue]!==t.value&&(t.configValue&&(""===t.value?delete this._config[t.configValue]:this._config=Object.assign(Object.assign({},this._config),{[t.configValue]:void 0!==t.checked?t.checked:t.value})),Ce(this,"config-changed",{config:this._config}))}static get styles(){return te`
      .option {
        padding: 4px 0px;
        cursor: pointer;
      }
      .row {
        display: flex;
        margin-bottom: -14px;
        pointer-events: none;
      }
      .title {
        padding-left: 16px;
        margin-top: -6px;
        pointer-events: none;
      }
      .secondary {
        padding-left: 40px;
        color: var(--secondary-text-color);
        pointer-events: none;
      }
      .values {
        padding-left: 16px;
        background: var(--secondary-background-color);
        display: grid;
      }
      ha-formfield {
        padding-bottom: 8px;
      }
    `}};e([Q({attribute:!1})],$e.prototype,"hass",void 0),e([X()],$e.prototype,"_config",void 0),e([X()],$e.prototype,"_toggle",void 0),e([X()],$e.prototype,"_helpers",void 0),$e=e([J("mqttcomfoair-card-editor")],$e);const De="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;class Me extends HTMLElement{constructor(){super(),this.holdTime=500,this.held=!1,this.ripple=document.createElement("mwc-ripple")}connectedCallback(){Object.assign(this.style,{position:"absolute",width:De?"100px":"50px",height:De?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:"999"}),this.appendChild(this.ripple),this.ripple.primary=!0,["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach(e=>{document.addEventListener(e,()=>{clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0},{passive:!0})})}bind(e,t){if(e.actionHandler)return;e.actionHandler=!0,e.addEventListener("contextmenu",e=>{const t=e||window.event;return t.preventDefault&&t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.cancelBubble=!0,t.returnValue=!1,!1});const i=e=>{let t,i;this.held=!1,e.touches?(t=e.touches[0].pageX,i=e.touches[0].pageY):(t=e.pageX,i=e.pageY),this.timer=window.setTimeout(()=>{this.startAnimation(t,i),this.held=!0},this.holdTime)},n=i=>{if(i.preventDefault(),["touchend","touchcancel"].includes(i.type)&&void 0===this.timer)return;clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0;let n="unknown";if(void 0!==e.id&&e.id.match(/ca350_fan.*/))switch(e.id){case"ca350_fanoff":n="off";break;case"ca350_fan1":n="low";break;case"ca350_fan2":n="medium";break;case"ca350_fan3":n="high"}this.held?Ce(e,"action",{action:n}):t.hasDoubleClick?"click"===i.type&&i.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout(()=>{this.dblClickTimeout=void 0,Ce(e,"action",{action:n})},250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,console.log(e.id),Ce(e,"action",{action:n})):(console.log(e.id),Ce(e,"action",{action:n}))};e.addEventListener("touchstart",i,{passive:!0}),e.addEventListener("touchend",n),e.addEventListener("touchcancel",n),e.addEventListener("mousedown",i,{passive:!0}),e.addEventListener("click",n),e.addEventListener("keyup",e=>{13===e.keyCode&&n(e)})}startAnimation(e,t){Object.assign(this.style,{left:e+"px",top:t+"px",display:null}),this.ripple.disabled=!1,this.ripple.active=!0,this.ripple.unbounded=!0}stopAnimation(){this.ripple.active=!1,this.ripple.disabled=!0,this.style.display="none"}}customElements.define("action-handler-mqttcomfoair",Me);const Ne=(e,t)=>{const i=(()=>{const e=document.body;if(e.querySelector("action-handler-mqttcomfoair"))return e.querySelector("action-handler-mqttcomfoair");const t=document.createElement("action-handler-mqttcomfoair");return e.appendChild(t),t})();i&&i.bind(e,t)},Ae=(Ee=(e={})=>t=>{Ne(t.committer.element,e)},(...e)=>{const t=Ee(...e);return m.set(t,!0),t});var Ee;var ke={version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning",show_error:"Show Error"},Ve={common:ke},Oe={version:"Versjon",invalid_configuration:"Ikke gyldig konfiguration",show_warning:"Vis advarsel"},He={common:Oe};const qe={en:Object.freeze({__proto__:null,common:ke,default:Ve}),nb:Object.freeze({__proto__:null,common:Oe,default:He})};function je(e,t="",i=""){const n=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let s;try{s=e.split(".").reduce((e,t)=>e[t],qe[n])}catch(t){s=e.split(".").reduce((e,t)=>e[t],qe.en)}return void 0===s&&(s=e.split(".").reduce((e,t)=>e[t],qe.en)),""!==t&&""!==i&&(s=s.replace(t,i)),s}console.info(`%c  MQTT-Comfoair-CARD \n%c  ${je("common.version")} 0.15    `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:"mqttcomfoair-card",name:"MQTT Comfoair Card",preview:!1,description:"Control a MQTT Comfoair 350/550 Device"});let Ye=class extends ne{static async getConfigElement(){return document.createElement("mqttcomfoair-card-editor")}static getStubConfig(){return{}}setConfig(e){if(!e)throw new Error(je("common.invalid_configuration"));e.test_gui&&function(){var e=document.querySelector("home-assistant");if(e=(e=(e=(e=(e=(e=(e=(e=e&&e.shadowRoot)&&e.querySelector("home-assistant-main"))&&e.shadowRoot)&&e.querySelector("app-drawer-layout partial-panel-resolver"))&&e.shadowRoot||e)&&e.querySelector("ha-panel-lovelace"))&&e.shadowRoot)&&e.querySelector("hui-root")){var t=e.lovelace;return t.current_view=e.___curView,t}return null}().setEditMode(!0),console.log(e),this.config=Object.assign({name:"MQTT Comfoair Card"},e)}shouldUpdate(e){return!!this.config&&function(e,t,i){if(t.has("config")||i)return!0;if(e.config.entity){var n=t.get("hass");return!n||n.states[e.config.entity]!==e.hass.states[e.config.entity]}return!1}(this,e,!1)}render(){if(this.config.show_warning)return this._showWarning(je("common.show_warning"));if(this.config.show_error)return this._showError(je("common.show_error"));if(console.log(this.config.entity),console.log(this._getData(this.hass.states,this.config.entity)),"object"==this._getData(this.hass.states,this.config.entity).attributes){this._getData(this.hass.states,this.config.entity).attributes}return q`
      <ha-card
        tabindex="0"
        .label=${"MQTT Comfoair: "+(this.config.entity||"No Entity Defined")}
      >
        <div class="container">
          <div class="bg">
              <div class="flex-container">
                  <div class="flex-col-out">
                      <div>${this._getData(this.hass.states,this.config.tempSensor1).state}°C</div>
                      <div class="fan-state"><ha-icon icon="mdi:speedometer"></ha-icon></ha-icon>${this._getData(this.hass.states,this.config.fan_speed_supply).state} rpm</div>
                      <div>${this._getData(this.hass.states,this.config.tempSensor2).state}°C</div>
                      <div class="fan-state"><ha-icon icon="mdi:speedometer"></ha-icon> ${this._getData(this.hass.states,this.config.fan_speed_exhaust).state} rpm</div>
                  </div>
                  <div class="flex-col-main">
                      <div> ${this._getData(this.hass.states,this.config.entity).attributes.temperature} °C</div>
                      <div>
                        <ha-icon-button id="ca350_fanoff" icon="mdi:fan-off" role="button" 
                          @action=${this._handleFanAction} 
                          .actionHandler=${Ae({hasHold:Te(this.config.hold_action),hasDoubleClick:Te(this.config.double_tap_action)})}></ha-icon-button>
                        <ha-icon-button id="ca350_fan1" icon="mdi:fan-speed-1"
                          @action=${this._handleFanAction}
                          .actionHandler=${Ae({hasHold:Te(this.config.hold_action),hasDoubleClick:Te(this.config.double_tap_action)})}></ha-icon-button>
                        <ha-icon-button id="ca350_fan2"  icon="mdi:fan-speed-2" role="button"
                          @action=${this._handleFanAction}
                          .actionHandler=${Ae({hasHold:Te(this.config.hold_action),hasDoubleClick:Te(this.config.double_tap_action)})}></ha-icon-button>
                        <ha-icon-button id="ca350_fan3" icon="mdi:fan-speed-3" role="button"
                          @action=${this._handleFanAction}
                          .actionHandler=${Ae({hasHold:Te(this.config.hold_action),hasDoubleClick:Te(this.config.double_tap_action)})}></ha-icon-button>
                      </div>
                  </div>
                  <div class="flex-col-in">
                      <div>${this._getData(this.hass.states,this.config.tempSensor3).state}°C</div>
                      <div class="fan-state"><ha-icon icon="mdi:fan" class="spin"></ha-icon> ${this._getData(this.hass.states,this.config.return_air_level).state} %</div>
                      <div>${this._getData(this.hass.states,this.config.tempSensor4).state}°C</div>
                      <div class="fan-state"><ha-icon icon="mdi:fan" class="spin"></ha-icon> ${this._getData(this.hass.states,this.config.supply_air_level).state} %</div>
                  </div>
              </div>
          </div>
        </div>
        <div class="info-row">
          ${this._getFanTmpl()}
          ${this._getAirFilterTmpl()}
          ${this._getBypassTmpl()}
          ${this._getPreHeatTmpl()}
          ${this._getSummerModeTmpl()}
        </div>
      </ha-card>
    `}_getFanTmpl(){return parseInt(this.hass.states["sensor.ca350_fan_speed_supply"].state)>0?q`<ha-icon icon="mdi:fan"></ha-icon>`:q`<ha-icon class="inactive" icon="mdi:fan"></ha-icon>`}_getAirFilterTmpl(){return"on"!=this._getData(this.hass.states,this.config.filterstatus).state?q`<ha-icon class="inactive" icon="mdi:air-filter"></ha-icon>`:q`<ha-icon class="warning" icon="mdi:air-filter"></ha-icon>`}_getBypassTmpl(){return"on"==this._getData(this.hass.states,this.config.bypass_valve).state?q`<ha-icon icon="mdi:electric-switch"></ha-icon>`:q`<ha-icon class="inactive" icon="mdi:electric-switch"></ha-icon>`}_getPreHeatTmpl(){return"on"==this._getData(this.hass.states,this.config.bypass_valve).state?q`<ha-icon icon="mdi:radiator"></ha-icon>`:q`<ha-icon class="inactive" icon="mdi:radiator"></ha-icon>`}_getSummerModeTmpl(){return"off"==this._getData(this.hass.states,this.config.summer_mode).state?q`<ha-icon icon="mdi:snowflake"></ha-icon>`:q`<ha-icon class="inactive" icon="mdi:weather-sunny"></ha-icon>`}_getData(e,t){return void 0===e||"object"!=typeof e||void 0===t||"object"==typeof t||void 0===e[t]||null===e[t]?"":e[t]}_handleFanAction(e){console.log("Fan Action"),console.log(e);const t={entity_id:this.config.entity,fan_mode:e.detail.action};console.log(t),console.log(this.hass.callService("climate","set_fan_mode",t))}_showWarning(e){return q`
      <hui-warning>${e}</hui-warning>
    `}_showError(e){const t=document.createElement("hui-error-card");return t.setConfig({type:"error",error:e,origConfig:this.config}),q`
      ${t}
    `}static get styles(){return te`.container {
      padding: 10px;
    }
      .bg {
        background-image: url(/local/lovelace-comfoair/comfoair_heat.png);
        height: 200px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position-y: center
      }
      .not-found {
        background-color: yellow;
        font-family: sans-serif;
        font-size: 14px;
        padding: 8px;
      }
      .flex-container {
        display: flex;
        justify-content: space-between;
        height: 100%;
      }
      .flex-col-main {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0px;
        font-size: x-large;
        text-align: center;
        font-weight:bold;
      }
      .flex-col-out {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      .flex-col-in {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      .fan-state {
        padding-top: 15px;
      }
      .spin, .spin ha-svg-icon {
        animation-name: spin;
        animation-duration: 2000ms;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
      }

      .info-row {
        background: rgba(0,0,0,0.2);
        margin-top: 10px;
        padding: 5px;
        border-top: rgba(0,0,0,0.4);
        -webkit-box-shadow: 0px -4px 3px rgba(50, 50, 50, 0.75);
        -moz-box-shadow: 0px -4px 3px rgba(50, 50, 50, 0.75);
        box-shadow: 0px -2.5px 3px rgba(0, 0, 0, 0.4);
        display: flex;
        justify-content: space-around;
      }

      .inactive {
        opacity: 0.7;
      }

      .warning {
        color: #d80707db;
      }

      @keyframes spin {
        from {
          transform:rotate(0deg);
        }
        to {
          transform:rotate(360deg);
        }
      }
    `}};e([Q({attribute:!1})],Ye.prototype,"hass",void 0),e([X()],Ye.prototype,"config",void 0),Ye=e([J("mqttcomfoair-card")],Ye);export{Ye as MqttcomfoairCard};
