function solve(text) {
    text = text.split(' ')

    for (let word of text) {
        if (word.startsWith('#') && word.length > 1) {
            word = word.substr(1)
            if (isLetter(word)) {
                console.log(word)
            }
        }
    }

    function isLetter(word) {
        for (let ch of word) {
            let asciiCode = ch.toLowerCase().charCodeAt(0)
            if (asciiCode < 97 || asciiCode > 122) {
                return false
            }
        }

        return true
    }
}
solve('Nowadays everyone uses # to tag a #special word in #socialMedia')