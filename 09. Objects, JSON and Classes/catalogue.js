function solve(input) {
    let catalogue = {} //{ initial: { name : price } }

    for (let inpRow of input) {
        let tokens = inpRow.split(' : ')
        let productName = tokens[0]
        let productPrice = +tokens[1]
        let productInitial = productName[0]

        if (!catalogue.hasOwnProperty(productInitial)) {
            catalogue[productInitial] = {}
        }

        let existingProducts = catalogue[productInitial]
        existingProducts[productName] = productPrice
    }

    let sortedCatalogue = Object.entries(catalogue)
        .sort((a, b) => a[0].localeCompare(b[0]))

    for (let [initial, products] of sortedCatalogue) {
        let sortedProducts = Object.entries(products)
            .sort((a, b) => a[0].localeCompare(b[0]))
            .map(el => `${el[0]}: ${el[1]}`)
        console.log(initial)
        console.log(`  ${sortedProducts.join('\n  ')}`)
    }
}
solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
)