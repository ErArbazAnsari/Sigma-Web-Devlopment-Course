console.log("JavaScript Variables, Data Types & Objects")

var a = 10;
var b = 20;
var c = "Arbaz Ansari";

console.log("Sum Is: ", a + b + 10);
console.log("C Value is: ", c)


//Type of Operator
console.log(typeof (a));
console.log(typeof (b));
console.log(typeof (c));


const a1 = 10;
// a1 = a1 + 2; This is Not Allowed because a1 is constant variable

console.log("Value of a1 is: ", a1)


let num1 = 0;
{
    let num1 = 2;
    console.log(num1);
}
console.log(num1)

// We have two types of varibles in javascript (primitive and object/user defined)
// Primitive Data Type
let s = "Arbaz";
let t = 22;
let u = 22.2;
let v = true;
let w = undefined;
let x = null;
let y = 99999999999;

console.log(s, t, u, v, w, x, y);
console.log(typeof s, typeof t, typeof u, typeof v, typeof w, typeof x, typeof y);


//Objects in javascript
let stu1 = {
    "name": "Arbaz Ansari",
    "roll no": 24018,
    "class": "Section 1",
    "course": "B.Tech CSE"
}
stu1.semester = "6th"
console.log(stu1)
console.log(typeof stu1)


document.write(stu1.name, " ", stu1.class, " ", stu1.course)