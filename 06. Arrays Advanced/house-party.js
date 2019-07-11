function solve(arr) {
    let guests = []

    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i]
            .split(' ')
            .filter(Boolean)
        let guestName = tokens[0]

        if (tokens[2] === 'going!') {
            if (guests.includes(guestName)) {
                console.log(`${guestName} is already in the list!`)
            } else {
                guests.push(guestName)
            }
        } else if (tokens[2] === 'not') {
            if (!guests.includes(guestName)) {
                console.log(`${guestName} is not in the list!`)
            } else {
                let index = guests.indexOf(guestName)
                guests.splice(index, 1)
            }
        }
    }

    guests.forEach(x => console.log(x))
}
solve(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!'])