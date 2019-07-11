function solve(input) {
    //gladiatorName => (technique => skillPoints)
    let gladiators = new Map()

    for (let line of input) {
        if (line === 'Ave Cesar') {
            //Arena end
            let sortedGladiators = [...gladiators]
                .sort(function(a, b) {
                    let result = getTotalSP(b[1]) - getTotalSP(a[1])
                    
                    if (result === 0) {
                        result = a[0].localeCompare(b[0])
                    }

                    return result
                })

            for (let [gladiator, skills] of sortedGladiators) {
                let sortedSkills = [...skills]
                    .sort(function(a, b) {
                        let result = b[1] - a[1]

                        if (result === 0) {
                            result = a[0].localeCompare(b[0])
                        }

                        return result
                    })
                    .map(a => `- ${a[0]} <!> ${a[1]}`)

                console.log(`${gladiator}: ${getTotalSP(skills)} skill`)
                console.log(`${sortedSkills.join('\n')}`)
            }

            break
        }

        if (line.includes('vs')) {
            //Duel
            let parts = line
                .split(' vs ')
                .filter(Boolean)
            let firstGladiator = parts[0]
            let secondGladiator = parts[1]

            if (gladiators.has(firstGladiator) && gladiators.has(secondGladiator)) {
                let firstGladiatorExistingSkills = gladiators.get(firstGladiator)
                let secondGladiatorExistingSkills = gladiators.get(secondGladiator)

                for (let [skill, points] of firstGladiatorExistingSkills.entries()) {
                    if (secondGladiatorExistingSkills.has(skill)) {
                        let secondGladiatorSkillPoints = secondGladiatorExistingSkills.get(skill)

                        if (secondGladiatorSkillPoints > points) {
                            gladiators.delete(firstGladiator)
                        } else {
                            gladiators.delete(secondGladiator)
                        }
                    }
                }
            }
        } else {
            //Receiving gladiator data
            let parts = line
                .split(' -> ')
                .filter(Boolean)
            let gladiator = parts[0]
            let skillName = parts[1]
            let skillPoints = +parts[2]

            if (!gladiators.has(gladiator)) {
                let skills = new Map()
                skills.set(skillName, skillPoints)
                gladiators.set(gladiator, skills)
            } else {
                let existingSkills = gladiators.get(gladiator)

                if (existingSkills.has(skillName)) {
                    let existingSkillPoints = existingSkills.get(skillName)

                    if (existingSkillPoints < skillPoints) {
                        existingSkills.set(skillName, skillPoints)
                    }
                } else {
                    existingSkills.set(skillName, skillPoints)
                }
            }
        }
    }

    function getTotalSP(skills) {
        let totalSP = 0

        for (let [skill, points] of skills.entries()) {
            totalSP += points
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