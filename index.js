// Variables needed to run application
const {writeFile} = require('./utils/writePage.js');
const inquirer = require('inquirer');
const {generateMarkdown, renderLicenseBadge, renderLicenseLink} = require('./utils/generateMarkdown.js');

// Question array for user input ReadMe
const reqQuestions = (promptResponse) => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your full name? (Required)',
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
            name: 'email',
            message: 'Please provide an email so others can contact you. (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please insert a valid email!');
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
            name: 'usage',
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
            type: 'confirm',
            name: 'installConfirm',
            message: 'Does your project require installation instructions?'
        },
        {
            name: 'input',
            name: 'installation',
            message: 'Provide the steps for users on how to install your application.',
            when: ({ installConfirm }) => {
                if (installConfirm) {
                    return true;
                } else {
                    return false;
                }
            },
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Please insert a valid installation description');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please choose a license for this project. (Required)',
            choices: ['MIT', 'Apache License 2.0', 'ISC',  'BSD 3', 'BSD 2', 'Creative Commons Zero v1.0 Universal', 'GNU GPLv3', 'Eclipse Public License', 'Mozilla Public License 2.0', 'None']
        },
        {
            type: 'confirm',
            name: 'testConfirm',
            message: 'Will this application need testing instructions?',
            default: true
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please input testing instructions for your application',
            when: ({ testConfirm }) => {
                if (testConfirm) {
                    return true;
                } else {
                    return false;
                }
            }
            
        },
        {
            type: 'confirm',
            name: 'contributors',
            message: 'Did you have other contributors on this project? (Required)',
            default: true,
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Please list another collaborator on this project.',
            when: ({ contributors }) => {
                if (contributors) {
                    return true;
                } else {
                    return false;
                }
            }
            
        },
        {
            type: 'input',
            name: 'creditsLink',
            message: 'Please share contributors Github link',
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
            message: 'Would you like to enter another contributor?',
            when: ({ creditsLink }) => {
                if (creditsLink) {
                    return true;
                } else {
                    return false;
                }
            },
        },
    ])
    // Takes data and sends it to generateMarkdown
    .then (data => {
        return generateMarkdown(data);
    })
    // Takes data from Markdown page and writes it to a Markdown file
    .then(Markdown => {
        return writeFile(Markdown);
    })
};

// Arrow function to start application
const init = () => {
    reqQuestions(renderLicenseBadge)
}

// Start application
init();