const testEach = require("./each");


const items = [1, 2, 3, 4, 5, 5];
// console.log(testEach.each(items, (item) => item * 4));
// console.log(items.forEach(item => item * 2));
// console.log(items);
console.log(testEach.each(items, item => console.log(item * 4)));