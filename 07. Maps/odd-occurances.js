function solve(input) {
    let words = input
        .split(' ')
        .filter(Boolean)
    let wordOccurances = new Map()

    for (let word of words) {
        word = word.toLowerCase()
        let count = 1

        if (wordOccurances.has(word)) {
            count += wordOccurances.get(word)
        }

        wordOccurances.set(word, count)
    }

    let oddOccurances = ''

    for (let [word, occurances] of wordOccurances.entries()) {
        if (occurances % 2 !== 0) {
            oddOccurances += word + ' '
        }
    }

    console.log(oddOccurances)
}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')