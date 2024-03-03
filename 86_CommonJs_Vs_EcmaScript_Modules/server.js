// const http = require('node:http'); //type = "commonJs"
// const fs = require('fs') //type = "commonJs" 

// import http from "http" //type = "module"

// const hostname = '127.0.0.1';
// const port = 3000;
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.end('<h1>Hello World!</h1>');
// });
// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });


// import {a,b,c} from "./exporting.js"
// console.log(a,b,c)

import obj from "./exporting.js"
console.log(obj)