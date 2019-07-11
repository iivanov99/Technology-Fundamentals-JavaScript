function solve(input) {
    class Cat {
        constructor(name, age) {
            this.name = name
            this.age = +age
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }

    let cats = []

    for (let catDate of input) {
        let parts = catDate
            .split(' ')
            .filter(Boolean)
        let name = parts[0]
        let age = parts[1]

        cats.push(new Cat(name, age))
    }

    cats.forEach((i) => i.meow())
    
    // for (let cat of cats) {
    //     cat.meow()
    // }
}
solve(['Mellow 2', 'Tom 5'])