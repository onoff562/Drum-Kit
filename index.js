function getAudio(char) {
    switch (char) {
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        
        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        default: 
            console.log("Key have no sounds");
            break;
    }
}

function buttonAnimation(char) {
    var button = document.querySelector("." + char);
    button.classList.add("pressed");
    setTimeout(function() {
        button.classList.remove("pressed");
    }, 100)
}

for (var index = 0; index < document.querySelectorAll(".drum").length; index++) {
    document.querySelectorAll(".drum")[index].addEventListener("click", function() {
        getAudio(this.textContent);
        buttonAnimation(this.textContent);
    });
}

document.addEventListener("keydown", function(event) {
    getAudio(event.key);
    buttonAnimation(event.key);
})