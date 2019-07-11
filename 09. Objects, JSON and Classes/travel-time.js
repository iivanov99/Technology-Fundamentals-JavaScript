function solve(input) {
    let travels = {} // { country: { town : travelCost } }

    for (let row of input) {
        let [country, town, travelCost] = row.split(' > ')
        travelCost = +travelCost

        if (!travels.hasOwnProperty(country)) {
            travels[country] = {}
            let towns = travels[country]
            towns[town] = travelCost
        } else {
            let towns = travels[country]

            if (!towns.hasOwnProperty(town)) {
                towns[town] = travelCost
            } else {
                if (travelCost < towns[town]) {
                    towns[town] = travelCost
                }
            }
        }
    }

    let sortedTravels = Object.entries(travels)
        .sort((a, b) => a[0].localeCompare(b[0]))

    for (let [country, towns] of sortedTravels) {
        let sortedTowns = Object.entries(towns)
            .sort((a, b) => a[1] - b[1])
            .map(el => `${el[0]} -> ${el[1]}`)
        
        console.log(`${country} -> ${sortedTowns.join(' ')}`)
    }
}
solve(['Bulgaria > Sofia > 800',
    'Bulgaria > Sopot > 700',
    'France > Paris > 2000',
    'Albania > Tirana > 1000',
    'Bulgaria > Sofia > 200']
)