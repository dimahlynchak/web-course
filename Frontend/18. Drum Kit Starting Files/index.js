// document.querySelectorAll("button").forEach(button => {
//     button.addEventListener("click", () => {
//         alert("Hello World !");
//     })
// })
let numberOfButtons = document.querySelectorAll(".drum").length;
for (let i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        let buttonInnerHTNL = this.innerHTML;
        chooseSound(buttonInnerHTNL);
        buttonAnimation(buttonInnerHTNL);
    })
}

document.addEventListener("keydown", function (event) {
    let keyInnerHTML = event.key;
    chooseSound(keyInnerHTML);
    buttonAnimation(keyInnerHTML);
})


function chooseSound(innerHTML) {
    switch (innerHTML) {
        case "w":
            tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;

        default: console.log(innerHTML);
    }
}

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}