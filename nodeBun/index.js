function add(a,b){
    return a + b
}

console.log(add(2,3))


import chalk from "chalk";
console.log(chalk.blue('Hello world!'));
console.log(chalk.red.bold("Error message"))

//internal packages - comes with node preinstalled - fs,path,https
//no need to do a installation 

console.log(__dirname); // global variable for the directory name
console.log(__filename); // global variable for the file name

//External packages - need to install them
//npm install chalk
//npm install express
import express from "express";