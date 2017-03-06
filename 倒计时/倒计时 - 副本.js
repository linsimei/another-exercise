window.onload= function() {
    freshTime();
}


var timeout;
function freshTime() {
    var curTime = new Date();
    var endTime = new Date("2017/6/6 08:30:00");
    leftTime = parseInt((endTime.getTime() - curTime.getTime()) / 1000);

    var d = parseInt(leftTime / (24 * 60 * 60));
    var h = parseInt(leftTime / (60 * 60) % 24);
    var m = parseInt(leftTime / 60 % 60);
    var s = parseInt(leftTime % 60);
    document.getElementById("day").innerHTML = d;
    document.getElementById("hours").innerHTML = h;
    document.getElementById("minutes").innerHTML = m;
    document.getElementById("seconds").innerHTML = s;

    //如果离开始两天内
    if (leftTime <= 2 * 24 * 60 * 60 && leftTime > 0) {
        document.getElementById("time").innerHTML = "高考开始,加油!";
        clearTimeout(timeout);//取消定时操作
    }//已结束
    else if (leftTime <= 0) {
        document.getElementById("time").innerHTML = "高考结束!";
        clearTimeout(timeout);
    }//大于两天
    else {
        timeout = setTimeout("freshTime()", 500);
    }
}