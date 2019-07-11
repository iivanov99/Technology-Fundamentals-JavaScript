function solve(name, area, population, country, postCode) {
    let city = {
        name,
        area,
        population,
        country,
        postCode
    }

    for (let prop in city) {
        console.log(`${prop} -> ${city[prop]}`)
    }
}
solve('Sofia', '492', '1238438', 'Bulgaria', '1000')