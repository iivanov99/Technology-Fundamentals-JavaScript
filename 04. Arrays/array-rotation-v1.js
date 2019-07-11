function arrayRotation1(arr, rotationsCount) {  
    for (let i = 0; i < rotationsCount; i++) {
        let firstElement = arr[0];

        for (let j = 0; j < arr.length - 1; j++) {
            arr[j] = arr[j + 1];
        }

        arr[arr.length - 1] = firstElement;
    }
    console.log(arr.join(' '))
}
arrayRotation1([51, 47, 32, 61, 21], 2)