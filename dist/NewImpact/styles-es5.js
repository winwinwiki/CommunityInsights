(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\r\n@font-face {\r\n  font-family: latoBold;\r\n  src: url('/assets/Lato-Bold.woff');\r\n}\r\n@font-face {\r\n  font-family: latoBoldItalic;\r\n  src: url('/assets/Lato-BoldItalic.woff');\r\n}\r\n@font-face {\r\n  font-family: latoItalic;\r\n  src: url('/assets/Lato-Italic.woff');\r\n}\r\n@font-face {\r\n  font-family: lato;\r\n  src: url('/assets/Lato-Regular.woff');\r\n}\r\nbody {\r\n    margin: 0px;\r\n    background-color: #fafafa;\r\n    font-family: Arial, Helvetica, sans-serif, lato;\r\n  }\r\n::-webkit-scrollbar {\r\n    width: 12px;\r\n  }\r\n/* Track */\r\n::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\r\n    border-radius: 10px;\r\n  }\r\n/* Handle */\r\n::-webkit-scrollbar-thumb {\r\n    border-radius: 10px;\r\n    background: #dedbdb;\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.15);\r\n  }\r\n::-webkit-scrollbar-thumb:window-inactive {\r\n      background: #d0d2d4;\r\n    }\r\n.pull-right {\r\n      float: right;\r\n  }\r\n.nav.nav-tabs {\r\n    position: relative;\r\n  }\r\n.nav-tabs {\r\n    background-color: #d0d2d4;\r\n    box-shadow: 0 0 10px #cccccc;\r\n    padding: 15px 10px 10px 10px;\r\n    padding: 0px 75px;\r\n    position: relative !important;\r\n    width: 100%;\r\n    padding: 63px 0px 0px 80px\r\n  }\r\n.nav-tabs > li:last-of-type > a {\r\n    margin-right: 0;\r\n    position: absolute;\r\n    right: 0;\r\n  }\r\n.nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {\r\n    color: #fff !important;\r\n    background-color: #4477aa !important;\r\n    border: none !important;\r\n  }\r\n.tab-pane.active {\r\n    padding: 1.5rem;\r\n    box-shadow: 0 1px 4px 0 rgba(0,0,0,.1);\r\n    border-radius: .25rem;\r\n    -webkit-transition: 0.3s linear;\r\n    transition: 0.3s linear;\r\n    position: relative;\r\n    padding: 20px 80px;\r\n  }\r\n.nav-tabs .nav-item {\r\n    text-align: center;\r\n  }\r\n.nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active .tab-title {\r\n    color: #fff!important;\r\n}\r\n.nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active .trending-icon {\r\n  background-image: url(\"/assets/white_icons.png\") !important;\r\n  background-repeat: no-repeat;\r\n  background-position: -53px 0px;;\r\n}\r\n.nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active .verbatim-icon {\r\n  background-image: url(\"/assets/white_icons.png\") !important;\r\n  background-repeat: no-repeat;\r\n  background-position: -22px 0px;\r\n}\r\n.nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active .about-icon {\r\n  background-image: url(\"/assets/white_icons.png\") !important;\r\n  background-repeat: no-repeat;\r\n  background-position: 6px 0px;\r\n}\r\n.p-right-80 {\r\n    padding: 0px 80px;\r\n}\r\n@media (max-width: 1024px) {\r\n   .p-mobile-0 {\r\n       padding: 0px 20px !important;\r\n   }\r\n    .tab-pane.active{\r\n        padding: 20px;\r\n    }\r\n    .dateinput{\r\n      width: 180px;\r\n    }\r\n    .nav-tabs {\r\n      padding: 63px 0px 0px 0px !important;\r\n    }\r\n  }\r\n@media (max-width: 767px) {\r\n    .nav-tabs {\r\n    padding: 100px 0px 0px 0px !important;\r\n    }\r\n    .locationData {\r\n      width: 200px;\r\n    }\r\n}\r\n@media (max-width: 454px) {\r\n    .nav-tabs {\r\n    padding: 123px 0px 0px 0px !important;\r\n  }\r\n}\r\n/*Tag Cloud CSS Starts*/\r\n/* fonts */\r\ndiv.jqcloud {\r\n    font-family: \"Helvetica\", \"Arial\", sans-serif;\r\n    font-size: 10px;\r\n    line-height: normal;\r\n    width: 100%;\r\n  }\r\ndiv.jqcloud a {\r\n      font-size: inherit;\r\n      text-decoration: none;\r\n    }\r\ndiv.jqcloud span.w20 {\r\n      font-size: 600%;\r\n    }\r\ndiv.jqcloud span.w19 {\r\n      font-size: 600%;\r\n    }\r\ndiv.jqcloud span.w18 {\r\n      font-size: 600%;\r\n    }\r\ndiv.jqcloud span.w17 {\r\n      font-size: 575%;\r\n    }\r\ndiv.jqcloud span.w16 {\r\n      font-size: 575%;\r\n    }\r\ndiv.jqcloud span.w15 {\r\n      font-size: 575%;\r\n    }\r\ndiv.jqcloud span.w14 {\r\n      font-size: 550%;\r\n    }\r\ndiv.jqcloud span.w13 {\r\n      font-size: 525%;\r\n    }\r\ndiv.jqcloud span.w12 {\r\n      font-size: 500%;\r\n    }\r\ndiv.jqcloud span.w11 {\r\n      font-size: 475%;\r\n    }\r\ndiv.jqcloud span.w10 {\r\n      font-size: 450%;\r\n    }\r\ndiv.jqcloud span.w9 {\r\n      font-size: 425%;\r\n    }\r\ndiv.jqcloud span.w8 {\r\n      font-size: 400%;\r\n    }\r\ndiv.jqcloud span.w7 {\r\n      font-size: 375%;\r\n    }\r\ndiv.jqcloud span.w6 {\r\n      font-size: 350%;\r\n    }\r\ndiv.jqcloud span.w5 {\r\n      font-size: 325%;\r\n    }\r\ndiv.jqcloud span.w4 {\r\n      font-size: 300%;\r\n    }\r\ndiv.jqcloud span.w3 {\r\n      font-size: 200%;\r\n    }\r\ndiv.jqcloud span.w2 {\r\n      font-size: 150%;\r\n    }\r\ndiv.jqcloud span.w1 {\r\n      font-size: 100%;\r\n    }\r\n/* colors */\r\ndiv.jqcloud {\r\n    color: #2aa7d7 ;\r\n  }\r\ndiv.jqcloud a {\r\n      color: inherit;\r\n    }\r\ndiv.jqcloud a:hover {\r\n        color:#99ccee;\r\n      }\r\ndiv.jqcloud a:hover {\r\n        color: #0cf;\r\n      }\r\ndiv.jqcloud span.w10 {\r\n      color: #2aa7d7 ;\r\n    }\r\ndiv.jqcloud span.w9 {\r\n      color: #2aa7d7 ;\r\n    }\r\ndiv.jqcloud span.w8 {\r\n      color: #2194c0 ;\r\n    }\r\ndiv.jqcloud span.w7 {\r\n      color: #2194c0 ;\r\n    }\r\ndiv.jqcloud span.w6 {\r\n      color: #2194c0 ;\r\n    }\r\ndiv.jqcloud span.w5 {\r\n      color: #2194c0;\r\n    }\r\ndiv.jqcloud span.w4 {\r\n      color: #126e97 ;\r\n    }\r\ndiv.jqcloud span.w3 {\r\n      color:#126e97 ;\r\n    }\r\ndiv.jqcloud span.w2 {\r\n      color:#00376c ;\r\n    }\r\ndiv.jqcloud span.w1 {\r\n      color:#474a4e ;\r\n    }\r\n/* layout */\r\ndiv.jqcloud {\r\n    overflow: hidden;\r\n    position: relative;\r\n  }\r\ndiv.jqcloud span {\r\n      padding: 0;\r\n    }\r\n/*Tag Cloud CSS Ends*/\r\n.ng2-tag-input__text-input {\r\n    padding: 0 .5rem !important;\r\n    height: 30px !important;\r\n    font-size: 14px !important;\r\n    border-radius: 3px;\r\n  }\r\n.ng2-tag-input {\r\n      border-bottom: none !important;\r\n  }\r\ntag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover {\r\n      box-shadow: none!important;\r\n  }\r\ntag {\r\n    font-size: 14px !important;\r\n    color: #444;\r\n    border-radius: 7px !important;\r\n    -webkit-transition: .3s;\r\n    transition: .3s;\r\n    margin: .1rem .3rem .1rem 0;\r\n    padding: .08rem .45rem;\r\n    height: 26px !important;\r\n    line-height: 25px !important;\r\n  }\r\ndelete-icon svg {\r\n    vertical-align: bottom!important;\r\n    height: 25px!important;\r\n  }\r\n.custom-day {\r\n    text-align: center;\r\n    padding: 0.185rem 0.25rem;\r\n    display: inline-block;\r\n    height: 2rem;\r\n    width: 2rem;\r\n  }\r\n.custom-day.range {\r\n      background-color: rgb(2, 117, 216);\r\n      color: white;\r\n    }\r\n.btn:focus, .btn:active:focus, .btn.active:focus, .btn.active {\r\n    outline: none !important;\r\n    background-image: none;\r\n    box-shadow: inset 0 3px 5px rgba(0,0,0,0.125);\r\n  }\r\ndiv#ngb-tab-1-panel{\r\n      padding: 0px;\r\n  }\r\nngb-accordion.accordion .card {\r\n    background:#31353d   !important;\r\n    color: #818896!important;\r\n    border: none;\r\n    border-radius: 0px;\r\n  }\r\nngb-accordion.accordion .card-header {\r\n    padding: 0px!important;\r\n    border: 0!important;\r\n    background-color: transparent!important;\r\n  }\r\nngb-accordion.accordion .btn {\r\n    color: #818896 !important;\r\n    width: 100%;\r\n    text-align: left;\r\n    border-radius: 0px;\r\n  }\r\nngb-accordion.accordion .btn:hover, ngb-accordion.accordion .btn:focus, ngb-accordion.accordion .btn:active {\r\n    background-color: transparent;\r\n    box-shadow: none;\r\n    color: #b8bfce!important;\r\n  }\r\nngb-accordion.accordion .card-header button:after {\r\n    font-family: \"Font Awesome 5 Free\";\r\n    font-weight: 900;\r\n    content: \"\\f105\";\r\n    font-style: normal;\r\n    display: inline-block;\r\n    font-style: normal;\r\n    font-variant: normal;\r\n    text-rendering: auto;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    text-align: center;\r\n    background: 0 0;\r\n    position: absolute;\r\n    right: 15px;\r\n    top: 9px;\r\n  }\r\n.loader img {\r\n    width: 30px;\r\n    height: auto;\r\n  }\r\n.hide-page-numbers /deep/ .ngx-pagination li:not(.pagination-previous):not(.pagination-next) {\r\n  display: none !important;\r\n}\r\n.ngx-pagination .pagination-previous a::before, .ngx-pagination .pagination-previous.disabled::before {\r\n  content: \"\\003C\" !important;\r\n  display: inline-block;\r\n  margin-right: 0.5rem;\r\n  font-weight: 900;\r\n}\r\n.ngx-pagination .pagination-next a::after, .ngx-pagination .pagination-next.disabled::after {\r\n    content: \"\\003E\" !important;\r\n    display: inline-block;\r\n    margin-left: 0.5rem;\r\n    font-weight: 900;\r\n}\r\n.header-title {\r\n  font-size: 1rem;\r\n  margin: 0 0 7px 0;\r\n}\r\n.card-box {\r\n  background-color: #fff;\r\n  padding: 1.5rem;\r\n  box-shadow: 0 1px 4px 0 rgba(0,0,0,.1);\r\n  margin-bottom: 24px;\r\n  border-radius: .25rem;\r\n  -webkit-transition: 0.3s linear;\r\n  transition: 0.3s linear;\r\n  position: relative;\r\n  overflow: auto;\r\n}\r\n.line-chart {\r\n  padding: 1em;\r\n}\r\n.h-350 {\r\n  height: 350px;\r\n}\r\n/* .sweep-to-right {\r\n  position: relative;\r\n  -webkit-transform: translateZ(0);\r\n  transform: translateZ(0);\r\n  -webkit-transition: color 1000ms;\r\n  transition: color 1000ms;\r\n}\r\n\r\n  .sweep-to-right:before {\r\n    height: 5px;\r\n    content: \"\";\r\n    position: absolute;\r\n    z-index: -1;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background: #2098d1;\r\n    -webkit-transform: scaleX(0);\r\n    transform: scaleX(0);\r\n    -webkit-transform-origin: 0 50%;\r\n    transform-origin: 0 50%;\r\n    -webkit-transition-property: transform;\r\n    transition-property: transform;\r\n    -webkit-transition: 300ms ease-out;\r\n    transition: 300ms ease-out;\r\n  }\r\n\r\n  .sweep-to-right:hover:before {\r\n    -webkit-transform: scaleX(1);\r\n    transform: scaleX(1);\r\n  } */\r\n.z-index-1 {\r\n    z-index: 1;\r\n  }\r\n@media (max-width: 1024px) {\r\n    .ngb-dp-months {\r\n      display: -webkit-box !important;\r\n      display: flex !important;\r\n      overflow-x: scroll !important;\r\n      width: 245px !important;\r\n    }  \r\n}\r\ng#d3plus-textBox-0 text {\r\n  font-size: 15px!important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,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RUFDMUI7QUFFQTtJQUNFLGtDQUFrQztJQUNsQyxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsbUNBQW1DO0lBQ25DLGtDQUFrQztJQUNsQyxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsUUFBUTtFQUNWO0FBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkO0FBR0Y7RUFDRSx3QkFBd0I7QUFDMUI7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtBQUNsQjtBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsZUFBZTtFQUVmLHNDQUFzQztFQUN0QyxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLCtCQUF1QjtFQUF2Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0ErQks7QUFFSDtJQUNFLFVBQVU7RUFDWjtBQUdBO0lBQ0U7TUFDRSwrQkFBd0I7TUFBeEIsd0JBQXdCO01BQ3hCLDZCQUE2QjtNQUM3Qix1QkFBdUI7SUFDekI7QUFDSjtBQUdBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9zdHlsZXMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogbGF0b0JvbGQ7XHJcbiAgc3JjOiB1cmwoJy9hc3NldHMvTGF0by1Cb2xkLndvZmYnKTtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogbGF0b0JvbGRJdGFsaWM7XHJcbiAgc3JjOiB1cmwoJy9hc3NldHMvTGF0by1Cb2xkSXRhbGljLndvZmYnKTtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogbGF0b0l0YWxpYztcclxuICBzcmM6IHVybCgnL2Fzc2V0cy9MYXRvLUl0YWxpYy53b2ZmJyk7XHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IGxhdG87XHJcbiAgc3JjOiB1cmwoJy9hc3NldHMvTGF0by1SZWd1bGFyLndvZmYnKTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZiwgbGF0bztcclxuICB9XHJcbiAgOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogMTJweDtcclxuICB9XHJcbiAgXHJcbiAgLyogVHJhY2sgKi9cclxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAvKiBIYW5kbGUgKi9cclxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGVkYmRiO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgfVxyXG4gIFxyXG4gICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjp3aW5kb3ctaW5hY3RpdmUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZDBkMmQ0O1xyXG4gICAgfVxyXG4gIFxyXG4gIC5wdWxsLXJpZ2h0IHtcclxuICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIH1cclxuICBcclxuICAubmF2Lm5hdi10YWJzIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgLm5hdi10YWJzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMGQyZDQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjY2NjY2NjO1xyXG4gICAgcGFkZGluZzogMTVweCAxMHB4IDEwcHggMTBweDtcclxuICAgIHBhZGRpbmc6IDBweCA3NXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDYzcHggMHB4IDBweCA4MHB4XHJcbiAgfVxyXG4gIC5uYXYtdGFicyA+IGxpOmxhc3Qtb2YtdHlwZSA+IGEge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG5cclxuICAubmF2LXRhYnMgLm5hdi1pdGVtLnNob3cgLm5hdi1saW5rLCAubmF2LXRhYnMgLm5hdi1saW5rLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NzdhYSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC50YWItcGFuZS5hY3RpdmUge1xyXG4gICAgcGFkZGluZzogMS41cmVtO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggNHB4IDAgcmdiYSgwLDAsMCwuMSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3MgbGluZWFyO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBsaW5lYXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDgwcHg7XHJcbiAgfVxyXG5cclxuICAubmF2LXRhYnMgLm5hdi1pdGVtIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4ubmF2LXRhYnMgLm5hdi1pdGVtLnNob3cgLm5hdi1saW5rLCAubmF2LXRhYnMgLm5hdi1saW5rLmFjdGl2ZSAudGFiLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjZmZmIWltcG9ydGFudDtcclxufVxyXG4gIFxyXG4ubmF2LXRhYnMgLm5hdi1pdGVtLnNob3cgLm5hdi1saW5rLCAubmF2LXRhYnMgLm5hdi1saW5rLmFjdGl2ZSAudHJlbmRpbmctaWNvbiB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy93aGl0ZV9pY29ucy5wbmdcIikgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC01M3B4IDBweDs7XHJcbn1cclxuLm5hdi10YWJzIC5uYXYtaXRlbS5zaG93IC5uYXYtbGluaywgLm5hdi10YWJzIC5uYXYtbGluay5hY3RpdmUgLnZlcmJhdGltLWljb24ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvd2hpdGVfaWNvbnMucG5nXCIpICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjJweCAwcHg7XHJcbn1cclxuLm5hdi10YWJzIC5uYXYtaXRlbS5zaG93IC5uYXYtbGluaywgLm5hdi10YWJzIC5uYXYtbGluay5hY3RpdmUgLmFib3V0LWljb24ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvd2hpdGVfaWNvbnMucG5nXCIpICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA2cHggMHB4O1xyXG59IFxyXG4ucC1yaWdodC04MCB7XHJcbiAgICBwYWRkaW5nOiAwcHggODBweDtcclxufVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgLnAtbW9iaWxlLTAge1xyXG4gICAgICAgcGFkZGluZzogMHB4IDIwcHggIWltcG9ydGFudDtcclxuICAgfVxyXG4gICAgLnRhYi1wYW5lLmFjdGl2ZXtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLmRhdGVpbnB1dHtcclxuICAgICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgfVxyXG4gICAgLm5hdi10YWJzIHtcclxuICAgICAgcGFkZGluZzogNjNweCAwcHggMHB4IDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAubmF2LXRhYnMge1xyXG4gICAgcGFkZGluZzogMTAwcHggMHB4IDBweCAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5sb2NhdGlvbkRhdGEge1xyXG4gICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ1NHB4KSB7XHJcbiAgICAubmF2LXRhYnMge1xyXG4gICAgcGFkZGluZzogMTIzcHggMHB4IDBweCAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuICBcclxuICAvKlRhZyBDbG91ZCBDU1MgU3RhcnRzKi9cclxuICAvKiBmb250cyAqL1xyXG4gIFxyXG4gIGRpdi5qcWNsb3VkIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYVwiLCBcIkFyaWFsXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gICAgZGl2LmpxY2xvdWQgYSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIGRpdi5qcWNsb3VkIHNwYW4udzIwIHtcclxuICAgICAgZm9udC1zaXplOiA2MDAlO1xyXG4gICAgfVxyXG5cclxuICAgIGRpdi5qcWNsb3VkIHNwYW4udzE5IHtcclxuICAgICAgZm9udC1zaXplOiA2MDAlO1xyXG4gICAgfVxyXG5cclxuICAgIGRpdi5qcWNsb3VkIHNwYW4udzE4IHtcclxuICAgICAgZm9udC1zaXplOiA2MDAlO1xyXG4gICAgfVxyXG5cclxuICAgIGRpdi5qcWNsb3VkIHNwYW4udzE3IHtcclxuICAgICAgZm9udC1zaXplOiA1NzUlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZGl2LmpxY2xvdWQgc3Bhbi53MTYge1xyXG4gICAgICBmb250LXNpemU6IDU3NSU7XHJcbiAgICB9XHJcblxyXG4gICAgZGl2LmpxY2xvdWQgc3Bhbi53MTUge1xyXG4gICAgICBmb250LXNpemU6IDU3NSU7XHJcbiAgICB9XHJcblxyXG4gICAgZGl2LmpxY2xvdWQgc3Bhbi53MTQge1xyXG4gICAgICBmb250LXNpemU6IDU1MCU7XHJcbiAgICB9XHJcblxyXG4gICAgZGl2LmpxY2xvdWQgc3Bhbi53MTMge1xyXG4gICAgICBmb250LXNpemU6IDUyNSU7XHJcbiAgICB9XHJcblxyXG4gICAgZGl2LmpxY2xvdWQgc3Bhbi53MTIge1xyXG4gICAgICBmb250LXNpemU6IDUwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgZGl2LmpxY2xvdWQgc3Bhbi53MTEge1xyXG4gICAgICBmb250LXNpemU6IDQ3NSU7XHJcbiAgICB9XHJcblxyXG4gICAgZGl2LmpxY2xvdWQgc3Bhbi53MTAge1xyXG4gICAgICBmb250LXNpemU6IDQ1MCU7XHJcbiAgICB9XHJcblxyXG4gICAgZGl2LmpxY2xvdWQgc3Bhbi53OSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNDI1JTtcclxuICAgIH1cclxuICBcclxuICAgIGRpdi5qcWNsb3VkIHNwYW4udzgge1xyXG4gICAgICBmb250LXNpemU6IDQwMCU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBkaXYuanFjbG91ZCBzcGFuLnc3IHtcclxuICAgICAgZm9udC1zaXplOiAzNzUlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZGl2LmpxY2xvdWQgc3Bhbi53NiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzUwJTtcclxuICAgIH1cclxuICBcclxuICAgIGRpdi5qcWNsb3VkIHNwYW4udzUge1xyXG4gICAgICBmb250LXNpemU6IDMyNSU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBkaXYuanFjbG91ZCBzcGFuLnc0IHtcclxuICAgICAgZm9udC1zaXplOiAzMDAlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZGl2LmpxY2xvdWQgc3Bhbi53MyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjAwJTtcclxuICAgIH1cclxuICBcclxuICAgIGRpdi5qcWNsb3VkIHNwYW4udzIge1xyXG4gICAgICBmb250LXNpemU6IDE1MCU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBkaXYuanFjbG91ZCBzcGFuLncxIHtcclxuICAgICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgfVxyXG4gIFxyXG4gIC8qIGNvbG9ycyAqL1xyXG4gIGRpdi5qcWNsb3VkIHtcclxuICAgIGNvbG9yOiAjMmFhN2Q3IDtcclxuICB9XHJcbiAgXHJcbiAgICBkaXYuanFjbG91ZCBhIHtcclxuICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAgIGRpdi5qcWNsb3VkIGE6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiM5OWNjZWU7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgZGl2LmpxY2xvdWQgYTpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICMwY2Y7XHJcbiAgICAgIH1cclxuICBcclxuICAgIGRpdi5qcWNsb3VkIHNwYW4udzEwIHtcclxuICAgICAgY29sb3I6ICMyYWE3ZDcgO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZGl2LmpxY2xvdWQgc3Bhbi53OSB7XHJcbiAgICAgIGNvbG9yOiAjMmFhN2Q3IDtcclxuICAgIH1cclxuICBcclxuICAgIGRpdi5qcWNsb3VkIHNwYW4udzgge1xyXG4gICAgICBjb2xvcjogIzIxOTRjMCA7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBkaXYuanFjbG91ZCBzcGFuLnc3IHtcclxuICAgICAgY29sb3I6ICMyMTk0YzAgO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZGl2LmpxY2xvdWQgc3Bhbi53NiB7XHJcbiAgICAgIGNvbG9yOiAjMjE5NGMwIDtcclxuICAgIH1cclxuICBcclxuICAgIGRpdi5qcWNsb3VkIHNwYW4udzUge1xyXG4gICAgICBjb2xvcjogIzIxOTRjMDtcclxuICAgIH1cclxuICBcclxuICAgIGRpdi5qcWNsb3VkIHNwYW4udzQge1xyXG4gICAgICBjb2xvcjogIzEyNmU5NyA7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBkaXYuanFjbG91ZCBzcGFuLnczIHtcclxuICAgICAgY29sb3I6IzEyNmU5NyA7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBkaXYuanFjbG91ZCBzcGFuLncyIHtcclxuICAgICAgY29sb3I6IzAwMzc2YyA7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBkaXYuanFjbG91ZCBzcGFuLncxIHtcclxuICAgICAgY29sb3I6IzQ3NGE0ZSA7XHJcbiAgICB9XHJcbiAgXHJcbiAgXHJcbiAgLyogbGF5b3V0ICovXHJcbiAgXHJcbiAgZGl2LmpxY2xvdWQge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgICBkaXYuanFjbG91ZCBzcGFuIHtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICAvKlRhZyBDbG91ZCBDU1MgRW5kcyovXHJcbiAgXHJcbiAgLm5nMi10YWctaW5wdXRfX3RleHQtaW5wdXQge1xyXG4gICAgcGFkZGluZzogMCAuNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICB9XHJcbiAgXHJcbiAgLm5nMi10YWctaW5wdXQge1xyXG4gICAgICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIHRhZzpub3QoOmZvY3VzKTpub3QoLnRhZy0tZWRpdGluZyk6bm90KDphY3RpdmUpOm5vdCgucmVhZG9ubHkpOmhvdmVyIHtcclxuICAgICAgYm94LXNoYWRvdzogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIHRhZyB7XHJcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNDQ0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiAuM3M7XHJcbiAgICBtYXJnaW46IC4xcmVtIC4zcmVtIC4xcmVtIDA7XHJcbiAgICBwYWRkaW5nOiAuMDhyZW0gLjQ1cmVtO1xyXG4gICAgaGVpZ2h0OiAyNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMjVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICBkZWxldGUtaWNvbiBzdmcge1xyXG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbSFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDI1cHghaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuY3VzdG9tLWRheSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwLjE4NXJlbSAwLjI1cmVtO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgd2lkdGg6IDJyZW07XHJcbiAgfVxyXG4gIFxyXG4gICAgLmN1c3RvbS1kYXkucmFuZ2Uge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMiwgMTE3LCAyMTYpO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgXHJcbiAgLmJ0bjpmb2N1cywgLmJ0bjphY3RpdmU6Zm9jdXMsIC5idG4uYWN0aXZlOmZvY3VzLCAuYnRuLmFjdGl2ZSB7XHJcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDNweCA1cHggcmdiYSgwLDAsMCwwLjEyNSk7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDNweCA1cHggcmdiYSgwLDAsMCwwLjEyNSk7XHJcbiAgfVxyXG4gIFxyXG4gIGRpdiNuZ2ItdGFiLTEtcGFuZWx7XHJcbiAgICAgIHBhZGRpbmc6IDBweDtcclxuICB9XHJcbiAgXHJcbiAgbmdiLWFjY29yZGlvbi5hY2NvcmRpb24gLmNhcmQge1xyXG4gICAgYmFja2dyb3VuZDojMzEzNTNkICAgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjODE4ODk2IWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICB9XHJcbiAgXHJcbiAgbmdiLWFjY29yZGlvbi5hY2NvcmRpb24gLmNhcmQtaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDBweCFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICBuZ2ItYWNjb3JkaW9uLmFjY29yZGlvbiAuYnRuIHtcclxuICAgIGNvbG9yOiAjODE4ODk2ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIG5nYi1hY2NvcmRpb24uYWNjb3JkaW9uIC5idG46aG92ZXIsIG5nYi1hY2NvcmRpb24uYWNjb3JkaW9uIC5idG46Zm9jdXMsIG5nYi1hY2NvcmRpb24uYWNjb3JkaW9uIC5idG46YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGNvbG9yOiAjYjhiZmNlIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgbmdiLWFjY29yZGlvbi5hY2NvcmRpb24gLmNhcmQtaGVhZGVyIGJ1dHRvbjphZnRlciB7XHJcbiAgICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgY29udGVudDogXCJcXGYxMDVcIjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtdmFyaWFudDogbm9ybWFsO1xyXG4gICAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAwIDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTVweDtcclxuICAgIHRvcDogOXB4O1xyXG4gIH1cclxuXHJcbiAgLmxvYWRlciBpbWcge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICBcclxuLmhpZGUtcGFnZS1udW1iZXJzIC9kZWVwLyAubmd4LXBhZ2luYXRpb24gbGk6bm90KC5wYWdpbmF0aW9uLXByZXZpb3VzKTpub3QoLnBhZ2luYXRpb24tbmV4dCkge1xyXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4gIFxyXG4ubmd4LXBhZ2luYXRpb24gLnBhZ2luYXRpb24tcHJldmlvdXMgYTo6YmVmb3JlLCAubmd4LXBhZ2luYXRpb24gLnBhZ2luYXRpb24tcHJldmlvdXMuZGlzYWJsZWQ6OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcXDAwM0NcIiAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG59XHJcblxyXG4ubmd4LXBhZ2luYXRpb24gLnBhZ2luYXRpb24tbmV4dCBhOjphZnRlciwgLm5neC1wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLW5leHQuZGlzYWJsZWQ6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXFwwMDNFXCIgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG59XHJcblxyXG4uaGVhZGVyLXRpdGxlIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgbWFyZ2luOiAwIDAgN3B4IDA7XHJcbn1cclxuXHJcbi5jYXJkLWJveCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCA0cHggMCByZ2JhKDAsMCwwLC4xKTtcclxuICBib3gtc2hhZG93OiAwIDFweCA0cHggMCByZ2JhKDAsMCwwLC4xKTtcclxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxuICB0cmFuc2l0aW9uOiAwLjNzIGxpbmVhcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5saW5lLWNoYXJ0IHtcclxuICBwYWRkaW5nOiAxZW07XHJcbn1cclxuXHJcbi5oLTM1MCB7XHJcbiAgaGVpZ2h0OiAzNTBweDtcclxufVxyXG5cclxuLyogLnN3ZWVwLXRvLXJpZ2h0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgMTAwMG1zO1xyXG4gIHRyYW5zaXRpb246IGNvbG9yIDEwMDBtcztcclxufVxyXG5cclxuICAuc3dlZXAtdG8tcmlnaHQ6YmVmb3JlIHtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgYmFja2dyb3VuZDogIzIwOThkMTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCA1MCU7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDUwJTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xyXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAzMDBtcyBlYXNlLW91dDtcclxuICAgIHRyYW5zaXRpb246IDMwMG1zIGVhc2Utb3V0O1xyXG4gIH1cclxuXHJcbiAgLnN3ZWVwLXRvLXJpZ2h0OmhvdmVyOmJlZm9yZSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDEpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgfSAqL1xyXG5cclxuICAuei1pbmRleC0xIHtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG5cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgLm5nYi1kcC1tb250aHMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIG92ZXJmbG93LXg6IHNjcm9sbCAhaW1wb3J0YW50O1xyXG4gICAgICB3aWR0aDogMjQ1cHggIWltcG9ydGFudDtcclxuICAgIH0gIFxyXG59XHJcbiAgXHJcbiBcclxuZyNkM3BsdXMtdGV4dEJveC0wIHRleHQge1xyXG4gIGZvbnQtc2l6ZTogMTVweCFpbXBvcnRhbnQ7XHJcbn0iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 18:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\akrit\Desktop\WinWin\NI\NewImpact\src\styles.css */"./src/styles.css");


/***/ })

},[[18,"runtime"]]]);
//# sourceMappingURL=styles-es5.js.map