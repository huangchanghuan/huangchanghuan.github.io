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
    if(!IsPC()){//如果是手机端
        //main-right 样式
        var main_right=document.getElementsByClassName("main-right");
        main_right[0].style.padding= "0"
        //contain 样式
        var father_container = document.getElementsByClassName("father-container");
        father_container[0].style.width = "100%";
    }
})();