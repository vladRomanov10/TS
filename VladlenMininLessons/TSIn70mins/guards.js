"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// typeof
function strip(x) {
    if (typeof x === 'number') {
        return x.toFixed(2);
    }
    return x.trim();
}
//instance
var MyResponce = /** @class */ (function () {
    function MyResponce() {
        this.header = 'responce header';
        this.result = 'responce resulr';
    }
    return MyResponce;
}());
var MyError = /** @class */ (function () {
    function MyError() {
        this.header = 'error header';
        this.message = 'error message';
    }
    return MyError;
}());
function handle(res) {
    if (res instanceof MyResponce) {
        return {
            info: res.header + res.result
        };
    }
    else {
        return {
            info: res.header + res.message
        };
    }
}
function setAlertType(x) {
    return console.log(x);
}
setAlertType('sucsses');
