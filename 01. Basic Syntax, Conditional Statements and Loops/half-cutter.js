function halfCutter(inp) {
    let woodSize = parseInt(inp);
    let cutsCount = 0;

    while (woodSize >= 1) {
        woodSize /= 2;
        cutsCount++;
    }

    console.log(`Length is ${woodSize.toFixed(2)} cm. after ${cutsCount} cuts.`)
}
halfCutter(1000);