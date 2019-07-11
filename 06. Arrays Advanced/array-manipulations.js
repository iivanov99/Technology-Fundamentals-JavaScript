function solve(commands) {
    let arr = commands
        .shift()
        .split(' ')
        .filter(Boolean)
        .map(Number)

    for (let i = 0; i < commands.length; i++) {
        let tokens = commands[i]
            .split(' ')
            .filter(Boolean)
        let currentCommand = tokens[0]
        let num = +tokens[1]

        switch (currentCommand) {
            case 'Add':
                arr.push(num)
                break
            case 'Remove':
                arr = arr.filter(x => x !== num)
                break
            case 'RemoveAt':
                arr.splice(num, 1)
                break
            case 'Insert':
                let index = +tokens[2]
                arr.splice(index, 0, num)
                break
            default:
                break
        }
    }

    console.log(arr.join(' '))
}
solve(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
)