(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-758b2aa4"],{"2f0e":function(e,t,r){},"432b":function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var a=r("5530"),n=r("5880"),i={computed:Object(a["a"])(Object(a["a"])({},Object(n["mapState"])({layout:function(e){return e.app.layout},navTheme:function(e){return e.app.theme},primaryColor:function(e){return e.app.color},colorWeak:function(e){return e.app.weak},fixedHeader:function(e){return e.app.fixedHeader},fixedSidebar:function(e){return e.app.fixedSidebar},contentWidth:function(e){return e.app.contentWidth},autoHideHeader:function(e){return e.app.autoHideHeader},isMobile:function(e){return e.app.isMobile},sideCollapsed:function(e){return e.app.sideCollapsed},multiTab:function(e){return e.app.multiTab}})),{},{isTopMenu:function(){return"topmenu"===this.layout}}),methods:{isSideMenu:function(){return!this.isTopMenu}}}},"6f94":function(e,t,r){"use strict";r("2f0e")},"88bc":function(e,t,r){(function(t){var r=1/0,a=9007199254740991,n="[object Arguments]",i="[object Function]",o="[object GeneratorFunction]",s="[object Symbol]",u="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,c=u||l||Function("return this")();function d(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function f(e,t){var r=-1,a=e?e.length:0,n=Array(a);while(++r<a)n[r]=t(e[r],r,e);return n}function p(e,t){var r=-1,a=t.length,n=e.length;while(++r<a)e[n+r]=t[r];return e}var m=Object.prototype,h=m.hasOwnProperty,y=m.toString,v=c.Symbol,g=m.propertyIsEnumerable,b=v?v.isConcatSpreadable:void 0,k=Math.max;function S(e,t,r,a,n){var i=-1,o=e.length;r||(r=T),n||(n=[]);while(++i<o){var s=e[i];t>0&&r(s)?t>1?S(s,t-1,r,a,n):p(n,s):a||(n[n.length]=s)}return n}function w(e,t){return e=Object(e),_(e,t,(function(t,r){return r in e}))}function _(e,t,r){var a=-1,n=t.length,i={};while(++a<n){var o=t[a],s=e[o];r(s,o)&&(i[o]=s)}return i}function x(e,t){return t=k(void 0===t?e.length-1:t,0),function(){var r=arguments,a=-1,n=k(r.length-t,0),i=Array(n);while(++a<n)i[a]=r[t+a];a=-1;var o=Array(t+1);while(++a<t)o[a]=r[a];return o[t]=i,d(e,this,o)}}function T(e){return R(e)||N(e)||!!(b&&e&&e[b])}function C(e){if("string"==typeof e||P(e))return e;var t=e+"";return"0"==t&&1/e==-r?"-0":t}function N(e){return q(e)&&h.call(e,"callee")&&(!g.call(e,"callee")||y.call(e)==n)}var R=Array.isArray;function O(e){return null!=e&&L(e.length)&&!I(e)}function q(e){return D(e)&&O(e)}function I(e){var t=j(e)?y.call(e):"";return t==i||t==o}function L(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=a}function j(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function D(e){return!!e&&"object"==typeof e}function P(e){return"symbol"==typeof e||D(e)&&y.call(e)==s}var M=x((function(e,t){return null==e?{}:w(e,f(S(t,1),C))}));e.exports=M}).call(this,r("c8ba"))},e941:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e._self._c;return t("div",[t("page-header-wrapper",{staticStyle:{margin:"-24px -1px 0"},attrs:{content:"配置组、场景、通知配置"},on:{back:function(){return e.$router.go(-1)}}},[t("div")]),t("a-card",{staticClass:"card",attrs:{title:"组配置",bordered:!1}},[t("group-form",{ref:"groupConfig",attrs:{showSubmit:!1}})],1),t("a-card",{staticClass:"card",attrs:{title:"通知配置",bordered:!1}},[t("notify-list",{ref:"notify"})],1),t("a-card",{staticClass:"card",attrs:{title:"场景配置",bordered:!1}},[t("scene-list",{ref:"scene"})],1),t("footer-tool-bar",{staticStyle:{width:"100%"},attrs:{"is-mobile":e.isMobile,collapsed:e.sideCollapsed}},[t("span",{staticClass:"popover-wrapper"},[t("a-popover",{attrs:{title:"表单校验信息",overlayClassName:"antd-pro-pages-forms-style-errorPopover",trigger:"click",getPopupContainer:function(e){return e.parentNode}}},[t("template",{slot:"content"},e._l(e.errors,(function(r){return t("li",{key:r.key,staticClass:"antd-pro-pages-forms-style-errorListItem",on:{click:function(t){return e.scrollToField(r.key)}}},[t("a-icon",{staticClass:"antd-pro-pages-forms-style-errorIcon",attrs:{type:"cross-circle-o"}}),t("div",{},[e._v(e._s(r.message))]),t("div",{staticClass:"antd-pro-pages-forms-style-errorField"},[e._v(e._s(r.fieldLabel))])],1)})),0),e.errors.length>0?t("span",{staticClass:"antd-pro-pages-forms-style-errorIcon"},[t("a-icon",{attrs:{type:"exclamation-circle"}}),e._v(e._s(e.errors.length)+" ")],1):e._e()],2)],1),t("a-button",{attrs:{type:"primary",loading:e.loading},on:{click:e.validate}},[e._v("提交")])],1)],1)},n=[],i=r("5530"),o=(r("d3b7"),r("d81d"),r("4de4"),r("b64b"),function(){var e=this,t=e._self._c;return t("a-form",{staticClass:"form",attrs:{form:e.form},on:{submit:e.handleSubmit}},[t("a-row",{staticClass:"form-row",attrs:{gutter:16}},[t("a-col",{attrs:{lg:6,md:12,sm:24}},[t("a-form-item",{attrs:{hidden:""}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["id"],expression:"[\n            'id',\n          ]"}],attrs:{hidden:""}})],1),t("a-form-item",{attrs:{label:"组名称"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["groupName",{rules:[{required:!0,message:"请输入组名称",whitespace:!0},{required:!0,max:64,message:"最多支持64个字符！"},{validator:e.validate}]}],expression:"[\n            'groupName',\n            {rules: [{ required: true, message: '请输入组名称', whitespace: true},{required: true, max: 64, message: '最多支持64个字符！'}, {validator: validate}]}\n          ]"}],attrs:{placeholder:"请输入组名称",maxLength:64,disabled:this.id&&this.id>0}})],1)],1),t("a-col",{attrs:{lg:6,md:12,sm:24}},[t("a-form-item",{attrs:{label:"状态"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["groupStatus",{rules:[{required:!0,message:"请选择状态类型"}]}],expression:"[\n            'groupStatus',\n            {rules: [{ required: true, message: '请选择状态类型'}]}\n          ]"}],attrs:{placeholder:"请选择状态"}},[t("a-select-option",{attrs:{value:"0"}},[e._v("停用")]),t("a-select-option",{attrs:{value:"1"}},[e._v("启动")])],1)],1)],1),t("a-col",{attrs:{lg:6,md:12,sm:24}},[t("a-form-item",{attrs:{label:"路由策略"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["routeKey",{rules:[{required:!0,message:"请选择路由策略"}]}],expression:"[\n            'routeKey',\n            {rules: [{ required: true, message: '请选择路由策略'}]}\n          ]"}],attrs:{placeholder:"请选择路由策略"}},e._l(e.routeKey,(function(r,a){return t("a-select-option",{key:a,attrs:{value:a}},[e._v(e._s(r))])})),1)],1)],1),t("a-col",{attrs:{lg:6,md:12,sm:24}},[t("a-form-item",{attrs:{label:"描述"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["description",{rules:[{required:!0,message:"请输入描述",whitespace:!0}]}],expression:"[\n            'description',\n            {rules: [{ required: true, message: '请输入描述', whitespace: true}]}\n          ]"}],attrs:{placeholder:"请输入描述",maxLength:256}})],1)],1),t("a-col",{attrs:{lg:3,md:6,sm:12}},[t("a-form-item",{attrs:{label:"指定分区"}},[t("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["groupPartition"],expression:"[\n            'groupPartition'\n          ]"}],attrs:{id:"inputNumber",placeholder:"分区",min:0,max:e.maxGroupPartition}})],1)],1),t("a-col",{attrs:{lg:3,md:6,sm:12}},[t("a-form-item",{attrs:{label:"Id生成模式"}},[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["idGeneratorMode",{rules:[{required:!0,message:"请选择Id生成模式"}]}],expression:"[\n            'idGeneratorMode',\n            {rules: [{ required: true, message: '请选择Id生成模式'}]}\n          ]"}],attrs:{placeholder:"请选择Id生成模式"}},e._l(e.idGenMode,(function(r,a){return t("a-select-option",{key:a,attrs:{value:a}},[e._v(e._s(r))])})),1)],1)],1),t("a-col",{attrs:{lg:3,md:6,sm:12}},[t("a-form-item",[t("span",{attrs:{slot:"label"},slot:"label"},[e._v(" 初始化场景  "),t("a-tooltip",{attrs:{title:"【是】: 当未查询到场景时默认生成一个场景(退避策略: 等级策略, 最大重试次数: 26); 【否】: 新增场景时必须先配置场景"}},[t("a-icon",{attrs:{type:"question-circle-o"}})],1)],1),t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["initScene",{rules:[{required:!0,message:"请选择是否初始化场景"}]}],expression:"[\n            'initScene',\n            {rules: [{ required: true, message: '请选择是否初始化场景'}]}\n          ]"}],attrs:{placeholder:"请选择是否初始化场景"}},e._l(e.initScene,(function(r,a){return t("a-select-option",{key:a,attrs:{value:a}},[e._v(e._s(r))])})),1)],1)],1)],1),e.showSubmit?t("a-form-item",[t("a-button",{attrs:{htmlType:"submit"}},[e._v("Submit")])],1):e._e()],1)}),s=[],u=(r("ac1f"),r("25f0"),r("0fea")),l=r("88bc"),c=r.n(l),d={name:"GroupForm",props:{showSubmit:{type:Boolean,default:!1}},data:function(){return{form:this.$form.createForm(this),maxGroupPartition:32,routeKey:{1:"一致性hash算法",2:"随机算法",3:"最近最久未使用算法"},idGenMode:{1:"号段模式",2:"雪花算法"},initScene:{0:"否",1:"是"}}},mounted:function(){var e=this;this.$nextTick((function(){Object(u["u"])().then((function(t){e.maxGroupPartition=t.data}));var t=e.$route.query.groupName;t&&Object(u["h"])(t).then((function(t){e.loadEditInfo(t.data)}))}))},methods:{handleSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFields((function(e,r){e||t.$notification["error"]({message:"Received values of form:",description:r})}))},validate:function(e,t,r){var a=/^[A-Za-z0-9_]+$/;a.test(t)||r(new Error("仅支持数字字母下划线")),r()},loadEditInfo:function(e){var t=this,r=this.form;new Promise((function(e){setTimeout(e,1500)})).then((function(){var a=c()(e,["id","groupName","routeKey","groupStatus","description","groupPartition","idGeneratorMode","initScene"]);a.groupStatus=a.groupStatus.toString(),a.routeKey=a.routeKey.toString(),a.idGeneratorMode=a.idGeneratorMode.toString(),a.initScene=a.initScene.toString(),t.id=a.id,r.setFieldsValue(a)}))}}},f=d,p=r("2877"),m=Object(p["a"])(f,o,s,!1,null,"7a95847c",null),h=m.exports,y=(r("7db0"),function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"table-page-search-wrapper"},[t("a-form",{attrs:{layout:"inline"}},[t("a-row",{attrs:{gutter:48}},[[t("a-col",{attrs:{md:8,sm:24}},[t("a-form-item",{attrs:{label:"场景名称"}},[t("a-input",{attrs:{placeholder:"请输入场景名称",allowClear:""},model:{value:e.queryParam.sceneName,callback:function(t){e.$set(e.queryParam,"sceneName",t)},expression:"queryParam.sceneName"}})],1)],1)],t("a-col",{attrs:{md:e.advanced?24:8,sm:24}},[t("span",{staticClass:"table-page-search-submitButtons",style:e.advanced&&{float:"right",overflow:"hidden"}||{}},[t("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.queryChange()}}},[e._v("查询")]),t("a-button",{staticStyle:{"margin-left":"8px"},on:{click:function(){return e.queryParam={}}}},[e._v("重置")])],1)])],2)],1)],1),t("a-table",{attrs:{columns:e.sceneColumns,"row-key":function(e){return e.key},dataSource:e.data,pagination:e.pagination,loading:e.memberLoading,scroll:{x:1800}},on:{change:e.handleTableChange},scopedSlots:e._u([e._l(["sceneName","description"],(function(r,a){return{key:r,fn:function(a,n){return[n.editable?t("a-input",{key:r,staticStyle:{margin:"-5px 0"},attrs:{value:a,placeholder:e.sceneColumns.find((function(e){return e.key===r})).title},on:{change:function(t){return e.handleChange(t.target.value,n.key,r)}}}):[e._v(e._s(a))]]}}})),{key:"sceneStatus",fn:function(r,a){return[a.editable?t("a-select",{staticStyle:{width:"100%"},attrs:{placeholder:"场景状态",value:0===r?"1":r},on:{change:function(t){return e.handleChange(t,a.key,"sceneStatus")}}},[t("a-select-option",{attrs:{value:"0"}},[e._v("停用")]),t("a-select-option",{attrs:{value:"1"}},[e._v("启用")])],1):[e._v(e._s(e.sceneStatus[r]))]]}},{key:"backOff",fn:function(r,a){return[a.editable?t("a-select",{staticStyle:{width:"100%"},attrs:{placeholder:"退避策略",value:0===r?null:r},on:{change:function(t){return e.handleChange(t,a.key,"backOff")}}},[t("a-select-option",{attrs:{value:"1"}},[e._v("延迟等级")]),t("a-select-option",{attrs:{value:"2"}},[e._v("固定时间")]),t("a-select-option",{attrs:{value:"3"}},[e._v("CRON表达式")]),t("a-select-option",{attrs:{value:"4"}},[e._v("随机等待")])],1):[e._v(e._s(e.backOffLabels[r]))]]}},{key:"maxRetryCount",fn:function(r,a){return[a.editable?t("a-input-number",{staticStyle:{width:"100%"},attrs:{min:1,max:e.max,value:r,placeholder:e.maxRetryCount[e.data.find((function(e){return e.key===a.key})).backOff].placeholder},on:{change:function(t){return e.handleChange(t,a.key,"maxRetryCount")}}}):[e._v(e._s(r))]]}},{key:"deadlineRequest",fn:function(r,a){return[a.editable?t("a-input-number",{staticStyle:{width:"100%"},attrs:{min:100,max:6e4,value:r,placeholder:"调用链超时时间(毫秒)"},on:{change:function(t){return e.handleChange(t,a.key,"deadlineRequest")}}}):[e._v(e._s(r)+"(毫秒)")]]}},{key:"triggerInterval",fn:function(r,a){return[a.editable?t("a-input",{staticStyle:{margin:"-5px 0"},attrs:{placeholder:e.triggerInterval[e.data.find((function(e){return e.key===a.key})).backOff].placeholder,value:r,disabled:"1"===e.data.find((function(e){return e.key===a.key})).backOff},on:{change:function(t){return e.handleChange(t.target.value,a.key,"triggerInterval")}}},[t("a-tooltip",{attrs:{slot:"suffix",title:e.triggerInterval[e.data.find((function(e){return e.key===a.key})).backOff].tooltip},slot:"suffix"},[t("a-icon",{staticStyle:{color:"rgba(0, 0, 0, 0.45)"},attrs:{type:"info-circle"}})],1)],1):[e._v(e._s(r)+"(秒)")]]}},{key:"operation",fn:function(r,a){return[a.editable?[a.isNew?t("span",[t("a",{on:{click:function(t){return e.saveRow(a)}}},[e._v("添加")]),t("a-divider",{attrs:{type:"vertical"}}),t("a-popconfirm",{attrs:{title:"是否要删除此行？"},on:{confirm:function(t){return e.remove(a.key)}}},[t("a",[e._v("删除")])])],1):t("span",[t("a",{on:{click:function(t){return e.saveRow(a)}}},[e._v("保存")]),t("a-divider",{attrs:{type:"vertical"}}),t("a",{on:{click:function(t){return e.cancel(a.key)}}},[e._v("取消")])],1)]:t("span",[t("a",{on:{click:function(t){return e.toggle(a.key)}}},[e._v("编辑")]),t("a-divider",{attrs:{type:"vertical"}}),t("a-popconfirm",{attrs:{title:"是否要删除此行？"},on:{confirm:function(t){return e.remove(a.key)}}},[t("a",[e._v("删除")])])],1)]}}],null,!0)}),t("a-button",{staticStyle:{width:"100%","margin-top":"16px","margin-bottom":"8px"},attrs:{type:"dashed",icon:"plus"},on:{click:e.newMember}},[e._v("新增成员")])],1)}),v=[],g=r("6b75");function b(e){if(Array.isArray(e))return Object(g["a"])(e)}r("a4d3"),r("e01a"),r("d28b"),r("3ca3"),r("ddb0"),r("a630");function k(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}var S=r("06c5");function w(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _(e){return b(e)||k(e)||Object(S["a"])(e)||w()}r("159b");var x=r("2af9"),T={name:"SceneList",components:{STable:x["j"]},data:function(){return{sceneColumns:[{title:"场景名称",dataIndex:"sceneName",key:"sceneName",width:"15%",scopedSlots:{customRender:"sceneName"}},{title:"场景状态",dataIndex:"sceneStatus",key:"sceneStatus",width:"8%",scopedSlots:{customRender:"sceneStatus"}},{title:"退避策略",dataIndex:"backOff",key:"backOff",width:"12%",scopedSlots:{customRender:"backOff"}},{title:"最大重试次数",dataIndex:"maxRetryCount",key:"maxRetryCount",width:"10%",scopedSlots:{customRender:"maxRetryCount"}},{title:"调用链超时时间",dataIndex:"deadlineRequest",key:"deadlineRequest",width:"10%",scopedSlots:{customRender:"deadlineRequest"}},{title:"间隔时间",dataIndex:"triggerInterval",key:"triggerInterval",width:"15%",scopedSlots:{customRender:"triggerInterval"}},{title:"描述",dataIndex:"description",key:"description",width:"18%",scopedSlots:{customRender:"description"}},{title:"操作",key:"action",fixed:"right",scopedSlots:{customRender:"operation"}}],data:[],formData:[],loading:!1,advanced:!1,memberLoading:!1,triggerIntervalDisabled:!1,max:26,pagination:{},backOffLabels:{1:"延迟等级",2:"固定时间",3:"CRON表达式",4:"随机等待"},sceneStatus:{0:"停用",1:"启用"},triggerInterval:{1:{placeholder:"",tooltip:""},2:{placeholder:"请输入固定间隔时间",tooltip:"请输入固定间隔时间"},3:{placeholder:"请输入CRON表达式",tooltip:"通过CRON表达式计算执行时间"},4:{placeholder:"请输入最大间隔时间",tooltip:"随机生成范围在[0, x]内的延迟时间; 其中x代表最大间隔时间"}},maxRetryCount:{1:{placeholder:"请输入延迟等级(max:26)",tooltip:"请输入延迟等级（max:26)"},2:{placeholder:"请输入最大重试次数",tooltip:"请输入最大重试次数"},3:{placeholder:"请输入最大重试次数",tooltip:"请输入最大重试次数"},4:{placeholder:"请输入最大重试次数",tooltip:"请输入最大重试次数"}},queryParam:{}}},created:function(){var e=this.$route.query.groupName;e&&this.fetch({groupName:e,size:6,page:1})},methods:{reset:function(){this.formData=[],this.data=[];var e=this.$route.query.groupName;e&&this.fetch({groupName:e,size:6,page:1})},handleTableChange:function(e,t,r){var a=Object(i["a"])({},this.pagination);a.current=e.current,this.pagination=a,this.fetch(Object(i["a"])({groupName:this.$route.query.groupName,size:e.pageSize,page:e.current,sortField:r.field,sortOrder:r.order},t))},queryChange:function(){this.fetch({groupName:this.$route.query.groupName,size:6,page:1,sceneName:this.queryParam.sceneName})},fetch:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.loading=!0,Object(u["s"])(t).then((function(t){e.data=[],t.data.map((function(t){e.loading=!1;var r=t.id,a=t.sceneName,n=t.sceneStatus,i=t.maxRetryCount,o=t.backOff,s=t.triggerInterval,u=t.description,l=t.deadlineRequest;e.data.push({key:r,sceneName:a,sceneStatus:n.toString(),maxRetryCount:i,backOff:o.toString(),triggerInterval:s,description:u,deadlineRequest:l,editable:!1,isNew:!1})}));var r=Object(i["a"])({},e.pagination);r.pageSize=t.size,r.current=t.page,r.total=t.total,e.pagination=r}))},remove:function(e){var t=this.data.find((function(t){return t.key===e})),r=t.key,a=t.sceneName,n=t.sceneStatus,i=t.maxRetryCount,o=t.backOff,s=t.triggerInterval,u=t.description,l=t.deadlineRequest;this.formData.push({key:r,sceneName:a,sceneStatus:n,maxRetryCount:i,backOff:o,triggerInterval:s,deadlineRequest:l,description:u,isDeleted:1});var c=this.data.filter((function(t){return t.key!==e}));this.data=c},saveRow:function(e){var t=this;this.memberLoading=!0;var r=e.key,a=e.sceneName,n=e.sceneStatus,i=e.maxRetryCount,o=e.backOff,s=e.triggerInterval,u=e.description,l=e.deadlineRequest;if(!a||!n||!i||!o||"1"!==o&&!s)return this.memberLoading=!1,void this.$message.error("请填写完整成员信息。");var c=/^[A-Za-z0-9_]{1,64}$/;if(!c.test(a))return this.memberLoading=!1,void this.$message.error("场景名称: 仅支持长度为:1~64位字符.格式为:数字、字母、下划线。");if(u.length>256)return this.memberLoading=!1,void this.$message.error("描述:  仅支持长度为:1~256位字符");if(("2"===o||"4"===o)&&s<10)return this.memberLoading=!1,void this.$message.error("描述:  间隔时间最小为10秒");var d=this.formData.find((function(e){return r===e.key}));d||this.formData.push({key:r,sceneName:a,sceneStatus:n,maxRetryCount:i,backOff:o,triggerInterval:s,description:u,deadlineRequest:l,isDeleted:0}),new Promise((function(e){setTimeout((function(){e({loop:!1})}),200)})).then((function(){var e=t.data.find((function(e){return e.key===r}));e.editable=!1,e.isNew=!1,t.memberLoading=!1}))},toggle:function(e){var t=this.data.find((function(t){return t.key===e}));t._originalData=Object(i["a"])({},t),t.editable=!t.editable},getRowByKey:function(e,t){var r=this.data;return(t||r).find((function(t){return t.key===e}))},cancel:function(e){var t=this.data.find((function(t){return t.key===e}));Object.keys(t).forEach((function(e){t[e]=t._originalData[e]})),t._originalData=void 0},handleChange:function(e,t,r){if("backOff"===r)switch(e){case"1":this.triggerIntervalDisabled=!0,this.max=26;break;default:this.triggerIntervalDisabled=!1,this.max=99999}var a=_(this.data),n=a.find((function(e){return t===e.key}));n&&(n[r]=e,this.data=a)},newMember:function(){var e=this.data.length;this.data.unshift({key:0===e?"1":(parseInt(this.data[e-1].key)+1).toString(),sceneName:"",sceneStatus:"1",maxRetryCount:null,backOff:"1",triggerInterval:"",deadlineRequest:"60000",description:"",editable:!0,isNew:!0})}}},C=T,N=Object(p["a"])(C,y,v,!1,null,"6e049b1e",null),R=N.exports,O=(r("5319"),r("caad"),r("2532"),function(){var e=this,t=e._self._c;return t("div",[t("a-table",{attrs:{columns:e.notifyColumns,dataSource:e.data,pagination:!1,loading:e.memberLoading,scroll:{x:1200}},scopedSlots:e._u([e._l(["description"],(function(r,a){return{key:r,fn:function(a,n){return[n.editable?t("a-input",{key:r,staticStyle:{margin:"-5px 0"},attrs:{value:a,placeholder:e.notifyColumns.find((function(e){return e.key===r})).title},on:{change:function(t){return e.handleChange(t.target.value,n.key,r)}}}):[e._v(e._s(a))]]}}})),{key:"notifyAttribute",fn:function(r,a){return[a.editable?t("a-textarea",{staticStyle:{margin:"-5px 0"},attrs:{value:e.parseJson(r,a),"auto-size":"",placeholder:e.notifyColumns.find((function(e){return"notifyAttribute"===e.key})).title},on:{click:function(t){return e.handleBlur(a)}}}):[t("span",{domProps:{innerHTML:e._s(e.parseJson(r,a).replaceAll("\r\n","</br>"))}})]]}},{key:"notifyScene",fn:function(r,a){return[a.editable?t("a-select",{staticStyle:{width:"100%"},attrs:{placeholder:"通知场景",value:r},on:{change:function(t){return e.handleChange(t,a.key,"notifyScene")}}},e._l(e.notifyScene,(function(r,a){return t("a-select-option",{key:a,attrs:{value:a}},[e._v(e._s(r))])})),1):[e._v(e._s(e.notifyScene[r]))]]}},{key:"notifyType",fn:function(r,a){return[a.editable?t("a-select",{staticStyle:{width:"100%"},attrs:{placeholder:"通知类型",value:r},on:{change:function(t){return e.handleChange(t,a.key,"notifyType")}}},e._l(e.notifyType,(function(r,a){return t("a-select-option",{key:a,attrs:{value:a}},[e._v(e._s(r))])})),1):[e._v(e._s(e.notifyType[r]))]]}},{key:"notifyThreshold",fn:function(r,a){return[a.editable?t("a-input-number",{staticStyle:{width:"100%"},attrs:{min:1,max:999999,value:r,disabled:e.notifyThresholdDisabled.includes(e.data.find((function(e){return e.key===a.key})).notifyScene),placeholder:"通知阈值"},on:{change:function(t){return e.handleChange(t,a.key,"notifyThreshold")}}}):[e._v(e._s(r))]]}},{key:"operation",fn:function(r,a){return[a.editable?[a.isNew?t("span",[t("a",{on:{click:function(t){return e.saveRow(a)}}},[e._v("添加")]),t("a-divider",{attrs:{type:"vertical"}}),t("a-popconfirm",{attrs:{title:"是否要删除此行？"},on:{confirm:function(t){return e.remove(a.key)}}},[t("a",[e._v("删除")])])],1):t("span",[t("a",{on:{click:function(t){return e.saveRow(a)}}},[e._v("保存")]),t("a-divider",{attrs:{type:"vertical"}}),t("a",{on:{click:function(t){return e.cancel(a.key)}}},[e._v("取消")])],1)]:t("span",[t("a",{on:{click:function(t){return e.toggle(a.key)}}},[e._v("编辑")]),t("a-divider",{attrs:{type:"vertical"}}),t("a-popconfirm",{attrs:{title:"是否要删除此行？"},on:{confirm:function(t){return e.remove(a.key)}}},[t("a",[e._v("删除")])])],1)]}}],null,!0)}),t("a-button",{staticStyle:{width:"100%","margin-top":"16px","margin-bottom":"8px"},attrs:{type:"dashed",icon:"plus"},on:{click:e.newMember}},[e._v("新增成员")]),t("a-modal",{attrs:{visible:e.visible,title:"添加配置",width:"1000px"},on:{ok:e.handleOk,cancel:e.handlerCancel}},[t("a-form",e._b({attrs:{form:e.form,"body-style":{padding:"0px 0px"}},on:{submit:e.handleSubmit}},"a-form",e.formItemLayout,!1),["1"===this.notifyTypeValue?t("a-form-item",{attrs:{label:"钉钉URL"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["dingDingUrl",{rules:[{required:!0,message:"请输入钉钉URL",whitespace:!0}]}],expression:"[\n            'dingDingUrl',\n            {rules: [{ required: true, message: '请输入钉钉URL', whitespace: true}]}\n          ]"}],attrs:{placeholder:"请输入钉钉URL"}})],1):e._e(),"4"===this.notifyTypeValue?t("a-form-item",{attrs:{label:"飞书URL"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["larkUrl",{rules:[{required:!0,message:"请输入飞书URL",whitespace:!0}]}],expression:"[\n            'larkUrl',\n            {rules: [{ required: true, message: '请输入飞书URL', whitespace: true}]}\n          ]"}],attrs:{placeholder:"请输入飞书URL"}})],1):e._e(),"2"===this.notifyTypeValue?t("a-form-item",{attrs:{label:"用户名"}},["2"===this.notifyTypeValue?t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["user",{rules:[{required:!0,message:"请输入用户名",whitespace:!0}]}],expression:"[\n            'user',\n            {rules: [{ required: true, message: '请输入用户名', whitespace: true}]}\n          ]"}],attrs:{placeholder:"请输入用户名"}}):e._e()],1):e._e(),"2"===this.notifyTypeValue?t("a-form-item",{attrs:{label:"密码"}},["2"===this.notifyTypeValue?t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["pass",{rules:[{required:!0,message:"请输入密码",whitespace:!0}]}],expression:"[\n            'pass',\n            {rules: [{ required: true, message: '请输入密码', whitespace: true}]}\n          ]"}],attrs:{placeholder:"请输入密码"}}):e._e()],1):e._e(),"2"===this.notifyTypeValue?t("a-form-item",{attrs:{label:"SMTP地址"}},["2"===this.notifyTypeValue?t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["host",{rules:[{required:!0,message:"请输入邮件服务器的SMTP地址",whitespace:!0}]}],expression:"[\n            'host',\n            {rules: [{ required: true, message: '请输入邮件服务器的SMTP地址', whitespace: true}]}\n          ]"}],attrs:{placeholder:"请输入邮件服务器的SMTP地址"}}):e._e()],1):e._e(),"2"===this.notifyTypeValue?t("a-form-item",{attrs:{label:"SMTP端口"}},["2"===this.notifyTypeValue?t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["port",{rules:[{required:!0,message:"请输入邮件服务器的SMTP端口",whitespace:!0}]}],expression:"[\n            'port',\n            {rules: [{ required: true, message: '请输入邮件服务器的SMTP端口', whitespace: true}]}\n          ]"}],attrs:{placeholder:"请输入邮件服务器的SMTP端口"}}):e._e()],1):e._e(),"2"===this.notifyTypeValue?t("a-form-item",{attrs:{label:"发件人"}},["2"===this.notifyTypeValue?t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["from",{rules:[{required:!0,message:"请输入发件人",whitespace:!0}]}],expression:"[\n            'from',\n            {rules: [{ required: true, message: '请输入发件人', whitespace: true}]}\n          ]"}],attrs:{placeholder:"请输入发件人"}}):e._e()],1):e._e(),"2"===this.notifyTypeValue?t("a-form-item",{attrs:{label:"收件人"}},["2"===this.notifyTypeValue?t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["tos",{rules:[{required:!0,message:"请输入收件人",whitespace:!0}]}],expression:"[\n            'tos',\n            {rules: [{ required: true, message: '请输入收件人', whitespace: true}]}\n          ]"}],attrs:{placeholder:"请输入收件人"}}):e._e()],1):e._e(),t("a-form-item",{attrs:{"wrapper-col":{xs:{span:24,offset:0},sm:{span:16,offset:8},lg:{span:7}}}})],1)],1)],1)}),q=[],I={name:"NotifyList",data:function(){return{notifyColumns:[{title:"通知类型",dataIndex:"notifyType",key:"notifyType",width:"12%",scopedSlots:{customRender:"notifyType"}},{title:"通知场景",dataIndex:"notifyScene",key:"notifyScene",width:"20%",scopedSlots:{customRender:"notifyScene"}},{title:"通知阈值",dataIndex:"notifyThreshold",key:"notifyThreshold",width:"12%",scopedSlots:{customRender:"notifyThreshold"}},{title:"配置属性",dataIndex:"notifyAttribute",key:"notifyAttribute",width:"30%",scopedSlots:{customRender:"notifyAttribute"}},{title:"描述",dataIndex:"description",key:"description",width:"15%",scopedSlots:{customRender:"description"}},{title:"操作",key:"action",fixed:"right",scopedSlots:{customRender:"operation"}}],data:[],formData:[],loading:!1,form:this.$form.createForm(this),formItemLayout:{labelCol:{lg:{span:7},sm:{span:7}},wrapperCol:{lg:{span:10},sm:{span:17}}},memberLoading:!1,notifyScene:{1:"重试数量超过阈值",2:"重试失败数量超过阈值",3:"客户端上报失败",4:"客户端组件异常"},notifyType:{1:"钉钉通知",2:"邮箱通知",4:"飞书"},notifyThresholdDisabled:["3","4"],visible:!1,key:"",notifyTypeValue:"1"}},created:function(){var e=this.$route.query.groupName;e&&this.getNotifyConfigList(e)},methods:{reset:function(){this.formData=[],this.data=[];var e=this.$route.query.groupName;e&&this.getNotifyConfigList(e)},getNotifyConfigList:function(e){var t=this;Object(u["k"])({groupName:e}).then((function(e){e.data.map((function(e){var r=e.id,a=e.notifyType,n=e.notifyThreshold,i=e.notifyScene,o=e.description,s=e.notifyAttribute;t.data.push({key:r,id:r,notifyType:a.toString(),notifyThreshold:n,notifyScene:i.toString(),description:o,notifyAttribute:JSON.parse(s),editable:!1,isNew:!1})}))}))},remove:function(e){var t=this.data.find((function(t){return e===t.key})),r=t.id,a=t.key,n=t.notifyType,i=t.notifyThreshold,o=t.notifyAttribute,s=t.notifyScene,u=t.description;this.formData.push({key:a,id:r,notifyType:n,notifyThreshold:i,notifyScene:s,notifyAttribute:JSON.stringify(o),description:u,isDeleted:1});var l=this.data.filter((function(e){return e.key!==a}));this.data=l},saveRow:function(e){var t=this;this.memberLoading=!0;var r=e.id,a=e.key,n=e.notifyType,i=e.notifyThreshold,o=e.notifyAttribute,s=e.notifyScene,u=e.description;if(!n||!s||!o||!u||!this.notifyThresholdDisabled.includes(s)&&!i)return this.memberLoading=!1,void this.$message.error("请填写完整成员信息。");var l=this.formData.find((function(e){return a===e.key}));l||this.formData.push({key:a,id:r,notifyType:n,notifyThreshold:i,notifyScene:s,notifyAttribute:JSON.stringify(o),description:u,isDeleted:0}),new Promise((function(e){setTimeout((function(){e({loop:!1})}),100)})).then((function(){var e=t.data.find((function(e){return e.key===a}));e.editable=!1,e.isNew=!1,t.memberLoading=!1}))},toggle:function(e){var t=this.data.find((function(t){return t.key===e}));t._originalData=Object(i["a"])({},t),t.editable=!t.editable},getRowByKey:function(e,t){var r=this.data;return(t||r).find((function(t){return t.key===e}))},cancel:function(e){var t=this.data.find((function(t){return t.key===e}));Object.keys(t).forEach((function(e){t[e]=t._originalData[e]})),t._originalData=void 0},handleChange:function(e,t,r){var a=_(this.data),n=a.find((function(e){return t===e.key}));n&&(n[r]=e,this.data=a)},handleBlur:function(e){var t=this;this.key=e.key,this.notifyTypeValue=e.notifyType,new Promise((function(e){setTimeout(e,1500)})).then((function(){var r=t.form,a=c()(e.notifyAttribute,["dingDingUrl","larkUrl","user","pass","host","port","from","tos"]);r.setFieldsValue(a)})),this.visible=!this.visible},handleOk:function(){var e=this;this.form.validateFields((function(t,r){t||(e.handleChange(r,e.key,"notifyAttribute"),e.visible=!1,e.key="")}))},handleSubmit:function(e){e.preventDefault()},handlerCancel:function(){this.visible=!1},parseJson:function(e,t){if(!e)return null;var r="用户名:"+e["user"]+";\r\n密码:"+e["pass"]+";\r\nSMTP地址:"+e["host"]+";\r\nSMTP端口:"+e["port"]+";\r\n发件人:"+e["from"]+";\r\n收件人:"+e["tos"]+";";return"1"===t.notifyType?r="钉钉地址:"+e["dingDingUrl"]+";":"4"===t.notifyType&&(r="飞书地址:"+e["larkUrl"]+";"),r},newMember:function(){var e=this.data.length;this.data.push({key:0===e?"1":(parseInt(this.data[e-1].key)+1).toString(),notifyType:"1",notifyScene:"1",notifyThreshold:null,notifyAttribute:"",description:"",editable:!0,isNew:!0});var t=this.form;t.resetFields()}}},L=I,j=Object(p["a"])(L,O,q,!1,null,"48f6ffd0",null),D=j.exports,P=r("5a70"),M=r("432b"),A={groupName:"组名称",groupStatus:"组状态",description:"描述"},$={name:"AdvancedForm",mixins:[M["a"]],components:{FooterToolBar:P["a"],GroupForm:h,SceneList:R,NotifyList:D},data:function(){return{loading:!1,memberLoading:!1,errors:[]}},methods:{handleSubmit:function(e){e.preventDefault()},validate:function(){var e=this,t=this.$refs,r=t.groupConfig,a=t.scene,n=t.notify,o=this.$notification,s=new Promise((function(e,t){r.form.validateFields((function(r,a){r?t(r):e(a)}))}));this.errors=[],s.then((function(t){t["id"]||(t["id"]=0),t["sceneList"]=a.formData,t["notifyList"]=n.formData,Object(u["z"])(t).then((function(t){0===t.status?o["error"]({message:t.message}):(o["success"]({message:t.message}),e.$refs.notify.reset(),e.$router.go(-1))}))})).catch((function(){var t=Object.assign({},r.form.getFieldsError()),a=Object(i["a"])({},t);e.errorList(a)}))},errorList:function(e){e&&0!==e.length&&(this.errors=Object.keys(e).filter((function(t){return e[t]})).map((function(t){return{key:t,message:e[t][0],fieldLabel:A[t]}})))},scrollToField:function(e){var t=document.querySelector('label[for="'.concat(e,'"]'));t&&t.scrollIntoView(!0)}}},F=$,V=(r("6f94"),Object(p["a"])(F,a,n,!1,null,"73b0ee39",null));t["default"]=V.exports}}]);