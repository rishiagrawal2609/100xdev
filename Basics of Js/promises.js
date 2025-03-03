//Promise class gives a promise that will return the value in Future


function logName(){
    console.log("Rishi")
}

setTimeout(logName,1000) //callback approach

function setTimeoutPromisified(ms){
    return new Promise(resolve => setTimeout(resolve,ms))
}//returns the object of the promise class

function  callback(){
    console.log("Three Seconds have passed")
}
setTimeoutPromisified(3000).then(callback)


setTimeoutPromisified(4000).then(function (){
    console.log("4 secs passed")
})

setTimeoutPromisified(5000).then(()=>{
    console.log("5 sec bro")
})

let p = setTimeoutPromisified(2444)
console.log(p)

function waitFor6S(resolve){
    setTimeout(resolve,6000)
}

function main(){
    console.log("6 seconds have passed")
}

waitFor6S(main)


