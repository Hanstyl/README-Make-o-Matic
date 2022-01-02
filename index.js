const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const { type } = require('os');


// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        name: 'github',
        message: 'Please enter your Github user name.',
        validate: githubInput => {
            if (githubInput) {
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
        choices: '',
    },
];




// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }






// Function call to initialize app
init();
