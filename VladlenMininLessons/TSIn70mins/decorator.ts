export{}
function sealed (constructor: Function):void {
    console.log('sealed decorator')
    Object.seal(constructor)
    Object.seal(constructor.prototype)
}

@sealed
class User {
    name: string
    constructor(name: string) {
        this.name = name
    }
    print():void {
        console.log(this.name)
    }
}


const user = new User('Vlad')

console.log(user)