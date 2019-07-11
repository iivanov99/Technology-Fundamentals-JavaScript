function solve(input) {
    input.shift()
    let towns = []

    for (let inputRow of input) {
        let tokens = inputRow.split('|').filter(Boolean).map(el => el.trim())
        let town = tokens[0]
        let lat = +(+tokens[1]).toFixed(2)
        let long = +(+tokens[2]).toFixed(2)

        towns.push({ Town: town, Latitude: lat, Longitude: long })
    }

    let townsJSON = JSON.stringify(towns)
    console.log(townsJSON)
}
solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'])