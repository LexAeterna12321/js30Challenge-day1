const keys = document.querySelectorAll(".key");
const audio = [...document.querySelectorAll("audio")];

const keyBlink = function (e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing"); //class removal after animation end
}


const letThereBeMusic = (e) => {
    keys.forEach(key => {
        if (key.dataset.key == e.which) {
            key.classList.add("playing");
            const rightAudio = audio.filter(audio => audio.dataset.key == e.which); //searches for right sound to play
            rightAudio[0].currentTime = "0";
            rightAudio[0].play();
            key.addEventListener("transitionend", keyBlink); //listens for changes in blink animation
        }
    })
}

document.addEventListener("keydown", letThereBeMusic);