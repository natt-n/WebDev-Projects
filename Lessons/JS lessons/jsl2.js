var num = Math.random(); //0 to 0.999...
var numScore = Math.random() * 100 //0 to 99.9999
numScore = Math.floor(numScore);

if(numScore === 50){
    console.log("You rolled 50");
} else{
    console.log("You didn't");
}

if(numScore !== 50){
    console.log("Keep trying");
}

var a = 1;
var b = "1";
var ans = (a == b); //true
var ans2 = (a === b); //false

var myEggs = [1,2,3,4,5];
var firstEgg = myEggs[0];
var count = myEggs.length;
if(myEggs.includes(5)){
    console.log("egg 5 is there");
} else{
    myEggs.push(5);
}

if(myEggs.length > 12){
    myEggs.pop;
}

for(var i = 1; i < 2; i++){
    console.log(i);
}