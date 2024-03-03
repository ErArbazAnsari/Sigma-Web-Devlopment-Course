const fs = require("fs")
// console.log(fs)


console.log("Starting Writting...")

// fs.writeFileSync("arbaz.txt", "Hello Arbaz Ansari, This data is writting by fs using javascript...")

fs.writeFile("arbaz2.txt", "This content is written by writefile Function. Hello World!", () => {
    console.log("Writing Done...👍")


    fs.readFile("arbaz.txt", (error, data) => {
        console.log("\nReading File Data: ")
        console.log(error, data.toString())
    })
})

console.log("Writing Completed. Thankyou! For Using.😊")

//appending data
fs.appendFile("arbaz.txt", "Appended Data By appendFile() Function or module...", (e, d) => {
    console.log(d);
})