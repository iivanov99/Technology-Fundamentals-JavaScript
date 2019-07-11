function solve(input) {
    let itemsQuantity = new Map()

    for (let line of input) {
        let parts = line.split(' ')
        let product = parts[0]
        let quantity = +parts[1]

        if (itemsQuantity.has(product)) {
            quantity += itemsQuantity.get(product)
        }

        itemsQuantity.set(product, quantity)
    }

    for (let [product, quantity] of itemsQuantity.entries()) {
        console.log(product + ' -> ' + quantity)
    }
}
solve(['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40'])