function solve(input) {
    let studentGrades = new Map()

    for (let line of input) {
        let parts = line.split(' ')
        let student = parts[0]
        let marks = parts
            .slice(1)
            .map(Number)

        if (!studentGrades.has(student)) {
            studentGrades.set(student, marks)
        } else {
            let existingMarks = studentGrades.get(student)

            for (let mark of marks) {
                existingMarks.push(mark)
            }
        }
    }

    let sortedStudentGrades = [...studentGrades]
        .sort((a, b) => average(a[1]) - average(b[1]))

    for (let [student, grades] of sortedStudentGrades) {
        console.log(`${student}: ${grades.join(', ')}`)
    }

    function average(grades) {
        let sum = 0

        for (let grade of grades) {
            sum += grade
        }

        return sum / grades.length
    }
}
solve(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'])