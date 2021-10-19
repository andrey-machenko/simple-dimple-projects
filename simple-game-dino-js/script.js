const dino = document.getElementById("my-dino");
const cactus = document.getElementById("my-cactus"); 

document.addEventListener("keydown", function(event) {
    jump();
});

function jump() {
    if (dino.classList != "jump") {
        dino.classList.add("jump")
    }
    setTimeout( function() {
        dino.classList.remove("jump")
    }, 300)
}

let isAlive = setInterval(() => {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))

    if (cactusLeft < 60 && cactusLeft > 0 && dinoTop >= 140) {
        alert("GGWP!");
    }

}, 10);
