(function () {
    'use strict';
    var document = window.document;
    var Viewer = window.Viewer;
    console.log(navigator.userAgent);

    if(navigator.userAgent.indexOf('UBrowser') > -1) {
        alert("这是UCBrower");
    }
      // if( ("onhashchange" in window) && ((typeof document.documentMode==="undefined") || document.documentMode==8)) {//监控url的hash变化.(图片打开时候hash会变化)
      //     // 浏览器支持onhashchange事件
      //     window.onhashchange = hashChangeFire;
      // } else {
      //     alert("浏览器不支持浏览图片插件!")
      // }
})();


