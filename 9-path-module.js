const path = require("path");
//console.log(path);
//console.log(path.sep);

const filePath = path.join("/content/subfolder/text.txt");
const filePath1 = path.join("/content", "subfolder", "text.txt");
console.log(filePath);
console.log(filePath1);

const base = path.basename(filePath1);
console.log(base);
const absolute = path.resolve(__dirname, "content", "subfolder", "text.txt");
console.log(absolute);
