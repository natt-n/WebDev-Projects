gamePattern = [];
buttonColours = ["red", "blue", "green", "yellow"];
userClickedPattern = [];
var level = 1;

function nextSequence(){ //choose a random number between 0 and 3
    var randomNumber = Math.floor(Math.random() * 4)
    console.log(randomNumber);
    return randomNumber;
}

function playSequence(gamePattern){ //plays the sequence of colours
    for(var i = 0; i < gamePattern.length; i++){
        var id = "#" + gamePattern[i];
        playSound(gamePattern);
        $(id).fadeOut(100).fadeIn(100);
    }
}

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");
    setTimeout(function(){
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

function checkAnswer(){
    for (var i = 0; i < userClickedPattern.length; i++){
        if(userClickedPattern[i] !== gamePattern[i]){
            return false;
        }
    }
    return true;
}
//start the game with keypress
$(document).on("keypress", function(){
    $(".title").text("Level " + level);
    var randomChosenColour = nextSequence();
    gamePattern.push(buttonColours[randomChosenColour]); //add the new colour to the gamePattern array
    console.log(gamePattern);
    playSequence(gamePattern); //play the sequence of colours
}
);

//will always check if the buttons pressed, matches the gamePattern
$(".btn").on("click", function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);

    if(checkAnswer()){
        console.log("Correct");
        userClickedPattern = [];
        level++;
    } else{
        console.log("Wrong");
        userClickedPattern = [];
        gamePattern = [];
        level = 1;
    }
});