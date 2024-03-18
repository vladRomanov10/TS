export{}
const isFerching: boolean = true
const isLoading: boolean = false

const int: number = 30
const float: number = 4.2

const message: string = 'Hello Typescript'

const numberArray: number[] = [1, 1, 2, 3, 4] 
const numberArray2: Array<number> = [1, 1, 2, 3, 5]

const words: string[] = ['Hello', 'Typescript']

console.log(typeof words)

function sayMyName(name: string): void {
    console.log(name)
}

sayMyName('Хайзенберг')