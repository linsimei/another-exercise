
window.onload = function () {
    setInterval("timer()", 500);

}

var timer = function () {
    var myDate = new Date();
    var year = myDate.getFullYear();
    var month = myDate.getMonth() + 1;
    var date = myDate.getDate();
    var day = myDate.getDay();
    var weekday = new Array(6);
    weekday[0] = "星期日";
    weekday[1] = "星期一";
    weekday[2] = "星期二";
    weekday[3] = "星期三";
    weekday[4] = "星期四";
    weekday[5] = "星期五";
    weekday[6] = "星期六";
    var hours = myDate.getHours();
    var Minutes = myDate.getMinutes();
    var seconds = myDate.getSeconds();
    if (hours < 10) {
        hours = "0" + hours;
    }
   
    if (Minutes < 10) {
        Minutes = "0" + Minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    // var weekday = ["", "", ""];
    document.getElementById("time").innerHTML = "当前时间:" + year + "年 " + month + "月 " + date + "日 " + weekday[day] + hours + ":" + Minutes + ":" + seconds;
}
timer();

