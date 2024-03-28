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

