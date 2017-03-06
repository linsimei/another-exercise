window.onload= function() {
    freshTime();
}


var timeout;
function freshTime() {
    var curTime = new Date();
    var endTime = new Date("2017/6/7 08:30:00");
    leftTime = parseInt((endTime.getTime() - curTime.getTime()) / 1000);

    var d = parseInt(leftTime / (24 * 60 * 60));
    var h = parseInt(leftTime / (60 * 60) % 24);
    var m = parseInt(leftTime / 60 % 60);
    var s = parseInt(leftTime % 60);
    document.getElementById("day").innerHTML = d;
    document.getElementById("hours").innerHTML = h;
    document.getElementById("minutes").innerHTML = m;
    document.getElementById("seconds").innerHTML = s;
    //6月7日08:30-6月8日17:30为高考时间,共计33小时;
    if (leftTime >-(33 * 60 * 60) && leftTime <= 0) {
        document.getElementById("time").innerHTML = "高考开始,加油!"; 
        clearTimeout(timeout);
    } else if (leftTime<=-(33 * 60 * 60)) {
        document.getElementById("time").innerHTML = "高考结束!"
        clearTimeout(timeout);
    } else {
      timeout=setTimeout(freshTime, 500);
    }
}
