const timer=document.querySelector('.timerClock');
const startBtn=document.querySelector('.timer_start');
const stopBtn=document.querySelector('.timer_stop');
const resetBtn=document.querySelector('.timer_reset');

let TIME=0;
let cron;
let double=0;

function startButton(){
  if (double===0){
    double++
    updateTimer();

    cron=setInterval(updateTimer,1000);
  }
}
function stopButton(){
  clearInterval(cron);
  double=0;
  console.log(double);
}
function resetButton(){
  timer.innerText=("00:00:00");
  TIME=0;
  double=0;
  console.log(double);
  clearInterval(cron);
}
function updateTimer(){
  const hours = Math.floor(TIME/3600);
  const minutes = (Math.floor(TIME/60)%60);
  const seconds = Math.floor(TIME%60);

  timer.innerText=`${hours<10 ? `0${hours}`:hours}:${
    minutes<10?`0${minutes}`:minutes}:${
    seconds<10?`0${seconds}`:seconds}`;
  TIME++;

}
startBtn.addEventListener('click',startButton);
stopBtn.addEventListener('click',stopButton);
resetBtn.addEventListener('click',resetButton);
