function main() {
    const cartObservable = new CartObservable()
    const bottomBar = new BottomBar(1)
    const profile = new Profile(2)
    const pdp = new Pdp(3)

    console.log('1----------------------')
    cartObservable.registerObserver(bottomBar)
    cartObservable.notifyObservers(22)

    console.log('2------------------')
    cartObservable.registerObserver(profile)
    cartObservable.registerObserver(pdp)
    cartObservable.notifyObservers(22)

    console.log('3------------------')
    cartObservable.removeObserver(pdp)
    cartObservable.notifyObservers(22)
}

interface Observer<T> {
    id: number,

    update(data: T): void
}

interface Observable<T> {
    observers: Observer<T>[],

    registerObserver(observer: Observer<T>): void,

    removeObserver(observer: Observer<T>): void,

    notifyObservers(data: T): void
}

class CartObservable<T> implements Observable<T> {
    observers: Observer<T>[] = []

    registerObserver(observer: Observer<T>): void {
        this.observers.push(observer)
    }

    removeObserver(observer: Observer<T>): void {
        this.observers = this.observers.filter((item: Observer<T>) => item.id !== observer.id)
    }

    notifyObservers(data: T): void {
        this.observers.forEach((item: Observer<T>) => item.update(data))
    }

}

class BottomBar<T> implements Observer<T> {
    id: number

    constructor(id: number) {
        this.id = id
    }

    update(data: T) {
        console.log("Profile hear " + data)
    }
}

class Profile<T> implements Observer<T> {
    id: number

    constructor(id: number) {
        this.id = id
    }

    update(data: T) {
        console.log("Profile hear " + data)
    }
}

class Pdp<T> implements Observer<T> {
    id: number

    constructor(id: number) {
        this.id = id
    }

    update(data: T) {
        console.log("Profile hear " + data)
    }
}

main()