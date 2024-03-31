var Person = /** @class */ (function () {
    function Person(name, age) {
        this._name = name;
        this._year = this.setYear(age);
    }
    Person.prototype.print = function () {
        console.log("\u0418\u043C\u044F: ".concat(this._name, "  \u0413\u043E\u0434 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F: ").concat(this._year));
    };
    Person.prototype.setYear = function (age) {
        return new Date().getFullYear() - age;
    };
    return Person;
}());
var tom = new Person("Tom", 24);
tom.print();
