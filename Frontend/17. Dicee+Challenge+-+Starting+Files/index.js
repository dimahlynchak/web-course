let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let dicePicturePath1 = "./images/dice" + randomNumber1 + ".png";
let dicePicturePath2 = "./images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", dicePicturePath1);
document.querySelector(".img2").setAttribute("src", dicePicturePath2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
} else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
}