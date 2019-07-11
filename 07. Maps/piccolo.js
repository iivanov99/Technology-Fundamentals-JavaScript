function solve(input) {
    let cars = []

    for (let line of input) {
        let parts = line.split(', ')
        let direction = parts[0]
        let carNumber = parts[1]

        if (direction === 'IN') {
            if (!cars.includes(carNumber)) {
                cars.push(carNumber)
            }
        } else if (direction === 'OUT') {
            if (cars.includes(carNumber)) {
                let index = cars.indexOf(carNumber)
                cars.splice(index, 1)
            }
        }
    }

    if (cars.length > 0) {
        cars = cars
            .sort((a, b) => a.localeCompare(b))
        console.log(cars.join('\n'))
    } else {
        console.log('Parking Lot is Empty')
    }
}
solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
)