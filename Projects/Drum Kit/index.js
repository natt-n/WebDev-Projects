//NOTE: cannot run in Node.js. Must run using Live Server

var buttons = document.querySelectorAll(".drum").length;
var drums =   document.querySelectorAll(".drum");

//For Clicking a Button
for(var i = 0; i < buttons; i++){    
    drums[i].addEventListener("click", function(){
        playSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

//For Pressing a Key
document.addEventListener("keydown", function(event){
    playSound(event.key);
    buttonAnimation(event.key);

    console.log(event.key);
})

function playSound(key){
    switch(key){
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
        }
}

function buttonAnimation(currentKey){
    var active = document.querySelector("." + currentKey); //.w for class w
    active.classList.add("pressed");
    setTimeout(function() {
        active.classList.remove("pressed");
    }, 100);
}
/*document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
})*/