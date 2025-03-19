gamePattern = [];
buttonColours = ["red", "blue", "green", "yellow"];
userClickedPattern = [];

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

$(document).on("keypress", function(){
    var randomChosenColour = nextSequence();
    gamePattern.push(buttonColours[randomChosenColour]); //add the new colour to the gamePattern array
    console.log(gamePattern);
    playSequence(gamePattern); //play the sequence of colours
}
);

$(".btn").on("click", function(){
    var userChosenColour = $(this).attr("id");
    console.log("Pressed: " + userChosenColour);
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);
});



/*
var gameRunning = false;
var getUserKeys = false;

$(document).on("keypress", function(){
    gameRunning = true;

    while(gameRunning){
        console.log("Game is running");
        
        pressedKeys = 0;
        userCorrect = false;

        if(pressedKeys == 0 || userCorrect){
            var randomChosenColour = newSequence();
            gamePattern.push(buttonColours[randomChosenColour]); //add the new colour to the gamePattern array
            playSequence(gamePattern); //play the sequence of colours
        }
        
        while(pressedKeys < gamePattern.length){
            console.log("User can click");

            $(document).on("click", function(){
                var userChosenColour = $(this).attr("id");
                console.log("Pressed: " + userChosenColour);

                if(userChosenColour !== gamePattern[pressedKeys]){
                    console.log("User has clicked the wrong colour");
                    userCorrect = false;
                    pressedKeys = gamePattern.length;
                    gameRunning = false;
                } else{
                    userCorrect = true;
                }
            });
            
            pressedKeys++;
        }
    }

    if(!gameRunning){
        console.log("Game ended");
    }
});
*/