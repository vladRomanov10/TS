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
