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
