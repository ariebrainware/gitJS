const logo = `

                    ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                                    MMMMMMMMMMMMMWXOxlc;,'......',;cldOXWMMMMMMMMMMMMM
                                    MMMMMMMMMWNOo:'...,:clooooollc;'...':oONWMMMMMMMMM
                                    MMMMMMMW0o,..'cdkKXWMMMMMMMMMMWX0kd:...;o0WWMMMMMM
                                    MMMMMWOc. .cxXWMMMMMMMMMMMMMMMMMMMMWKxc...c0WMMMMM
                                    MMMWKl..'o0WWWMMMMMMMMMMMMMMMMMMMMMMMMW0o'..lKMMMM
                                    MMWk,..c0WMWWXKWMMWWMMMMMMMMMMMMWWNXXWMMW0c..,OWMM
                                    MWx..'xNMMMMO,.;cx0K0OkkxxkkOKK0dc,';OMMMMNx. 'xWM
                                    Wx. 'kWMMMMWo.................... ...dWMMMMWk' 'kW
                                    0, .xWMMMMMWd.................... ...dWMMMMMWx. ;K
                                    o..cNMMMMMWO,........................,OWMMMMMNc..o
                                    ; .kMMMMMMK; .........................;KMMMMMMx. ;
                                    ' ,0MMMMMMk. ..........................kMMMMMM0, '
                                    . ;KMMMMMMk. ........................ .kMMMMMM0, .
                                    ' 'OMMMMMMK; ........................ :KMMMMMMO' ,
                                    : .dWMMMMMWk'........................,kWMMMMMWd..c
                                    x. ;KMMMMMMW0c.. ...................c0WMMMMMM0, .x
                                    Xc..lNMMXxd0NWKxl:;'..........';:lxKWMMMMMMMXc..cX
                                    MK;..lXWNOc'cKWWWWNx.........'xNWMMMMMMMMMMXc..:KM
                                    MMK:..:0WMNd.'lxkkd,.. .......cNMMMMMMMMWW0:..cKMM
                                    MMMXo..'oKWNk:............... :XMMMMMMMWKl...oXMMM
                                    MMMMNO:..'o0NNKOkkx, ........ :XMMMMMN0o'..:OWMMMM
                                    MMMMMMNkc...:dOXWWK; ........ :XWWXOo:...cONWMMMMM
                                    MMMMMMMMW0o;...,coc............cl:,...:d0WMMMMMMMM
                                    MMMMMMMMMMMWKxl;'........ .  ....':lxKWMMMMMMMMMMM
                                    MMMMMMMMMMMMMMMNKkoc,'......',cokKNMMMMMMMMMMMMMMM
                    ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
                                           gitJS v0.1.0 >< Author : Arie Brainware
`
// Import module

const colors = require(`colors`);
const readline = require(`readline`);
const fetch = require(`node-fetch`);
const send = require(`sendMessage`)

// Function definition
const consoleColor = (color = "", text = "") => {
    console.log(colors[color](text))
}
// ----------------------------------------------------------------------

const fetchFollowers = username => {
    const url = `https://api.github.com/users/${username}/followers`;
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            consoleColor(`blue`, `[v] This is ${username} followers list:`);
            data.forEach(user => {
                consoleColor(`green`, `[->] Username: ${user.login}, url: ${user.html_url}`)
            });
        });
};
// ----------------------------------------------------------------------

const fetchRepo = repoName => {
    const repoURL = `https://api.github.com/search/repositories?q=${repoName}`;
    fetch(repoURL)
        .then(response => {
            return response.json();
        })
        .then(data => {
            consoleColor(`blue`,`[v] Here the repository result: `)            

            const repoItem = data.items;
            repoItem.forEach(repo => {
                consoleColor(`green`, `
Repository: ${repo.full_name},
Clone [http]: ${repo.clone_url},
Clone [ssh]: ${repo.ssh_url}`)
            });
        });
};
// ----------------------------------------------------------------------

const consoleError = () => {
    consoleColor(`red`, `[x] Doesnt recognize the input, please choose A or B!`)
    consoleColor(`red`, `[x] PROGRAM TERMINATED!!`)
}
// ----------------------------------------------------------------------

const runGitHubFollowers = (input) => {
    consoleColor(`green`, `[+] Running fetch followers function`)

    input.question(consoleColor(`yellow`, `[?] Input username target:`), uname => {
        if (uname != "") fetchFollowers(uname);
        else consoleError()
        input.close()    
    });
}
// ----------------------------------------------------------------------

const runSearchRepository = (input) => {
    consoleColor(`green`, `[+] Running fetch repository name function`)

    input.question(consoleColor(`yellow`, `[?] Input repository name: `), repoName => {
        if (repoName != "") fetchRepo(repoName);
        else consoleError()
        input.close()
    });
}
// ----------------------------------------------------------------------

const run = () => {
    consoleColor(`green`,logo)


    // Get user input
    const input = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    input.question(
        consoleColor(`yellow`, `
[?] What do you want to do?
[A] See github followers
[B] Search repository ,(A/B/C): `),
        answer => {
            if (answer === "A") runGitHubFollowers(input)
            else if (answer === "B") runSearchRepository(input)
            else consoleError()       
        }
    );
}
// ----------------------------------------------------------------------

run()