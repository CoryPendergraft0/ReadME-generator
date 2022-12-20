const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./utils/generateMarkdown.js')


const userInfo = () => {
    return inquirer.prompt([
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
            name: 'email',
            message: 'What is your email?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Everyone has an email, whats yours?');
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
                name: 'install',
                message: 'What is required to run this project?',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please hurry, i cannot read your mind')
                    }
                }
            },
        ])
    };

const writeFile = data => {
    fs.writeFile('README.md', data, err => { 
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Look at you, who would have thought you could do it!")
        }
    })
}; 
userInfo()
.then(answers => {
    return generatePage(answers);
})
.then(data => {
    return writeFile(data);
})