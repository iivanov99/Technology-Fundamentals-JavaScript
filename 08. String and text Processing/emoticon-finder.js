function solve(text) {
    text = text.split(' ')

    for (let word of text) {
        if (/^:[\w\W]$/g.test(word)) {
            console.log(word)
        }
    }
}
solve('There are so many emoticons nowadays :P I have many ideas :O what input to place here :)')