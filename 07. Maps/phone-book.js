function phoneBook(input) {
    let book = new Map()

    for (let line of input) {
        let parts = line
            .split(' ')
            .filter(Boolean)
        let name = parts[0]
        let number = parts[1]

        book.set(name, number)
    }

    for (let [name, number] of book.entries()) {
        console.log(`${name} -> ${number}`)
    }
}
phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 1'])