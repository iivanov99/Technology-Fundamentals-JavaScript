function solve(objAsJSON) {
    let obj = JSON.parse(objAsJSON)

    for (let prop in obj) {
        console.log(`${prop}: ${obj[prop]}`)
    }
}
solve('{"name": "George", "age": 40, "town": "Sofia"}')
