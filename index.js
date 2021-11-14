// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Provide the project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Provide the project description?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Provide the project installation instructions?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide the project usage information?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Provide the project contribution guidelines?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Provide the project test instructions?',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'Choose the project license?',
        name: 'license',
        choices: [ "MITLicense", "GNUGPLv3", "ApacheLicense2.0", "MozillaPublicLicense2.0", "No License"],
    },
    {
        type: 'input',
        message: 'Enter your gitHub username?',
        name: 'gitHubUserName',// Goes in Questions section
    },
    {
        type: 'input',
        message: 'Enter your email address?',
        name: 'email',//Goes in Questions section
    },

]

inquirer
    .prompt(questions)
    .then((answers) => {
        const markdown = generateMarkdown(answers);
        fs.writeFile('README.md', markdown, (err) =>{
            if (err)
            console.log(err);
            else {
                console.log("Written successfully")
            }
        })
    })
