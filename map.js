function map(elements, cb) {
    let result = [];
    for (let index = 0; index < elements.length; index++) {
        let value = cb(elements[index]);
        result.push(value);
    } return result;
}
module.exports = { map };