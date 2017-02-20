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
    if(IsPC()){//如果是电脑
        //所有main-right 样式
        var main_right=document.getElementsByClassName("main-right");
        main_right[0].style.padding= "0 20%"
        //设置首页的main-right样式
        var main_right = document.getElementsByClassName("index-main");
        if(main_right[0]){
            main_right[0].style.padding="0 44px"
        }
        //contain 样式
        var father_container = document.getElementsByClassName("father-container");
        father_container[0].style.width = "76%";
        //header宽度
        $('#header-nav li a').attr("style","padding:10px 15px")
        //显示页面,显示友好
        father_container[0].style.display = "";
    }else{
        //显示页面,显示友好
        var father_container = document.getElementsByClassName("father-container");
        father_container[0].style.display = "";
    }
})();