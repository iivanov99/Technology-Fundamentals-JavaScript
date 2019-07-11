function solve(input) {
    let personDeck = new Map()

    for (let line of input) {
        let parts = line.split(': ')
        let person = parts[0]
        let cards = parts[1].split(', ')

        if (!personDeck.has(person)) {
            personDeck.set(person, new Set())
        }

        let deck = personDeck.get(person)
        for (let card of cards) {
            deck.add(card)
        }
    }

    for (let [person, deck] of personDeck.entries()) {
        let deckValue = getDeckValue([...deck])
        console.log(`${person}: ${deckValue}`)
    }

    function getDeckValue(deck) {
        let sum = 0

        for (let card of deck) {
            let cardPower = ''
            let cardType = ''
            let cardValue = 0

            if (card.length === 2) {
                cardPower = card[0]
                cardType = card[1]
            } else if (card.length === 3) {
                cardPower = card.slice(0, 2)
                cardType = card[2]
            }

            if (!isNaN(cardPower)) {
                cardPower = +cardPower
            } else {
                switch (cardPower) {
                    case 'J':
                        cardPower = 11
                        break
                    case 'Q':
                        cardPower = 12
                        break
                    case 'K':
                        cardPower = 13
                        break
                    case 'A':
                        cardPower = 14
                        break
                }
            }

            switch (cardType) {
                case 'S':
                    cardValue = cardPower * 4
                    break
                case 'H':
                    cardValue = cardPower * 3
                    break
                case 'D':
                    cardValue = cardPower * 2
                    break
                case 'C':
                    cardValue = cardPower * 1
                    break
            }

            sum += cardValue
        }

        return sum
    }
}
solve(['Pesho: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Peshoslav: QH, QC, QS, QD',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Peshoslav: QH, QC, JS, JD, JC',
    'Pesho: JD, JD, JD, JD, JD, JD']
)