(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-62493d32"],{"31ce":function(e,t,i){},"3a0d":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",{attrs:{tag:"section"}},[i("tag-table")],1)},n=[],s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",[i("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.tags,"sort-by":"calories"},scopedSlots:e._u([{key:"top",fn:function(){return[i("v-toolbar",{attrs:{flat:""}},[i("v-toolbar-title",[e._v("Tags")]),i("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),i("v-spacer"),i("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,n=t.attrs;return[i("v-btn",e._g(e._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",n,!1),a),[e._v(" Nova tag ")])]}}]),model:{value:e.showDialogForm,callback:function(t){e.showDialogForm=t},expression:"showDialogForm"}},[i("v-card",[i("v-card-title",[i("span",{staticClass:"text-h5"},[e._v(e._s(e.formTitle))])]),i("v-card-text",[i("v-container",[i("v-row",[i("v-text-field",{attrs:{label:"Nome"},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1),i("v-row",[i("v-textarea",{attrs:{label:"Descrição",rows:"1","row-height":"15"},model:{value:e.editedItem.description,callback:function(t){e.$set(e.editedItem,"description",t)},expression:"editedItem.description"}})],1),i("v-row",{attrs:{justify:"center"}},[i("div",[i("span",{staticClass:"subheading"},[e._v("Escolha uma cor:")]),i("v-color-picker",{attrs:{elevation:"1"},model:{value:e.editedItem.color,callback:function(t){e.$set(e.editedItem,"color",t)},expression:"editedItem.color"}})],1)])],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDialogForm}},[e._v(" Cancel ")]),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v(" Save ")])],1)],1)],1),i("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[i("v-card",[i("v-card-title",{staticClass:"text-h5"},[e._v("Are you sure you want to delete this item?")]),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.closeDeleteDialog}},[e._v("Cancel")]),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.deleteItemConfirm}},[e._v("OK")]),i("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item.description",fn:function(t){var a=t.value;return[i("div",{staticStyle:{"max-width":"17vw","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[e._v(" "+e._s(a)+" ")])]}},{key:"item.color",fn:function(e){var t=e.item;return[i("v-chip",{staticStyle:{border:"1px solid #afafaf"},attrs:{color:t.color}})]}},{key:"item.actions",fn:function(t){var a=t.item;return[i("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(a)}}},[e._v(" mdi-pencil ")]),i("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(a)}}},[e._v(" mdi-delete ")])]}},{key:"no-data",fn:function(){return[i("p",[e._v("Nenhuma tag cadastrada")])]},proxy:!0}],null,!0)})],1)},r=[],c=i("5530"),l=(i("c740"),i("a434"),i("2f62")),o={data:function(){return{showDialogForm:!1,dialogDelete:!1,headers:[{text:"ID",align:"start",value:"id"},{text:"Nome",value:"name"},{text:"Descrição",value:"description"},{text:"Cor",value:"color"},{text:"Actions",value:"actions",sortable:!1}],editedIndex:-1,editedItem:{id:0,name:"",description:"",color:"#e0e0e0"},defaultItem:{id:0,name:"",description:"",color:"#e0e0e0"}}},computed:Object(c["a"])(Object(c["a"])({},Object(l["c"])("tags",["tags"])),{},{formTitle:function(){return-1===this.editedIndex?"Nova Tag":"Atualizar Tag"},updatingTag:function(){return this.editedIndex>-1},currentTagIndex:function(){var e=this;return this.tags.findIndex((function(t){return t.id==e.editedIndex}))}}),watch:{showDialogForm:function(e){e||this.closeDialogForm()},dialogDelete:function(e){e||this.closeDeleteDialog()}},methods:Object(c["a"])(Object(c["a"])({},Object(l["b"])({getAllProducts:"products/getAllProducts",getAllTags:"tags/getAllTags",updateTag:"tags/updateTag",createTag:"tags/createTag",deleteTag:"tags/deleteTag"})),{},{editItem:function(e){this.editedItem=Object.assign({},e),this.editedIndex=e.id,this.showDialogForm=!0},deleteItem:function(e){this.editedIndex=e.id,this.editedItem=Object.assign({},e),this.dialogDelete=!0},deleteItemConfirm:function(){var e=this;this.deleteTag(this.editedIndex).then((function(t){t.deleted&&e.tags.splice(e.currentTagIndex,1),e.getAllProducts()})),this.closeDeleteDialog()},closeDialogForm:function(){var e=this;this.showDialogForm=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},closeDeleteDialog:function(){var e=this;this.dialogDelete=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},save:function(){var e=this;this.updatingTag?this.updateTag(this.editedItem).then((function(){e.getAllTags(),e.getAllProducts()})):this.createTag(this.editedItem).then((function(t){e.tags.push(t.data)})),this.closeDialogForm()}})},h=o,d=i("2877"),u=i("6544"),f=i.n(u),b=i("8336"),g=i("b0af"),v=i("99d9"),p=i("cc20"),m=(i("a9e3"),i("caad"),i("2532"),i("b64b"),i("0481"),i("4069"),i("bb18"),i("8dd9")),k=(i("99af"),i("7863"),i("ade3")),w=(i("d81d"),i("498a"),i("d3b7"),i("25f0"),i("b680"),i("9e29"),i("c37a")),y=i("0789"),C=i("58df"),O=i("297c"),x=i("a293"),j=i("80d2"),_=i("d9bd"),S=Object(C["a"])(w["a"],O["a"]).extend({name:"v-slider",directives:{ClickOutside:x["a"]},mixins:[O["a"]],props:{disabled:Boolean,inverseLabel:Boolean,max:{type:[Number,String],default:100},min:{type:[Number,String],default:0},step:{type:[Number,String],default:1},thumbColor:String,thumbLabel:{type:[Boolean,String],default:void 0,validator:function(e){return"boolean"===typeof e||"always"===e}},thumbSize:{type:[Number,String],default:32},tickLabels:{type:Array,default:function(){return[]}},ticks:{type:[Boolean,String],default:!1,validator:function(e){return"boolean"===typeof e||"always"===e}},tickSize:{type:[Number,String],default:2},trackColor:String,trackFillColor:String,value:[Number,String],vertical:Boolean},data:function(){return{app:null,oldValue:null,thumbPressed:!1,mouseTimeout:-1,isFocused:!1,isActive:!1,noClick:!1,startOffset:0}},computed:{classes:function(){return Object(c["a"])(Object(c["a"])({},w["a"].options.computed.classes.call(this)),{},{"v-input__slider":!0,"v-input__slider--vertical":this.vertical,"v-input__slider--inverse-label":this.inverseLabel})},internalValue:{get:function(){return this.lazyValue},set:function(e){e=isNaN(e)?this.minValue:e;var t=this.roundValue(Math.min(Math.max(e,this.minValue),this.maxValue));t!==this.lazyValue&&(this.lazyValue=t,this.$emit("input",t))}},trackTransition:function(){return this.thumbPressed?this.showTicks||this.stepNumeric?"0.1s cubic-bezier(0.25, 0.8, 0.5, 1)":"none":""},minValue:function(){return parseFloat(this.min)},maxValue:function(){return parseFloat(this.max)},stepNumeric:function(){return this.step>0?parseFloat(this.step):0},inputWidth:function(){var e=(this.roundValue(this.internalValue)-this.minValue)/(this.maxValue-this.minValue)*100;return isNaN(e)?0:e},trackFillStyles:function(){var e,t=this.vertical?"bottom":"left",i=this.vertical?"top":"right",a=this.vertical?"height":"width",n=this.$vuetify.rtl?"auto":"0",s=this.$vuetify.rtl?"0":"auto",r=this.isDisabled?"calc(".concat(this.inputWidth,"% - 10px)"):"".concat(this.inputWidth,"%");return e={transition:this.trackTransition},Object(k["a"])(e,t,n),Object(k["a"])(e,i,s),Object(k["a"])(e,a,r),e},trackStyles:function(){var e,t=this.vertical?this.$vuetify.rtl?"bottom":"top":this.$vuetify.rtl?"left":"right",i=this.vertical?"height":"width",a="0px",n=this.isDisabled?"calc(".concat(100-this.inputWidth,"% - 10px)"):"calc(".concat(100-this.inputWidth,"%)");return e={transition:this.trackTransition},Object(k["a"])(e,t,a),Object(k["a"])(e,i,n),e},showTicks:function(){return this.tickLabels.length>0||!(this.isDisabled||!this.stepNumeric||!this.ticks)},numTicks:function(){return Math.ceil((this.maxValue-this.minValue)/this.stepNumeric)},showThumbLabel:function(){return!this.isDisabled&&!(!this.thumbLabel&&!this.$scopedSlots["thumb-label"])},computedTrackColor:function(){if(!this.isDisabled)return this.trackColor?this.trackColor:this.isDark?this.validationState:this.validationState||"primary lighten-3"},computedTrackFillColor:function(){if(!this.isDisabled)return this.trackFillColor?this.trackFillColor:this.validationState||this.computedColor},computedThumbColor:function(){return this.thumbColor?this.thumbColor:this.validationState||this.computedColor}},watch:{min:function(e){var t=parseFloat(e);t>this.internalValue&&this.$emit("input",t)},max:function(e){var t=parseFloat(e);t<this.internalValue&&this.$emit("input",t)},value:{handler:function(e){this.internalValue=e}}},beforeMount:function(){this.internalValue=this.value},mounted:function(){this.app=document.querySelector("[data-app]")||Object(_["c"])("Missing v-app or a non-body wrapping element with the [data-app] attribute",this)},methods:{genDefaultSlot:function(){var e=[this.genLabel()],t=this.genSlider();return this.inverseLabel?e.unshift(t):e.push(t),e.push(this.genProgress()),e},genSlider:function(){return this.$createElement("div",{class:Object(c["a"])({"v-slider":!0,"v-slider--horizontal":!this.vertical,"v-slider--vertical":this.vertical,"v-slider--focused":this.isFocused,"v-slider--active":this.isActive,"v-slider--disabled":this.isDisabled,"v-slider--readonly":this.isReadonly},this.themeClasses),directives:[{name:"click-outside",value:this.onBlur}],on:{click:this.onSliderClick,mousedown:this.onSliderMouseDown,touchstart:this.onSliderMouseDown}},this.genChildren())},genChildren:function(){return[this.genInput(),this.genTrackContainer(),this.genSteps(),this.genThumbContainer(this.internalValue,this.inputWidth,this.isActive,this.isFocused,this.onFocus,this.onBlur)]},genInput:function(){return this.$createElement("input",{attrs:Object(c["a"])({value:this.internalValue,id:this.computedId,disabled:!0,readonly:!0,tabindex:-1},this.$attrs)})},genTrackContainer:function(){var e=[this.$createElement("div",this.setBackgroundColor(this.computedTrackColor,{staticClass:"v-slider__track-background",style:this.trackStyles})),this.$createElement("div",this.setBackgroundColor(this.computedTrackFillColor,{staticClass:"v-slider__track-fill",style:this.trackFillStyles}))];return this.$createElement("div",{staticClass:"v-slider__track-container",ref:"track"},e)},genSteps:function(){var e=this;if(!this.step||!this.showTicks)return null;var t=parseFloat(this.tickSize),i=Object(j["i"])(this.numTicks+1),a=this.vertical?"bottom":this.$vuetify.rtl?"right":"left",n=this.vertical?this.$vuetify.rtl?"left":"right":"top";this.vertical&&i.reverse();var s=i.map((function(i){var s,r=[];e.tickLabels[i]&&r.push(e.$createElement("div",{staticClass:"v-slider__tick-label"},e.tickLabels[i]));var c=i*(100/e.numTicks),l=e.$vuetify.rtl?100-e.inputWidth<c:c<e.inputWidth;return e.$createElement("span",{key:i,staticClass:"v-slider__tick",class:{"v-slider__tick--filled":l},style:(s={width:"".concat(t,"px"),height:"".concat(t,"px")},Object(k["a"])(s,a,"calc(".concat(c,"% - ").concat(t/2,"px)")),Object(k["a"])(s,n,"calc(50% - ".concat(t/2,"px)")),s)},r)}));return this.$createElement("div",{staticClass:"v-slider__ticks-container",class:{"v-slider__ticks-container--always-show":"always"===this.ticks||this.tickLabels.length>0}},s)},genThumbContainer:function(e,t,i,a,n,s){var r=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"thumb",c=[this.genThumb()],l=this.genThumbLabelContent(e);return this.showThumbLabel&&c.push(this.genThumbLabel(l)),this.$createElement("div",this.setTextColor(this.computedThumbColor,{ref:r,key:r,staticClass:"v-slider__thumb-container",class:{"v-slider__thumb-container--active":i,"v-slider__thumb-container--focused":a,"v-slider__thumb-container--show-label":this.showThumbLabel},style:this.getThumbContainerStyles(t),attrs:{role:"slider",tabindex:this.isDisabled?-1:this.$attrs.tabindex?this.$attrs.tabindex:0,"aria-label":this.$attrs["aria-label"]||this.label,"aria-valuemin":this.min,"aria-valuemax":this.max,"aria-valuenow":this.internalValue,"aria-readonly":String(this.isReadonly),"aria-orientation":this.vertical?"vertical":"horizontal"},on:{focus:n,blur:s,keydown:this.onKeyDown}}),c)},genThumbLabelContent:function(e){return this.$scopedSlots["thumb-label"]?this.$scopedSlots["thumb-label"]({value:e}):[this.$createElement("span",[String(e)])]},genThumbLabel:function(e){var t=Object(j["h"])(this.thumbSize),i=this.vertical?"translateY(20%) translateY(".concat(Number(this.thumbSize)/3-1,"px) translateX(55%) rotate(135deg)"):"translateY(-20%) translateY(-12px) translateX(-50%) rotate(45deg)";return this.$createElement(y["d"],{props:{origin:"bottom center"}},[this.$createElement("div",{staticClass:"v-slider__thumb-label-container",directives:[{name:"show",value:this.isFocused||this.isActive||"always"===this.thumbLabel}]},[this.$createElement("div",this.setBackgroundColor(this.computedThumbColor,{staticClass:"v-slider__thumb-label",style:{height:t,width:t,transform:i}}),[this.$createElement("div",e)])])])},genThumb:function(){return this.$createElement("div",this.setBackgroundColor(this.computedThumbColor,{staticClass:"v-slider__thumb"}))},getThumbContainerStyles:function(e){var t=this.vertical?"top":"left",i=this.$vuetify.rtl?100-e:e;return i=this.vertical?100-i:i,Object(k["a"])({transition:this.trackTransition},t,"".concat(i,"%"))},onSliderMouseDown:function(e){var t,i=this;if(e.preventDefault(),this.oldValue=this.internalValue,this.isActive=!0,null!=(t=e.target)&&t.matches(".v-slider__thumb-container, .v-slider__thumb-container *")){this.thumbPressed=!0;var a=e.target.getBoundingClientRect(),n="touches"in e?e.touches[0]:e;this.startOffset=this.vertical?n.clientY-(a.top+a.height/2):n.clientX-(a.left+a.width/2)}else this.startOffset=0,window.clearTimeout(this.mouseTimeout),this.mouseTimeout=window.setTimeout((function(){i.thumbPressed=!0}),300);var s=!j["C"]||{passive:!0,capture:!0},r=!!j["C"]&&{passive:!0},c="touches"in e;this.onMouseMove(e),this.app.addEventListener(c?"touchmove":"mousemove",this.onMouseMove,r),Object(j["a"])(this.app,c?"touchend":"mouseup",this.onSliderMouseUp,s),this.$emit("start",this.internalValue)},onSliderMouseUp:function(e){e.stopPropagation(),window.clearTimeout(this.mouseTimeout),this.thumbPressed=!1;var t=!!j["C"]&&{passive:!0};this.app.removeEventListener("touchmove",this.onMouseMove,t),this.app.removeEventListener("mousemove",this.onMouseMove,t),this.$emit("mouseup",e),this.$emit("end",this.internalValue),Object(j["k"])(this.oldValue,this.internalValue)||(this.$emit("change",this.internalValue),this.noClick=!0),this.isActive=!1},onMouseMove:function(e){"mousemove"===e.type&&(this.thumbPressed=!0),this.internalValue=this.parseMouseMove(e)},onKeyDown:function(e){if(this.isInteractive){var t=this.parseKeyDown(e,this.internalValue);null==t||t<this.minValue||t>this.maxValue||(this.internalValue=t,this.$emit("change",t))}},onSliderClick:function(e){if(this.noClick)this.noClick=!1;else{var t=this.$refs.thumb;t.focus(),this.onMouseMove(e),this.$emit("change",this.internalValue)}},onBlur:function(e){this.isFocused=!1,this.$emit("blur",e)},onFocus:function(e){this.isFocused=!0,this.$emit("focus",e)},parseMouseMove:function(e){var t=this.vertical?"top":"left",i=this.vertical?"height":"width",a=this.vertical?"clientY":"clientX",n=this.$refs.track.getBoundingClientRect(),s=n[t],r=n[i],c="touches"in e?e.touches[0][a]:e[a],l=Math.min(Math.max((c-s-this.startOffset)/r,0),1)||0;return this.vertical&&(l=1-l),this.$vuetify.rtl&&(l=1-l),parseFloat(this.min)+l*(this.maxValue-this.minValue)},parseKeyDown:function(e,t){if(this.isInteractive){var i=j["y"].pageup,a=j["y"].pagedown,n=j["y"].end,s=j["y"].home,r=j["y"].left,c=j["y"].right,l=j["y"].down,o=j["y"].up;if([i,a,n,s,r,c,l,o].includes(e.keyCode)){e.preventDefault();var h=this.stepNumeric||1,d=(this.maxValue-this.minValue)/h;if([r,c,l,o].includes(e.keyCode)){var u=this.$vuetify.rtl?[r,o]:[c,o],f=u.includes(e.keyCode)?1:-1,b=e.shiftKey?3:e.ctrlKey?2:1;t+=f*h*b}else if(e.keyCode===s)t=this.minValue;else if(e.keyCode===n)t=this.maxValue;else{var g=e.keyCode===a?1:-1;t-=g*h*(d>100?d/10:10)}return t}}},roundValue:function(e){if(!this.stepNumeric)return e;var t=this.step.toString().trim(),i=t.indexOf(".")>-1?t.length-t.indexOf(".")-1:0,a=this.minValue%this.stepNumeric,n=Math.round((e-a)/this.stepNumeric)*this.stepNumeric+a;return parseFloat(Math.min(n,this.maxValue).toFixed(i))}}}),$=i("7bc6"),V=i("2b0e"),T=i("15fd"),M=i("53ca"),D=["a"];function I(e){e=Object(c["a"])({},e);var t=Object($["c"])(e),i=Object($["b"])(e),a=Object($["d"])(e);return{alpha:e.a,hex:t.substr(0,7),hexa:t,hsla:i,hsva:e,hue:e.h,rgba:a}}function E(e){var t=Object($["a"])(e),i=Object($["c"])(t),a=Object($["d"])(t);return{alpha:t.a,hex:i.substr(0,7),hexa:i,hsla:e,hsva:t,hue:t.h,rgba:a}}function F(e){var t=Object($["g"])(e),i=Object($["h"])(e),a=Object($["b"])(t);return{alpha:t.a,hex:i.substr(0,7),hexa:i,hsla:a,hsva:t,hue:t.h,rgba:e}}function z(e){var t=Object($["e"])(e),i=Object($["b"])(t),a=Object($["d"])(t);return{alpha:t.a,hex:e.substr(0,7),hexa:e,hsla:i,hsva:t,hue:t.h,rgba:a}}function A(e){return z(Object($["o"])(e))}function N(e,t){return t.every((function(t){return e.hasOwnProperty(t)}))}function B(e,t){if(!e)return F({r:255,g:0,b:0,a:1});if("string"===typeof e){if("transparent"===e)return z("#00000000");var i=Object($["o"])(e);return t&&i===t.hexa?t:z(i)}if("object"===Object(M["a"])(e)){if(e.hasOwnProperty("alpha"))return e;var a=e.hasOwnProperty("a")?parseFloat(e.a):1;if(N(e,["r","g","b"]))return t&&e===t.rgba?t:F(Object(c["a"])(Object(c["a"])({},e),{},{a:a}));if(N(e,["h","s","l"]))return t&&e===t.hsla?t:E(Object(c["a"])(Object(c["a"])({},e),{},{a:a}));if(N(e,["h","s","v"]))return t&&e===t.hsva?t:I(Object(c["a"])(Object(c["a"])({},e),{},{a:a}))}return F({r:255,g:0,b:0,a:1})}function L(e,t){if(t){e.a;var i=Object(T["a"])(e,D);return i}return e}function P(e,t){if(null==t)return e;if("string"===typeof t)return 7===t.length?e.hex:e.hexa;if("object"===Object(M["a"])(t)){var i="number"===typeof t.a&&0===t.a?!!t.a:!t.a;if(N(t,["r","g","b"]))return L(e.rgba,i);if(N(t,["h","s","l"]))return L(e.hsla,i);if(N(t,["h","s","v"]))return L(e.hsva,i)}return e}function R(e){return!!e&&("string"===typeof e?e.length>7:"object"===Object(M["a"])(e)&&(N(e,["a"])||N(e,["alpha"])))}var W=V["a"].extend({name:"v-color-picker-preview",props:{color:Object,disabled:Boolean,hideAlpha:Boolean},methods:{genAlpha:function(){var e=this;return this.genTrack({staticClass:"v-color-picker__alpha",props:{thumbColor:"grey lighten-2",hideDetails:!0,value:this.color.alpha,step:0,min:0,max:1},style:{backgroundImage:this.disabled?void 0:"linear-gradient(to ".concat(this.$vuetify.rtl?"left":"right",", transparent, ").concat(Object($["i"])(this.color.rgba),")")},on:{input:function(t){return e.color.alpha!==t&&e.$emit("update:color",I(Object(c["a"])(Object(c["a"])({},e.color.hsva),{},{a:t})))}}})},genSliders:function(){return this.$createElement("div",{staticClass:"v-color-picker__sliders"},[this.genHue(),!this.hideAlpha&&this.genAlpha()])},genDot:function(){return this.$createElement("div",{staticClass:"v-color-picker__dot"},[this.$createElement("div",{style:{background:Object($["f"])(this.color.rgba)}})])},genHue:function(){var e=this;return this.genTrack({staticClass:"v-color-picker__hue",props:{thumbColor:"grey lighten-2",hideDetails:!0,value:this.color.hue,step:0,min:0,max:360},on:{input:function(t){return e.color.hue!==t&&e.$emit("update:color",I(Object(c["a"])(Object(c["a"])({},e.color.hsva),{},{h:t})))}}})},genTrack:function(e){return this.$createElement(S,Object(c["a"])(Object(c["a"])({class:"v-color-picker__track"},e),{},{props:Object(c["a"])({disabled:this.disabled},e.props)}))}},render:function(e){return e("div",{staticClass:"v-color-picker__preview",class:{"v-color-picker__preview--hide-alpha":this.hideAlpha}},[this.genDot(),this.genSliders()])}}),H=(i("d59f"),V["a"].extend({name:"v-color-picker-canvas",props:{color:{type:Object,default:function(){return F({r:255,g:0,b:0,a:1})}},disabled:Boolean,dotSize:{type:[Number,String],default:10},height:{type:[Number,String],default:150},width:{type:[Number,String],default:300}},data:function(){return{boundingRect:{width:0,height:0,left:0,top:0}}},computed:{dot:function(){return this.color?{x:this.color.hsva.s*parseInt(this.width,10),y:(1-this.color.hsva.v)*parseInt(this.height,10)}:{x:0,y:0}}},watch:{"color.hue":"updateCanvas"},mounted:function(){this.updateCanvas()},methods:{emitColor:function(e,t){var i=this.boundingRect,a=i.left,n=i.top,s=i.width,r=i.height;this.$emit("update:color",I({h:this.color.hue,s:Object(j["f"])(e-a,0,s)/s,v:1-Object(j["f"])(t-n,0,r)/r,a:this.color.alpha}))},updateCanvas:function(){if(this.color){var e=this.$refs.canvas,t=e.getContext("2d");if(t){var i=t.createLinearGradient(0,0,e.width,0);i.addColorStop(0,"hsla(0, 0%, 100%, 1)"),i.addColorStop(1,"hsla(".concat(this.color.hue,", 100%, 50%, 1)")),t.fillStyle=i,t.fillRect(0,0,e.width,e.height);var a=t.createLinearGradient(0,0,0,e.height);a.addColorStop(0,"hsla(0, 0%, 100%, 0)"),a.addColorStop(1,"hsla(0, 0%, 0%, 1)"),t.fillStyle=a,t.fillRect(0,0,e.width,e.height)}}},handleClick:function(e){this.disabled||(this.boundingRect=this.$el.getBoundingClientRect(),this.emitColor(e.clientX,e.clientY))},handleMouseDown:function(e){e.preventDefault(),this.disabled||(this.boundingRect=this.$el.getBoundingClientRect(),window.addEventListener("mousemove",this.handleMouseMove),window.addEventListener("mouseup",this.handleMouseUp))},handleMouseMove:function(e){this.disabled||this.emitColor(e.clientX,e.clientY)},handleMouseUp:function(){window.removeEventListener("mousemove",this.handleMouseMove),window.removeEventListener("mouseup",this.handleMouseUp)},genCanvas:function(){return this.$createElement("canvas",{ref:"canvas",attrs:{width:this.width,height:this.height}})},genDot:function(){var e=parseInt(this.dotSize,10)/2,t=Object(j["h"])(this.dot.x-e),i=Object(j["h"])(this.dot.y-e);return this.$createElement("div",{staticClass:"v-color-picker__canvas-dot",class:{"v-color-picker__canvas-dot--disabled":this.disabled},style:{width:Object(j["h"])(this.dotSize),height:Object(j["h"])(this.dotSize),transform:"translate(".concat(t,", ").concat(i,")")}})}},render:function(e){return e("div",{staticClass:"v-color-picker__canvas",style:{width:Object(j["h"])(this.width),height:Object(j["h"])(this.height)},on:{click:this.handleClick,mousedown:this.handleMouseDown}},[this.genCanvas(),this.genDot()])}})),Y=i("3835"),K=(i("8a79"),i("fb6a"),i("9f7f1"),i("afdd")),U=i("9d26"),X={rgba:{inputs:[["r",255,"int"],["g",255,"int"],["b",255,"int"],["a",1,"float"]],from:F},hsla:{inputs:[["h",360,"int"],["s",1,"float"],["l",1,"float"],["a",1,"float"]],from:E},hexa:{from:z}},G=V["a"].extend({name:"v-color-picker-edit",props:{color:Object,disabled:Boolean,hideAlpha:Boolean,hideModeSwitch:Boolean,mode:{type:String,default:"rgba",validator:function(e){return Object.keys(X).includes(e)}}},data:function(){return{modes:X,internalMode:this.mode}},computed:{currentMode:function(){return this.modes[this.internalMode]}},watch:{mode:function(e){this.internalMode=e}},created:function(){this.internalMode=this.mode},methods:{getValue:function(e,t){return"float"===t?Math.round(100*e)/100:"int"===t?Math.round(e):0},parseValue:function(e,t){return"float"===t?parseFloat(e):"int"===t&&parseInt(e,10)||0},changeMode:function(){var e=Object.keys(this.modes),t=e.indexOf(this.internalMode),i=e[(t+1)%e.length];this.internalMode=i,this.$emit("update:mode",i)},genInput:function(e,t,i,a){return this.$createElement("div",{staticClass:"v-color-picker__input"},[this.$createElement("input",{key:e,attrs:t,domProps:{value:i},on:a}),this.$createElement("span",e.toUpperCase())])},genInputs:function(){var e=this;if("hexa"===this.internalMode){var t=this.color.hexa,i=this.hideAlpha&&t.endsWith("FF")?t.substr(0,7):t;return this.genInput("hex",{maxlength:this.hideAlpha?7:9,disabled:this.disabled},i,{change:function(t){var i=t.target;e.$emit("update:color",e.currentMode.from(Object($["o"])(i.value)))}})}var a=this.hideAlpha?this.currentMode.inputs.slice(0,-1):this.currentMode.inputs;return a.map((function(t){var i=Object(Y["a"])(t,3),a=i[0],n=i[1],s=i[2],r=e.color[e.internalMode];return e.genInput(a,{type:"number",min:0,max:n,step:"float"===s?"0.01":"int"===s?"1":void 0,disabled:e.disabled},e.getValue(r[a],s),{input:function(t){var i=t.target,n=e.parseValue(i.value||"0",s);e.$emit("update:color",e.currentMode.from(Object.assign({},r,Object(k["a"])({},a,n)),e.color.alpha))}})}))},genSwitch:function(){return this.$createElement(K["a"],{props:{small:!0,icon:!0,disabled:this.disabled},on:{click:this.changeMode}},[this.$createElement(U["a"],"$unfold")])}},render:function(e){return e("div",{staticClass:"v-color-picker__edit"},[this.genInputs(),!this.hideModeSwitch&&this.genSwitch()])}}),J=(i("31ce"),i("dca8"),Object.freeze({base:"#f44336",lighten5:"#ffebee",lighten4:"#ffcdd2",lighten3:"#ef9a9a",lighten2:"#e57373",lighten1:"#ef5350",darken1:"#e53935",darken2:"#d32f2f",darken3:"#c62828",darken4:"#b71c1c",accent1:"#ff8a80",accent2:"#ff5252",accent3:"#ff1744",accent4:"#d50000"})),q=Object.freeze({base:"#e91e63",lighten5:"#fce4ec",lighten4:"#f8bbd0",lighten3:"#f48fb1",lighten2:"#f06292",lighten1:"#ec407a",darken1:"#d81b60",darken2:"#c2185b",darken3:"#ad1457",darken4:"#880e4f",accent1:"#ff80ab",accent2:"#ff4081",accent3:"#f50057",accent4:"#c51162"}),Q=Object.freeze({base:"#9c27b0",lighten5:"#f3e5f5",lighten4:"#e1bee7",lighten3:"#ce93d8",lighten2:"#ba68c8",lighten1:"#ab47bc",darken1:"#8e24aa",darken2:"#7b1fa2",darken3:"#6a1b9a",darken4:"#4a148c",accent1:"#ea80fc",accent2:"#e040fb",accent3:"#d500f9",accent4:"#aa00ff"}),Z=Object.freeze({base:"#673ab7",lighten5:"#ede7f6",lighten4:"#d1c4e9",lighten3:"#b39ddb",lighten2:"#9575cd",lighten1:"#7e57c2",darken1:"#5e35b1",darken2:"#512da8",darken3:"#4527a0",darken4:"#311b92",accent1:"#b388ff",accent2:"#7c4dff",accent3:"#651fff",accent4:"#6200ea"}),ee=Object.freeze({base:"#3f51b5",lighten5:"#e8eaf6",lighten4:"#c5cae9",lighten3:"#9fa8da",lighten2:"#7986cb",lighten1:"#5c6bc0",darken1:"#3949ab",darken2:"#303f9f",darken3:"#283593",darken4:"#1a237e",accent1:"#8c9eff",accent2:"#536dfe",accent3:"#3d5afe",accent4:"#304ffe"}),te=Object.freeze({base:"#2196f3",lighten5:"#e3f2fd",lighten4:"#bbdefb",lighten3:"#90caf9",lighten2:"#64b5f6",lighten1:"#42a5f5",darken1:"#1e88e5",darken2:"#1976d2",darken3:"#1565c0",darken4:"#0d47a1",accent1:"#82b1ff",accent2:"#448aff",accent3:"#2979ff",accent4:"#2962ff"}),ie=Object.freeze({base:"#03a9f4",lighten5:"#e1f5fe",lighten4:"#b3e5fc",lighten3:"#81d4fa",lighten2:"#4fc3f7",lighten1:"#29b6f6",darken1:"#039be5",darken2:"#0288d1",darken3:"#0277bd",darken4:"#01579b",accent1:"#80d8ff",accent2:"#40c4ff",accent3:"#00b0ff",accent4:"#0091ea"}),ae=Object.freeze({base:"#00bcd4",lighten5:"#e0f7fa",lighten4:"#b2ebf2",lighten3:"#80deea",lighten2:"#4dd0e1",lighten1:"#26c6da",darken1:"#00acc1",darken2:"#0097a7",darken3:"#00838f",darken4:"#006064",accent1:"#84ffff",accent2:"#18ffff",accent3:"#00e5ff",accent4:"#00b8d4"}),ne=Object.freeze({base:"#009688",lighten5:"#e0f2f1",lighten4:"#b2dfdb",lighten3:"#80cbc4",lighten2:"#4db6ac",lighten1:"#26a69a",darken1:"#00897b",darken2:"#00796b",darken3:"#00695c",darken4:"#004d40",accent1:"#a7ffeb",accent2:"#64ffda",accent3:"#1de9b6",accent4:"#00bfa5"}),se=Object.freeze({base:"#4caf50",lighten5:"#e8f5e9",lighten4:"#c8e6c9",lighten3:"#a5d6a7",lighten2:"#81c784",lighten1:"#66bb6a",darken1:"#43a047",darken2:"#388e3c",darken3:"#2e7d32",darken4:"#1b5e20",accent1:"#b9f6ca",accent2:"#69f0ae",accent3:"#00e676",accent4:"#00c853"}),re=Object.freeze({base:"#8bc34a",lighten5:"#f1f8e9",lighten4:"#dcedc8",lighten3:"#c5e1a5",lighten2:"#aed581",lighten1:"#9ccc65",darken1:"#7cb342",darken2:"#689f38",darken3:"#558b2f",darken4:"#33691e",accent1:"#ccff90",accent2:"#b2ff59",accent3:"#76ff03",accent4:"#64dd17"}),ce=Object.freeze({base:"#cddc39",lighten5:"#f9fbe7",lighten4:"#f0f4c3",lighten3:"#e6ee9c",lighten2:"#dce775",lighten1:"#d4e157",darken1:"#c0ca33",darken2:"#afb42b",darken3:"#9e9d24",darken4:"#827717",accent1:"#f4ff81",accent2:"#eeff41",accent3:"#c6ff00",accent4:"#aeea00"}),le=Object.freeze({base:"#ffeb3b",lighten5:"#fffde7",lighten4:"#fff9c4",lighten3:"#fff59d",lighten2:"#fff176",lighten1:"#ffee58",darken1:"#fdd835",darken2:"#fbc02d",darken3:"#f9a825",darken4:"#f57f17",accent1:"#ffff8d",accent2:"#ffff00",accent3:"#ffea00",accent4:"#ffd600"}),oe=Object.freeze({base:"#ffc107",lighten5:"#fff8e1",lighten4:"#ffecb3",lighten3:"#ffe082",lighten2:"#ffd54f",lighten1:"#ffca28",darken1:"#ffb300",darken2:"#ffa000",darken3:"#ff8f00",darken4:"#ff6f00",accent1:"#ffe57f",accent2:"#ffd740",accent3:"#ffc400",accent4:"#ffab00"}),he=Object.freeze({base:"#ff9800",lighten5:"#fff3e0",lighten4:"#ffe0b2",lighten3:"#ffcc80",lighten2:"#ffb74d",lighten1:"#ffa726",darken1:"#fb8c00",darken2:"#f57c00",darken3:"#ef6c00",darken4:"#e65100",accent1:"#ffd180",accent2:"#ffab40",accent3:"#ff9100",accent4:"#ff6d00"}),de=Object.freeze({base:"#ff5722",lighten5:"#fbe9e7",lighten4:"#ffccbc",lighten3:"#ffab91",lighten2:"#ff8a65",lighten1:"#ff7043",darken1:"#f4511e",darken2:"#e64a19",darken3:"#d84315",darken4:"#bf360c",accent1:"#ff9e80",accent2:"#ff6e40",accent3:"#ff3d00",accent4:"#dd2c00"}),ue=Object.freeze({base:"#795548",lighten5:"#efebe9",lighten4:"#d7ccc8",lighten3:"#bcaaa4",lighten2:"#a1887f",lighten1:"#8d6e63",darken1:"#6d4c41",darken2:"#5d4037",darken3:"#4e342e",darken4:"#3e2723"}),fe=Object.freeze({base:"#607d8b",lighten5:"#eceff1",lighten4:"#cfd8dc",lighten3:"#b0bec5",lighten2:"#90a4ae",lighten1:"#78909c",darken1:"#546e7a",darken2:"#455a64",darken3:"#37474f",darken4:"#263238"}),be=Object.freeze({base:"#9e9e9e",lighten5:"#fafafa",lighten4:"#f5f5f5",lighten3:"#eeeeee",lighten2:"#e0e0e0",lighten1:"#bdbdbd",darken1:"#757575",darken2:"#616161",darken3:"#424242",darken4:"#212121"}),ge=Object.freeze({black:"#000000",white:"#ffffff",transparent:"transparent"}),ve=Object.freeze({red:J,pink:q,purple:Q,deepPurple:Z,indigo:ee,blue:te,lightBlue:ie,cyan:ae,teal:ne,green:se,lightGreen:re,lime:ce,yellow:le,amber:oe,orange:he,deepOrange:de,brown:ue,blueGrey:fe,grey:be,shades:ge}),pe=i("7560");function me(e){return Object.keys(e).map((function(t){var i=e[t];return i.base?[i.base,i.darken4,i.darken3,i.darken2,i.darken1,i.lighten1,i.lighten2,i.lighten3,i.lighten4,i.lighten5]:[i.black,i.white,i.transparent]}))}var ke=A("#FFFFFF").rgba,we=A("#000000").rgba,ye=Object(C["a"])(pe["a"]).extend({name:"v-color-picker-swatches",props:{swatches:{type:Array,default:function(){return me(ve)}},disabled:Boolean,color:Object,maxWidth:[Number,String],maxHeight:[Number,String]},methods:{genColor:function(e){var t=this,i=this.$createElement("div",{style:{background:e}},[Object(j["k"])(this.color,B(e,null))&&this.$createElement(U["a"],{props:{small:!0,dark:Object($["l"])(this.color.rgba,ke)>2&&this.color.alpha>.5,light:Object($["l"])(this.color.rgba,we)>2&&this.color.alpha>.5}},"$success")]);return this.$createElement("div",{staticClass:"v-color-picker__color",on:{click:function(){return t.disabled||t.$emit("update:color",A("transparent"===e?"#00000000":e))}}},[i])},genSwatches:function(){var e=this;return this.swatches.map((function(t){var i=t.map(e.genColor);return e.$createElement("div",{staticClass:"v-color-picker__swatch"},i)}))}},render:function(e){return e("div",{staticClass:"v-color-picker__swatches",style:{maxWidth:Object(j["h"])(this.maxWidth),maxHeight:Object(j["h"])(this.maxHeight)}},[this.$createElement("div",this.genSwatches())])}}),Ce=i("c995"),Oe=Object(C["a"])(Ce["a"],pe["a"]).extend({name:"v-color-picker",props:{canvasHeight:{type:[String,Number],default:150},disabled:Boolean,dotSize:{type:[Number,String],default:10},flat:Boolean,hideCanvas:Boolean,hideSliders:Boolean,hideInputs:Boolean,hideModeSwitch:Boolean,mode:{type:String,default:"rgba",validator:function(e){return Object.keys(X).includes(e)}},showSwatches:Boolean,swatches:Array,swatchesMaxHeight:{type:[Number,String],default:150},value:{type:[Object,String]},width:{type:[Number,String],default:300}},data:function(){return{internalValue:F({r:255,g:0,b:0,a:1})}},computed:{hideAlpha:function(){return!!this.value&&!R(this.value)}},watch:{value:{handler:function(e){this.updateColor(B(e,this.internalValue))},immediate:!0}},methods:{updateColor:function(e){this.internalValue=e;var t=P(this.internalValue,this.value);Object(j["k"])(t,this.value)||(this.$emit("input",t),this.$emit("update:color",this.internalValue))},genCanvas:function(){return this.$createElement(H,{props:{color:this.internalValue,disabled:this.disabled,dotSize:this.dotSize,width:this.width,height:this.canvasHeight},on:{"update:color":this.updateColor}})},genControls:function(){return this.$createElement("div",{staticClass:"v-color-picker__controls"},[!this.hideSliders&&this.genPreview(),!this.hideInputs&&this.genEdit()])},genEdit:function(){var e=this;return this.$createElement(G,{props:{color:this.internalValue,disabled:this.disabled,hideAlpha:this.hideAlpha,hideModeSwitch:this.hideModeSwitch,mode:this.mode},on:{"update:color":this.updateColor,"update:mode":function(t){return e.$emit("update:mode",t)}}})},genPreview:function(){return this.$createElement(W,{props:{color:this.internalValue,disabled:this.disabled,hideAlpha:this.hideAlpha},on:{"update:color":this.updateColor}})},genSwatches:function(){return this.$createElement(ye,{props:{dark:this.dark,light:this.light,disabled:this.disabled,swatches:this.swatches,color:this.internalValue,maxHeight:this.swatchesMaxHeight},on:{"update:color":this.updateColor}})}},render:function(e){return e(m["a"],{staticClass:"v-color-picker",class:Object(c["a"])(Object(c["a"])({"v-color-picker--flat":this.flat},this.themeClasses),this.elevationClasses),props:{maxWidth:this.width}},[!this.hideCanvas&&this.genCanvas(),(!this.hideSliders||!this.hideInputs)&&this.genControls(),this.showSwatches&&this.genSwatches()])}}),xe=i("a523"),je=i("8fea"),_e=i("169a"),Se=i("ce7e"),$e=i("132d"),Ve=i("0fd9"),Te=i("2fa4"),Me=i("8654"),De=i("a844"),Ie=i("71d9"),Ee=i("2a7f"),Fe=Object(d["a"])(h,s,r,!1,null,null,null),ze=Fe.exports;f()(Fe,{VBtn:b["a"],VCard:g["a"],VCardActions:v["a"],VCardText:v["b"],VCardTitle:v["c"],VChip:p["a"],VColorPicker:Oe,VContainer:xe["a"],VDataTable:je["a"],VDialog:_e["a"],VDivider:Se["a"],VIcon:$e["a"],VRow:Ve["a"],VSpacer:Te["a"],VTextField:Me["a"],VTextarea:De["a"],VToolbar:Ie["a"],VToolbarTitle:Ee["a"]});var Ae={name:"tagHome",components:{"tag-table":ze}},Ne=Ae,Be=Object(d["a"])(Ne,a,n,!1,null,null,null);t["default"]=Be.exports;f()(Be,{VContainer:xe["a"]})},7863:function(e,t,i){},"9e29":function(e,t,i){},"9f7f1":function(e,t,i){},bb18:function(e,t,i){},d59f:function(e,t,i){}}]);
//# sourceMappingURL=chunk-62493d32.83666063.js.map