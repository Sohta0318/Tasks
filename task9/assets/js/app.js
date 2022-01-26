const mario = document.querySelector("#avatar");
const coin = document.querySelector("#coin");
const sound = new Audio("assets/audio/smw_coin.wav");
const score = document.createElement("p");

let move = 25;
let scoreCount = 0;
let marioY;
let marioX;
const randomScreenHeight = Math.floor(Math.random() * 900);
const randomScreenWidth = Math.floor(Math.random() * 900);
let coinY = 0;
let coinX = 0;

const coinMove = () => {
  coin.style.left = `${randomScreenHeight}px`;
  coin.style.top = `${randomScreenWidth}px`;
  coinY = Math.floor(randomScreenHeight / 10) * 25;
  coinX = Math.floor(randomScreenWidth / 10) * 25;
};
window.addEventListener("load", () => {
  mario.style.left = "100px";
  mario.style.top = "100px";
  coinMove();
  console.log(coinX);
});

window.addEventListener("keydown", (e) => {
  const keyDown = e.key;
  const marioLeft = parseInt(mario.style.left) - move;
  const marioRight = parseInt(mario.style.left) + move;
  const marioUp = parseInt(mario.style.top) - move;
  const marioDown = parseInt(mario.style.top) + move;
  switch (keyDown) {
    case "ArrowLeft":
      mario.style.left = marioLeft + "px";
      marioX = marioLeft - 100;
      console.log(marioX);
      check();
      break;
    case "ArrowRight":
      mario.style.left = marioRight + "px";
      marioX = marioRight - 100;
      console.log(marioX);
      check();

      break;
    case "ArrowUp":
      mario.style.top = marioUp + "px";
      marioY = marioUp;
      console.log(marioY);
      check();
      break;
    case "ArrowDown":
      mario.style.top = marioDown + "px";
      marioY = marioDown;
      console.log(marioY);
      check();
      break;
  }
});

function check() {
  if (marioX === coinX && marioY === coinY) {
    coinMove();
    console.log("Okay");
    scoreCount += 1;
    sound.play();
  }
}
score.innerHTML = `Score: ${scoreCount}`;
document.body.appendChild(score);
