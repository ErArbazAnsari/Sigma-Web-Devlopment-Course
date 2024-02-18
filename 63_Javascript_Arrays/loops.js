let arr = [10, 20, 1, 500, 55, 0]
console.log(arr)
console.log(arr.length)
arr.sort((a, b) => a - b);
console.log("My Sorted Array is:", arr)

arr.sort((a, b) => b - a);
console.log("My Sorted Array in Descending Order:", arr)

//Classic For Loop
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(arr[i]);
// }

//ForEach Loop
// arr.forEach((value, index, array) => {
//     console.log(value, index, array)
// })

// let object = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// //For in loop
// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
//         console.log(key, ":", element)

//     }
// }

//For of loop
console.log("\n\nMy Original Array:", arr)
console.log("After Using For of loop:")
for (const iterator of arr) {
    console.log(iterator)
}