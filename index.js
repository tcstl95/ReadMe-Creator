// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs= require('fs');

// TODO: Create an array of questions for user input


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

// TODO: Create a function to write README file
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


// TODO: Create a function to initialize app
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
