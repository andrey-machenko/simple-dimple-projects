const dino = document.getElementById("my-dino");
const cactus = document.getElementById("my-cactus");
const timer = document.querySelector(".timer");

document.addEventListener("keydown", function (event) {
  jump();
});

function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");
  }
  setTimeout(function () {
    dino.classList.remove("jump");
  }, 300);
}

let sec = 0;
setInterval(function () {
  timer.textContent = sec;
  sec++;
}, 1000);


let isAlive = setInterval(() => {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  if (cactusLeft < 60 && cactusLeft > 0 && dinoTop >= 140) {
    sec = 0;
    timer.textContent = `0`;
  }
}, 10);
