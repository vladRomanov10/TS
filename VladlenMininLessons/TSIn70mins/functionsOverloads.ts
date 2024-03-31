export{}
function concat(a: number, b: number): string
function concat(a: string, b: string): string

function concat(a: unknown, b: unknown): string {
    if (typeof a === 'number' && typeof b === 'number') {
        return `${a.toFixed()}${b.toFixed}`
    }
    return `${a}${b}`
}

console.log(concat(10, 50))
console.log(concat(3.45, 5.11))
console.log(concat('one', 'three'))

const num: number = 10

console.log(typeof num)
//=====================
function add(a: number, b: number, c: number): number
function add(a: number, b: number): number
function add(a: string, b: string): string

function add(a: unknown, b: unknown, c?: number): unknown {
    if (c === undefined && typeof a === 'number' && typeof b === 'number') {
        return a + b
    }

    if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
        return a + b + c
    }

    return `${a} ${b}`
}

console.log(add(10, 35))
console.log(add(5.35, 6.11))
console.log(add(10, 35, 11))
console.log(add('Hello', 'World'))