function each(elements, cb) {
    // let result = [];
    for (let index = 0; index < elements.length; index++) {
        cb(elements[index]);
        // result.push(value);
    } //return result;
}
module.exports = { each };
