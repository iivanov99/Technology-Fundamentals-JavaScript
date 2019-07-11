function smallestNum(n1, n2, n3) {
    let min = Math.min(n1, Math.min(n2, n3));
    console.log(min);
}
smallestNum(2, 5, 3);