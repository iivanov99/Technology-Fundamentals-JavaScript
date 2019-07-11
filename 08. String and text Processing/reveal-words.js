function solve(searchedWords, text) {
    searchedWords = searchedWords.split(', ')
    
    for (let word of searchedWords) {
        text = text.replace('*'.repeat(word.length), word)
    }

    console.log(text)
}
solve('great, learning',
    'softuni is ***** place for ******** new programming languages'
)