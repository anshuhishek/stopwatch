const start= document.getElementById(`strt`);
const rest= document.getElementById(`restart`);
const stop= document.getElementById(`stop`);
const clock = document.getElementById(`clock`);
let ms= 0;
let s=0;
let min=0;
let isRunning= false;
let interval;
function updateDisplay(){
    clock.textContent= `${padZero(min)} : ${padZero(s)} : ${padZero(ms)}`;
}
function padZero(value) {
    return value < 10 ? `0${value}` : value;
  }
start.onclick= function(){
    if(!isRunning){
        isRunning= true;
        interval= setInterval(function(){
            ms+=1;
            if(ms===100){
                ms=0;
                s+=1;
                if(s===60){
                    s=0;
                    min+=1;
                }
            }
            updateDisplay();
        }, 1);
    }
};
stop.onclick= function() {
    if (isRunning) {
      isRunning = false;
      clearInterval(interval);
    }
};
rest.onclick= function() {
    isRunning = false;
    clearInterval(interval);
    ms = 0;
    s = 0;
    min = 0;
    updateDisplay();
  };

