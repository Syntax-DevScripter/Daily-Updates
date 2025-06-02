const fs = require('fs');

//Sync...
fs.writeFileSync("./file.txt", "This file is created using Synchronous writeFile");

//Async...
fs.writeFile("./fileasync.txt", "This file is created using Asynchronous writeFile", (err) => {});

//Sync...
const res = fs.readFileSync("./file.txt", "utf-8");
console.log(res + " and Opened using Synchronous readFile");

//Async...
fs.readFile("./fileasync.txt", "utf-8", (err, res) => {
    if (err) {
        console.log("Error", err);
    } else {
        console.log(res + " and Opened using Asynchronous readFile");
    }
});