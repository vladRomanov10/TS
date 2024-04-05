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

console.log(user1.name)
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

user2.printName = function() {
    console.log('Method has been changed')
}

console.log(user2.printName())
//Параметры и выходной результат метода
function log(target: Object, method: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value
    descriptor.value = function(...args: number[]) {
        console.log(JSON.stringify(args))
        let returnValue = originalMethod.apply(this, args)
        console.log(`${JSON.stringify(args)} => ${returnValue}`)
        return returnValue
    }
}

class Calculator {
    @log
    add(x: number, y:number) {
        return x + y
    }
}

const calc = new Calculator

calc.add(10, 15)

//Дескрипторы свойств
function format() {
    return function(target: Object, propertyKey: string) {
        let value: string

        const getter = function() {
            return 'Mr/Ms ' + value
        }

        const setter = function(newVal: string) {
            if(newVal.length > 2) {
                value = newVal
            }
        }

        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        })
    }
}

class User3 {
    @format()
    name: string

    constructor(name: string) {
        this.name = name
    }

    print():void {
        console.log(this.name)
    }
}

const user3 = new User3('Vlad')

user3.print()
user3.name = 'Zopa'
user3.print()

//Декоратор досутпа(аксессора)
function validator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const oldSet = descriptor.set;
  
    descriptor.set = function(value: string) {
        if (value === "admin") {
            throw new Error("Invalid value");
        }
        if(oldSet!==undefined) oldSet.call(this, value);
    }
}
class User {
  
    private _name: string;
    constructor(name: string){
        this.name = name;
    }
      
    public get name(): string {
        return this._name;
    }
    @validator
    public set name(n: string) {
        this._name = n;
    }
}
let tom = new User("Tom");
console.log(tom.name);
tom.name= "admin";
console.log(tom.name);