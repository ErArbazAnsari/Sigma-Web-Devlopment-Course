import fs from "fs/promises"
let a = await fs.readFile("arbaz.txt")

// let b = await fs.writeFile("arbaz.txt", "\n\nAnsari's File\n\n")
let b = await fs.appendFile("arbaz.txt", "\n\Arbaz's File\n\n")

console.log(a.toString())
console.log(b)
