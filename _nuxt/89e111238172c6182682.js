(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{626:function(t,e,r){var content=r(640);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(31).default)("93d086d6",content,!0,{sourceMap:!1})},627:function(t,e,r){var content=r(642);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(31).default)("279f8e52",content,!0,{sourceMap:!1})},639:function(t,e,r){"use strict";var n=r(626);r.n(n).a},641:function(t,e,r){"use strict";var n=r(627);r.n(n).a},658:function(t,e,r){"use strict";r.r(e);r(62),r(48),r(39),r(32),r(49),r(37);var n=r(1),o=r(5),c=r(26);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var d,v,_,h,f={computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(source,!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(source).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.c)("common",["originInputData","addressInfo","etherEnough","estimateETHCost"]),{},Object(c.c)("bulksender",["bulksenderAddress","txUrl","gasPrice"]),{},Object(c.c)("token",["balance","tokenAddress","allowanceEnough","balanceEnough","approveTx","approveTxStatus"]),{},Object(c.c)("metamask",["balance","ethAccount","gasPrice"]),{},Object(c.b)("token",["allowanceNumber","balanceNumber"]),{},Object(c.b)("common",["translationWord"]),{},Object(c.b)("metamask",["currency"]),{},Object(c.b)("bulksender",["dappFee"]),{tokenBalance:function(){return this.tokenSelected.isETH?this.ethBalance:this.$store.getters["token/balanceNumber"]},addresses:function(){try{return this.$store.state.common.addressInfo.finalData.length}catch(t){return console.info(t),0}},ethBalance:function(){return this.$store.state.metamask.balance},decimals:{get:function(){return null==this.$store.state.token.tokenSelected?18:this.$store.state.token.tokenSelected.decimals}},showErrorTip:{get:function(){return this.hasDuplicated||this.hasInvalid}},gasPriceDict:function(){return console.info(this.$store.state.metamask.gasPrice),this.$store.state.metamask.gasPrice},gasPrice:{get:function(){return this.$store.state.bulksender.gasPrice},set:function(t){this.$store.dispatch("bulksender/setGasPrice",{gasPrice:t})}},tokenSelected:{get:function(){return null==this.$store.state.token.tokenSelected?{}:this.$store.state.token.tokenSelected},set:function(t){this.$store.dispatch("token/setTokenSelected",{selected:t})}},finalAmount:function(){return this.$store.state.common.addressInfo.finalAmount},finalAmountString:function(){return this.$store.state.common.addressInfo.finalAmountStr},showApprove:function(){return null!=this.tokenSelected&&!this.tokenSelected.isETH&&!this.allowanceEnough||this.showPrepareStep},allowanceNumber:function(){return this.tokenSelected.isETH?this.ethBalance:this.$store.getters["token/allowanceNumber"]},allowance:function(){return this.tokenSelected.isETH?this.ethBalance:this.$store.state.token.allowance},allowanceEnough:function(){return!(null==this.tokenSelected||!this.isETH)||this.$store.state.token.allowanceEnough},approveTx:function(){return this.$store.state.token.approveTx},approveTxStatus:{get:function(){return this.$store.state.token.approveTxStatus},set:function(t){this.$store.dispatch("token/setAproveTxStatus",{status:t})}}}),watch:{allowance:function(t){var e=this.finalAmount;this.$store.dispatch("token/checkAllowceEnough",{finalAmount:e}),console.info("allowanceChanged:",t)},gasPrice:function(t){this.$store.dispatch("common/estimateTotalEtherCost")},approveTx:function(t){},approveTxStatus:function(t){var e=0==this.approveErrorType;-2==t||1==t?1==t&&e?this.prepareBulksending():this.buttonLoading=!1:(this.buttonLoading=!0,e&&(this.showCheckingApprove=!0))}},mounted:function(){this.gasPrice=this.gasPriceDict.fast},methods:{prepareBulksending:(h=Object(n.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.showPrepareStep=!0,e=this.finalAmount,t.next=4,this.$store.dispatch("token/checkAllowceEnough",{finalAmount:e});case 4:return t.prev=4,t.next=7,this.$store.dispatch("common/prepareBulksending");case 7:t.next=14;break;case 9:return t.prev=9,t.t0=t.catch(4),this.showPrepareStep=!1,this.showPrepareStepError=!0,t.abrupt("return");case 14:this.buttonLoading=!1;case 15:case"end":return t.stop()}}),t,this,[[4,9]])}))),function(){return h.apply(this,arguments)}),approveToken:(_=Object(n.a)(regeneratorRuntime.mark((function t(){var e,r,n,o,c,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.finalAmount,1==this.approveType&&(e=this.tokenBalance),this.approveButtonDisable=!0,t.next=5,this.$store.dispatch("token/checkApproval",{amount:e});case 5:if(r=t.sent,n=r.usedApproveZero,o=r.errorType,this.approveErrorType=o,console.info(n),console.info(o),n){t.next=18;break}return t.next=14,this.$store.dispatch("token/approveForBulksender",{amount:e});case 14:c=t.sent,l=c.txHash,c.errorType,console.info(l);case 18:this.approveButtonDisable=!1;case 19:case"end":return t.stop()}}),t,this)}))),function(){return _.apply(this,arguments)}),approveZero:(v=Object(n.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.approveButtonDisable=!0,t.next=4,this.$store.dispatch("token/approveForBulksender",{amount:0});case 4:(e=t.sent).txHash,e.errorType,this.approveButtonDisable=!1;case 8:case"end":return t.stop()}}),t,this)}))),function(){return v.apply(this,arguments)}),clickSendNext:(d=Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.buttonLoading=!0,t.next=3,this.$store.dispatch("common/checkEtherEnough");case 3:t.sent&&(this.addressInfo,this.buttonLoading=!1,this.$router.push({path:"/send"}));case 5:case"end":return t.stop()}}),t,this)}))),function(){return d.apply(this,arguments)})},data:function(){return{showPrepareStep:!1,buttonLoading:!1,showCheckingApprove:!1,approveType:1,showPrepareStepError:!1,approveErrorType:0,approveButtonDisable:!1}}},m=(r(639),r(33)),k={transition:"confirm",name:"confirm",components:{ConfirmBody:Object(m.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"body-fix"},[r("div",{staticClass:"main-screen-width main-content"},[t.showApprove?r("div",[r("p",{staticClass:"label"},[t._v(t._s(t.translationWord.confirm.summaryTitle))]),t._v(" "),r("table",{staticClass:"networkSpeed table is-bordered"},[r("tbody",[r("tr",[r("td",{staticClass:"td-container"},[r("p",{staticClass:"td-title"},[t._v("\n       "+t._s(t._f("1000")(t.allowanceNumber))+" "+t._s(t.tokenSelected.symbol)+"\n     ")]),t._v(" "),r("p",{staticClass:"td-value"},[t._v("\n       "+t._s(t.translationWord.confirm.summary.totalTokenAllowanceTitle)+"\n     ")])]),t._v(" "),r("td",{staticClass:"td-container"},[r("p",{staticClass:"td-title"},[t._v("\n          "+t._s(t._f("1000")(t.finalAmount))+"  "+t._s(t.tokenSelected.symbol)+"\n       ")]),t._v(" "),r("p",{staticClass:"td-value"},[t._v("\n         "+t._s(t.translationWord.confirm.summary.totalAmountTitle)+"\n       ")])])]),t._v(" "),r("tr",[r("td",{staticClass:"td-container"},[r("p",{staticClass:"td-title"},[t._v("\n         "+t._s(t._f("1000")(t.ethBalance))+" "+t._s(t.currency)+"\n       ")]),t._v(" "),r("p",{staticClass:"td-value"},[t._v("\n\n         "+t._s(t.translationWord.confirm.summary.yourTitle)+t._s(t.currency)+t._s(t.translationWord.confirm.summary.balanceTitle)+"\n\n       ")])]),t._v(" "),r("td",{staticClass:"td-container"},[r("p",{staticClass:"td-title"},[t._v("\n       "+t._s(t._f("1000")(t.tokenBalance))+" "+t._s(t.tokenSelected.symbol)+"\n     ")]),t._v(" "),r("p",{staticClass:"td-value"},[t._v("\n       "+t._s(t.translationWord.confirm.summary.totalTokenBalanceTitle)+"\n     ")])])])])]),t._v(" "),r("p",{staticClass:"label"},[t._v(t._s(t.translationWord.home.approveTitle))]),t._v(" "),r("div",{staticClass:"level networkSpeed"},[r("div",{staticClass:"level-left"},[r("b-field",[r("b-radio",{staticClass:"radio-label-fix",attrs:{"native-value":"0",type:"is-info"},model:{value:t.approveType,callback:function(e){t.approveType=e},expression:"approveType"}},[r("p",{staticClass:"label"},[t._v("\n                  "+t._s(t.translationWord.home.approveOption1)+" ("+t._s(t._f("1000")(t.finalAmount))+")\n                ")])])],1)],1),t._v(" "),r("div",{staticClass:"level-right"},[r("b-field",[r("b-radio",{staticClass:"radio-label-fix",attrs:{"native-value":"1",type:"is-info"},model:{value:t.approveType,callback:function(e){t.approveType=e},expression:"approveType"}},[r("p",{staticClass:"label"},[t._v("\n                      "+t._s(t.translationWord.home.approveOption2)+" ("+t._s(t._f("1000")(t.tokenBalance))+")\n                    ")])])],1)],1)]),t._v(" "),t.showCheckingApprove||t.showPrepareStep?r("article",{staticClass:"notification is-info networkSpeed"},[r("div",[t._v("\n              "+t._s(t.translationWord.confirm.approveHashTitle)+"\n              "),r("br"),t._v(" "),r("a",{attrs:{target:"_blank",href:""+t.txUrl+t.approveTx}},[t._v(t._s(t.approveTx))]),t._v(" "),0==t.approveTxStatus?r("span",{staticClass:"tx-loading"}):t._e(),t._v(" "),1==t.approveTxStatus?r("b-icon",{attrs:{icon:"check-circle",size:"is-small",type:"is-success"}}):t._e(),t._v(" "),-2==t.approveTxStatus?r("b-icon",{attrs:{icon:"close-circle",size:"is-small",type:"is-danger"}}):t._e()],1),t._v(" "),t.showPrepareStep?r("div",[r("br"),t._v(" "),r("span",[t._v(t._s(this.translationWord.info.prepareStep5))]),t._v(" "),r("span",{staticClass:"tx-loading"})]):t._e()]):t._e()]):t._e(),t._v(" "),t.showApprove?t._e():r("div",[r("div",{staticClass:"networkSpeed"},[r("b-field",{attrs:{label:t.translationWord.confirm.networkSpeedTitle+" ("+t.gasPrice+" Gwei)"}},[r("b-slider",{attrs:{size:"is-medium",min:t.gasPriceDict.slow,max:t.gasPriceDict.instant,step:.1,"custom-formatter":function(t){return t+" Gwei"},rounded:""},model:{value:t.gasPrice,callback:function(e){t.gasPrice=e},expression:"gasPrice"}},[t._l([t.gasPriceDict.slow,t.gasPriceDict.standard,t.gasPriceDict.fast,t.gasPriceDict.instant],(function(e){return[e==t.gasPriceDict.slow?r("b-slider-tick",{staticClass:"b-slider-tick-label-left-fix",attrs:{value:e}},[t._v(t._s(t.translationWord.confirm.networkSpeedSlow))]):t._e(),t._v(" "),e==t.gasPriceDict.standard?r("b-slider-tick",{attrs:{value:e}},[t._v(t._s(t.translationWord.confirm.networkSpeedStandard))]):t._e(),t._v(" "),e==t.gasPriceDict.fast?r("b-slider-tick",{attrs:{value:e}},[t._v(t._s(t.translationWord.confirm.networkSpeedFast))]):t._e(),t._v(" "),e==t.gasPriceDict.instant?r("b-slider-tick",{staticClass:"b-slider-tick-label-right-fix",attrs:{value:e}},[t._v(t._s(t.translationWord.confirm.networkSpeedInstant))]):t._e()]}))],2)],1)],1),t._v(" "),r("p",{staticClass:"padding-medium"}),t._v(" "),r("p",{staticClass:"label"},[t._v(t._s(t.translationWord.confirm.summaryTitle))]),t._v(" "),r("div",[r("table",{staticClass:"networkSpeed table is-bordered"},[r("tbody",[r("tr",[r("td",{staticClass:"td-container"},[r("p",{staticClass:"td-title"},[t._v("\n         "+t._s(t.addresses)+"\n       ")]),t._v(" "),r("p",{staticClass:"td-value"},[t._v("\n         "+t._s(t.translationWord.confirm.summary.totalAddressesTitle)+"\n       ")])]),t._v(" "),r("td",{staticClass:"td-container"},[r("p",{staticClass:"td-title"},[t._v("\n        "+t._s(t._f("1000")(t.finalAmount))+"  "+t._s(t.tokenSelected.symbol)+"\n     ")]),t._v(" "),r("p",{staticClass:"td-value"},[t._v("\n       "+t._s(t.translationWord.confirm.summary.totalAmountTitle)+"\n     ")])])]),t._v(" "),r("tr",[r("td",{staticClass:"td-container"},[r("p",{staticClass:"td-title"},[t._v("\n      "+t._s(t.addressInfo.times)+"\n    ")]),t._v(" "),r("p",{staticClass:"td-value"},[t._v("\n     "+t._s(t.translationWord.confirm.summary.totalTxsTitle)+"\n    ")])]),t._v(" "),r("td",{staticClass:"td-container"},[r("p",{staticClass:"td-title"},[t._v("\n   "+t._s(t._f("1000")(t.tokenBalance))+" "+t._s(t.tokenSelected.symbol)+"\n ")]),t._v(" "),r("p",{staticClass:"td-value"},[t._v("\n   "+t._s(t.translationWord.confirm.summary.totalTokenBalanceTitle)+"\n ")])])]),t._v(" "),r("tr",[r("td",{staticClass:"td-container"},[r("p",{staticClass:"td-title"},[t._v("\n     "+t._s(t._f("1000")(t.estimateETHCost))+" "+t._s(t.currency)+"\n   ")]),t._v(" "),r("p",{staticClass:"td-value"},[t._v("\n     "+t._s(t.translationWord.confirm.summary.approximateCostTitle)+"\n   ")])]),t._v(" "),r("td",{staticClass:"td-container"},[r("p",{staticClass:"td-title"},[t._v("\n     "+t._s(t._f("1000")(t.ethBalance))+" "+t._s(t.currency)+"\n   ")]),t._v(" "),r("p",{staticClass:"td-value"},[t._v("\n     "+t._s(t.translationWord.confirm.summary.yourTitle)+t._s(t.currency)+t._s(t.translationWord.confirm.summary.balanceTitle)+"\n   ")])])])])])])]),t._v(" "),r("p",{staticClass:"padding-small"}),t._v(" "),t.showPrepareStepError?r("article",{staticClass:"notification is-danger networkSpeed"},[t._v("\n      "+t._s(t.translationWord.error.prepareDataError)+"\n    ")]):t._e(),t._v(" "),r("div",{staticClass:"networkSpeed"},[t.balanceEnough&&t.etherEnough?t._e():r("article",{staticClass:"notification is-danger"},[t.balanceEnough?t._e():r("p",[t._v(t._s(t.translationWord.error.insufficientTokenBalance))]),t._v(" "),t.balanceEnough&&!t.etherEnough?r("p",[t._v(t._s(t.translationWord.error.insufficientEtherBalance))]):t._e()]),t._v(" "),t.balanceEnough&&t.etherEnough&&(-1==t.approveErrorType||-2==t.approveErrorType)?r("div",[r("div",{staticClass:"label-container"},[r("div",{staticClass:"label is-danger-alert"},[t._v(t._s(t.translationWord.error.approveError))]),t._v(" "),-1==t.approveErrorType?r("div",{staticClass:"action has-text-danger"},[r("a",{staticClass:"has-text-danger",on:{click:function(e){return t.approveZero()}}},[t._v(t._s(t.translationWord.error.resetApprovalErrorOption2))])]):t._e()]),t._v(" "),r("article",{staticClass:"notification is-danger"},[r("div",{staticClass:"approveErrorContainer"},[-1==t.approveErrorType?r("p",[t._v(t._s(t.translationWord.error.resetApprovalError))]):t._e(),t._v(" "),-1==t.approveErrorType?r("p",[t._v("1."+t._s(t.translationWord.error.resetApprovalErrorOption1))]):t._e(),t._v(" "),-1==t.approveErrorType?r("p",[r("a",{on:{click:t.approveZero}},[t._v("2."+t._s(t.translationWord.error.resetApprovalErrorOption2))])]):t._e(),t._v(" "),-1==t.approveErrorType&&t.approveTx?r("p",[r("br"),t._v("\n        "+t._s(t.translationWord.confirm.resetApproval)+"\n        "),r("br"),t._v(" "),r("a",{attrs:{target:"_blank",href:""+t.txUrl+t.approveTx}},[t._v(t._s(t.approveTx))]),t._v(" "),0==t.approveTxStatus?r("span",{staticClass:"tx-loading"}):t._e(),t._v(" "),1==t.approveTxStatus?r("b-icon",{attrs:{icon:"check-circle",size:"is-small",type:"is-success"}}):t._e(),t._v(" "),-2==t.approveTxStatus?r("b-icon",{attrs:{icon:"close-circle",size:"is-small",type:"is-danger"}}):t._e()],1):t._e(),t._v(" "),-2==t.approveErrorType?r("p",[t._v(t._s(t.translationWord.error.approvalError))]):t._e()])])]):t._e(),t._v(" "),r("p",{staticClass:"padding-medium"}),t._v(" "),r("nuxt-link",{attrs:{to:"/"}},[r("a",{staticClass:"button is-info backButton"},[r("span",{staticClass:"is-size-4"},[r("b-icon",{attrs:{icon:"chevron-left",size:"is-default"}})],1)])]),t._v(" "),t.showApprove?t._e():r("b-button",{staticClass:"is-info",attrs:{loading:t.buttonLoading,disabled:!t.balanceEnough||!t.etherEnough},on:{click:t.clickSendNext}},[r("span",{staticClass:"is-size-7"},[t._v(t._s(t.translationWord.button.send))])]),t._v(" "),t.showApprove?r("b-button",{staticClass:"is-info",attrs:{loading:t.buttonLoading,disabled:!t.balanceEnough||!t.etherEnough||t.approveButtonDisable},on:{click:t.approveToken}},[r("span",{staticClass:"is-size-7"},[t._v(" "+t._s(t.translationWord.home.approveButton))])]):t._e()],1)])])}),[],!1,null,null,null).exports},data:function(){return{}}},C=(r(641),Object(m.a)(k,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"hero-body"},[e("transition",[e("ConfirmBody")],1)],1)}),[],!1,null,null,null));e.default=C.exports}}]);