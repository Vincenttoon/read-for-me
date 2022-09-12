// TODO: Include packages needed for this application
const {writeFile} = require('./utils/writePage.js');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const reqQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please insert your name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your github user name? (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please insert your Github user name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your Project? (Required)',
            validate: projectInput => {
                if (projectInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a short description of what your project is, why you did this project, and how it works. (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please insert a description.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'gitlink',
            message: "Please insert a link to this Github Repo. (Required)",
            validate: gitLinkInput => {
                if (gitLinkInput) {
                    return true;
                } else {
                    console.log('Please insert this Github Repo');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'instructions',
            message: 'Please provide step-by-step instructions on how to use your application. (Required)',
            validate: instInput => {
                if (instInput) {
                    return true;
                } else {
                    console.log('Please insert valid instructions for this project.');
                    return false;
                }
            }
        },
        {
            name: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use.',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please insert a valid usage description');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please choose a license for this project. (Required)',
            choices: ['MIT', 'Apache 2.0', 'Creative Commons 1.0', 'GPLv3', 'WTFPL', 'None']
        },
        {
            type: 'confirm',
            name: 'collaborators',
            message: 'Did you have other collaborators on this project? (Required)',
            default: false,
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Please list another collaborator on this project.',
            when: ({ collaborators }) => {
                if (collaborators) {
                    return true;
                } else {
                    return false;
                }
            }
            
        },
        {
            type: 'input',
            name: 'creditsLink',
            message: 'Please share collaborators Github link',
            when: ({ credits }) => {
                if (credits) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'creditConfirm',
            message: 'Would you like to enter another collaborator?',
            when: ({ creditsLink }) => {
                if (creditsLink) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ])
};

// TODO: Create a function to initialize app
const init = () => {
    reqQuestions()
    .then()
}

// Function call to initialize app
init();