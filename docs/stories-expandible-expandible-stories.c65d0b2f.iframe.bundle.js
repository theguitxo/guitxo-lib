(self.webpackChunkguitxo_lib=self.webpackChunkguitxo_lib||[]).push([[533],{"./src/stories/expandible/expandible.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>expandible_stories});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var expandible_componentngResource=__webpack_require__("./projects/elements/expandible/components/expandible.component.scss?ngResource"),expandible_componentngResource_default=__webpack_require__.n(expandible_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let GuitxoExpandibleComponent=class GuitxoExpandibleComponent{};GuitxoExpandibleComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"guitxo-expandible",template:'<div class="guitxo-expandible__container">\r\n  <div class="guitxo-expandible__header">\r\n    <div class="guitxo-expandible__title">\r\n\r\n    </div>\r\n    <div class="guitxo-expandible__switch">\r\n      <span class="icon-plus"></span>\r\n    </div>\r\n  </div>\r\n</div>',styles:[expandible_componentngResource_default()]})],GuitxoExpandibleComponent);const expandible_stories={title:"Expandible",component:GuitxoExpandibleComponent,tags:["autodocs"],render:args=>({})},Default={}},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./projects/elements/expandible/components/expandible.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,'@font-face {\n  font-family: "icomoon";\n  src: url(\'icomoon.035772f114b783b1.eot?7d1hhs\');\n  src: url(\'icomoon.035772f114b783b1.eot?7d1hhs#iefix\') format("embedded-opentype"), url(\'icomoon.83bfd0bc714258ba.ttf?7d1hhs\') format("truetype"), url(\'icomoon.2daac0b33a74df71.woff?7d1hhs\') format("woff"), url(\'icomoon.2d336ec20c846945.svg?7d1hhs#icomoon\') format("svg");\n  font-weight: normal;\n  font-style: normal;\n  font-display: block;\n}\n[class^=icon-], [class*=" icon-"] {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: "icomoon" !important;\n  speak: never;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.icon-home:before {\n  content: "\\e900";\n}\n\n.icon-home2:before {\n  content: "\\e901";\n}\n\n.icon-home3:before {\n  content: "\\e902";\n}\n\n.icon-office:before {\n  content: "\\e903";\n}\n\n.icon-newspaper:before {\n  content: "\\e904";\n}\n\n.icon-pencil:before {\n  content: "\\e905";\n}\n\n.icon-pencil2:before {\n  content: "\\e906";\n}\n\n.icon-quill:before {\n  content: "\\e907";\n}\n\n.icon-pen:before {\n  content: "\\e908";\n}\n\n.icon-blog:before {\n  content: "\\e909";\n}\n\n.icon-eyedropper:before {\n  content: "\\e90a";\n}\n\n.icon-droplet:before {\n  content: "\\e90b";\n}\n\n.icon-paint-format:before {\n  content: "\\e90c";\n}\n\n.icon-image:before {\n  content: "\\e90d";\n}\n\n.icon-images:before {\n  content: "\\e90e";\n}\n\n.icon-camera:before {\n  content: "\\e90f";\n}\n\n.icon-headphones:before {\n  content: "\\e910";\n}\n\n.icon-music:before {\n  content: "\\e911";\n}\n\n.icon-play:before {\n  content: "\\e912";\n}\n\n.icon-film:before {\n  content: "\\e913";\n}\n\n.icon-video-camera:before {\n  content: "\\e914";\n}\n\n.icon-dice:before {\n  content: "\\e915";\n}\n\n.icon-pacman:before {\n  content: "\\e916";\n}\n\n.icon-spades:before {\n  content: "\\e917";\n}\n\n.icon-clubs:before {\n  content: "\\e918";\n}\n\n.icon-diamonds:before {\n  content: "\\e919";\n}\n\n.icon-bullhorn:before {\n  content: "\\e91a";\n}\n\n.icon-connection:before {\n  content: "\\e91b";\n}\n\n.icon-podcast:before {\n  content: "\\e91c";\n}\n\n.icon-feed:before {\n  content: "\\e91d";\n}\n\n.icon-mic:before {\n  content: "\\e91e";\n}\n\n.icon-book:before {\n  content: "\\e91f";\n}\n\n.icon-books:before {\n  content: "\\e920";\n}\n\n.icon-library:before {\n  content: "\\e921";\n}\n\n.icon-file-text:before {\n  content: "\\e922";\n}\n\n.icon-profile:before {\n  content: "\\e923";\n}\n\n.icon-file-empty:before {\n  content: "\\e924";\n}\n\n.icon-files-empty:before {\n  content: "\\e925";\n}\n\n.icon-file-text2:before {\n  content: "\\e926";\n}\n\n.icon-file-picture:before {\n  content: "\\e927";\n}\n\n.icon-file-music:before {\n  content: "\\e928";\n}\n\n.icon-file-play:before {\n  content: "\\e929";\n}\n\n.icon-file-video:before {\n  content: "\\e92a";\n}\n\n.icon-file-zip:before {\n  content: "\\e92b";\n}\n\n.icon-copy:before {\n  content: "\\e92c";\n}\n\n.icon-paste:before {\n  content: "\\e92d";\n}\n\n.icon-stack:before {\n  content: "\\e92e";\n}\n\n.icon-folder:before {\n  content: "\\e92f";\n}\n\n.icon-folder-open:before {\n  content: "\\e930";\n}\n\n.icon-folder-plus:before {\n  content: "\\e931";\n}\n\n.icon-folder-minus:before {\n  content: "\\e932";\n}\n\n.icon-folder-download:before {\n  content: "\\e933";\n}\n\n.icon-folder-upload:before {\n  content: "\\e934";\n}\n\n.icon-price-tag:before {\n  content: "\\e935";\n}\n\n.icon-price-tags:before {\n  content: "\\e936";\n}\n\n.icon-barcode:before {\n  content: "\\e937";\n}\n\n.icon-qrcode:before {\n  content: "\\e938";\n}\n\n.icon-ticket:before {\n  content: "\\e939";\n}\n\n.icon-cart:before {\n  content: "\\e93a";\n}\n\n.icon-coin-dollar:before {\n  content: "\\e93b";\n}\n\n.icon-coin-euro:before {\n  content: "\\e93c";\n}\n\n.icon-coin-pound:before {\n  content: "\\e93d";\n}\n\n.icon-coin-yen:before {\n  content: "\\e93e";\n}\n\n.icon-credit-card:before {\n  content: "\\e93f";\n}\n\n.icon-calculator:before {\n  content: "\\e940";\n}\n\n.icon-lifebuoy:before {\n  content: "\\e941";\n}\n\n.icon-phone:before {\n  content: "\\e942";\n}\n\n.icon-phone-hang-up:before {\n  content: "\\e943";\n}\n\n.icon-address-book:before {\n  content: "\\e944";\n}\n\n.icon-envelop:before {\n  content: "\\e945";\n}\n\n.icon-pushpin:before {\n  content: "\\e946";\n}\n\n.icon-location:before {\n  content: "\\e947";\n}\n\n.icon-location2:before {\n  content: "\\e948";\n}\n\n.icon-compass:before {\n  content: "\\e949";\n}\n\n.icon-compass2:before {\n  content: "\\e94a";\n}\n\n.icon-map:before {\n  content: "\\e94b";\n}\n\n.icon-map2:before {\n  content: "\\e94c";\n}\n\n.icon-history:before {\n  content: "\\e94d";\n}\n\n.icon-clock:before {\n  content: "\\e94e";\n}\n\n.icon-clock2:before {\n  content: "\\e94f";\n}\n\n.icon-alarm:before {\n  content: "\\e950";\n}\n\n.icon-bell:before {\n  content: "\\e951";\n}\n\n.icon-stopwatch:before {\n  content: "\\e952";\n}\n\n.icon-calendar:before {\n  content: "\\e953";\n}\n\n.icon-printer:before {\n  content: "\\e954";\n}\n\n.icon-keyboard:before {\n  content: "\\e955";\n}\n\n.icon-display:before {\n  content: "\\e956";\n}\n\n.icon-laptop:before {\n  content: "\\e957";\n}\n\n.icon-mobile:before {\n  content: "\\e958";\n}\n\n.icon-mobile2:before {\n  content: "\\e959";\n}\n\n.icon-tablet:before {\n  content: "\\e95a";\n}\n\n.icon-tv:before {\n  content: "\\e95b";\n}\n\n.icon-drawer:before {\n  content: "\\e95c";\n}\n\n.icon-drawer2:before {\n  content: "\\e95d";\n}\n\n.icon-box-add:before {\n  content: "\\e95e";\n}\n\n.icon-box-remove:before {\n  content: "\\e95f";\n}\n\n.icon-download:before {\n  content: "\\e960";\n}\n\n.icon-upload:before {\n  content: "\\e961";\n}\n\n.icon-floppy-disk:before {\n  content: "\\e962";\n}\n\n.icon-drive:before {\n  content: "\\e963";\n}\n\n.icon-database:before {\n  content: "\\e964";\n}\n\n.icon-undo:before {\n  content: "\\e965";\n}\n\n.icon-redo:before {\n  content: "\\e966";\n}\n\n.icon-undo2:before {\n  content: "\\e967";\n}\n\n.icon-redo2:before {\n  content: "\\e968";\n}\n\n.icon-forward:before {\n  content: "\\e969";\n}\n\n.icon-reply:before {\n  content: "\\e96a";\n}\n\n.icon-bubble:before {\n  content: "\\e96b";\n}\n\n.icon-bubbles:before {\n  content: "\\e96c";\n}\n\n.icon-bubbles2:before {\n  content: "\\e96d";\n}\n\n.icon-bubble2:before {\n  content: "\\e96e";\n}\n\n.icon-bubbles3:before {\n  content: "\\e96f";\n}\n\n.icon-bubbles4:before {\n  content: "\\e970";\n}\n\n.icon-user:before {\n  content: "\\e971";\n}\n\n.icon-users:before {\n  content: "\\e972";\n}\n\n.icon-user-plus:before {\n  content: "\\e973";\n}\n\n.icon-user-minus:before {\n  content: "\\e974";\n}\n\n.icon-user-check:before {\n  content: "\\e975";\n}\n\n.icon-user-tie:before {\n  content: "\\e976";\n}\n\n.icon-quotes-left:before {\n  content: "\\e977";\n}\n\n.icon-quotes-right:before {\n  content: "\\e978";\n}\n\n.icon-hour-glass:before {\n  content: "\\e979";\n}\n\n.icon-spinner:before {\n  content: "\\e97a";\n}\n\n.icon-spinner2:before {\n  content: "\\e97b";\n}\n\n.icon-spinner3:before {\n  content: "\\e97c";\n}\n\n.icon-spinner4:before {\n  content: "\\e97d";\n}\n\n.icon-spinner5:before {\n  content: "\\e97e";\n}\n\n.icon-spinner6:before {\n  content: "\\e97f";\n}\n\n.icon-spinner7:before {\n  content: "\\e980";\n}\n\n.icon-spinner8:before {\n  content: "\\e981";\n}\n\n.icon-spinner9:before {\n  content: "\\e982";\n}\n\n.icon-spinner10:before {\n  content: "\\e983";\n}\n\n.icon-spinner11:before {\n  content: "\\e984";\n}\n\n.icon-binoculars:before {\n  content: "\\e985";\n}\n\n.icon-search:before {\n  content: "\\e986";\n}\n\n.icon-zoom-in:before {\n  content: "\\e987";\n}\n\n.icon-zoom-out:before {\n  content: "\\e988";\n}\n\n.icon-enlarge:before {\n  content: "\\e989";\n}\n\n.icon-shrink:before {\n  content: "\\e98a";\n}\n\n.icon-enlarge2:before {\n  content: "\\e98b";\n}\n\n.icon-shrink2:before {\n  content: "\\e98c";\n}\n\n.icon-key:before {\n  content: "\\e98d";\n}\n\n.icon-key2:before {\n  content: "\\e98e";\n}\n\n.icon-lock:before {\n  content: "\\e98f";\n}\n\n.icon-unlocked:before {\n  content: "\\e990";\n}\n\n.icon-wrench:before {\n  content: "\\e991";\n}\n\n.icon-equalizer:before {\n  content: "\\e992";\n}\n\n.icon-equalizer2:before {\n  content: "\\e993";\n}\n\n.icon-cog:before {\n  content: "\\e994";\n}\n\n.icon-cogs:before {\n  content: "\\e995";\n}\n\n.icon-hammer:before {\n  content: "\\e996";\n}\n\n.icon-magic-wand:before {\n  content: "\\e997";\n}\n\n.icon-aid-kit:before {\n  content: "\\e998";\n}\n\n.icon-bug:before {\n  content: "\\e999";\n}\n\n.icon-pie-chart:before {\n  content: "\\e99a";\n}\n\n.icon-stats-dots:before {\n  content: "\\e99b";\n}\n\n.icon-stats-bars:before {\n  content: "\\e99c";\n}\n\n.icon-stats-bars2:before {\n  content: "\\e99d";\n}\n\n.icon-trophy:before {\n  content: "\\e99e";\n}\n\n.icon-gift:before {\n  content: "\\e99f";\n}\n\n.icon-glass:before {\n  content: "\\e9a0";\n}\n\n.icon-glass2:before {\n  content: "\\e9a1";\n}\n\n.icon-mug:before {\n  content: "\\e9a2";\n}\n\n.icon-spoon-knife:before {\n  content: "\\e9a3";\n}\n\n.icon-leaf:before {\n  content: "\\e9a4";\n}\n\n.icon-rocket:before {\n  content: "\\e9a5";\n}\n\n.icon-meter:before {\n  content: "\\e9a6";\n}\n\n.icon-meter2:before {\n  content: "\\e9a7";\n}\n\n.icon-hammer2:before {\n  content: "\\e9a8";\n}\n\n.icon-fire:before {\n  content: "\\e9a9";\n}\n\n.icon-lab:before {\n  content: "\\e9aa";\n}\n\n.icon-magnet:before {\n  content: "\\e9ab";\n}\n\n.icon-bin:before {\n  content: "\\e9ac";\n}\n\n.icon-bin2:before {\n  content: "\\e9ad";\n}\n\n.icon-briefcase:before {\n  content: "\\e9ae";\n}\n\n.icon-airplane:before {\n  content: "\\e9af";\n}\n\n.icon-truck:before {\n  content: "\\e9b0";\n}\n\n.icon-road:before {\n  content: "\\e9b1";\n}\n\n.icon-accessibility:before {\n  content: "\\e9b2";\n}\n\n.icon-target:before {\n  content: "\\e9b3";\n}\n\n.icon-shield:before {\n  content: "\\e9b4";\n}\n\n.icon-power:before {\n  content: "\\e9b5";\n}\n\n.icon-switch:before {\n  content: "\\e9b6";\n}\n\n.icon-power-cord:before {\n  content: "\\e9b7";\n}\n\n.icon-clipboard:before {\n  content: "\\e9b8";\n}\n\n.icon-list-numbered:before {\n  content: "\\e9b9";\n}\n\n.icon-list:before {\n  content: "\\e9ba";\n}\n\n.icon-list2:before {\n  content: "\\e9bb";\n}\n\n.icon-tree:before {\n  content: "\\e9bc";\n}\n\n.icon-menu:before {\n  content: "\\e9bd";\n}\n\n.icon-menu2:before {\n  content: "\\e9be";\n}\n\n.icon-menu3:before {\n  content: "\\e9bf";\n}\n\n.icon-menu4:before {\n  content: "\\e9c0";\n}\n\n.icon-cloud:before {\n  content: "\\e9c1";\n}\n\n.icon-cloud-download:before {\n  content: "\\e9c2";\n}\n\n.icon-cloud-upload:before {\n  content: "\\e9c3";\n}\n\n.icon-cloud-check:before {\n  content: "\\e9c4";\n}\n\n.icon-download2:before {\n  content: "\\e9c5";\n}\n\n.icon-upload2:before {\n  content: "\\e9c6";\n}\n\n.icon-download3:before {\n  content: "\\e9c7";\n}\n\n.icon-upload3:before {\n  content: "\\e9c8";\n}\n\n.icon-sphere:before {\n  content: "\\e9c9";\n}\n\n.icon-earth:before {\n  content: "\\e9ca";\n}\n\n.icon-link:before {\n  content: "\\e9cb";\n}\n\n.icon-flag:before {\n  content: "\\e9cc";\n}\n\n.icon-attachment:before {\n  content: "\\e9cd";\n}\n\n.icon-eye:before {\n  content: "\\e9ce";\n}\n\n.icon-eye-plus:before {\n  content: "\\e9cf";\n}\n\n.icon-eye-minus:before {\n  content: "\\e9d0";\n}\n\n.icon-eye-blocked:before {\n  content: "\\e9d1";\n}\n\n.icon-bookmark:before {\n  content: "\\e9d2";\n}\n\n.icon-bookmarks:before {\n  content: "\\e9d3";\n}\n\n.icon-sun:before {\n  content: "\\e9d4";\n}\n\n.icon-contrast:before {\n  content: "\\e9d5";\n}\n\n.icon-brightness-contrast:before {\n  content: "\\e9d6";\n}\n\n.icon-star-empty:before {\n  content: "\\e9d7";\n}\n\n.icon-star-half:before {\n  content: "\\e9d8";\n}\n\n.icon-star-full:before {\n  content: "\\e9d9";\n}\n\n.icon-heart:before {\n  content: "\\e9da";\n}\n\n.icon-heart-broken:before {\n  content: "\\e9db";\n}\n\n.icon-man:before {\n  content: "\\e9dc";\n}\n\n.icon-woman:before {\n  content: "\\e9dd";\n}\n\n.icon-man-woman:before {\n  content: "\\e9de";\n}\n\n.icon-happy:before {\n  content: "\\e9df";\n}\n\n.icon-happy2:before {\n  content: "\\e9e0";\n}\n\n.icon-smile:before {\n  content: "\\e9e1";\n}\n\n.icon-smile2:before {\n  content: "\\e9e2";\n}\n\n.icon-tongue:before {\n  content: "\\e9e3";\n}\n\n.icon-tongue2:before {\n  content: "\\e9e4";\n}\n\n.icon-sad:before {\n  content: "\\e9e5";\n}\n\n.icon-sad2:before {\n  content: "\\e9e6";\n}\n\n.icon-wink:before {\n  content: "\\e9e7";\n}\n\n.icon-wink2:before {\n  content: "\\e9e8";\n}\n\n.icon-grin:before {\n  content: "\\e9e9";\n}\n\n.icon-grin2:before {\n  content: "\\e9ea";\n}\n\n.icon-cool:before {\n  content: "\\e9eb";\n}\n\n.icon-cool2:before {\n  content: "\\e9ec";\n}\n\n.icon-angry:before {\n  content: "\\e9ed";\n}\n\n.icon-angry2:before {\n  content: "\\e9ee";\n}\n\n.icon-evil:before {\n  content: "\\e9ef";\n}\n\n.icon-evil2:before {\n  content: "\\e9f0";\n}\n\n.icon-shocked:before {\n  content: "\\e9f1";\n}\n\n.icon-shocked2:before {\n  content: "\\e9f2";\n}\n\n.icon-baffled:before {\n  content: "\\e9f3";\n}\n\n.icon-baffled2:before {\n  content: "\\e9f4";\n}\n\n.icon-confused:before {\n  content: "\\e9f5";\n}\n\n.icon-confused2:before {\n  content: "\\e9f6";\n}\n\n.icon-neutral:before {\n  content: "\\e9f7";\n}\n\n.icon-neutral2:before {\n  content: "\\e9f8";\n}\n\n.icon-hipster:before {\n  content: "\\e9f9";\n}\n\n.icon-hipster2:before {\n  content: "\\e9fa";\n}\n\n.icon-wondering:before {\n  content: "\\e9fb";\n}\n\n.icon-wondering2:before {\n  content: "\\e9fc";\n}\n\n.icon-sleepy:before {\n  content: "\\e9fd";\n}\n\n.icon-sleepy2:before {\n  content: "\\e9fe";\n}\n\n.icon-frustrated:before {\n  content: "\\e9ff";\n}\n\n.icon-frustrated2:before {\n  content: "\\ea00";\n}\n\n.icon-crying:before {\n  content: "\\ea01";\n}\n\n.icon-crying2:before {\n  content: "\\ea02";\n}\n\n.icon-point-up:before {\n  content: "\\ea03";\n}\n\n.icon-point-right:before {\n  content: "\\ea04";\n}\n\n.icon-point-down:before {\n  content: "\\ea05";\n}\n\n.icon-point-left:before {\n  content: "\\ea06";\n}\n\n.icon-warning:before {\n  content: "\\ea07";\n}\n\n.icon-notification:before {\n  content: "\\ea08";\n}\n\n.icon-question:before {\n  content: "\\ea09";\n}\n\n.icon-plus:before {\n  content: "\\ea0a";\n}\n\n.icon-minus:before {\n  content: "\\ea0b";\n}\n\n.icon-info:before {\n  content: "\\ea0c";\n}\n\n.icon-cancel-circle:before {\n  content: "\\ea0d";\n}\n\n.icon-blocked:before {\n  content: "\\ea0e";\n}\n\n.icon-cross:before {\n  content: "\\ea0f";\n}\n\n.icon-checkmark:before {\n  content: "\\ea10";\n}\n\n.icon-checkmark2:before {\n  content: "\\ea11";\n}\n\n.icon-spell-check:before {\n  content: "\\ea12";\n}\n\n.icon-enter:before {\n  content: "\\ea13";\n}\n\n.icon-exit:before {\n  content: "\\ea14";\n}\n\n.icon-play2:before {\n  content: "\\ea15";\n}\n\n.icon-pause:before {\n  content: "\\ea16";\n}\n\n.icon-stop:before {\n  content: "\\ea17";\n}\n\n.icon-previous:before {\n  content: "\\ea18";\n}\n\n.icon-next:before {\n  content: "\\ea19";\n}\n\n.icon-backward:before {\n  content: "\\ea1a";\n}\n\n.icon-forward2:before {\n  content: "\\ea1b";\n}\n\n.icon-play3:before {\n  content: "\\ea1c";\n}\n\n.icon-pause2:before {\n  content: "\\ea1d";\n}\n\n.icon-stop2:before {\n  content: "\\ea1e";\n}\n\n.icon-backward2:before {\n  content: "\\ea1f";\n}\n\n.icon-forward3:before {\n  content: "\\ea20";\n}\n\n.icon-first:before {\n  content: "\\ea21";\n}\n\n.icon-last:before {\n  content: "\\ea22";\n}\n\n.icon-previous2:before {\n  content: "\\ea23";\n}\n\n.icon-next2:before {\n  content: "\\ea24";\n}\n\n.icon-eject:before {\n  content: "\\ea25";\n}\n\n.icon-volume-high:before {\n  content: "\\ea26";\n}\n\n.icon-volume-medium:before {\n  content: "\\ea27";\n}\n\n.icon-volume-low:before {\n  content: "\\ea28";\n}\n\n.icon-volume-mute:before {\n  content: "\\ea29";\n}\n\n.icon-volume-mute2:before {\n  content: "\\ea2a";\n}\n\n.icon-volume-increase:before {\n  content: "\\ea2b";\n}\n\n.icon-volume-decrease:before {\n  content: "\\ea2c";\n}\n\n.icon-loop:before {\n  content: "\\ea2d";\n}\n\n.icon-loop2:before {\n  content: "\\ea2e";\n}\n\n.icon-infinite:before {\n  content: "\\ea2f";\n}\n\n.icon-shuffle:before {\n  content: "\\ea30";\n}\n\n.icon-arrow-up-left:before {\n  content: "\\ea31";\n}\n\n.icon-arrow-up:before {\n  content: "\\ea32";\n}\n\n.icon-arrow-up-right:before {\n  content: "\\ea33";\n}\n\n.icon-arrow-right:before {\n  content: "\\ea34";\n}\n\n.icon-arrow-down-right:before {\n  content: "\\ea35";\n}\n\n.icon-arrow-down:before {\n  content: "\\ea36";\n}\n\n.icon-arrow-down-left:before {\n  content: "\\ea37";\n}\n\n.icon-arrow-left:before {\n  content: "\\ea38";\n}\n\n.icon-arrow-up-left2:before {\n  content: "\\ea39";\n}\n\n.icon-arrow-up2:before {\n  content: "\\ea3a";\n}\n\n.icon-arrow-up-right2:before {\n  content: "\\ea3b";\n}\n\n.icon-arrow-right2:before {\n  content: "\\ea3c";\n}\n\n.icon-arrow-down-right2:before {\n  content: "\\ea3d";\n}\n\n.icon-arrow-down2:before {\n  content: "\\ea3e";\n}\n\n.icon-arrow-down-left2:before {\n  content: "\\ea3f";\n}\n\n.icon-arrow-left2:before {\n  content: "\\ea40";\n}\n\n.icon-circle-up:before {\n  content: "\\ea41";\n}\n\n.icon-circle-right:before {\n  content: "\\ea42";\n}\n\n.icon-circle-down:before {\n  content: "\\ea43";\n}\n\n.icon-circle-left:before {\n  content: "\\ea44";\n}\n\n.icon-tab:before {\n  content: "\\ea45";\n}\n\n.icon-move-up:before {\n  content: "\\ea46";\n}\n\n.icon-move-down:before {\n  content: "\\ea47";\n}\n\n.icon-sort-alpha-asc:before {\n  content: "\\ea48";\n}\n\n.icon-sort-alpha-desc:before {\n  content: "\\ea49";\n}\n\n.icon-sort-numeric-asc:before {\n  content: "\\ea4a";\n}\n\n.icon-sort-numberic-desc:before {\n  content: "\\ea4b";\n}\n\n.icon-sort-amount-asc:before {\n  content: "\\ea4c";\n}\n\n.icon-sort-amount-desc:before {\n  content: "\\ea4d";\n}\n\n.icon-command:before {\n  content: "\\ea4e";\n}\n\n.icon-shift:before {\n  content: "\\ea4f";\n}\n\n.icon-ctrl:before {\n  content: "\\ea50";\n}\n\n.icon-opt:before {\n  content: "\\ea51";\n}\n\n.icon-checkbox-checked:before {\n  content: "\\ea52";\n}\n\n.icon-checkbox-unchecked:before {\n  content: "\\ea53";\n}\n\n.icon-radio-checked:before {\n  content: "\\ea54";\n}\n\n.icon-radio-checked2:before {\n  content: "\\ea55";\n}\n\n.icon-radio-unchecked:before {\n  content: "\\ea56";\n}\n\n.icon-crop:before {\n  content: "\\ea57";\n}\n\n.icon-make-group:before {\n  content: "\\ea58";\n}\n\n.icon-ungroup:before {\n  content: "\\ea59";\n}\n\n.icon-scissors:before {\n  content: "\\ea5a";\n}\n\n.icon-filter:before {\n  content: "\\ea5b";\n}\n\n.icon-font:before {\n  content: "\\ea5c";\n}\n\n.icon-ligature:before {\n  content: "\\ea5d";\n}\n\n.icon-ligature2:before {\n  content: "\\ea5e";\n}\n\n.icon-text-height:before {\n  content: "\\ea5f";\n}\n\n.icon-text-width:before {\n  content: "\\ea60";\n}\n\n.icon-font-size:before {\n  content: "\\ea61";\n}\n\n.icon-bold:before {\n  content: "\\ea62";\n}\n\n.icon-underline:before {\n  content: "\\ea63";\n}\n\n.icon-italic:before {\n  content: "\\ea64";\n}\n\n.icon-strikethrough:before {\n  content: "\\ea65";\n}\n\n.icon-omega:before {\n  content: "\\ea66";\n}\n\n.icon-sigma:before {\n  content: "\\ea67";\n}\n\n.icon-page-break:before {\n  content: "\\ea68";\n}\n\n.icon-superscript:before {\n  content: "\\ea69";\n}\n\n.icon-subscript:before {\n  content: "\\ea6a";\n}\n\n.icon-superscript2:before {\n  content: "\\ea6b";\n}\n\n.icon-subscript2:before {\n  content: "\\ea6c";\n}\n\n.icon-text-color:before {\n  content: "\\ea6d";\n}\n\n.icon-pagebreak:before {\n  content: "\\ea6e";\n}\n\n.icon-clear-formatting:before {\n  content: "\\ea6f";\n}\n\n.icon-table:before {\n  content: "\\ea70";\n}\n\n.icon-table2:before {\n  content: "\\ea71";\n}\n\n.icon-insert-template:before {\n  content: "\\ea72";\n}\n\n.icon-pilcrow:before {\n  content: "\\ea73";\n}\n\n.icon-ltr:before {\n  content: "\\ea74";\n}\n\n.icon-rtl:before {\n  content: "\\ea75";\n}\n\n.icon-section:before {\n  content: "\\ea76";\n}\n\n.icon-paragraph-left:before {\n  content: "\\ea77";\n}\n\n.icon-paragraph-center:before {\n  content: "\\ea78";\n}\n\n.icon-paragraph-right:before {\n  content: "\\ea79";\n}\n\n.icon-paragraph-justify:before {\n  content: "\\ea7a";\n}\n\n.icon-indent-increase:before {\n  content: "\\ea7b";\n}\n\n.icon-indent-decrease:before {\n  content: "\\ea7c";\n}\n\n.icon-share:before {\n  content: "\\ea7d";\n}\n\n.icon-new-tab:before {\n  content: "\\ea7e";\n}\n\n.icon-embed:before {\n  content: "\\ea7f";\n}\n\n.icon-embed2:before {\n  content: "\\ea80";\n}\n\n.icon-terminal:before {\n  content: "\\ea81";\n}\n\n.icon-share2:before {\n  content: "\\ea82";\n}\n\n.icon-mail:before {\n  content: "\\ea83";\n}\n\n.icon-mail2:before {\n  content: "\\ea84";\n}\n\n.icon-mail3:before {\n  content: "\\ea85";\n}\n\n.icon-mail4:before {\n  content: "\\ea86";\n}\n\n.icon-amazon:before {\n  content: "\\ea87";\n}\n\n.icon-google:before {\n  content: "\\ea88";\n}\n\n.icon-google2:before {\n  content: "\\ea89";\n}\n\n.icon-google3:before {\n  content: "\\ea8a";\n}\n\n.icon-google-plus:before {\n  content: "\\ea8b";\n}\n\n.icon-google-plus2:before {\n  content: "\\ea8c";\n}\n\n.icon-google-plus3:before {\n  content: "\\ea8d";\n}\n\n.icon-hangouts:before {\n  content: "\\ea8e";\n}\n\n.icon-google-drive:before {\n  content: "\\ea8f";\n}\n\n.icon-facebook:before {\n  content: "\\ea90";\n}\n\n.icon-facebook2:before {\n  content: "\\ea91";\n}\n\n.icon-instagram:before {\n  content: "\\ea92";\n}\n\n.icon-whatsapp:before {\n  content: "\\ea93";\n}\n\n.icon-spotify:before {\n  content: "\\ea94";\n}\n\n.icon-telegram:before {\n  content: "\\ea95";\n}\n\n.icon-twitter:before {\n  content: "\\ea96";\n}\n\n.icon-vine:before {\n  content: "\\ea97";\n}\n\n.icon-vk:before {\n  content: "\\ea98";\n}\n\n.icon-renren:before {\n  content: "\\ea99";\n}\n\n.icon-sina-weibo:before {\n  content: "\\ea9a";\n}\n\n.icon-rss:before {\n  content: "\\ea9b";\n}\n\n.icon-rss2:before {\n  content: "\\ea9c";\n}\n\n.icon-youtube:before {\n  content: "\\ea9d";\n}\n\n.icon-youtube2:before {\n  content: "\\ea9e";\n}\n\n.icon-twitch:before {\n  content: "\\ea9f";\n}\n\n.icon-vimeo:before {\n  content: "\\eaa0";\n}\n\n.icon-vimeo2:before {\n  content: "\\eaa1";\n}\n\n.icon-lanyrd:before {\n  content: "\\eaa2";\n}\n\n.icon-flickr:before {\n  content: "\\eaa3";\n}\n\n.icon-flickr2:before {\n  content: "\\eaa4";\n}\n\n.icon-flickr3:before {\n  content: "\\eaa5";\n}\n\n.icon-flickr4:before {\n  content: "\\eaa6";\n}\n\n.icon-dribbble:before {\n  content: "\\eaa7";\n}\n\n.icon-behance:before {\n  content: "\\eaa8";\n}\n\n.icon-behance2:before {\n  content: "\\eaa9";\n}\n\n.icon-deviantart:before {\n  content: "\\eaaa";\n}\n\n.icon-500px:before {\n  content: "\\eaab";\n}\n\n.icon-steam:before {\n  content: "\\eaac";\n}\n\n.icon-steam2:before {\n  content: "\\eaad";\n}\n\n.icon-dropbox:before {\n  content: "\\eaae";\n}\n\n.icon-onedrive:before {\n  content: "\\eaaf";\n}\n\n.icon-github:before {\n  content: "\\eab0";\n}\n\n.icon-npm:before {\n  content: "\\eab1";\n}\n\n.icon-basecamp:before {\n  content: "\\eab2";\n}\n\n.icon-trello:before {\n  content: "\\eab3";\n}\n\n.icon-wordpress:before {\n  content: "\\eab4";\n}\n\n.icon-joomla:before {\n  content: "\\eab5";\n}\n\n.icon-ello:before {\n  content: "\\eab6";\n}\n\n.icon-blogger:before {\n  content: "\\eab7";\n}\n\n.icon-blogger2:before {\n  content: "\\eab8";\n}\n\n.icon-tumblr:before {\n  content: "\\eab9";\n}\n\n.icon-tumblr2:before {\n  content: "\\eaba";\n}\n\n.icon-yahoo:before {\n  content: "\\eabb";\n}\n\n.icon-yahoo2:before {\n  content: "\\eabc";\n}\n\n.icon-tux:before {\n  content: "\\eabd";\n}\n\n.icon-appleinc:before {\n  content: "\\eabe";\n}\n\n.icon-finder:before {\n  content: "\\eabf";\n}\n\n.icon-android:before {\n  content: "\\eac0";\n}\n\n.icon-windows:before {\n  content: "\\eac1";\n}\n\n.icon-windows8:before {\n  content: "\\eac2";\n}\n\n.icon-soundcloud:before {\n  content: "\\eac3";\n}\n\n.icon-soundcloud2:before {\n  content: "\\eac4";\n}\n\n.icon-skype:before {\n  content: "\\eac5";\n}\n\n.icon-reddit:before {\n  content: "\\eac6";\n}\n\n.icon-hackernews:before {\n  content: "\\eac7";\n}\n\n.icon-wikipedia:before {\n  content: "\\eac8";\n}\n\n.icon-linkedin:before {\n  content: "\\eac9";\n}\n\n.icon-linkedin2:before {\n  content: "\\eaca";\n}\n\n.icon-lastfm:before {\n  content: "\\eacb";\n}\n\n.icon-lastfm2:before {\n  content: "\\eacc";\n}\n\n.icon-delicious:before {\n  content: "\\eacd";\n}\n\n.icon-stumbleupon:before {\n  content: "\\eace";\n}\n\n.icon-stumbleupon2:before {\n  content: "\\eacf";\n}\n\n.icon-stackoverflow:before {\n  content: "\\ead0";\n}\n\n.icon-pinterest:before {\n  content: "\\ead1";\n}\n\n.icon-pinterest2:before {\n  content: "\\ead2";\n}\n\n.icon-xing:before {\n  content: "\\ead3";\n}\n\n.icon-xing2:before {\n  content: "\\ead4";\n}\n\n.icon-flattr:before {\n  content: "\\ead5";\n}\n\n.icon-foursquare:before {\n  content: "\\ead6";\n}\n\n.icon-yelp:before {\n  content: "\\ead7";\n}\n\n.icon-paypal:before {\n  content: "\\ead8";\n}\n\n.icon-chrome:before {\n  content: "\\ead9";\n}\n\n.icon-firefox:before {\n  content: "\\eada";\n}\n\n.icon-IE:before {\n  content: "\\eadb";\n}\n\n.icon-edge:before {\n  content: "\\eadc";\n}\n\n.icon-safari:before {\n  content: "\\eadd";\n}\n\n.icon-opera:before {\n  content: "\\eade";\n}\n\n.icon-file-pdf:before {\n  content: "\\eadf";\n}\n\n.icon-file-openoffice:before {\n  content: "\\eae0";\n}\n\n.icon-file-word:before {\n  content: "\\eae1";\n}\n\n.icon-file-excel:before {\n  content: "\\eae2";\n}\n\n.icon-libreoffice:before {\n  content: "\\eae3";\n}\n\n.icon-html-five:before {\n  content: "\\eae4";\n}\n\n.icon-html-five2:before {\n  content: "\\eae5";\n}\n\n.icon-css3:before {\n  content: "\\eae6";\n}\n\n.icon-git:before {\n  content: "\\eae7";\n}\n\n.icon-codepen:before {\n  content: "\\eae8";\n}\n\n.icon-svg:before {\n  content: "\\eae9";\n}\n\n.icon-IcoMoon:before {\n  content: "\\eaea";\n}\n\n.guitxo-expandible__container {\n  border: solid 1px #000;\n  border-radius: 0.25rem;\n  padding: 0.5rem;\n}\n.guitxo-expandible__header {\n  display: flex;\n  flex-direction: row;\n}\n.guitxo-expandible__title {\n  flex: 1 1 auto;\n}\n.guitxo-expandible__switch {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}',""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);