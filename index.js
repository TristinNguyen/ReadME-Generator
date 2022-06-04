// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [{
        type: 'input',
        name: 'projectname',
        message: 'What is your project name?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'what is your description?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install the project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you run the program?',
    },
    // {
    //     type: 'list',
    //     name: 'license',
    //     message: 'What license will you use for your project?',

    // },
    // {
    //     type: 'input',
    //     name: 'contribution',
    //     message: ''
    // },
    // {
    //     name: 'test'
    // }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFileSync(fileName, data) 
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            const readMeExample = `# ${answers.projectname}
            Create your own ReadMe, fast and easy
            ${answers.installation}
            `
            console.log(readMeExample)
            writeToFile("README.md", readMeExample);    
        })
    }

// Function call to initialize app
init();
