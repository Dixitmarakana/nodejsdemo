const { Console } = require('console');
const http  = require("http"); // impoert http module for create server

//first method for create server
const port = process.env.PORT || 4500; // create port for run project
const server = http.createServer((req, res)=>{
    console.log(req);
    res.statusCode = 200;
    res.setHeader('Content-type','text/html');
    res.end('<h1>Hello</h1><p>This is my first node js code</p>');

})

server.listen(port,()=>{
    console.log(`${port}`);
})

//second method for create server
// http.createServer((req, res)=>{
//     // console.log(req);
//     // res.statusCode = 200;
//     // res.setHeader('Content-type','text/html');
//     res.write('<h1>Hello</h1><p>This is my first node js code</p>');
//     res.end();

// }).listen(8001);
