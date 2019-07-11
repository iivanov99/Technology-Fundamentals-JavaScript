function arithmephile(args) {
    let maxMultiplication = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < args.length; i++) {
        let num = parseFloat(args[i]);
    
        if (num >= 0 && num <= 9) {
            let multiplication = 1;
            
            for (let j = i + 1; j <= i + num; j++) {
                multiplication *= parseFloat(args[j]);
            }

            if (multiplication > maxMultiplication) {
                maxMultiplication = multiplication;
            }
        }
    }

    console.log(maxMultiplication);
}

arithmephile([18,42,19,36,1,-297,38,100,9,-249,-170,-18,-208,-11,-87,-90]);