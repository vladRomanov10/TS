 export{}
 interface IUser {
    id: number
    name: string
    age?: number 
    readonly street : string
 }

 const employee: IUser = {
    id: 1,
    name: 'Vlad',
    street: 'Otegen batyr'
 }

//Наследование интерфейсов

interface IUserNameAndStreet extends IUser {
   getNameAndStreet(): void
}

const employee2: IUserNameAndStreet = {
   id: 2,
   name: 'Nike',
   street: 'Nekrasova',
   getNameAndStreet(): void {
      console.log(this.name + ' ' + this.street)
   },
}

console.log(employee2.getNameAndStreet())

//Интерфейсы и классы 

interface IUserLogin {
   id: number
   name: string
   getFullName(surename: string): string
}

class User implements IUserLogin {
   id: number
   name: string
   age: number
   constructor(userId: number, userName: string, userAge: number) {
      this.id = userId
      this.name = userName
      this.age = userAge
   }
   getFullName(surename: string): string {
      return this.name + ' ' + surename
   }
}

const user = new User (3, 'Yarik', 29)

console.log(user.getFullName('Tiss'))