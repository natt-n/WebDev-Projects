//Higher Order functions 

function calculator(num1, num2, operation){
    return operation(num1, num2);
}

function add(num1, num2){
    return num1 + num2;
}

function sub(num1, num2){
    return num1 - num2;
}

function mul(num1, num2){
    return num1 * num2;
}

function div(num1, num2){
    return num1 / num2;
}

console.log(calculator(2,3,add));
console.log(calculator(2,3,sub));
console.log(calculator(2,3,div));
console.log(calculator(2,3,mul));
