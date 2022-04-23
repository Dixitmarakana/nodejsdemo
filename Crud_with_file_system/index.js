const fs = require("fs");
const path = require("path");
const dirpath = path.join(__dirname);
const filepath = `${dirpath}/apple.txt`;

//create file
// fs.writeFileSync(filepath,"This is a Simple text file");

//read file
// fs.readFile(filepath,'utf-8',(err,item)=>{
//     console.log(item);
// });

//append or update file
// fs.appendFile(filepath,'and file name is apple.txt',(err)=>{
//     if(!err){
//         console.log("file is updated")
//     }
// })

//rename file
// fs.rename(filepath,`${dirpath}/demo.txt`,(err)=>{
//     if(!err){
//         console.log("File is updated")
//     }
// })

//delete file
// fs.unlinkSync(`${dirpath}/demo.txt`);
