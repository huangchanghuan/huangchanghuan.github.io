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
        //main-right 样式
        var main_right=document.getElementsByClassName("main-right");
        main_right[0].style.padding= "0 20%"
        //contain 样式
        var father_container = document.getElementsByClassName("father-container");
        father_container[0].style.width = "76%";
        //header宽度
        $('#header-nav li a').attr("style","padding:10px 15px")
    }
})();