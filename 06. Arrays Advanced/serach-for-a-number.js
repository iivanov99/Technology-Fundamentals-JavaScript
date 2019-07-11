function searchForANumber(firstArr, secondArr) {
  firstArr = firstArr.map(Number)
  let elementsCount = +secondArr.shift()
  let deleteCount = +secondArr.shift()
  let searchedNum = +secondArr.shift()

  let resultArr = firstArr.slice(0, elementsCount)
  resultArr.splice(0, deleteCount)
  let counter = 0

  for (let num of resultArr) {
    if (num === searchedNum) {
      counter++
    }
  }

  console.log(`Number ${searchedNum} occurs ${counter} time.`)
}