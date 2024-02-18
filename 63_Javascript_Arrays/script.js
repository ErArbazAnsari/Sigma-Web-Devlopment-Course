let array = [10, 20, 30, 40]

console.log(array)
console.log("The size of the array is:", array.length)

console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])

let fruits = ["apple", "banana", "grapes", "orange"]
console.log(fruits)
let i = 0;
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i], "at index", i);

}
console.log(typeof fruits)
console.log(fruits.toString())

console.log(fruits.join(" and "))

//push and pop
fruits.push("12")
fruits.push("pomegranate")
console.log(fruits, fruits.length)

// fruits.pop()
fruits.pop()
console.log(fruits, fruits.length)

fruits.shift()
console.log(fruits, fruits.length)

fruits.unshift("Arbaz")
console.log(fruits, fruits.length)


let new_data = array.concat(fruits)
console.log(new_data.length)
console.log(new_data)

console.log(new_data.sort())

console.log(new_data.splice(1, 4))
console.log(new_data, new_data.length)

