function login(args) {
    let username = args[0];
    let password = "";

    for (let i = username.length - 1; i >= 0; i--) {
        password += username[i];
    }

    let k = 1;
    while (true) {
        let currentPasssword = args[k];

        if (k == 4 && currentPasssword != password) {
            console.log(`User ${username} blocked!`);
            break;
        }

        if (currentPasssword == password) {
            console.log(`User ${username} logged in.`);
            break;
        } else {
            console.log('Incorrect password. Try again.');
        }

        k++;
    }
}
login(['sunny', 'rainy', 'cloudy', 'sunny', 'ynnus']);