export{}
class Person {
      
    private _name: string;
    private _year: number;
  
    constructor(name: string, age: number) {
  
        this._name = name;
        this._year = this.setYear(age);
    }
    public print(): void {
        console.log(`Имя: ${this._name}  Год рождения: ${this._year}`);
    }
  
    private setYear(age: number): number {
  
        return new Date().getFullYear() - age;
    }
}
  
let tom = new Person("Tom", 24);
tom.print();
//Абстрактные классы
abstract class Figure {
    abstract x: number
    abstract y: number
    abstract getArea(): void
}

class Rectangle extends Figure {
    constructor(public x: number, public y: number, public width: number, public height: number) {
        super()
    }

    getArea(): void {
        const area = this.width * this.height
        console.log(`Площадь фигруы: ${area}`)
    }
}

const rectangle = new Rectangle(10, 50, 100, 50)

rectangle.getArea()