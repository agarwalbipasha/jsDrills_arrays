const testReduce = require("./reduce");


const items = [1, 2, 3, 4, 5, 5];
console.log(testReduce.reduce(items, function (result, item) {
    return result + item; 
}, 0));
