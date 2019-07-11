function solve(input) {
    let palindromes = []

    for (let inputRow of input) {
        let wordsJoined = inputRow.split(' ').join('')
        let wordsJoinedReversed = wordsJoined.split('').reverse().join('')

        if (wordsJoined === wordsJoinedReversed) {
            palindromes.push(wordsJoined)
        }
    }

    if (palindromes.length < 1) {
        console.log('No palindromes found')
    } else {
        console.log(palindromes.join(', '))
    }
}
solve([' stella won no wallets',
    ' stella won no wallets'])
