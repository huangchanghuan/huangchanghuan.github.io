(function () {

    /**
     * googel analytice
     */
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-92631040-1', 'auto');
    ga('send', 'pageview');
})();
/**
 * 点击切换阅读状态
 */
function dofloat() {
    if( $(".do_hide").hasClass("float_hide")){
        console.log("存在浮动");
        $(".do_hide").removeClass("float_hide");
        var dv = $('#item-bar');
        if (dv.css('position') != 'static') {
            dv.css({'position': 'static'});
            dv.removeClass("item-bar-fix");
        }
        $ (window).unbind ('scroll');
    }else{
        console.log("不存在浮动");
        $(".do_hide").addClass("float_hide");
        /**
         * 窗口滚动tab事件
         * @type {boolean}
         */
        var ie6 = /msie 6/i.test(navigator.userAgent)
            , dv = $('#item-bar'), st;
        dv.attr('otop', 460); //存储原来的距离顶部的距离
        console.log("item_bar原位置" +dv.offset().top);
        $(window).scroll(function () {
            st = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
            console.log("浏览器位置:" + st);
            console.log("item_bar位置" +dv.attr('otop'));
            if (st >= parseInt(dv.attr('otop'))) {
                if (ie6) {//IE6不支持fixed属性，所以只能靠设置position为absolute和top实现此效果
                    dv.css({position: 'absolute', top: st});
                }
                else if (dv.css('position') != 'fixed') {
                    dv.css({'position': 'fixed', top: 0,'z-index':1,width:299});
                    dv.addClass("item-bar-fix");
                }
                ;
            } else if (dv.css('position') != 'static') {
                dv.css({'position': 'static'});
                dv.removeClass("item-bar-fix");
            }
            ;
        });
    }
}

