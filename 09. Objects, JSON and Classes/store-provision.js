function solve(input) {
    let currentStock = input[0]
    let deliveryStock = input[1]
    let stock = {}

    for (let i = 0; i < currentStock.length; i += 2) {
        let productName = currentStock[i]
        let productQuantity = +currentStock[i + 1]

        stock[productName] = productQuantity
    }

    for (let i = 0; i < deliveryStock.length; i += 2) {
        let productName = deliveryStock[i]
        let productQuantity = +deliveryStock[i + 1]

        if (stock.hasOwnProperty(productName)) {
            stock[productName] += productQuantity
        } else {
            stock[productName] = productQuantity
        }
    }

    console.log(stock)
}
solve([
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
])