const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');




// TODO: Create a function to start the app
function start() {
    console.log(`
███████████████████████████
███████▀▀▀░░░░░░░▀▀▀███████
████▀░░░░░░░░░░░░░░░░░▀████
███│░░░░░░░░░░░░░░░░░░░│███
██▌│░░░░░░░░░░░░░░░░░░░│▐██
██░└┐░░░░░░░░░░░░░░░░░┌┘░██
██░░└┐░░░░░░░░░░░░░░░┌┘░░██
██░░┌┘▄▄▄▄▄░░░░░▄▄▄▄▄└┐░░██
██▌░│██████▌░░░▐██████│░▐██
███░│▐███▀▀░░▄░░▀▀███▌│░███
██▀─┘░░░░░░░▐█▌░░░░░░░└─▀██
██▄░░░▄▄▄▓░░▀█▀░░▓▄▄▄░░░▄██
████▄─┘██▌░░░░░░░▐██└─▄████
█████░░▐█─┬┬┬┬┬┬┬─█▌░░█████
████▌░░░▀┬┼┼┼┼┼┼┼┬▀░░░▐████
█████▄░░░└┴┴┴┴┴┴┴┘░░░▄█████
███████▄░░░░░░░░░░░▄███████
██████████▄▄▄▄▄▄▄██████████
███████████████████████████
   █▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
   █░░╦─╦╔╗╦─╔╗╔╗╔╦╗╔╗░░█
   █░░║║║╠─║─║─║║║║║╠─░░█
   █░░╚╩╝╚╝╚╝╚╝╚╝╩─╩╚╝░░█
   ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
    `);

    return inquirer.prompt([
        {
            type: "confirm",
            name: "start",
            message: "ReadMe file creator booting up... Would you like to proceed?"
        }
    ])
        .then((answer => {
            if (answer.start === true) {
                console.log("Lets-a-go!");
            } else {
                console.log("Game Over! Bye");
                process.exit();
            }
        }))
}



// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'githubUser',
            message: 'Please enter your Github user name.',
            validate: githubUserInput => {
                if (githubUserInput) {
                    return true;
                } else {
                    console.log('You need to enter in you github user name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address.',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('You need to enter in a email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'project',
            message: 'Please enter the name of your project.',
            validate: projectInput => {
                if (projectInput) {
                    return true;
                } else {
                    console.log('Your project needs a name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please describe your project.',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Describe your project!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Select a license',
            choices: ['Apache License 2.0', 'GNU GPLv3', 'MIT', 'Unlicense']
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Add installation instructions for the project'
        },
        {
            type: 'input',
            name: 'githubRepoUrl',
            message: 'Link to the Repo',
            validate: githubRepoUrl => {
                if (githubRepoUrl) {
                    return true;
                } else {
                    console.log('Please enter a repo link!');
                    return false;
                }
            }
        },
    ])
        .then(userData => {
            return userData;
        })
}




// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const inputData = generateMarkdown(data)
    fs.writeFile(fileName, data, (err) => {
        if (err) { console.log(err) }
    })
}





// Function call to initialize app

init();
