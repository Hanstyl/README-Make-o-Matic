const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// these questions need to be added to and edited in order to populate the markdown js properly
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        { // TITLE
            type: 'input',
            name: 'title',
            message: 'Title of your project.',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Your project needs a name!');
                    return false;
                }
            }
        },
        { // DESCRIPTION
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
        { // INSTALLATION
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project?'
        },
        { // USAGE
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use. Include screenshots as needed',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Explain how to use it!');
                    return false;
                }
            }
        },
        { // LICENSE
            type: "list",
            name: "license",
            message: "Choose a License for this project.",
            choices: [
                "MIT",
                "Apache",
                "GNU GPL v3",
            ]
        },
        { // CONTRIBUTING
            type: "input",
            name: "contributing",
            message: "List and link to all credits, collaborators, tutorials, etc."
        },
        { // TEST
            type: 'input',
            name: 'tests',
            message: 'What command should be run to run tests?',
            default: 'node index.js'
        },
        { // GITHUB USERNAME
            type: "input",
            name: "github",
            message: "What is your GitHub username? (Required)",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter a GitHub username!");
                    return false;
                }
            }
        },
        { // Name
            type: "input",
            name: "name",
            message: "Enter your name. (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        { // EMAIL ADDRESS
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
        { // GITHUB REPOSITORY
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


// TODO: Create a function to start the app
function init() {
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
                console.log("Very Well!");
            } else {
                console.log("Game Over!");
                process.exit();
            }
        }))
}



// Function call to initialize app

init()
    .then(questions)
    .then(userData => {
        const markdown = generateMarkdown(userData);
        fs.writeFile('./dist/README.md', markdown, err => {
            if (err) throw err;
            console.log(`File Created in /dist directory`);
        });
    });
