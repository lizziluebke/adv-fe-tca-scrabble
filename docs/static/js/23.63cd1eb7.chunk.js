"use strict";(self.webpackChunktca_scrabble=self.webpackChunktca_scrabble||[]).push([[23],{23:function(t,e,n){n.r(e),n.d(e,{ion_picker_internal:function(){return i}});var r=n(5785),o=n(9069),i=function(){function t(t){var e=this;(0,r.r)(this,t),this.ionInputModeChange=(0,r.e)(this,"ionInputModeChange",7),this.useInputMode=!1,this.isInHighlightBounds=function(t){var n=e.highlightEl;if(!n)return!1;var r=n.getBoundingClientRect(),o=t.clientX<r.left||t.clientX>r.right,i=t.clientY<r.top||t.clientY>r.bottom;return!o&&!i},this.onFocusOut=function(t){var n=t.relatedTarget;(!n||"ION-PICKER-COLUMN-INTERNAL"!==n.tagName&&n!==e.inputEl)&&e.exitInputMode()},this.onFocusIn=function(t){var n=t.target;if("ION-PICKER-COLUMN-INTERNAL"===n.tagName&&!e.actionOnClick){var r=n;r.numericInput?e.enterInputMode(r,!1):e.exitInputMode()}},this.onClick=function(){var t=e.actionOnClick;t&&(t(),e.actionOnClick=void 0)},this.onPointerDown=function(t){var n=e,r=n.useInputMode,o=n.inputModeColumn,i=n.el;if(e.isInHighlightBounds(t))if(r)"ION-PICKER-COLUMN-INTERNAL"===t.target.tagName?o&&o===t.target?e.actionOnClick=function(){e.enterInputMode()}:e.actionOnClick=function(){e.enterInputMode(t.target)}:e.actionOnClick=function(){e.exitInputMode()};else{var a=1===i.querySelectorAll("ion-picker-column-internal.picker-column-numeric-input").length?t.target:void 0;e.actionOnClick=function(){e.enterInputMode(a)}}else e.actionOnClick=function(){e.exitInputMode()}},this.enterInputMode=function(t,n){void 0===n&&(n=!0);var r=e,o=r.inputEl,i=r.el;o&&(i.querySelector("ion-picker-column-internal.picker-column-numeric-input")&&(e.useInputMode=!0,e.inputModeColumn=t,n?(e.destroyKeypressListener&&(e.destroyKeypressListener(),e.destroyKeypressListener=void 0),o.focus()):(i.addEventListener("keypress",e.onKeyPress),e.destroyKeypressListener=function(){i.removeEventListener("keypress",e.onKeyPress)}),e.emitInputModeChange()))},this.exitInputMode=function(){var t=e,n=t.inputEl;t.useInputMode&&n&&(e.useInputMode=!1,e.inputModeColumn=void 0,n.blur(),n.value="",e.destroyKeypressListener&&(e.destroyKeypressListener(),e.destroyKeypressListener=void 0),e.emitInputModeChange())},this.onKeyPress=function(t){var n=e.inputEl;if(n){var r=parseInt(t.key,10);Number.isNaN(r)||(n.value+=t.key,e.onInputChange())}},this.selectSingleColumn=function(){var t=e,n=t.inputEl,r=t.inputModeColumn,o=t.singleColumnSearchTimeout;if(n&&r){var i=r.items;if(o&&clearTimeout(o),e.singleColumnSearchTimeout=setTimeout((function(){n.value="",e.singleColumnSearchTimeout=void 0}),1e3),n.value.length>=3){var a=n.value.length-2,u=n.value.substring(a);return n.value=u,void e.selectSingleColumn()}var l=i.find((function(t){return t.text.replace(/^0+/,"")===n.value}));if(l)r.value=l.value;else if(2===n.value.length){var s=n.value.substring(n.value.length-1);n.value=s,e.selectSingleColumn()}}},this.searchColumn=function(t,e,n){var r;void 0===n&&(n="start");var o="start"===n?/^0+/:/0$/;r=t.items.find((function(t){return t.text.replace(o,"")===e})),r&&(t.value=r.value)},this.selectMultiColumn=function(){var t=e,n=t.inputEl,r=t.el;if(n){var o,i=Array.from(r.querySelectorAll("ion-picker-column-internal")).filter((function(t){return t.numericInput})),a=i[0],u=i[1],l=n.value;switch(l.length){case 1:e.searchColumn(a,l);break;case 2:var s=n.value.substring(0,1);l="0"===s||"1"===s?n.value:s,e.searchColumn(a,l),1===l.length&&(o=n.value.substring(n.value.length-1),e.searchColumn(u,o,"end"));break;case 3:var c=n.value.substring(0,1);l="0"===c||"1"===c?n.value.substring(0,2):c,e.searchColumn(a,l),o=1===l.length?n.value.substring(1):n.value.substring(2),e.searchColumn(u,o,"end");break;case 4:var g=n.value.substring(0,1);l="0"===g||"1"===g?n.value.substring(0,2):g,e.searchColumn(a,l);var p=1===l.length?n.value.substring(1,n.value.length):n.value.substring(2,n.value.length);e.searchColumn(u,p,"end");break;default:var d=n.value.length-4,h=n.value.substring(d);n.value=h,e.selectMultiColumn()}}},this.onInputChange=function(){var t=e,n=t.useInputMode,r=t.inputEl,o=t.inputModeColumn;n&&r&&(o?e.selectSingleColumn():e.selectMultiColumn())},this.emitInputModeChange=function(){var t=e,n=t.useInputMode,r=t.inputModeColumn;e.ionInputModeChange.emit({useInputMode:n,inputModeColumn:r})}}return t.prototype.componentWillLoad=function(){(0,o.g)(this.el).addEventListener("focusin",this.onFocusIn),(0,o.g)(this.el).addEventListener("focusout",this.onFocusOut)},t.prototype.render=function(){var t=this;return(0,r.h)(r.H,{onPointerDown:function(e){return t.onPointerDown(e)},onClick:function(){return t.onClick()}},(0,r.h)("input",{"aria-hidden":"true",tabindex:-1,inputmode:"numeric",type:"number",ref:function(e){return t.inputEl=e},onInput:function(){return t.onInputChange()},onBlur:function(){return t.exitInputMode()}}),(0,r.h)("div",{class:"picker-before"}),(0,r.h)("div",{class:"picker-after"}),(0,r.h)("div",{class:"picker-highlight",ref:function(e){return t.highlightEl=e}}),(0,r.h)("slot",null))},Object.defineProperty(t.prototype,"el",{get:function(){return(0,r.i)(this)},enumerable:!1,configurable:!0}),t}();i.style={ios:":host{display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:200px;direction:ltr;z-index:0}:host .picker-before,:host .picker-after{position:absolute;width:100%;z-index:1;pointer-events:none}:host .picker-before{left:0;top:0;height:83px}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host .picker-after{left:0;top:116px;height:84px}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host .picker-highlight{border-radius:8px;left:0;right:0;top:50%;bottom:0;margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;position:absolute;width:calc(100% - 16px);height:34px;-webkit-transform:translateY(-50%);transform:translateY(-50%);z-index:-1}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .picker-highlight{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}:host input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host ::slotted(ion-picker-column-internal:first-of-type){text-align:start}:host ::slotted(ion-picker-column-internal:last-of-type){text-align:end}:host .picker-before{background:-webkit-gradient(linear, left top, left bottom, color-stop(20%, var(--background, var(--ion-background-color, #fff))), to(rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8)));background:linear-gradient(to bottom, var(--background, var(--ion-background-color, #fff)) 20%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8) 100%)}:host .picker-after{background:-webkit-gradient(linear, left bottom, left top, color-stop(20%, var(--background, var(--ion-background-color, #fff))), to(rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8)));background:linear-gradient(to top, var(--background, var(--ion-background-color, #fff)) 20%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8) 100%)}:host .picker-highlight{background:var(--ion-color-step-150, #eeeeef)}",md:":host{display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:200px;direction:ltr;z-index:0}:host .picker-before,:host .picker-after{position:absolute;width:100%;z-index:1;pointer-events:none}:host .picker-before{left:0;top:0;height:83px}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host .picker-after{left:0;top:116px;height:84px}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host .picker-highlight{border-radius:8px;left:0;right:0;top:50%;bottom:0;margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;position:absolute;width:calc(100% - 16px);height:34px;-webkit-transform:translateY(-50%);transform:translateY(-50%);z-index:-1}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host .picker-highlight{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}:host input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host ::slotted(ion-picker-column-internal:first-of-type){text-align:start}:host ::slotted(ion-picker-column-internal:last-of-type){text-align:end}:host .picker-before{background:-webkit-gradient(linear, left top, left bottom, color-stop(20%, var(--background, var(--ion-background-color, #fff))), color-stop(90%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0)));background:linear-gradient(to bottom, var(--background, var(--ion-background-color, #fff)) 20%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0) 90%)}:host .picker-after{background:-webkit-gradient(linear, left bottom, left top, color-stop(30%, var(--background, var(--ion-background-color, #fff))), color-stop(90%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0)));background:linear-gradient(to top, var(--background, var(--ion-background-color, #fff)) 30%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0) 90%)}"}}}]);
//# sourceMappingURL=23.63cd1eb7.chunk.js.map