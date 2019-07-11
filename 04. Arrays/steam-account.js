function steamAccount(arr) {
    let account = arr[0].split(' ').filter(Boolean);
    let i = 1;

    while (true) {
        let tokens = arr[i].split(' ');

        if (tokens[0] === 'Play!') {
            break;
        }

        let action = tokens[0];
        let game = tokens[1];

        switch (action) {
            case 'Install':
                if (!account.includes(game)) {
                    account.push(game);
                }
                break;
            case 'Uninstall':
                if (account.includes(game)) {
                    let index = account.indexOf(game);
                    account.splice(index, 1);
                }
                break;
            case 'Update':
                if (account.includes(game)) {
                    let index = account.indexOf(game);
                    account.splice(index, 1);
                    account.push(game);
                }
                break;
            case 'Expansion':
                let gameTokens = game.split('-').filter(Boolean);
                let gameName = gameTokens[0];
                let expansonName = gameTokens[1];
                if (account.includes(gameName)) {
                    let index = account.indexOf(gameName);
                    account.splice(index + 1, 0, `${gameName}:${expansonName}`);
                }
                break;
        }

        i++;
    }

    console.log(account.join(' '));

}
steamAccount(['CS WoW Diablo',
    'Uninstall XCOM',
    'Update PeshoGame',
    'Update WoW',
    'Expansion Civ-V',
    'Play!'])