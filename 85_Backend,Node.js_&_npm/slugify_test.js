var slugify = require('slugify')

let first_string = slugify('mera naam arbaz ansari hai aur main 19 saal ka hun...')
console.log(first_string)
console.log("\n")

const second_string = slugify('ye wali second string hai *&$@!)(', '_')
console.log(second_string)