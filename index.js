const lowerhigher = document.getElementById("lowerhighertext")
const input = document.getElementById("input")
const container = document.getElementById("container")
const overlay = document.getElementById("overlay")

const number = Math.floor(Math.random()*100)+1;

let guess = 0;

input.addEventListener("change", function (){
    guess = input.value
    if (guess<number) {
        lowerhigher.textContent = "higher"
    } else if (guess>number) {
        lowerhigher.textContent = "lower"
    } else {
        container.classList.add("visually-hidden")

        const audio = new Audio('sound.mp3');
        audio.play();

        overlay.classList.remove("visually-hidden")

    }
})
