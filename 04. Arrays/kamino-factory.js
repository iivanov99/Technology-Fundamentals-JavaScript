function kaminoFactory(arr) {
    let bestSequenceLength = Number.MIN_SAFE_INTEGER;
    let bestSequenceStartingIndex = -1;
    let bestSequenceSum = 0;
    let bestSequenceIndex = -1;

    for (let i = 1; i < arr.length; i++) {
        let currentSequence = arr[i].split('!').filter(Boolean).map(Number);
        let currentBestLength = Number.MIN_SAFE_INTEGER;
        let currentSequenceStartingIndex = -1;
        let currentSequenceSum = 0;

        for (let j = 0; j < currentSequence.length; j++) {
            currentSequenceSum += currentSequence[j];
            let counter = 1;

            if (currentSequence[j] === 1) {
                let k = j + 1;
                while (currentSequence[k] === 1) {
                    counter++;
                    k++;
                }//counting the length of the subsequence of ones
            }

            if (counter > currentBestLength) {
                currentBestLength = counter;
                currentSequenceStartingIndex = j;
            } //saving the longest subsequence length for the current DNA Sequence
        }//current sequence

        if (currentBestLength > bestSequenceLength) {
            bestSequenceLength = currentBestLength;
            bestSequenceStartingIndex = currentSequenceStartingIndex;
            bestSequenceSum = currentSequenceSum;
            bestSequenceIndex = i;
        } else if (currentBestLength === bestSequenceLength) {
            if (currentSequenceStartingIndex < bestSequenceStartingIndex) {
                bestSequenceLength = currentBestLength;
                bestSequenceStartingIndex = currentSequenceStartingIndex;
                bestSequenceSum = currentSequenceSum;
                bestSequenceIndex = i;
            } else if (currentSequenceStartingIndex === bestSequenceStartingIndex) {
                if (currentSequenceSum > bestSequenceSum) {
                    bestSequenceLength = currentBestLength;
                    bestSequenceStartingIndex = currentSequenceStartingIndex;
                    bestSequenceSum = currentSequenceSum;
                    bestSequenceIndex = i;
                }
            }
        }
    }//all sequences (outer loop - end)

    let bestDNASequence = arr[bestSequenceIndex].split('!').filter(Boolean).map(Number);

    console.log(`Best DNA sample ${bestSequenceIndex} with sum: ${bestSequenceSum}.`);
    console.log(bestDNASequence.join(' '));
}
kaminoFactory(['4', '1!1!0!1', '1!0!0!1', '1!1!0!0']);