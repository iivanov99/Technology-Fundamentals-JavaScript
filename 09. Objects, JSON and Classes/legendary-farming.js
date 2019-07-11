function solve(input) {
    let keyMaterials = {    // { keyItem: quantity }
        shards: 0,  //Shadowmourne
        fragments: 0,   //Valanyr
        motes: 0    //Dragonwrath
    }
    let junkMaterials = {} // { junkItem: quantity }

    let materials = input.split(' ')

    for (let i = 0; i < materials.length; i += 2) {
        let quantity = +materials[i]
        let material = materials[i + 1].toLowerCase()

        if (keyMaterials.hasOwnProperty(material)) { //is key item
            keyMaterials[material] += quantity
        } else {    // is thrash item
            if (!junkMaterials.hasOwnProperty(material)) {
                junkMaterials[material] = quantity
            } else {
                junkMaterials[material] += quantity
            }
        }

        if (keyMaterials[material] >= 250) {
            if (material === 'shards') {
                console.log('Shadowmourne obtained!')
            } else if (material === 'fragments') {
                console.log('Valanyr obtained!')
            } else {
                console.log('Dragonwrath obtained!')
            }
            keyMaterials[material] -= 250
            break
        }
    }

    let sortedKeyMaterials = Object.entries(keyMaterials)
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .map(el => `${el[0]}: ${el[1]}`)

    let sortedJunkMaterials = Object.entries(junkMaterials)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .map(el => `${el[0]}: ${el[1]}`)

    console.log(sortedKeyMaterials.join('\n'))
    console.log(sortedJunkMaterials.join('\n'))
}
solve('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')