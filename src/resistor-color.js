function resColor(resistor) {
    let clone = []
    if (resistor.length != 3) {
        throw new Error('Invalid length')
    }

    for (element in resistor) {
        if (typeof resistor[element] != 'string') {
            throw new Error('Value is not a valid format')
        }

        let key = resistor[element].toLowerCase()

        switch(key) {
            case 'black':
                clone.push(0)
                break
            case 'white':
                clone.push(9)
                break
            case 'brown':
                clone.push(1)
                break
            case 'red':
                clone.push(2)
                break
            case 'orange':
                clone.push(3)
                break
            case 'yellow':
                clone.push(4)
                break
            case 'green':
                clone.push(5)
                break
            case 'blue':
                clone.push(6)
                break
            case 'violet':
                clone.push(7)
                break
            case 'grey':
                clone.push(8)
                break
            default:
                throw new Error('Color code not matched')
                break
        }
    }

    let resValue = String(clone[0]) + String(clone[1])
    let valor = 0
    
    if (resValue[0] === '0') {
        valor = parseInt(resValue.slice(1))
    }

    else if(resValue[0] !== '0') {
        valor = parseInt(resValue)
    }
    
    for (ele in clone) {
        if (ele === String(clone.length-1)) {
            switch(resistor[ele].toLowerCase()) {
                case 'black':
                    valor = valor
                    break
                case 'brown':
                    valor = valor*10
                    break
                case 'red':
                    valor = valor*10e1
                    break
                case 'orange':
                    valor = valor*10e2
                    break
                case 'yellow':
                    valor = valor*10e3
                    break
                case 'green':
                    valor = valor*10e4
                    break
                case 'blue':
                    valor = valor*10e5
                    break
                case 'violet':
                    valor = valor*10e6
                    break
                case 'grey':
                    valor = valor*10e7
                    break
                case 'white':
                    valor = valor*10e8
                    break
                default:
                    console.log('Invalid value')
                    break
            }
        }
    }
    return 'The resistor value is: ' + String(valor) + ' Ohms'
}
let res = ['Black', 'White', 'Yellow']

/* Testing with console.log */

console.log(resColor(res))
console.log(resColor(['Brown', 'Red', 'Green']))
console.log(resColor(['White', 'Black', 'Yellow']))