let gamePattern = [];
let userClickedPattern = [];
const buttonColours = ["red", "blue", "green", "yellow"];
let started = false;
let level = 0;


function nextSequence() {
    userClickedPattern = [];
    level++;

    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

    $("#level-title").text("Level " + level);

}

$(".btn").on("click", function(event) {
    userChosenColour = event.target.id;
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);

    animatePress(userChosenColour)

    checkAnswer(userClickedPattern.length - 1);
});

$(document).on('keypress', function() {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

function playSound(name) {
    audio = new Audio("./sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");

    setTimeout(() => {
        $("#" + currentColour).removeClass("pressed");
    }, 100)
}

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        audio = new Audio("./sounds/wrong.mp3");
        audio.play();

        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 200)

        $("#level-title").text("Game Over, Press Any Key to Restart");

        startOver()
    }
}

function startOver() {
    started = false;
    gamePattern = [];
    level = 0;
}