function solve(input) {
    let firstString = input
        .substring(0, input.length / 2)
        .split('').reverse().join('')
    let secondString = input
        .substring(input.length / 2)
        .split('').reverse().join('')

    console.log(firstString)
    console.log(secondString)
}
solve('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')