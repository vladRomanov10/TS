"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sayMyName(name) {
    console.log(name);
}
sayMyName('Haisenberg');
//Never
function throwError(message) {
    throw new Error(message);
}
function getName(firstName, lastName) {
    return console.log(firstName + ' ' + lastName);
}
getName('Vlad');
