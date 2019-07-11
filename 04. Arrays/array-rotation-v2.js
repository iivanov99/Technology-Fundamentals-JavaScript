function arrayRotation2(arr, rotationsCount) {  
    for (let i = 0; i < rotationsCount; i++) {
        let firstEl = arr.shift();
        arr.push(firstEl);
    } 
    console.log(arr.join(' '))
}
arrayRotation2([51, 47, 32, 61, 21], 2)