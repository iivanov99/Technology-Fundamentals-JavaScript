function solve(firstArr, secondArr) {
    firstArr = firstArr.map(Number)

    for (let el of secondArr) {
        let tokens = el
            .split(' ')
            .filter(Boolean)
        let command = tokens[0]

        if (command === 'add') {
            let index = +tokens[1]
            let element = +tokens[2]
            firstArr.splice(index, 0, element)
        } else if (command === 'addMany') {
            let index = +tokens[1]
            let elements = tokens
                .slice(2)
                .map(Number)
            firstArr.splice(index, 0, ...elements)
        } else if (command === 'contains') {
            let element = +tokens[1]
            if (firstArr.includes(element)) {
                console.log(firstArr.indexOf(element))
            } else {
                console.log(-1)
            }
        } else if (command === 'remove') {
            let index = +tokens[1]
            firstArr.splice(index, 1)
        } else if (command === 'shift') {
            let positions = +tokens[1]

            for (let i = 0; i < positions; i++) {
                let temp = firstArr.shift()
                firstArr.push(temp)
            }
        } else if (command === 'sumPairs') {
            let summedPairsArr = []

            for (let i = 0; i < firstArr.length; i += 2) {
                let sum = firstArr[i] + firstArr[i + 1]

                if (firstArr.length % 2 === 1 && i === firstArr.length - 1) {
                    sum = firstArr[i]
                }

                summedPairsArr.push(sum)
            }
            firstArr = summedPairsArr.slice()
        } else if (command === 'print') {
            console.log(firstArr)
            break
        }
    }
}
solve([1, 2, 3, 4, 5],
    ['add 1 8',
        'addMany 6 9 8 7 6 5',
        'contains -10',
        'remove 0',
        'shift 2',
        'remove 0',
        'sumPairs',
        'print'])