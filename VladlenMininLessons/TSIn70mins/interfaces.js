"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var employee = {
    id: 1,
    name: 'Vlad',
    street: 'Otegen batyr'
};
var employee2 = {
    id: 2,
    name: 'Nike',
    street: 'Nekrasova',
    getNameAndStreet: function () {
        console.log(this.name + ' ' + this.street);
    },
};
console.log(employee2.getNameAndStreet());
var User = /** @class */ (function () {
    function User(userId, userName, userAge) {
        this.id = userId;
        this.name = userName;
        this.age = userAge;
    }
    User.prototype.getFullName = function (surename) {
        return this.name + ' ' + surename;
    };
    return User;
}());
var user = new User(3, 'Yarik', 29);
console.log(user.getFullName('Tiss'));
