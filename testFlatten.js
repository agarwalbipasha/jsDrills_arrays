const testFlatten = require("./flatten");

const nestedArray = [1, [2], [[3]], [[[4]]]];
console.log(testFlatten.flatten(nestedArray));
// console.log(testFlatten.flatten([]));