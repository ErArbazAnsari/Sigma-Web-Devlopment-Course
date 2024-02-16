// import Math;

let random_value = Math.random();
function sum(num1, num2){
    console.log((num1+num2));
}
function sub(num1, num2){
    console.log((num1-num2));
}
function mul(num1, num2){
    console.log((num1*num2));
}
function div(num1, num2){
    console.log((num1/num2));
}
let num1 = 10;
let num2 = 20;
if(random_value>0.10){
    console.log(true);
    sum(num1,num2);
    sub(num1,num2);
    mul(num1,num2);
    div(num1,num2);
}
else{
    console.log(false);
    sum(num1+5,num2+10);
    sub(num1-200,num2-500);
    mul(num1*45,num2*.34);
    div(num1/34,num2/60);
}

