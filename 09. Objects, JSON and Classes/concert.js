function solve(input) {
    let bandMembers = {} // { name: [members] }
    let bandPlayTime = {} // { name: playTime }
    let searchedBand = input.pop()

    for (let inputRow of input) {
        if (inputRow === 'start of concert') {
            break
        }

        let tokens = inputRow.split('; ')
        let action = tokens[0]
        let bandName = tokens[1]

        if (action === 'Play') {
            let playTime = +tokens[2]

            if (!bandPlayTime.hasOwnProperty(bandName)) {
                bandPlayTime[bandName] = playTime
            } else {
                bandPlayTime[bandName] += playTime
            }
        } else if (tokens[0] === 'Add') {
            let members = tokens[2].split(', ')

            if (!bandMembers.hasOwnProperty(bandName)) {
                bandMembers[bandName] = members
            } else {
                let existingMembers = bandMembers[bandName]

                for (let member of members) {
                    if (!existingMembers.includes(member)) {
                        existingMembers.push(member)
                    }
                }
            }
        }
    }

    let sortedBandPlayTime = Object.entries(bandPlayTime)
        .sort((a, b) => b[1] - a[1] || a[0].localeComapere(b[0]))
        .map(el => `${el[0]} -> ${el[1]}`)

    console.log('Total time: ' + getTotalPlayedTime(bandPlayTime))
    console.log(sortedBandPlayTime.join('\n'))
    console.log(searchedBand)
    console.log(`=> ${bandMembers[searchedBand].join('\n=> ')}`)

    function getTotalPlayedTime(bandPlayTime) {
        let totalTime = 0

        for (let prop in bandPlayTime) {
            totalTime += bandPlayTime[prop]
        }

        return totalTime
    }
}
solve(['Add; The Beatles; John Lennon, Paul McCartney',
    'Add; The Beatles; Paul McCartney, George Harrison',
    'Add; The Beatles; George Harrison, Ringo Starr',
    'Play; The Beatles; 3698',
    'Play; The Beatles; 3828',
    'start of concert',
    'The Beatles'])