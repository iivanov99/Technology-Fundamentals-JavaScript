function solve(input) {
    let resourceQuanity = new Map()

    for (let i = 0; i < input.length; i += 2) {
        let resource = input[i]
        let quanity = +input[i + 1]

        if (!resourceQuanity.has(resource)) {
            resourceQuanity.set(resource, quanity)
        } else {
            let existingQuanity = resourceQuanity.get(resource)
            existingQuanity += quanity
            resourceQuanity.set(resource, existingQuanity)
        }
    }

    for (let [resource, quanity] of resourceQuanity.entries()) {
        console.log(`${resource} -> ${quanity}`)
    }
}
solve(['gold', '155', 'silver', '10', 'copper', '17', 'gold', '15'])