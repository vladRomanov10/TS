export{}
function merge<T>(coll1: Array<T>, coll2: Array<T>): Array<T> {
    const result: Array<T> = []
    result.push(...coll1)
    result.push(...coll2)
    return result
}

console.log(merge([1, 2], [5, 6]))
console.log(merge(['Vlad', 'Artemii'], ['Alesha', 'Nike']))

function first<T>(coll: Array<T>): T | null {
    return coll.length > 0 ? coll[0] : null
}

console.log(first([]))
console.log(first([1, 3 ,5]))
console.log(first(['Rus', 'Oscar', 'Yarik']))