function solve(input) {
    let vipGuests = []
    let regularGuests = []

    let partyIndex = input.indexOf('PARTY')
    let allGuests = input.slice(0, partyIndex)
    let guestsThatCame = input.slice(partyIndex + 1)


    for (let guest of allGuests) {
        if (isNaN(guest[0])) {
                regularGuests.push(guest)
        } else {
                vipGuests.push(guest)
        }
    }

    for (let guest of guestsThatCame) {
        if (isNaN(guest[0])) {
            if (regularGuests.includes(guest)) {
                let index = regularGuests.indexOf(guest)
                regularGuests.splice(index, 1)
            }
        } else {
            if (vipGuests.includes(guest)) {
                let index = vipGuests.indexOf(guest)
                vipGuests.splice(index, 1)
            }
        }
    }

    console.log(regularGuests.length + vipGuests.length)

    if (vipGuests.length > 0) {
        console.log(vipGuests.join('\n'))
    }

    if (regularGuests.length > 0) {
        console.log(regularGuests.join('\n'))
    }
}
solve(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'])