function solve(input) {
    let words = []

    for (let i = 0; i < input.length; i++) {
        if (input[i].toUpperCase() === input[i]) {
            let counter = 1

            for (let j = i + 1; j < input.length; j++) {
                if (input[j].toLowerCase() === input[j]) {
                    counter++
                } else {
                    break
                }
            }

            words.push(input.substr(i, counter))
        }
    }

    console.log(words.join(', '))
}
solve('SplitMeIfYouCanHaHaYouCantOrYouCan')