!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("@misk/core"),require("redux-saga/effects"),require("reselect"),require("connected-react-router"),require("redux"),require("@misk/common"),require("axios"),require("immutable"),require("react-router"),require("styled-components"),require("react-redux"),require("@blueprintjs/core")):"function"==typeof define&&define.amd?define(["react","@misk/core","redux-saga/effects","reselect","connected-react-router","redux","@misk/common","axios","immutable","react-router","styled-components","react-redux","@blueprintjs/core"],t):"object"==typeof exports?exports.Palette=t(require("react"),require("@misk/core"),require("redux-saga/effects"),require("reselect"),require("connected-react-router"),require("redux"),require("@misk/common"),require("axios"),require("immutable"),require("react-router"),require("styled-components"),require("react-redux"),require("@blueprintjs/core")):(e.MiskTabs=e.MiskTabs||{},e.MiskTabs.Palette=t(e.React,e.Misk.Components,e.ReduxSagaEffects,e.Reselect,e.ConnectedReactRouter,e.Redux,e.Misk.Common,e.Axios,e.Immutable,e.ReactRouter,e.StyledComponents,e.ReactRedux,e.Blueprint.Core))}("undefined"!=typeof self?self:this,function(e,t,r,n,o,u,a,i,c,l,s,f,p){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=9)}([function(e,t,r){"use strict";r.r(t),r.d(t,"__extends",function(){return o}),r.d(t,"__assign",function(){return u}),r.d(t,"__rest",function(){return a}),r.d(t,"__decorate",function(){return i}),r.d(t,"__param",function(){return c}),r.d(t,"__metadata",function(){return l}),r.d(t,"__awaiter",function(){return s}),r.d(t,"__generator",function(){return f}),r.d(t,"__exportStar",function(){return p}),r.d(t,"__values",function(){return d}),r.d(t,"__read",function(){return m}),r.d(t,"__spread",function(){return _}),r.d(t,"__await",function(){return h}),r.d(t,"__asyncGenerator",function(){return y}),r.d(t,"__asyncDelegator",function(){return b}),r.d(t,"__asyncValues",function(){return v}),r.d(t,"__makeTemplateObject",function(){return S}),r.d(t,"__importStar",function(){return x}),r.d(t,"__importDefault",function(){return w});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function o(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var u=function(){return(u=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function a(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&(r[n[o]]=e[n[o]])}return r}function i(e,t,r,n){var o,u=arguments.length,a=u<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(a=(u<3?o(a):u>3?o(t,r,a):o(t,r))||a);return u>3&&a&&Object.defineProperty(t,r,a),a}function c(e,t){return function(r,n){t(r,n,e)}}function l(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function s(e,t,r,n){return new(r||(r=Promise))(function(o,u){function a(e){try{c(n.next(e))}catch(e){u(e)}}function i(e){try{c(n.throw(e))}catch(e){u(e)}}function c(e){e.done?o(e.value):new r(function(t){t(e.value)}).then(a,i)}c((n=n.apply(e,t||[])).next())})}function f(e,t){var r,n,o,u,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function i(u){return function(i){return function(u){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&u[0]?n.return:u[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,u[1])).done)return o;switch(n=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return a.label++,{value:u[1],done:!1};case 5:a.label++,n=u[1],u=[0];continue;case 7:u=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){a=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){a.label=u[1];break}if(6===u[0]&&a.label<o[1]){a.label=o[1],o=u;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(u);break}o[2]&&a.ops.pop(),a.trys.pop();continue}u=t.call(e,a)}catch(e){u=[6,e],n=0}finally{r=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,i])}}}function p(e,t){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}function d(e){var t="function"==typeof Symbol&&e[Symbol.iterator],r=0;return t?t.call(e):{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}}}function m(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,u=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=u.next()).done;)a.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=u.return)&&r.call(u)}finally{if(o)throw o.error}}return a}function _(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(m(arguments[t]));return e}function h(e){return this instanceof h?(this.v=e,this):new h(e)}function y(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(e,t||[]),u=[];return n={},a("next"),a("throw"),a("return"),n[Symbol.asyncIterator]=function(){return this},n;function a(e){o[e]&&(n[e]=function(t){return new Promise(function(r,n){u.push([e,t,r,n])>1||i(e,t)})})}function i(e,t){try{(r=o[e](t)).value instanceof h?Promise.resolve(r.value.v).then(c,l):s(u[0][2],r)}catch(e){s(u[0][3],e)}var r}function c(e){i("next",e)}function l(e){i("throw",e)}function s(e,t){e(t),u.shift(),u.length&&i(u[0][0],u[0][1])}}function b(e){var t,r;return t={},n("next"),n("throw",function(e){throw e}),n("return"),t[Symbol.iterator]=function(){return this},t;function n(n,o){t[n]=e[n]?function(t){return(r=!r)?{value:h(e[n](t)),done:"return"===n}:o?o(t):t}:o}}function v(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=d(e),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise(function(n,o){(function(e,t,r,n){Promise.resolve(n).then(function(t){e({value:t,done:r})},t)})(n,o,(t=e[r](t)).done,t.value)})}}}function S(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function x(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function w(e){return e&&e.__esModule?e:{default:e}}},function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r(0).__exportStar(r(20),t);var n=r(22);t.DucksTabContainer=n.default;var o=r(26);t.NoDucksTabContainer=o.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0).__importDefault(r(24));t.Table=n.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=r(2),u=r(2);t.dispatchSimpleNetwork=u.dispatchSimpleNetwork;var a=r(13),i=r(14),c=r(6),l=n.__importStar(r(7));n.__exportStar(r(7),t),t.rootDispatcher=n.__assign({},o.dispatchSimpleNetwork),t.rootReducer=function(e){return i.combineReducers({palette:l.default,router:a.connectRouter(e),simpleNetwork:o.SimpleNetworkReducer})},t.rootSaga=function(){return n.__generator(this,function(e){switch(e.label){case 0:return[4,c.all([c.fork(l.watchPaletteSagas),c.fork(o.watchSimpleNetworkSagas)])];case 1:return e.sent(),[2]}})}},function(e,t){e.exports=r},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(0),u=r(15),a=o.__importDefault(r(16)),i=r(17),c=r(6),l=r(8);function s(){var e,r;return o.__generator(this,function(n){switch(n.label){case 0:return n.trys.push([0,3,,5]),[4,c.call(a.default.get,"https://jsonplaceholder.typicode.com/posts/")];case 1:return e=n.sent().data,[4,c.put(t.dispatchPalette.success({data:e}))];case 2:return n.sent(),[3,5];case 3:return r=n.sent(),[4,c.put(t.dispatchPalette.failure({error:o.__assign({},r)}))];case 4:return n.sent(),[3,5];case 5:return[2]}})}!function(e){e.DINOSAUR="PALETTE_DINOSAUR",e.SUCCESS="PALETTE_SUCCESS",e.FAILURE="PALETTE_FAILURE"}(n=t.PALETTE||(t.PALETTE={})),t.dispatchPalette={dinosaur:function(){return u.createAction(n.DINOSAUR,{error:null,loading:!0,success:!1})},failure:function(e){return u.createAction(n.FAILURE,o.__assign({},e,{loading:!1,success:!1}))},success:function(e){return u.createAction(n.SUCCESS,o.__assign({},e,{error:null,loading:!1,success:!0}))}},t.watchPaletteSagas=function(){return o.__generator(this,function(e){switch(e.label){case 0:return[4,c.all([c.takeLatest(n.DINOSAUR,s)])];case 1:return e.sent(),[2]}})};var f=i.fromJS(o.__assign({},u.defaultState.toJS()));t.default=function(e,t){switch(void 0===e&&(e=f),t.type){case n.DINOSAUR:case n.FAILURE:case n.SUCCESS:return e.merge(t.payload);default:return e}},t.paletteState=function(e){return e.palette},t.paletteSelector=function(){return l.createSelector(t.paletteState,function(e){return e.toJS()})}},function(e,t){e.exports=n},function(e,t,r){r(10),e.exports=r(12)},function(e,t,r){"use strict";e.exports=r(11)},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=(n=r(1))&&"object"==typeof n&&"default"in n?n.default:n,u=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},i=function(e){function t(){return u(this,t),a(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){return o.Children.only(this.props.children)},t}(o.Component);t.AppContainer=i,t.hot=function(){return function(e){return e}},t.areComponentsEqual=function(e,t){return e===t},t.setConfig=function(){},t.cold=function(e){return e}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=r(2),u=n.__importStar(r(5)),a=n.__importDefault(r(18));n.__exportStar(r(4),t),n.__exportStar(r(3),t),o.createIndex("palette",o.createApp(a.default),u)},function(e,t){e.exports=o},function(e,t){e.exports=u},function(e,t){e.exports=a},function(e,t){e.exports=i},function(e,t){e.exports=c},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0).__importStar(r(1)),o=r(19),u=r(3),a=n.createElement("div",null,n.createElement(o.Switch,null,n.createElement(o.Route,{path:"/dashboard/palette/",component:u.DashboardContainer}),n.createElement(o.Route,{path:"/palette/",component:u.DucksTabContainer}),n.createElement(o.Route,{path:"/_tab/palette/",component:u.DucksTabContainer}),n.createElement(o.Route,{path:"/misk-web/examples/services/dashboard/demo/palette/",component:u.DucksTabContainer})));t.default=a},function(e,t){e.exports=l},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(0),u=r(2),a=o.__importStar(r(1)),i=o.__importDefault(r(21)),c=r(3),l=i.default(u.ResponsiveContainer).withConfig({displayName:"TabContainer"})(n||(n=o.__makeTemplateObject(["\n  position: relative;\n  top: 110px;\n  padding-left: 5px;\n"],["\n  position: relative;\n  top: 110px;\n  padding-left: 5px;\n"])));t.DashboardContainer=function(){return a.createElement("div",null,a.createElement(u.Navbar,{homeName:"Palette"}),a.createElement(l,null,a.createElement(c.DucksTabContainer,null)))}},function(e,t){e.exports=s},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=r(2),u=n.__importStar(r(1)),a=r(23),i=r(8),c=r(4),l=r(5),s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n.__extends(t,e),t.prototype.componentDidMount=function(){this.props.get("cars","https://square.github.io/misk-web/examples/data/demo/cars.json")},t.prototype.render=function(){return this.props.simpleNetwork?u.createElement(c.Table,{data:[]}):u.createElement(o.OfflineComponent,{title:"Error Loading Palette Short Urls",error:this.props.palette.error})},t}(u.Component),f=n.__assign({},l.rootDispatcher);t.default=a.connect(function(e){return i.createStructuredSelector({palette:l.paletteSelector(),simpleNetwork:function(){return e.simpleNetwork.toJS()}})},f)(s)},function(e,t){e.exports=f},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=r(25),u=n.__importStar(r(1)),a=function(e){var t=e.data;return u.createElement("tr",null,u.createElement("td",null,t.created_at),u.createElement("td",null,u.createElement("a",{href:t.long_url},t.long_url)),u.createElement("td",null,u.createElement("a",{href:t.short_url},t.short_url)),u.createElement("td",null,t.token),u.createElement("td",null,t.updated_at))};t.Table=function(e){var t=e.data;return u.createElement("div",null,u.createElement(o.H1,null,"Table"),u.createElement(o.HTMLTable,{bordered:!0,striped:!0},u.createElement("thead",null,u.createElement("tr",null,u.createElement("th",null,"Created At"),u.createElement("th",null,"Long Url"),u.createElement("th",null,"Short Url"),u.createElement("th",null,"Token"),u.createElement("th",null,"Updated At"))),u.createElement("tbody",null,t&&t.map(function(e){return u.createElement(a,{data:e})}))))},t.default=t.Table},function(e,t){e.exports=p},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(0),o=r(2),u=n.__importStar(r(1)),a=r(4),i="https://square.github.io/misk-web/examples/data/demo/shortUrls.json",c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={shortUrls:o.initialResponseState()},t}return n.__extends(t,e),t.prototype.componentDidMount=function(){return n.__awaiter(this,void 0,void 0,function(){var e,t,r;return n.__generator(this,function(u){switch(u.label){case 0:return e=this.setState,t=[{},this.state],r={},[4,o.get(i)];case 1:return e.apply(this,[n.__assign.apply(void 0,t.concat([(r.shortUrls=u.sent(),r)]))]),[2]}})})},t.prototype.render=function(){return this.state.shortUrls.data?u.createElement(a.Table,{data:this.state.shortUrls.data.urlTokenMetadata}):u.createElement(o.OfflineComponent,{title:"Error Loading Palette Short Urls",error:this.state.shortUrls.error,endpoint:i})},t}(u.PureComponent);t.default=c}])});