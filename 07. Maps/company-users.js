function solve(input) {
    let companyEmployees = new Map()

    for (let line of input) {
        let parts = line
            .split(' -> ')
            .filter(Boolean)
        let companyName = parts[0]
        let employeeId = parts[1]

        if (!companyEmployees.has(companyName)) {
            let employees = []
            employees.push(employeeId)
            companyEmployees.set(companyName, employees)
        } else {
            let existingEmployees = companyEmployees.get(companyName)

            if (!existingEmployees.includes(employeeId)) {
                existingEmployees.push(employeeId)
            }
        }
    }

    let sortedCompanyEmployees = [...companyEmployees]
        .sort((a, b) => a[0].localeCompare(b[0]))


    for (let [company, employees] of sortedCompanyEmployees) {
        console.log(company)
        console.log(`-- ${employees.join('\n-- ')}`)
    }
}
solve(['SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111']
)