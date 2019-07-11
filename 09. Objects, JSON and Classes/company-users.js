function solve(input) {
    let companyUsers = {} // { company : [users] }

    for (let row of input) {
        let [company, user] = row.split(' -> ')

        if (!companyUsers.hasOwnProperty(company)) {
            companyUsers[company] = []
            let existingUsers = companyUsers[company]
            existingUsers.push(user)
        } else {
            let existingUsers = companyUsers[company]

            if (!existingUsers.includes(user)) {
                existingUsers.push(user)
            }
        }
    }

    let sortedCompanyUsers = Object.entries(companyUsers)
        .sort((a, b) => a[0].localeCompare(b[0]))
    
    for (let [company, users] of sortedCompanyUsers) {
        console.log(company)
        console.log(`-- ${users.join('\n-- ')}`)
    }
}

solve(['SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'])