function solve(input) {
    let sentence = input
        .shift()
        .split(' ')
        .filter(Boolean)
    let wordsCount = new Map()

    for (let word of sentence) {
        wordsCount.set(word, 0)
    }

    for (let word of input) {
        if (wordsCount.has(word)) {
            let count = wordsCount.get(word)
            count++
            wordsCount.set(word, count)
        }
    }

    let sortedWordsCount = [...wordsCount]
        .sort((a, b) => b[1] - a[1])

    for (let [word, count] of sortedWordsCount) {
        console.log(word + ' - ' + count)
    }

}
solve(['this sentence',
    'In',
    'this',
    'sentence',
    'you',
    'have',
    'to',
    'count',
    'the',
    'occurances',
    'of',
    'the',
    'words',
    'this',
    'and',
    'sentence',
    'because',
    'this',
    'is',
    'your',
    'task']
)