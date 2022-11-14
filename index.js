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
    .then(({name, id, email, officeNumber}) => {
        staffArray.manager.push(new Manager(name,id, email, officeNumber))
        console.log(staffArray);
        employeeQuestions();
    })
};

const employeeQuestions = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'selection',
            message: 'What type of employee would you like to add or you are done building the team?',
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
        .then(({name, id, email, selection}) => {
            if(selection === 'Engineer') {
                return inquirer.prompt([{
                    type: 'input',
                    name: 'github',
                    message: 'What is the Engineer\'s Github username?'
                },
                {
                    type: 'confirm',
                    name: 'addEmployee',
                    message: 'Do you want to add another employee?',
                    default: false
                }
            ])
            .then(({github, addEmployee}) => {
                staffArray.engineer.push(new Engineer(name, id, email, github))
                console.log(staffArray);

                if (addEmployee) {
                    return employeeQuestions();
                }
            })
            }

            else if(selection === 'Intern'){
                return inquirer.prompt([
                    {
                        type: 'input',
                        name: 'school',
                        message: 'Please enter Intern\'s school name'
                    },
                    {
                        type: 'confirm',
                        name: 'addEmployee',
                        message: 'Do you want to add another employee?',
                        default: false
                    }
            ])
            .then(({school, addEmployee}) => {
                staffArray.intern.push(new Intern(name, id, email, school))
                console.log(staffArray);

                if (addEmployee) {
                    return employeeQuestions();
                }
            })
            }
            else if(selection === 'I am done building my team')
            {
                //Return HTML
            }
        })
    ])
};

const init = async () => {
    console.log('Welcome To The Team Profile Generator!');
    try {
        managerQuestions();
    } catch (err) {
        console.log(err);
        console.log('There was an error with user input');
    }
};

init();

