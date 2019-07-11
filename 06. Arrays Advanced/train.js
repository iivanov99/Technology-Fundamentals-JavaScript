function train(arr) {
    let wagons = arr.shift()
        .split(' ')
        .filter(Boolean)
        .map(Number)
    let maxPassengers = +arr.shift()

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i];
        let tokens = command.split(' ')

        if (tokens[0] == 'Add') {
            let lastWagonPassengers = +tokens[1]
            wagons.push(lastWagonPassengers)
        } else {
            let passengers = +tokens[0]

            for (let j = 0; j < wagons.length; j++) {
                if (wagons[j] + passengers <= maxPassengers) {
                    wagons[j] += passengers
                    break
                }
            }
        }
    }

    console.log(wagons.join(' '))
}