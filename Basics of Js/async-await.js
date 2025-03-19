function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}//returns the object of the promise class

async function Sync(){
    await setTimeoutPromisified(1000)
    console.log("hi")
    await setTimeoutPromisified(3000)
    console.log("hi there")
    await setTimeoutPromisified(5000)
    console.log("hello")
}

Sync()

const  fs = require('fs')

function readFileAsync (){
    return new Promise(function (resolve,reject){
        fs.readFile("this.txt","utf-8",function (err,data){
            if(err){
                reject("File not found")
            }
            else {
                resolve(data)
            }
            }
        )
    })
}

readFileAsync().then(function (x){
    console.log("File has been read")
}).catch(function (e){
    console.log(e)
})