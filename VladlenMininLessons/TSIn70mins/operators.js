"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function merge(coll1, coll2) {
    var result = [];
    result.push.apply(result, coll1);
    result.push.apply(result, coll2);
    return result;
}
console.log(merge([1, 2], [5, 6]));
console.log(merge(['Vlad', 'Artemii'], ['Alesha', 'Nike']));
function first(coll) {
    return coll.length > 0 ? coll[0] : null;
}
console.log(first([]));
console.log(first([1, 3, 5]));
console.log(first(['Rus', 'Oscar', 'Yarik']));
