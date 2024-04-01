"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
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
//Абстрактные классы
var Figure = /** @class */ (function () {
    function Figure() {
    }
    return Figure;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(x, y, width, height) {
        var _this = _super.call(this) || this;
        _this.x = x;
        _this.y = y;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.getArea = function () {
        var area = this.width * this.height;
        console.log("\u041F\u043B\u043E\u0449\u0430\u0434\u044C \u0444\u0438\u0433\u0440\u0443\u044B: ".concat(area));
    };
    return Rectangle;
}(Figure));
var rectangle = new Rectangle(10, 50, 100, 50);
rectangle.getArea();
