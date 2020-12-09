// function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.titleInput}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contributors)
  * [Testing](#testing)
  * [Comments](#comments)
  
  
  ## Descritption
  ${response.descInput}
  
  ## Installation
  ${response.installInput}
  
  ## Usage
  ${response.usageInput}
  
  ## License
  This application is covered under the ${response.license} license.
  
  ## Contributors
  ${response.contributeInput}
  
  ## Testing
  ${response.testInput}
  
  ## Comments
  Created by [${response.usernameInput}](https://github.com/${response.usernameInput})
  
  [${response.repoInput}] (${response.urlInput})
  
  If you have any questions, please reach me at [${response.emailInput}](${response.emailInput})
  
  
  

`;
}



module.exports = generateMarkdown;
