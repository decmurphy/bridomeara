!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}({0:function(e,t,n){n("bYPE"),e.exports=n("exiC")},bYPE:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(t);var o=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;r(this,e),this._in_progress=!1,this._color="",this._icon=t,this._resetIcon=t}var t,n,o;return t=e,(n=[{key:"start",value:function(){this._in_progress=!0}},{key:"success",value:function(){this._in_progress=!1,this._color="bg-success text-black",this._icon='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'}},{key:"fail",value:function(){this._in_progress=!1,this._color="bg-fail text-black",this._icon='<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',this.reset()}},{key:"reset",value:function(){var e=this;setTimeout((function(){e._icon=e._resetIcon,e._color=""}),4e3)}},{key:"in_progress",get:function(){return this._in_progress}},{key:"color",get:function(){return this._color}},{key:"icon",get:function(){return this._icon}}])&&i(t.prototype,n),o&&i(t,o),e}();Vue.component("spinner",{template:'<svg class="spinner animate-spin w-6 h-6" stroke="currentColor" viewBox="0 0 20 20"><g transform="translate(1.9,1.9)" fill-rule="evenodd" fill="none"><g stroke-width="2" transform="translate(1,1)"><ellipse ry="8.6124411" rx="8.6124392" style="stroke-width:2.77512;stroke-miterlimit:4;stroke-dasharray:none" cy="7.1" cx="7.1" stroke-opacity="0.5" /><path style="stroke-width:2.77512;stroke-linecap:round;stroke-miterlimit:4;stroke-dasharray:none"d="m 15.712439,7.1000019 c 0,-4.7559816 -3.856458,-8.6124415 -8.6124391,-8.6124415"/></g></g></svg>'});new Vue({el:"#home",data:function(){return{emailRegExp:/^\S+@\S+$/,name:"",email:{value:"",valid:!0},message:{text:"",maxlength:1e3},sendStatus:new o,canSend:!0}},methods:{validateEmail:function(e){this.email.valid=this.emailRegExp.test(String(this.email.value).toLowerCase()),console.log(this.email.value,this.email.valid)},sendData:function(){if(this.email.valid){this.canSend=!1,this.sendStatus.start();var e={user_name:this.name,user_email:this.email.value,user_message:this.message.text};emailjs.send("bom_service","template_VJrTe0zf",e).then(function(e){this.sendStatus.success()}.bind(this),function(e){this.sendStatus.fail(),this.canSend=!0}.bind(this))}}}})},exiC:function(e,t){}});