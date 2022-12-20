const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
       {
            type: 'input',
            name: 'github',
            message: 'What is your Github Username?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Everyone has a username, whats yours?');
                    return false;
                }
            }
       },
        {
            type: 'input',
            name: 'Title of Project',
            message: 'What is the name of your New Project?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Every Project has a name silly goose!');
                    return false;
                }
            }
        },   
        {
            type: 'input',
            name: 'Description',
            message: 'Write a Quick Description of your Project',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Come on... Nothing to tell me about it?')
                }
            }
        },
        {
            type: 'input',
            
        }




    ])

.then(answers => {
    return generatePage(answers);
})