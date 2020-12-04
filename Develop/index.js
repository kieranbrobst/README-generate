// array of questions for user
const fs = require ("fs");
const inquirer = require ("inquirer");

inquirer.prompt([
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
    message: "What is the expected output?",
    name: "usageInput",
   },
   {
    type: "input",
    message: "Do you have ideas for releases in the future?",
    name: "roadInput",
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
.then((res) => {
    console.log(res);
});


const questions = [

];

// function to write README file
// fs.writeFile("README.md", readme, (err) => {
//     if (err) throw err;
//     console.log("Complete");
// })

function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
