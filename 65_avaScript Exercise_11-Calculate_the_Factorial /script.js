// Write a program to calculate factorial of a number using reduce and using for loops
// 6! = 6 * 5 * 4 * 3 * 2 * 1

// function factorial(n){
//     let fact = 1;
//     if(n==0){
//         return 0;
//     }
//     else{
//         for(let i = 1; i<=n; i++){
//             fact = fact*i;
//         }
//     }
//     return fact;
// }

// let ans = factorial(18)
// console.log(ans)


// Reduce Function
var array = [];

function factor(num) {
    for (i = 1; i <= num; i++) {
        array.push(i);
    }
    array.reduce(function (a, b) {
        return a * b;
    })
};


let ans = factor(5);
console.log(ans)