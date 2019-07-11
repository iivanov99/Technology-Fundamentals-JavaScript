function solve(firstChar, secondChar) {
    let charsInRange = '';
    let start = Math.min(firstChar.charCodeAt(0), secondChar.charCodeAt(0));
    let end = Math.max(firstChar.charCodeAt(0), secondChar.charCodeAt(0));
    for (let i = start + 1; i < end; i++) {
        charsInRange += String.fromCharCode(i) + ' ';
    }

    console.log(charsInRange);
} 
solve('C', '#');