export{}
function sealed (constructor: Function):void {
    console.log('sealed decorator')
    Object.seal(constructor)
    Object.seal(constructor.prototype)
}

@sealed
class User1 {
    name: string
    constructor(name: string) {
        this.name = name
    }
    print():void {
        console.log(this.name)
    }
}


const user1 = new User1('Vlad')

console.log(user1)
//Декоратор метода
function readable (onlyRead: boolean) {
    return function (target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.writable = !onlyRead
    }
}

class User2 {
    constructor(public name: string) {
        this.name = name
    }

    @readable(true)
    printName(): void {
        console.log(this.name)
    }
}

const user2 = new User2('Serg')

// user2.printName = function() {
//     console.log('Method has been changed')
// }

console.log(user2.printName())