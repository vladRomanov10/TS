function main() {
    var cartObservable = new CartObservable();
    var bottomBar = new BottomBar(1);
    var profile = new Profile(2);
    var pdp = new Pdp(3);
    console.log('1----------------------');
    cartObservable.registerObserver(bottomBar);
    cartObservable.notifyObservers(22);
    console.log('2------------------');
    cartObservable.registerObserver(profile);
    cartObservable.registerObserver(pdp);
    cartObservable.notifyObservers(22);
    console.log('3------------------');
    cartObservable.removeObserver(pdp);
    cartObservable.notifyObservers(22);
}
var CartObservable = /** @class */ (function () {
    function CartObservable() {
        this.observers = [];
    }
    CartObservable.prototype.registerObserver = function (observer) {
        this.observers.push(observer);
    };
    CartObservable.prototype.removeObserver = function (observer) {
        this.observers = this.observers.filter(function (item) { return item.id !== observer.id; });
    };
    CartObservable.prototype.notifyObservers = function (data) {
        this.observers.forEach(function (item) { return item.update(data); });
    };
    return CartObservable;
}());
var BottomBar = /** @class */ (function () {
    function BottomBar(id) {
        this.id = id;
    }
    BottomBar.prototype.update = function (data) {
        console.log("Profile hear " + data);
    };
    return BottomBar;
}());
var Profile = /** @class */ (function () {
    function Profile(id) {
        this.id = id;
    }
    Profile.prototype.update = function (data) {
        console.log("Profile hear " + data);
    };
    return Profile;
}());
var Pdp = /** @class */ (function () {
    function Pdp(id) {
        this.id = id;
    }
    Pdp.prototype.update = function (data) {
        console.log("Profile hear " + data);
    };
    return Pdp;
}());
main();
