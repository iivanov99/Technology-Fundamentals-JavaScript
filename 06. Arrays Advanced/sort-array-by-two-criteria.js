function sortArrayByTwoCriteria(arr) {
    arr = arr
        .sort(compare)

    function compare(a, b) {
        let result = a.length - b.length

        if (result === 0) {
            result = a.localeCompare(b)
        }

        return result
    }

    console.log(arr.join('\n'))
}