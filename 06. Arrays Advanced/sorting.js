function sorting(arr) {
    arr.sort((a, b) => a - b)
    let length = arr.length
    let resultArr = []

    for (let i = 0; i < length; i++) {
        if (i % 2 === 0) {
            resultArr.push(arr.pop())
        } else {
            resultArr.push(arr.shift())
        }
    }

    console.log(resultArr.join(' '))
}