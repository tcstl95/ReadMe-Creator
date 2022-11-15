//Using  inquirer in order for user to be given prompts via node//
const inquirer= require('inquirer');
//Using fs as well//
const fs=require('fs');
// Creating function in order for license badge to display on ReadMe//
const renderLicenseBadge=()=>{
    return inquirer.prompt([
      {
        type:'checkbox',
        message: 'Choose the following license badge',
        name: 'badges',
        choices: ['MIT:[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
        'Apache:[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
        'Mozilla:[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0',
        'Eclipse: [![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'],
        
      }
    ])
    
};
//Creating a section on the ReadMe regarding badge selection
const generateBadges=({badges})=>
`
#Badge Selected:${badges}.


`

const badgeInit=()=>{
  renderLicenseBadge()
.then((answers) => {
    const readMeContent = generateBadges(answers);
    fs.writeFile('README.md', readMeContent, (err)=> 
    err ? console.log(err): console.log('ReadMe has been created! That was a baller move!')
    );
});
}
badgeInit();
   


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
