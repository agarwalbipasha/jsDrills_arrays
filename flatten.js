function flatten (elements) {
    let result = [];
    for (let index = 0; index < elements.length; index++) {
        if (Array.isArray(elements[index])) {
            flatten(elements[index]);
        } result.push(elements[index]);
    } return result;    
}
module.exports = { flatten };