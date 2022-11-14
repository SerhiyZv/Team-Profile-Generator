const inquirer = require('inquirer');
const fs = require("fs");
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const staffArray = {
    'manager': [],
    'engineer': [],
    'intern': []
};

const managerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter The Team Manager\'s Name'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter The Team Manager\'s Employee ID'

        },
        {
            
            type: 'input',
            name: 'email',
            message: 'Please enter The Team Manager\'s Email Address'
        },
        {
            
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter The Team Manager\'s Office Number'
        }
    ])
    .then(({name, id, email, officeName}) => {

    })
};

const employeeQuestions = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Would you like to enter another employee?',
            choices: ['Engineer', 'Intern', 'I am done building my team']
        },
        {
            type: 'input',
            name: 'name',
            message: 'Please enter The Employee\'s Name'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter The Employee\'s Employee ID'
        },
        {
            input: 'input',
            name: 'email',
            message: 'Please enter The Employee\'s Email Address'
        }
        .then(({name, id, email, role}) => {
            if(role === 'Engineer') {
                return inquirer.prompt([{
                    type: 'input',
                    name: 'github',
                    message: 'What is the Engineer\'s Github username?'
                }])
            }

            if(role === 'Intern'){
                return inquirer.prompt([{
                    type: 'input',
                    name: 'school',
                    message: 'Please enter Intern\'s school name'
                }])
            }
        })
    ])
};

managerQuestions();
employeeQuestions();
