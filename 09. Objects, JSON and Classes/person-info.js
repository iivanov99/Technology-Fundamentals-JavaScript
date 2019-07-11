function solve(firstName, lastName, age) {
    let person = {
        firstName,
        lastName,
        age: +age
    }

    for (let prop in person) {
        console.log(`${prop}: ${person[prop]}`)
    }
}
solve('Peter', 'Pan', '20')