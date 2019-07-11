function spiceMustFlow(input) {
    let startingYield = parseFloat(input);
    let daysCount = 0;
    let spiceMined = 0;

    while (startingYield >= 100) {
        spiceMined += startingYield;

        startingYield -= 10; //end of day
        spiceMined -= 26;   //for workers

        daysCount++;
    }

    if (daysCount >= 1) {
        spiceMined -= 26; //for workers after exhaustion of the mine
    }

    console.log(daysCount);
    console.log(spiceMined);
}
spiceMustFlow(228);