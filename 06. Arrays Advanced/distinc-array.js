function distinctArray(arr) {
    arr = arr
        .filter((el, i, self) => self.indexOf(el) === i)

    console.log(arr.join(' '))
}