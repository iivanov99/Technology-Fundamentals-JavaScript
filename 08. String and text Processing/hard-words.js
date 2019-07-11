function solve(input) {
    let text = input[0]
    let words = input[1]

    for (let i = 0; i < text.length; i++) {
        if (text[i] === '_') {
            let counter = 1

            for (let j = i + 1; j < text.length; j++) {
                if (text[j] === '_') {
                    counter++
                } else {
                    break
                }
            }

            for (let word of words) {
                if (word.length === counter) {
                    text = text.replace('_'.repeat(counter), word)
                }
            }
        }
    }

    console.log(text)
}
solve(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']])