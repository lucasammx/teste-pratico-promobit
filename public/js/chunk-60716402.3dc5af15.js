(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60716402"],{"197a":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"mt-7",attrs:{tag:"section"}},[a("div",{staticClass:"cards"},[a("div",[a("span",{staticClass:"name"},[t._v("Produtos")]),a("span",{staticClass:"value"},[t._v(t._s(t.products.length))])]),a("div",[a("span",{staticClass:"name"},[t._v("Tags")]),a("span",{staticClass:"value"},[t._v(t._s(t.tags.length))])])]),a("div",{staticClass:"chart-card mt-5",class:{"default-chart":!t.isChatDataAvailable}},[t.isChatDataAvailable?a("v-sparkline",{attrs:{labels:t.chatData.labels,value:t.chatData.values,color:"blue","line-width":"2",padding:"16"}}):a("p",[t._v("Nenhuma Produto cadastrado com Tag!")])],1)])},r=[],i=a("5530"),s=(a("d3b7"),a("ddb0"),a("2f62")),o={data:function(){return{chatData:{labels:[],values:[]}}},methods:Object(i["a"])({},Object(s["b"])({getDashboardData:"dashboard/getDashboardData"})),computed:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(s["c"])("products",["products"])),Object(s["c"])("tags",["tags"])),{},{isChatDataAvailable:function(){return this.chatData.labels.length>0&&this.chatData.values.length>0}}),created:function(){var t=this;this.getDashboardData().then((function(e){t.chatData.labels=e.labels,t.chatData.values=e.values}))}},c=o,l=(a("3c3d"),a("2877")),u=a("6544"),h=a.n(u),d=a("a523"),f=a("53ca"),b=(a("a9e3"),a("caad"),a("d81d"),a("cb29"),a("25f0"),a("99af"),a("fb6a"),a("a9ad")),p=a("58df"),g=a("2909");function y(t,e){var a=e.minX,n=e.maxX,r=e.minY,i=e.maxY,s=t.length,o=Math.max.apply(Math,Object(g["a"])(t)),c=Math.min.apply(Math,Object(g["a"])(t)),l=(n-a)/(s-1),u=(i-r)/(o-c||1);return t.map((function(t,e){return{x:a+e*l,y:i-(t-c)*u,value:t}}))}function m(t,e){var a=e.minX,n=e.maxX,r=e.minY,i=e.maxY,s=t.length,o=Math.max.apply(Math,Object(g["a"])(t)),c=Math.min.apply(Math,Object(g["a"])(t));c>0&&(c=0),o<0&&(o=0);var l=n/s,u=(i-r)/(o-c||1),h=i-Math.abs(c*u);return t.map((function(t,e){var n=Math.abs(u*t);return{x:a+e*l,y:h-n+ +(t<0)*n,height:n,value:t}}))}a("a15b");function v(t){return parseInt(t,10)}function x(t,e,a){return v(t.x+a.x)===v(2*e.x)&&v(t.y+a.y)===v(2*e.y)}function j(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function O(t,e,a){var n={x:t.x-e.x,y:t.y-e.y},r=Math.sqrt(n.x*n.x+n.y*n.y),i={x:n.x/r,y:n.y/r};return{x:e.x+i.x*a,y:e.y+i.y*a}}function S(t,e){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:75,r=t.shift(),i=t[t.length-1];return(a?"M".concat(r.x," ").concat(n-r.x+2," L").concat(r.x," ").concat(r.y):"M".concat(r.x," ").concat(r.y))+t.map((function(a,n){var i=t[n+1],s=t[n-1]||r,o=i&&x(i,a,s);if(!i||o)return"L".concat(a.x," ").concat(a.y);var c=Math.min(j(s,a),j(i,a)),l=c/2<e,u=l?c/2:e,h=O(s,a,u),d=O(i,a,u);return"L".concat(h.x," ").concat(h.y,"S").concat(a.x," ").concat(a.y," ").concat(d.x," ").concat(d.y)})).join("")+(a?"L".concat(i.x," ").concat(n-r.x+2," Z"):"")}var w=Object(p["a"])(b["a"]).extend({name:"VSparkline",inheritAttrs:!1,props:{autoDraw:Boolean,autoDrawDuration:{type:Number,default:2e3},autoDrawEasing:{type:String,default:"ease"},autoLineWidth:{type:Boolean,default:!1},color:{type:String,default:"primary"},fill:{type:Boolean,default:!1},gradient:{type:Array,default:function(){return[]}},gradientDirection:{type:String,validator:function(t){return["top","bottom","left","right"].includes(t)},default:"top"},height:{type:[String,Number],default:75},labels:{type:Array,default:function(){return[]}},labelSize:{type:[Number,String],default:7},lineWidth:{type:[String,Number],default:4},padding:{type:[String,Number],default:8},showLabels:Boolean,smooth:{type:[Boolean,Number,String],default:!1},type:{type:String,default:"trend",validator:function(t){return["trend","bar"].includes(t)}},value:{type:Array,default:function(){return[]}},width:{type:[Number,String],default:300}},data:function(){return{lastLength:0}},computed:{parsedPadding:function(){return Number(this.padding)},parsedWidth:function(){return Number(this.width)},parsedHeight:function(){return parseInt(this.height,10)},parsedLabelSize:function(){return parseInt(this.labelSize,10)||7},totalHeight:function(){var t=this.parsedHeight;return this.hasLabels&&(t+=1.5*parseInt(this.labelSize,10)),t},totalWidth:function(){var t=this.parsedWidth;return"bar"===this.type&&(t=Math.max(this.value.length*this._lineWidth,t)),t},totalValues:function(){return this.value.length},_lineWidth:function(){if(this.autoLineWidth&&"trend"!==this.type){var t=this.parsedPadding*(this.totalValues+1);return(this.parsedWidth-t)/this.totalValues}return parseFloat(this.lineWidth)||4},boundary:function(){if("bar"===this.type)return{minX:0,maxX:this.totalWidth,minY:0,maxY:this.parsedHeight};var t=this.parsedPadding;return{minX:t,maxX:this.totalWidth-t,minY:t,maxY:this.parsedHeight-t}},hasLabels:function(){return Boolean(this.showLabels||this.labels.length>0||this.$scopedSlots.label)},parsedLabels:function(){for(var t=[],e=this._values,a=e.length,n=0;t.length<a;n++){var r=e[n],i=this.labels[n];i||(i="object"===Object(f["a"])(r)?r.value:r),t.push({x:r.x,value:String(i)})}return t},normalizedValues:function(){return this.value.map((function(t){return"number"===typeof t?t:t.value}))},_values:function(){return"trend"===this.type?y(this.normalizedValues,this.boundary):m(this.normalizedValues,this.boundary)},textY:function(){var t=this.parsedHeight;return"trend"===this.type&&(t-=4),t},_radius:function(){return!0===this.smooth?8:Number(this.smooth)}},watch:{value:{immediate:!0,handler:function(){var t=this;this.$nextTick((function(){if(t.autoDraw&&"bar"!==t.type&&t.$refs.path){var e=t.$refs.path,a=e.getTotalLength();t.fill?(e.style.transformOrigin="bottom center",e.style.transition="none",e.style.transform="scaleY(0)",e.getBoundingClientRect(),e.style.transition="transform ".concat(t.autoDrawDuration,"ms ").concat(t.autoDrawEasing),e.style.transform="scaleY(1)"):(e.style.transition="none",e.style.strokeDasharray=a+" "+a,e.style.strokeDashoffset=Math.abs(a-(t.lastLength||0)).toString(),e.getBoundingClientRect(),e.style.transition="stroke-dashoffset ".concat(t.autoDrawDuration,"ms ").concat(t.autoDrawEasing),e.style.strokeDashoffset="0"),t.lastLength=a}}))}}},methods:{genGradient:function(){var t=this,e=this.gradientDirection,a=this.gradient.slice();a.length||a.push("");var n=Math.max(a.length-1,1),r=a.reverse().map((function(e,a){return t.$createElement("stop",{attrs:{offset:a/n,"stop-color":e||"currentColor"}})}));return this.$createElement("defs",[this.$createElement("linearGradient",{attrs:{id:this._uid,gradientUnits:"userSpaceOnUse",x1:"left"===e?"100%":"0",y1:"top"===e?"100%":"0",x2:"right"===e?"100%":"0",y2:"bottom"===e?"100%":"0"}},r)])},genG:function(t){return this.$createElement("g",{style:{fontSize:"8",textAnchor:"middle",dominantBaseline:"mathematical",fill:"currentColor"}},t)},genPath:function(){var t=y(this.normalizedValues,this.boundary);return this.$createElement("path",{attrs:{d:S(t,this._radius,this.fill,this.parsedHeight),fill:this.fill?"url(#".concat(this._uid,")"):"none",stroke:this.fill?"none":"url(#".concat(this._uid,")")},ref:"path"})},genLabels:function(t){var e=this,a=this.parsedLabels.map((function(a,n){return e.$createElement("text",{attrs:{x:a.x+t+e._lineWidth/2,y:e.textY+.75*e.parsedLabelSize,"font-size":Number(e.labelSize)||7}},[e.genLabel(a,n)])}));return this.genG(a)},genLabel:function(t,e){return this.$scopedSlots.label?this.$scopedSlots.label({index:e,value:t.value}):t.value},genBars:function(){if(this.value&&!(this.totalValues<2)){var t=m(this.normalizedValues,this.boundary),e=(Math.abs(t[0].x-t[1].x)-this._lineWidth)/2;return this.$createElement("svg",{attrs:{display:"block",viewBox:"0 0 ".concat(this.totalWidth," ").concat(this.totalHeight)}},[this.genGradient(),this.genClipPath(t,e,this._lineWidth,"sparkline-bar-"+this._uid),this.hasLabels?this.genLabels(e):void 0,this.$createElement("g",{attrs:{"clip-path":"url(#sparkline-bar-".concat(this._uid,"-clip)"),fill:"url(#".concat(this._uid,")")}},[this.$createElement("rect",{attrs:{x:0,y:0,width:this.totalWidth,height:this.height}})])])}},genClipPath:function(t,e,a,n){var r=this,i="number"===typeof this.smooth?this.smooth:this.smooth?2:0;return this.$createElement("clipPath",{attrs:{id:"".concat(n,"-clip")}},t.map((function(t){return r.$createElement("rect",{attrs:{x:t.x+e,y:t.y,width:a,height:t.height,rx:i,ry:i}},[r.autoDraw?r.$createElement("animate",{attrs:{attributeName:"height",from:0,to:t.height,dur:"".concat(r.autoDrawDuration,"ms"),fill:"freeze"}}):void 0])})))},genTrend:function(){return this.$createElement("svg",this.setTextColor(this.color,{attrs:Object(i["a"])(Object(i["a"])({},this.$attrs),{},{display:"block","stroke-width":this._lineWidth||1,viewBox:"0 0 ".concat(this.width," ").concat(this.totalHeight)})}),[this.genGradient(),this.hasLabels&&this.genLabels(-this._lineWidth/2),this.genPath()])}},render:function(t){if(!(this.totalValues<2))return"trend"===this.type?this.genTrend():this.genBars()}}),D=Object(l["a"])(c,n,r,!1,null,"7b274913",null);e["default"]=D.exports;h()(D,{VContainer:d["a"],VSparkline:w})},"20f6":function(t,e,a){},2909:function(t,e,a){"use strict";a.d(e,"a",(function(){return c}));var n=a("6b75");function r(t){if(Array.isArray(t))return Object(n["a"])(t)}a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("a630");function i(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var s=a("06c5");a("d9e2");function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return r(t)||i(t)||Object(s["a"])(t)||o()}},"3c3d":function(t,e,a){"use strict";a("a69a")},"4b85":function(t,e,a){},a523:function(t,e,a){"use strict";a("4de4"),a("d3b7"),a("b64b"),a("2ca0"),a("99af"),a("20f6"),a("4b85"),a("498a"),a("a15b");var n=a("2b0e");function r(t){return n["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,a){var n=a.props,r=a.data,i=a.children;r.staticClass="".concat(t," ").concat(r.staticClass||"").trim();var s=r.attrs;if(s){r.attrs={};var o=Object.keys(s).filter((function(t){if("slot"===t)return!1;var e=s[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e}));o.length&&(r.staticClass+=" ".concat(o.join(" ")))}return n.id&&(r.domProps=r.domProps||{},r.domProps.id=n.id),e(n.tag,r,i)}})}var i=a("d9f7");e["a"]=r("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var a,n=e.props,r=e.data,s=e.children,o=r.attrs;return o&&(r.attrs={},a=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e}))),n.id&&(r.domProps=r.domProps||{},r.domProps.id=n.id),t(n.tag,Object(i["a"])(r,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(a||[])}),s)}})},a69a:function(t,e,a){},a9ad:function(t,e,a){"use strict";var n=a("3835"),r=a("ade3"),i=a("5530"),s=(a("ac1f"),a("1276"),a("498a"),a("d3b7"),a("25f0"),a("2b0e")),o=a("d9bd"),c=a("7bc6");e["a"]=s["a"].extend({name:"colorable",props:{color:String},methods:{setBackgroundColor:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"===typeof e.style?(Object(o["b"])("style must be an object",this),e):"string"===typeof e.class?(Object(o["b"])("class must be an object",this),e):(Object(c["n"])(t)?e.style=Object(i["a"])(Object(i["a"])({},e.style),{},{"background-color":"".concat(t),"border-color":"".concat(t)}):t&&(e.class=Object(i["a"])(Object(i["a"])({},e.class),{},Object(r["a"])({},t,!0))),e)},setTextColor:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"===typeof e.style)return Object(o["b"])("style must be an object",this),e;if("string"===typeof e.class)return Object(o["b"])("class must be an object",this),e;if(Object(c["n"])(t))e.style=Object(i["a"])(Object(i["a"])({},e.style),{},{color:"".concat(t),"caret-color":"".concat(t)});else if(t){var a=t.toString().trim().split(" ",2),s=Object(n["a"])(a,2),l=s[0],u=s[1];e.class=Object(i["a"])(Object(i["a"])({},e.class),{},Object(r["a"])({},l+"--text",!0)),u&&(e.class["text--"+u]=!0)}return e}}})},b85c:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));a("a4d3"),a("e01a"),a("d3b7"),a("d28b"),a("3ca3"),a("ddb0"),a("d9e2");var n=a("06c5");function r(t,e){var a="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!a){if(Array.isArray(t)||(a=Object(n["a"])(t))||e&&t&&"number"===typeof t.length){a&&(t=a);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,o=!0,c=!1;return{s:function(){a=a.call(t)},n:function(){var t=a.next();return o=t.done,t},e:function(t){c=!0,s=t},f:function(){try{o||null==a["return"]||a["return"]()}finally{if(c)throw s}}}}},d9f7:function(t,e,a){"use strict";a.d(e,"a",(function(){return l})),a.d(e,"b",(function(){return h}));var n=a("5530"),r=a("3835"),i=a("b85c"),s=(a("ac1f"),a("1276"),a("498a"),a("b64b"),a("99af"),a("80d2")),o={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function c(t){var e,a={},n=Object(i["a"])(t.split(o.styleList));try{for(n.s();!(e=n.n()).done;){var c=e.value,l=c.split(o.styleProp),u=Object(r["a"])(l,2),h=u[0],d=u[1];h=h.trim(),h&&("string"===typeof d&&(d=d.trim()),a[Object(s["c"])(h)]=d)}}catch(f){n.e(f)}finally{n.f()}return a}function l(){var t,e={},a=arguments.length;while(a--)for(var r=0,i=Object.keys(arguments[a]);r<i.length;r++)switch(t=i[r],t){case"class":case"directives":arguments[a][t]&&(e[t]=h(e[t],arguments[a][t]));break;case"style":arguments[a][t]&&(e[t]=u(e[t],arguments[a][t]));break;case"staticClass":if(!arguments[a][t])break;void 0===e[t]&&(e[t]=""),e[t]&&(e[t]+=" "),e[t]+=arguments[a][t].trim();break;case"on":case"nativeOn":arguments[a][t]&&(e[t]=d(e[t],arguments[a][t]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[a][t])break;e[t]||(e[t]={}),e[t]=Object(n["a"])(Object(n["a"])({},arguments[a][t]),e[t]);break;default:e[t]||(e[t]=arguments[a][t])}return e}function u(t,e){return t?e?(t=Object(s["H"])("string"===typeof t?c(t):t),t.concat("string"===typeof e?c(e):e)):t:e}function h(t,e){return e?t&&t?Object(s["H"])(t).concat(e):e:t}function d(){if(!(arguments.length<=0?void 0:arguments[0]))return arguments.length<=1?void 0:arguments[1];if(!(arguments.length<=1?void 0:arguments[1]))return arguments.length<=0?void 0:arguments[0];for(var t={},e=2;e--;){var a=e<0||arguments.length<=e?void 0:arguments[e];for(var n in a)a[n]&&(t[n]?t[n]=[].concat(a[n],t[n]):t[n]=a[n])}return t}}}]);
//# sourceMappingURL=chunk-60716402.3dc5af15.js.map