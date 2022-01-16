const inquirer = require('inquirer');

const promptUser = () => {
return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github Username'
    },
    {
        type: 'input',
        name: 'about',
        message: 'provide some information about yourself'
    }
]);
};


const promptProject = portfolioData => {
    console.log(`
    =================
    Add a new Project
    =================`);
    // If there's no 'projects 'array property, create one
    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }

    return inquirer.prompt([
        {
            type:'input',
            name:'name',
            message:'What is the name for your project?',
        },
        {
            type:'input',
            name:'description',
            message:'Provide a descript of the project (Required)'
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['Javascript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
        }
    ])
    .then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject) {
          return promptProject(portfolioData);
        } else {
          return portfolioData;
        }
      });
};

promptUser()
.then(promptProject)
.then(portfolioData => {
    console.log(portfolioData);
});


/* const fs = require('fs');

const generatePage = require('./src/page-template.js');

const pageHTML = generatePage(name , github);



fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw err;

    console.log('Porfolio complete! Check out index.html to see the output!')
}); */