function solve(input) {
    let usernames = new Set()

    for (let username of input) {
        usernames.add(username)
    }

    let sortedUsernames = [...usernames]
        .sort(compare)

    function compare(a, b) {
        let result = a.length - b.length

        if (result === 0) {
            result = a.localeCompare(b)
        }

        return result
    }

    console.log(sortedUsernames.join('\n'))
}
solve(["Denise",
    "Ignatius",
    "Iris",
    "Isacc",
    "Indie",
    "Dean",
    "Donatello",
    "Enfuego",
    "Benjamin",
    "Biser",
    "Bounty",
    "Renard",
    "Rot"]

)