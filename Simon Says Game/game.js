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

function play(color){
    playSound(color);
    $("#" + color).fadeOut(100).fadeIn(100);
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

function nextLevel(){
    $("h1").text("Level " + level);
    var randomChosenColour = nextSequence();
    gamePattern.push(buttonColours[randomChosenColour]); //add the new colour to the gamePattern array
    console.log("Game Pattern: " + gamePattern);
    play(buttonColours[randomChosenColour]); //play the new colour
}

//start the game with keypress
$(document).on("keypress", function(){
    if(gamePattern.length === 0){
        nextLevel();
    } else{ //ignore otherwise
        return;
    }
}
);

//will always check if the buttons pressed, matches the gamePattern
$(".btn").on("click", function(){

    //user clicks button
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    console.log("Clicked: " + userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);

    if(checkAnswer()){
        console.log("Correct");
        

        if(userClickedPattern.length !== gamePattern.length){
            return;
        }

        setTimeout(function(){
            userClickedPattern = [];
            level++;
            nextLevel();
        }, 1000);

    } else{
        console.log("Wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        userClickedPattern = [];
        gamePattern = [];
        level = 1;
    }
});