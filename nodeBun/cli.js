const {Command} = require('commander');
const fs = require('fs');

// const program = new Command();

//
// program.name('wordify').argument('<file>', 'file to wordify').action((file) => {
//     const content = fs.readFileSync(file).toString();
//     const arr = content.split(" ")
//     console.log(`You have ${arr.length} words in the file`)
//     for(let i = 0;i<arr.length;i++){
//         console.log(arr[i])
//     }
// })
// program.parse()

//
// const todo = new Command();
//
// todo.name('todo')
// .description('To do list')
//
// todo.command("create <string>")
//     .action((str)=> {
//         file.writeSync('./todo.json',str)
//     })
//
// todo.parse()
