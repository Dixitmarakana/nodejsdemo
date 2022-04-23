const fs = require("fs");  // import fs module
const path = require("path"); // print files path
const dirname = path.join(__dirname,"files"); // get current directory and "files" containt folder name which we created
for(i=1;i<6;i++)
{
    fs.writeFileSync(dirname+"/hello"+i+".txt","simple file create using forloop"+i)
}

// How to list file
fs.readdir(dirname,(err,files)=>{
    // console.log(files);=>print path in array   

    files.forEach((file)=>{
        console.log(file); //print path as a list
    })
});