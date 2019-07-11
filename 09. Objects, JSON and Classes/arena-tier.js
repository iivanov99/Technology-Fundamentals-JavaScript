function solve(input) {
    let gladiators = {} // { name : { skill : skillPoints } }

    for (let inputRow of input) {
        if (inputRow === 'Ave Cesar') { //sorting and print
            let sortedGladiators = Object.entries(gladiators)
                .sort((a, b) => getTotalSkillPoints(b[1]) - getTotalSkillPoints(a[1]) || a[0].localeCompare(b[0]))

            for (let [gladiator, skills] of sortedGladiators) {
                let sortedSkills = Object.entries(skills)
                    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
                    .map(el => `- ${el[0]} <!> ${el[1]}`)

                console.log(`${gladiator}: ${getTotalSkillPoints(skills)} skill`)
                console.log(sortedSkills.join('\n'))
            }

            break
        } else if (inputRow.includes('vs')) { //duel
            let [firstGladiatorName, secondGladiatorName] = inputRow.split(' vs ')

            if (gladiators.hasOwnProperty(firstGladiatorName) && gladiators.hasOwnProperty(secondGladiatorName)) { //if both exist
                let firstGladiatorSkills = gladiators[firstGladiatorName]
                let secondGladiatorSkills = gladiators[secondGladiatorName]

                for (let prop in firstGladiatorSkills) {
                    if (secondGladiatorSkills.hasOwnProperty(prop)) {
                        if (firstGladiatorSkills[prop] > secondGladiatorSkills[prop]) { //first wins
                            delete gladiators[secondGladiatorName]
                        } else { //second wins
                            delete gladiators[firstGladiatorName]
                        }
                    }
                }
            }
        } else { // filling obj data
            let [gladiatorName, skillName, skillPoints] = inputRow.split(' -> ')
            skillPoints = +skillPoints

            if (!gladiators.hasOwnProperty(gladiatorName)) {
                gladiators[gladiatorName] = {}
                let skills = gladiators[gladiatorName]
                skills[skillName] = skillPoints
            } else {
                let skills = gladiators[gladiatorName]

                if (!skills.hasOwnProperty(skillName)) {
                    skills[skillName] = skillPoints
                } else {
                    if (skillPoints > skills[skillName]) {
                        skills[skillName] = skillPoints
                    }
                }
            }
        }
    }

    function getTotalSkillPoints(gladiatorSkills) {
        let totalSP = 0

        for (let prop in gladiatorSkills) {
            totalSP += gladiatorSkills[prop]
        }

        return totalSP
    }
}
solve(['Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Pesho vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Gosho',
    'Ave Cesar'])