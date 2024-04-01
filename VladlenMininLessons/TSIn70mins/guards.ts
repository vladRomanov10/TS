export{}
// typeof
function strip (x: number | string) {
    if (typeof x === 'number') {
        return x.toFixed(2)
    }

    return x.trim()
}
//instance
class MyResponce {
    header = 'responce header'
    result = 'responce resulr'
}

class MyError {
    header = 'error header'
    message = 'error message'
}

function handle (res: MyResponce | MyError) {
    if (res instanceof MyResponce) {
        return {
            info: res.header + res.result
        }
    } else {
        return {
            info: res.header + res.message
        }
    }
}
//type
type AlertType = 'sucsses' | 'danger' | 'warning'

function setAlertType (x: AlertType): void {
    return console.log(x)
}

setAlertType('sucsses')