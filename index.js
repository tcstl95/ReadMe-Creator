// Using inquirer for index.js file//
const inquirer = require('inquirer');
const fs= require('fs');
// Creating function to ask user certain prompts//
const askUser =() =>{
return inquirer.prompt([

    {
        type: 'input',
        name: 'Title',
        message: 'What is the title of your ReadMe?',

    },
    {
        type: 'input',
        name: 'Description',
        message: 'How would you describe your project?',
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'How would you install your project?',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'How can someone use your project?',
    },
    {
        type: 'checkbox',
        message: 'Choose the following licenses that apply to your project',
        name: 'License',
        choices: ['MIT', 'Apache','Mozilla','Eclipse'],
    },
    {
        type: 'input',
        name: 'Github',
        message: 'What is your Github username?',
    },
    {
        type: 'input',
        name: 'Email',
        message: 'What is your email address?',
    },
    ])
    
}

// Creating function to generate user input onto ReadMe File//
const generateREADME=({Title, Description, Installation,Usage,License,Github,Email})=>
     `<DOCTYPE, README.md>
      Title:${Title}.
      Description: ${Description}.
      Installation: ${Installation}.
      Usage: ${Usage}.
      License: ${License}.
      Github: ${Github}.
      Email: ${Email}

     `


// function for initalization//
const init = () => {
askUser()
.then((answers) => {
    const readMeContent = generateREADME(answers);
    fs.writeFile('README.md', readMeContent, (err)=> 
    err ? console.log(err): console.log('ReadMe has been created! That was a baller move!')
    );
});
}

// Function call to initialize app
init();
