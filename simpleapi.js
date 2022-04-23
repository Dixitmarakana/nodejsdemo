const http = require("http"); // impoert http for create server
const data = require("./data"); // impoert data file for fetch data
const { getMaxListeners } = require("process"); 
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application\json'});
    res.write(JSON.stringify(data));
    res.end();
}).listen(8000);