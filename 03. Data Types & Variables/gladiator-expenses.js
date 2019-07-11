function gladExpenses(arg1, arg2, arg3, arg4, arg5) {
    let lostFights = parseInt(arg1);
    let helmetPrice = parseFloat(arg2);
    let swordPrice = parseFloat(arg3);
    let shieldPrice = parseFloat(arg4);
    let armorPrice = parseFloat(arg5);

    let helmetsBrokenCount = parseInt(lostFights / 2);
    let swordsBrokenCount = parseInt(lostFights / 3);
    let shieldsBrokenCount = parseInt(lostFights / 6);
    let armorsBrokenCount = parseInt(lostFights / 12);

    let expenses = helmetsBrokenCount * helmetPrice + swordsBrokenCount * swordPrice + shieldsBrokenCount * shieldPrice + armorsBrokenCount * armorPrice;
    
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
gladExpenses(7,2,3,4,5);