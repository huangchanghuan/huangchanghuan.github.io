(function () {

  'use strict';

  var document = window.document;
  var Viewer = window.Viewer;


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


