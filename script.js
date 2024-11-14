let timer = 90;
let score = 0;
let hitrn;
function increaseScore() {
  score += 10;
  document.querySelector("#scoreVal").textContent = score;
}
function getHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitVal").textContent = hitrn;
}
function makeBubble() {
  let clutter = "";
  for (let i = 0; i <= 113; i++) {
    const rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector("#bottom").innerHTML = clutter;
}
function runTimer() {
  let TimerInt = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerValue").textContent = timer;
    } else {
      clearInterval(TimerInt);
      document.querySelector("#bottom").innerHTML = `<h1>GAME OVER ☠️☠️</h1>`;
    }
  }, 1000);
}
document.querySelector("#bottom").addEventListener("click", function (detail) {
  let clickedNum = Number(detail.target.textContent);
  if (clickedNum === hitrn) {
    
    increaseScore();
    makeBubble();
    getHit();
  }
});
runTimer();
makeBubble();
getHit();
