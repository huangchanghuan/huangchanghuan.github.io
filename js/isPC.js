function IsPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone",
        "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}

(function(){

    if(true){//如果是电脑

        console.log("本人专注java web后台开发,架构,微服务,向往更好的机会,有需要请联系我:changhuan.huang@gmail.com")
        //所有main-right 样式
        var main_right=document.getElementsByClassName("main-right");
        main_right[0].style.padding = "0 20%";
        main_right[0].style.background="#FFFFFF";

        //设置树
        var star_main=document.getElementsByClassName("star-main");
        star_main[0].style.background="url(/img/nuanhuhu/center.gif) repeat-y 308px center ";
        var footer=document.getElementsByClassName("footer");
        footer[0].style.background="url(/img/nuanhuhu/footer.gif) no-repeat 90px top ";
        //设置首页的main-right样式
        var main_right = document.getElementsByClassName("index-main");
        if(main_right[0]){
            main_right[0].style.padding = "0 44px";
        }
        //设置图片样式
        var article_gallery = document.getElementsByClassName("article-gallery");
        if(article_gallery[0]){
            article_gallery[0].style.width = "360px";
            article_gallery[0].style.margin = "0px 0px 1em 0px ";
        }
        //contain 样式
        var father_container = document.getElementsByClassName("father-container");
        father_container[0].style.width = "1000px";
        father_container[0].style.paddingLeft = "20px";
        father_container[0].style.paddingRight = "20px";
        father_container[0].style.backgroundColor = "#fff";
        father_container[0].style.marginTop = "20px";
        //header宽度
        $('#header-nav li a').attr("style","padding:10px 15px")
        //显示页面,显示友好
        father_container[0].style.display = "block";
    }else{
        console.log("the device  is phone !")
        //显示页面,显示友好
        var father_container = document.getElementsByClassName("father-container");
        father_container[0].style.display = "block";
    }
})();