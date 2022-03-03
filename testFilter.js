const testFilter = require("./filter");

const items = [1, 2, 3, 4, 5, 5];
console.log(testFilter.filter(items, item => item == 2));
