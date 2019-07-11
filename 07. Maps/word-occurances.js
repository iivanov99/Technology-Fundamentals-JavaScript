function solve(input) {
    let wordsCount = new Map()

    for (let word of input) {
        let count = 1;

        if (wordsCount.has(word)) {
            count += wordsCount.get(word)
        }

        wordsCount.set(word, count)
    }

    let sortedWordsCount = [...wordsCount]
        .sort((a, b) => b[1] - a[1])

    for (let [word, count] of sortedWordsCount) {
        console.log(`${word} -> ${count} times`)
    }
}
solve(['Here',
    'is',
    'the',
    'first',
    'sentence',
    'Here',
    'is',
    'another',
    'sentence',
    'And',
    'finally',
    'the',
    'third',
    'sentence'])