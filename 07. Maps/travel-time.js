function solve(input) {
    let countryTowns = new Map()

    for (let line of input) {
        let parts = line.split(' > ')
        let country = parts[0]
        let town = parts[1]
        let travelCost = +parts[2]

        if (!countryTowns.has(country)) {
            let towns = new Map()
            towns.set(town, travelCost)
            countryTowns.set(country, towns)
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
        let townsAndPrices = ''
        let sortedTowns = [...towns]
            .sort((a, b) => a[1] - b[1])

        for (let [town, price] of sortedTowns) {
            townsAndPrices += `${town} -> ${price} `
        }

        console.log(`${country} -> ${townsAndPrices}`)
    }
}
solve(['Bulgaria > Sofia > 500',
    'Bulgaria > Sopot > 800',
    'France > Paris > 2000',
    'Albania > Tirana > 1000',
    'Bulgaria > Sofia > 200',
    'Bulgaria > Sopot > 70']
)