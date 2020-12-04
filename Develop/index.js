// array of questions for user
const fs = require ("fs");
const inquirer = require ("inquirer");

inquirer.prompt([
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
    message: "Where can people find support?",
    name: "supportInput",
   },
   {
    type: "input",
    message: "State if you are open to contributions and what your requirements are for accepting them",
    name: "contributeInput",
   },
])
.then((response) => {
    console.log(response);
});



// // function to write README file
fs.writeFile("README.md", response, (err) => {
    if (err) throw err;
    console.log("Complete");
})

// // mark down

// const readme = `
// # ${response.titleInput}

// ## Table of Contents
// * [Description](#description)
// * [Installation](#installation)
// * [Usage](#usage)
// * [License](#license)
// * [Contributors](#contributors)
// * [Testing](#testing)
// * [Questions](#questions)


// ## Descritption
// ${response.descInput}

// ## Installation
// ${response.installInput}

// ## Usage
// ${response.usageInput}

// ## License
// This application is covered under the ${response.license} license.

// ## Contributors
// ${response.contributeInput}

// ## Testing
// ${response.testInput}

// ## Questions
// Created by [${response.usernameInput}](https://github.com/${response.usernameInput})

// [${response.repoInput}] (${response.urlInput})

// If you have any questions, please reach me at [${response.emailInput}](${response.emailInput})


// `;
