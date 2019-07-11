function maxSeqOfEqualElements(arr) {
    let array = arr[0].split(' ');
    let maxSeqCount = Number.MIN_SAFE_INTEGER;
    let maxSeqValue = 0;

    for (let i = 0; i < array.length; i++) {
        let count = 1;
        let k = i + 1;

        while (array[i] === array[k]) {
            count++;
            k++;
        }
        
        if (count > maxSeqCount) {
            maxSeqCount = count;
            maxSeqValue = array[i];
        }
    }

    let longestSequnce = '';
    for (let i = 0; i < maxSeqCount; i++) {
        longestSequnce += maxSeqValue + ' ';
    }

    console.log(longestSequnce);
}
maxSeqOfEqualElements(['0 1 1 5 2 2 6 3 3']);