function vac(arg1,arg2,arg3) {
    let groupCount = parseInt(arg1);
    let groupType = arg2;
    let dayOfWeek = arg3;

    let price = 0;

    switch (groupType) {
        case 'Students':
            if (dayOfWeek == 'Friday') {
                price = groupCount * 8.45;
            } else if (dayOfWeek == 'Saturday') {
                price = groupCount * 9.8;
            } else if (dayOfWeek == 'Sunday') {
                price = groupCount * 10.46;
            }

            if (groupCount >= 30) {
                price *= 0.85;
            }
            break;
        case 'Business':
            if (groupCount >= 100) {
                groupCount -= 10;
            }

            if (dayOfWeek == 'Friday') {
                price = groupCount * 10.9;
            } else if (dayOfWeek == 'Saturday') {
                price = groupCount * 15.6;
            } else if (dayOfWeek == 'Sunday') {
                price = groupCount * 16;
            }
            break;
        case 'Regular':
            if (dayOfWeek == 'Friday') {
                price = groupCount * 15;
            } else if (dayOfWeek == 'Saturday') {
                price = groupCount * 20;
            } else if (dayOfWeek == 'Sunday') {
                price = groupCount * 22.5;
            }

            if (groupCount >= 10 && groupCount <= 20) {
                price *= 0.95;
            }
            break;
        default:
            break;
    }

    console.log(`Total price: ${price.toFixed(2)}`);
}
vac(40,'Regular','Saturday');