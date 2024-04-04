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
console.log(user1);
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
// user2.printName = function() {
//     console.log('Method has been changed')
// }
console.log(user2.printName());
