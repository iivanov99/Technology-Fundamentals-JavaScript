function solve(input) {
    let initialFlights = input[0]
    let changedFlights = input[1]
    let flightStatus = input[2].shift()
    let flights = {} // { sector: { destination: status } }

    for (let flightInfoData of initialFlights) {
        let [sector, destination] = flightInfoData.split(' ')

        if (!flights.hasOwnProperty(sector)) {
            flights[sector] = { Destination: destination, Status: 'Ready to fly' }
        }
    }

    for (let flightStatusDate of changedFlights) {
        let [sector, status] = flightStatusDate.split(' ')

        if (flights.hasOwnProperty(sector)) {
            flights[sector].Status = status
        }
    }

    let filteredFlights = Object.values(flights)
        .filter(f => f.Status === flightStatus)
    
    for (let flight of filteredFlights) {
        console.log(flight)
    }
}
solve([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK330 Cancelled'],
['Ready to fly']])