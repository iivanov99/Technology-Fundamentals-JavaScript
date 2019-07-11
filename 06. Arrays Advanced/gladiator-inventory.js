function gladiatorInventory(arr) {
    let inventory = arr
        .shift()
        .split(' ')
        .filter(Boolean)

    for (let el of arr) {
        let tokens = el
            .split(' ')
            .filter(Boolean)
        let command = tokens[0]
        let equipment = tokens[1]

        if (command === 'Buy') {
            if (!inventory.includes(equipment)) {
                inventory.push(equipment)
            }
        } else if (command === 'Trash') {
            if (inventory.includes(equipment)) {
                let index = inventory.indexOf(equipment)
                inventory.splice(index, 1)
            }
        } else if (command === 'Repair') {
            if (inventory.includes(equipment)) {
                let index = inventory.indexOf(equipment)
                inventory.splice(index, 1)
                inventory.push(equipment)
            }
        } else if (command === 'Upgrade') {
            let equipmentTokens = equipment
                .split('-')
                .filter(Boolean)
            let equimpentName = equipmentTokens[0]

            if (inventory.includes(equimpentName)) {
                let upgrade = equipmentTokens[1]
                let index = inventory.indexOf(equimpentName)
                inventory.splice(index + 1, 0, `${equimpentName}:${upgrade}`)
            }
        }
    }

    console.log(inventory.join(' '))
}
gladiatorInventory(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel'])