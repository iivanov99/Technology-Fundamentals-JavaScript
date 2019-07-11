function solve(input) {
    let searchedWords = input.shift().split(' ')
    let wordsCount = {}

    for (let word of searchedWords) {
        wordsCount[word] = 0
    }

    for (let word of input) {
        if (wordsCount.hasOwnProperty(word)) {
            wordsCount[word]++
        }
    }

    let sortedWordsCount = Object.entries(wordsCount)
        .sort((a, b) => b[1] - a[1])
        .map(el => `${el[0]} - ${el[1]}`)
        .forEach(el => console.log(el))
}
solve(['this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the',
    'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task']
)