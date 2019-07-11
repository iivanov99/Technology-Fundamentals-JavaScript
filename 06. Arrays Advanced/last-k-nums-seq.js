function solve(n, k) {
    n = +n
    k = +k
    let arr = [1]

    for (let i = 1; i < n; i++) {
        let seqStart = Math.max(0, i - k)
        let lastKNums = arr.slice(seqStart)
        let sum = 0;

        for (let num of lastKNums) {
            sum += num;
        }

        arr.push(sum)
    }

    console.log(arr.join(' '))
}
solve('6', '3')