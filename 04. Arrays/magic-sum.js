function magicSum(arr) {
    let magicNumber = +arr[1];
    let sequence = arr[0].split(' ');
    for (let i = 0; i < sequence.length; i++) {
        sequence[i] = +sequence[i];
    }

    for (let i = 0; i < sequence.length; i++) {
        for (let j = i + 1; j < sequence.length; j++) {
            if (sequence[i] + sequence[j] === magicNumber) {
                console.log(`${sequence[i]} ${sequence[j]}`);
            }
        }
    }
}
magicSum(['1 7 6 2 19 23', '8']);