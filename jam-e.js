function startTimer(t,n){var e,r,a=t;setInterval(function(){e=parseInt(a/60,10),r=parseInt(a%60,10),e=e<10?"0"+e:e,r=r<10?"0"+r:r,n.textContent=e+":"+r,--a<0&&(a=t)},1e3)}
window.onload = function () {
    var fiveMinutes = 60 * 30,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};


