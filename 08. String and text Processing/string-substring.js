function solve(searchedWord, text) {
    let words = text.toLowerCase().split(' ')

    if (words.includes(searchedWord)) {
        console.log(searchedWord)
    }
    else {
        console.log(`${searchedWord} not found!`)
    }
}
solve('javascript', 'JavaScript is the best programming language')