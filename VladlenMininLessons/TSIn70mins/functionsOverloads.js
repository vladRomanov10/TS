"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function concat(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return "".concat(a.toFixed()).concat(b.toFixed);
    }
    return "".concat(a).concat(b);
}
console.log(concat(10, 50));
console.log(concat(3.45, 5.11));
console.log(concat('one', 'three'));
var num = 10;
console.log(typeof num);
function add(a, b, c) {
    if (c === undefined && typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
        return a + b + c;
    }
    return "".concat(a, " ").concat(b);
}
console.log(add(10, 35));
console.log(add(5.35, 6.11));
console.log(add(10, 35, 11));
console.log(add('Hello', 'World'));
