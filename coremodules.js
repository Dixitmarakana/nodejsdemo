 // There are two type of modules => 1.Global module  2.core modules
 // 1. Global modules = There are no need to imoprt module
 // 2. Core modules = There are need to imoprt module

// create file ad write file module
const fs = require("fs");  // import 'fs' module
fs.writeFileSync("fsmodule.txt","This is first module for test"); // create and write file


//check direcrory or path and filename
console.log(__dirname);
console.log(__filename);


