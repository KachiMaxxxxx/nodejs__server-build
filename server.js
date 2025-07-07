const path = require("path");
const { add, subtract, multiply, divide } = require("./maths");
console.log(path.dirname);
console.log(path.dirname(__dirname));
console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__dirname));

console.log(add(2, 5));
console.log(subtract(10, 5));
console.log(divide(25, 3));
console.log(multiply(2.7, 9));
