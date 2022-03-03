const testFind = require("./find");

const items = [1, 2, 3, 4, 5, 5];
console.log(testFind.find(items, item => item == 5));
