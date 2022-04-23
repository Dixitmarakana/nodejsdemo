let a = 1;
let b = 2;
let c = 3;
let waitingdata = new Promise((resolve,reject)=>{  
    setTimeout(() => {
        resolve(30);
    }, 2000);
});
waitingdata.then((data)=>{
    b=data;
    console.log(a+b)
}) 
