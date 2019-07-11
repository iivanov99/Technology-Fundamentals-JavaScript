function solve(input) {
    let neighborhoods = input
        .shift()
        .split(', ')
        .filter(Boolean)
    let neighborhoodInhabitants = new Map() 

    for (let neighborhood of neighborhoods) {
        neighborhoodInhabitants.set(neighborhood, [])
    }

    for (let line of input) {
        let parts = line
            .split(' - ')
            .filter(Boolean)
        let neighborhood = parts[0]
        let inhabitant = parts[1]

        if (neighborhoodInhabitants.has(neighborhood)) {
            let existingInhabitants = neighborhoodInhabitants.get(neighborhood)
            existingInhabitants.push(inhabitant)
            neighborhoodInhabitants.set(neighborhood, existingInhabitants)
        }
    }

    let sortedNeighborhoodInhabitants = [...neighborhoodInhabitants]
        .sort((a, b) => b[1].length - a[1].length)

    for (let [neighborhood, inhabitants] of sortedNeighborhoodInhabitants) {
        console.log(`${neighborhood}: ${inhabitants.length}`)

        if (inhabitants.length > 0) {
            console.log(`--${inhabitants.join('\n--')}`)
        }
    }
}
solve(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy'])