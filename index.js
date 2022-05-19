
// Detecting button press

const numberOfDrumButtons = document.querySelectorAll(".drum").length;



for(let i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        const buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML)
    })
};

// Detecting Keyboard press
document.addEventListener("keypress", function(event) {
    makeSound(event.key)
    buttonAnimation(event.key)
});

function makeSound(key) {
    switch (key) {
        case "a":
            const tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "x":
        const tom2 = new Audio("sounds/tom-2.mp3")
        tom2.play();
        break

        case "c":
        const tom3 = new Audio("sounds/tom-3.mp3")
        tom3.play();
        break

        case "v":
        const tom4 = new Audio("sounds/tom-4.mp3")
        tom4.play();
        break

        case "b":
        const tom5 = new Audio("sounds/crash.mp3")
        tom5.play();
        break

        case "n":
        const tom6 = new Audio("sounds/snare.mp3")
        tom6.play();
        break

        case "m":
        const tom7 = new Audio("sounds/kick-bass.mp3")
        tom7.play();
        break

        default: console.log(buttonInnerHTML)
            break;
    }
}

function buttonAnimation(currentKey) {
    const activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed")
    }, 100)
}
