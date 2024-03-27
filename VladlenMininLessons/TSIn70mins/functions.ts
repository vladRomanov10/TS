export{}
function sayMyName(name: string): void {
    console.log(name)
}

sayMyName('Haisenberg')

//Never
function throwError(message: string): never {
    throw new Error(message)
}
