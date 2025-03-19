//Sum of two numbers

function sumTwoNumbers(a, b) {
    return parseInt(a) + parseInt(b);
}

// Sum from 1 till n numbers
function sumToN(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total
}

//other way to solve this

function sumToNOtherWay(n) {
    return (n * (n + 1)) / 2
}

// This is a synchronous function - there is only 1 line can be executed and will go line by line in order.
// The program will wait for the previous line to get completed and then move on to the next line


//I/O heavy programs:

//Example - Reading the file and starting a clock and HTTP requests


const fs = require('fs');
const content = fs.readFileSync("a.txt","utf-8")

console.log(content)

//This is the synchronous function


function  sum(a,b){
    return a+b;
}
function multiply(a,b){
    return a*b;
}

function doOp(a,b,op){
    return op(a,b)
}

console.log(doOp(2,3,sum))


//Async Function:

function read(err,data){
    if(err){
        console.log("File not found")
    } else {
        console.log(data)
    }
}

const content_b = fs.readFile("b.txt","utf-8",read)