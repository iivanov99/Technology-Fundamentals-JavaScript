function solve(text) {
    text = text.split(' ')

    for (let word of text) {
        if (word.startsWith('#') && word.length > 1) {
            word = word.substr(1)

            if (/^[A-Za-z]+$/g.test(word)) {
                console.log(word)
            }
        }
    }
}
solve('Nowadays everyone uses # to tag a #special word in #socialMedia')