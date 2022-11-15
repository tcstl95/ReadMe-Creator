// Declaring function in order to display License badge onto a ReadMe"
const inquirer= require('inquirer');
const fs=require('fs');
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
const generateBadges=({badges})=>
`
Badge Selected:${badges}.


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
   




module.exports = generateMarkdown;
