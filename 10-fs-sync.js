const { readFileSync, writeFileSync } = require("fs");
console.log("start");
//const fs = require('fs');
//fs.readFileSync

const first = readFileSync("./content/subfolder/first.txt", "utf-8");
const second = readFileSync("./content/subfolder/second.txt", "utf-8");

//console.log(first, second);

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first}, ${second}`,
  { flag: "a" }
);

console.log("done with this task");
console.log("starting the next one");
//flag create a new value
//read synchronouslythats means read line by line;
