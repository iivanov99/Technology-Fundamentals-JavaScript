function solve(input) {
    let [firstString, secondString, thridString] = input
    let concatenated = firstString + secondString
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let reversedPassword = ''
    let counter = 0

    for (let ch of concatenated) {
        if (vowels.includes(ch.toLowerCase())) {
            reversedPassword += thridString[counter % thridString.length].toUpperCase()
            counter++
        } else {
            reversedPassword += ch
        }
    }

    let password = reversedPassword.split('').reverse().join('')
    console.log(`Your generated password is ${password}`)
}
solve(['easymoneyeazylife', 'atleasttencharacters', 'absolute'])