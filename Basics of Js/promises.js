//Promise class gives a promise that will return the value in Future
function logName() {
    console.log("Rishi")
}

setTimeout(logName, 1000) //callback approach

function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}//returns the object of the promise class

function callback() {
    console.log("Three Seconds have passed")
}

setTimeoutPromisified(3000).then(callback)


setTimeoutPromisified(4000).then(function () {
    console.log("4 secs passed")
})

setTimeoutPromisified(5000).then(() => {
    console.log("5 sec bro")
})

let p = setTimeoutPromisified(2444)
console.log(p)

function waitFor6S(resolve) {
    setTimeout(resolve, 6000)
}

function main() {
    console.log("6 seconds have passed")
}

waitFor6S(main)


function random() {
}

let pro = new Promise(random) //Promise will return the value eventually

console.log(pro)

function callbackPro() {
    console.log("Promise Completed")
}

pro.then(callbackPro)

const fs = require("fs")
const path = require("node:path");

function readfile(filepath) {
    let p = new Promise(resolve => fs.readFile(filepath, (err, data) => {
        if (data) {
            resolve(data)
        }
    }))
    return p
}

function callbackfl(content) {
    console.log(content.toString())
}

readfile("a.txt").then(callbackfl)


class Promise2 {
    constructor(fn) {
        function afterDone(){
            this.resolve();
        }
        fn(afterDone)
    }
    then(callback){
        this.resolve = callback
    }
}


//callbackhell

setTimeout(function (){
    console.log("hi")
    setTimeout(function (){
        console.log("hello")
        setTimeout(function (){
            console.log("hello there")
        },5000)
    },3000)
},1000)


//Promise chaining

setTimeoutPromisified(1000).then(function (){
    console.log("hi")
    setTimeoutPromisified(3000).then(function (){
        console.log("hello")
        setTimeoutPromisified(5000).then(function (){
            console.log("hello there")
        })
    })
})


//or

setTimeoutPromisified(1000).then(function (){
    console.log("Hi")
    return setTimeoutPromisified(3000).then(
        function (){
            console.log("hello")
            return setTimeoutPromisified(5000).then(function (){
                console.log("hello there")
            })
        }
    )
})
