function rollDice(){
    var num = Math.floor(Math.random() * 6) + 1; 
    return num;
}

var num1 = rollDice();
var num2 = rollDice();

var p1img = "images/dice" + num1 + ".png";
var p2img = "images/dice" + num2 + ".png";

if(num1 > num2){
    document.querySelector("h1").textContent = "Player 1 wins";
} else if(num1 < num2){
    document.querySelector("h1").textContent = "Player 2 wins";
} else{
    document.querySelector("h1").textContent = "Draw";
}

document.querySelectorAll("img")[0].setAttribute("src", p1img);
document.querySelectorAll("img")[1].setAttribute("src", p2img);