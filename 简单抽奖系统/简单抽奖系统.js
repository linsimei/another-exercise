//用数组罗列奖品：
var data = ['Phone7', 'Ipad', '三星笔记本', '佳能相机', '惠普打印机', '谢谢参与', '50元充值卡', '1000元超市购物券'],
    timer = null;
    flag = 0;

    window.onload = function () {
    //获取相关元素:
    var play = document.getElementById("play")
    var stop = document.getElementById("stop")

//鼠标点击抽奖:
play.onclick = playFun;
stop.onclick = stopFun;


//键盘"enter"键点击抽奖:
document.onkeyup= function(event) {
    event = event || window.event;
    if (event.keyCode==13) {
        if (flag==0) {
            playFun();
            flag = 1;
        } else {
            stopFun();
            flag = 0;
        }
    }
 }
}

function playFun() {
    var title = document.getElementById("title");
    var play = document.getElementById('play');
    clearInterval(timer);
    timer=setInterval((function() {
        var random = Math.floor(Math.random() * data.length);
        title.innerHTML = data[random];
    }), 50)
    play.style.background = '#999';
}

function stopFun() {
    clearInterval(timer);
    var play = document.getElementById('play');
    play.style.background = '#036';
}