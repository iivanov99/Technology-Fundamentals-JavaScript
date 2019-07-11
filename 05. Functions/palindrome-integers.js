function solve(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(isPalindrome(arr[i]));
    }

    function isPalindrome(number) {
        let numberAsString = number.toString();
        let digitsArr = numberAsString.split('');

        for (let i = 0; i < digitsArr.length; i++) {
            if (digitsArr[0 + i] !== digitsArr[digitsArr.length - 1 - i]) {
                return false;
            }
        }

        return true;
    }

}
solve([123, 323, 421, 121]);
