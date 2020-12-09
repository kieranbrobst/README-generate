// array of questions for user
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require ("fs");
const inquirer = require ("inquirer");

const questions = [
    {
        type: "input",
        message: "What is your github username?",
        name: "usernameInput",
    },
    {
        type: "input",
        message: "What is the repo name?",
        name: "repoInput",
    },
    {
        type: "input",
        message: "What is the URL of the depository?",
        name: "urlInput",
    },
    {
        type: "input",
        message: "What is your email contact?",
        name: "emailInput",
    },
    {
    type: "input",
    message: "What is the title of this project?",
    name: "titleInput",
   },
   {
    type: "input",
    message: "What is the description of the project?",
    name: "descInput",
   },
   {
    type: "input",
    message: "What are the installation steps?",
    name: "installInput",
   },
   {
    type: "input",
    message: "What is the expected output?",
    name: "usageInput",
   },
   {
    type: "list",
    message: "What is the license for this application?",
    name: "license",
    choices: ["MIT", "GPLv2", "Apache", "Unlicensed"]
   },
   {
    type: "input",
    message: "How to test the application?",
    name: "testInput",
   },
   {
    type: "input",
    message: "State if you are open to contributions and what your requirements are for accepting them",
    name: "contributeInput",
   },
];


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log("ReadMe generated!")
    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        console.log(response);
        writeToFile(`${response.titleInput}_README.md`, generateMarkdown(response));
    })
    .catch((error) => {
        if (error) throw error;
    });
}

// function call to initialize program
init();