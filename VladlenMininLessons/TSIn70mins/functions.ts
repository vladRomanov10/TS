export{}
function sayMyName(name: string): void {
    console.log(name)
}

sayMyName('Haisenberg')

//Never
function throwError(message: string): never {
    throw new Error(message)
}

function getName(firstName: string, lastName?: string) {
    return console.log (firstName + ' ' + lastName)
}

getName('Vlad')
