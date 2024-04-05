"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
function sealed(constructor) {
    console.log('sealed decorator');
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}
var User1 = function () {
    var _classDecorators = [sealed];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var User1 = _classThis = /** @class */ (function () {
        function User1_1(name) {
            this.name = name;
        }
        User1_1.prototype.print = function () {
            console.log(this.name);
        };
        return User1_1;
    }());
    __setFunctionName(_classThis, "User1");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        User1 = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return User1 = _classThis;
}();
var user1 = new User1('Vlad');
console.log(user1.name);
//Декоратор метода
function readable(onlyRead) {
    return function (target, propertyKey, descriptor) {
        descriptor.writable = !onlyRead;
    };
}
var User2 = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _printName_decorators;
    return _a = /** @class */ (function () {
            function User2(name) {
                this.name = (__runInitializers(this, _instanceExtraInitializers), name);
                this.name = name;
            }
            User2.prototype.printName = function () {
                console.log(this.name);
            };
            return User2;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _printName_decorators = [readable(true)];
            __esDecorate(_a, null, _printName_decorators, { kind: "method", name: "printName", static: false, private: false, access: { has: function (obj) { return "printName" in obj; }, get: function (obj) { return obj.printName; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
var user2 = new User2('Serg');
user2.printName = function () {
    console.log('Method has been changed');
};
console.log(user2.printName());
//Параметры и выходной результат метода
function log(target, method, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log(JSON.stringify(args));
        var returnValue = originalMethod.apply(this, args);
        console.log("".concat(JSON.stringify(args), " => ").concat(returnValue));
        return returnValue;
    };
}
var Calculator = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _add_decorators;
    return _a = /** @class */ (function () {
            function Calculator() {
                __runInitializers(this, _instanceExtraInitializers);
            }
            Calculator.prototype.add = function (x, y) {
                return x + y;
            };
            return Calculator;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _add_decorators = [log];
            __esDecorate(_a, null, _add_decorators, { kind: "method", name: "add", static: false, private: false, access: { has: function (obj) { return "add" in obj; }, get: function (obj) { return obj.add; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
var calc = new Calculator;
calc.add(10, 15);
//Дескрипторы свойств
function format() {
    return function (target, propertyKey) {
        var value;
        var getter = function () {
            return 'Mr/Ms ' + value;
        };
        var setter = function (newVal) {
            if (newVal.length > 2) {
                value = newVal;
            }
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    };
}
var User3 = function () {
    var _a;
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    return _a = /** @class */ (function () {
            function User3(name) {
                this.name = __runInitializers(this, _name_initializers, void 0);
                __runInitializers(this, _name_extraInitializers);
                this.name = name;
            }
            User3.prototype.print = function () {
                console.log(this.name);
            };
            return User3;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _name_decorators = [format()];
            __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
var user3 = new User3('Vlad');
user3.print();
user3.name = 'Zopa';
user3.print();
//Декоратор досутпа(аксессора)
function validator(target, propertyKey, descriptor) {
    var oldSet = descriptor.set;
    descriptor.set = function (value) {
        if (value === "admin") {
            throw new Error("Invalid value");
        }
        if (oldSet !== undefined)
            oldSet.call(this, value);
    };
}
var User = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _set_name_decorators;
    return _a = /** @class */ (function () {
            function User(name) {
                this._name = __runInitializers(this, _instanceExtraInitializers);
                this.name = name;
            }
            Object.defineProperty(User.prototype, "name", {
                get: function () {
                    return this._name;
                },
                set: function (n) {
                    this._name = n;
                },
                enumerable: false,
                configurable: true
            });
            return User;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _set_name_decorators = [validator];
            __esDecorate(_a, null, _set_name_decorators, { kind: "setter", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
var tom = new User("Tom");
console.log(tom.name);
tom.name = "admin";
console.log(tom.name);
