function solve(input) {
    let heroes = []

    for (let heroData of input) {
        let parts = heroData.split(' / ')

        let heroName = parts[0]
        let heroLevel = +parts[1]
        let inventory = parts[2].split(', ')

        heroes.push({ name: heroName, level: heroLevel, items: inventory })
    }

    let heroesJSON = JSON.stringify(heroes)
    console.log(heroesJSON)
}

solve(["Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"])