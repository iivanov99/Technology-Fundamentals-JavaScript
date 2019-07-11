function solve(input) {
    let countryTowns = new Map()

    for (let line of input) {
        let parts = line
            .split(' > ')
            .filter(Boolean)
        let country = parts[0]
        let town = parts[1]
        let travelCost = +parts[2]

        if (!countryTowns.has(country)) {
            let townsCost = new Map()
            townsCost.set(town, travelCost)
            countryTowns.set(country, townsCost)
        } else {
            let existingTowns = countryTowns.get(country)

            if (existingTowns.has(town)) {
                if (travelCost < existingTowns.get(town)) {
                    existingTowns.set(town, travelCost)
                }
            } else {
                existingTowns.set(town, travelCost)
            }
        }
    }

    let sortedCountries = [...countryTowns]
        .sort((a, b) => a[0].localeCompare(b[0]))

    for (let [country, towns] of sortedCountries) {
        let sortedTowns = [...towns]
            .sort((a, b) => a[1] - b[1])
            .map(a => `${a[0]} -> ${a[1]}`)

        console.log(`${country} -> ${sortedTowns.join(' ')}`)
    }
}
solve(['Bulgaria > Sofia > 500',
    'Bulgaria > Sopot > 800',
    'France > Paris > 2000',
    'Albania > Tirana > 1000',
    'Bulgaria > Sofia > 200',
    'Bulgaria > Sopot > 70']
)