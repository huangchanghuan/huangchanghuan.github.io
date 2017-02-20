(function () {
  'use strict';
  var document = window.document;
  var Viewer = window.Viewer;
  if( ("onhashchange" in window) && ((typeof document.documentMode==="undefined") || document.documentMode==8)) {//监控url的hash变化.(图片打开时候hash会变化)
      // 浏览器支持onhashchange事件
      window.onhashchange = hashChangeFire;
  } else {
      alert("浏览器不支持浏览图片插件!")
  }

  function hashChangeFire() {
      //获取url,如果结尾没有hash则执行关闭窗口
      var showPicUrl = window.location.href ;
      if(showPicUrl.indexOf("#showPic")==-1){//如果不存在,则关闭窗口
          var viewer_button=document.getElementsByClassName("viewer-button")[0];
          if(viewer_button){
              viewer_button.click();
          }
      }
  }

    // Photo Gallery
  // -------------------------

  window.addEventListener('DOMContentLoaded', function () {
    var galleries = document.getElementsByClassName('article-gallery');
    var length = galleries ? galleries.length : 0;
    var viewers = [];
    var i;
    for (i = 0; i < length; i++) {
      viewers.push(new Viewer(galleries.item(i), {
        toolbar: false,
        navbar:false,
        url: function () {
          return this.src.replace('/thumbnails', '');
        },
          hide:  function (e) {//点击关闭图片,处理url的hash
              //获取url,如果结尾没有hash则执行关闭窗口
              var showPicUrl = window.location.href;
              if(showPicUrl.indexOf("#showPic")==-1){//如果不存在,则关闭窗口
                  var viewer_button=document.getElementsByClassName("viewer-button")[0];
                  if(viewer_button[0]){
                      viewer_button[0].click();
                  }
              }else{//存在hash
                  history.go(-1)
              }
          }
      }));
    }

  });

  // Google Analytics
  // -------------------------

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-48260255-3', 'auto');
  ga('send', 'pageview');

})();


