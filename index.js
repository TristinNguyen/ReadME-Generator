// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('.//utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [{
        type: 'input',
        name: 'projectname',
        message: 'What is your project name?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project',
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
    {
        type: 'list',
        name: 'license',
        message: 'What license will you use for your project?',
        choices: ["Apache", "MIT", "ISC"],

    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are you planning to use this program for?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'How are you testing this program?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'contact',
        message: 'What is your email address?',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // fs.writeFileSync(fileName, data) 
    //Note to self: line 44-- look up 
    fs.writeFile(fileName, generateMarkdown(data), err =>
        err ? console.log(err) : console.log('Success!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            console.log(answers);
            writeToFile('READMESample.md', answers)
            // const readMeExample = `# ${answers.projectname}
            // Create your own ReadMe, fast and easy
            // ${answers.installation}
            // `
            // console.log(readMeExample)
            // writeToFile("READMESample.md", readMeExample);
            //Note to self: line 56-62 is another way write the readme without using generateMarkdown    
        })
}

// Function call to initialize app
init();