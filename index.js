const inquirer = require('inquirer');

const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const writeToFile = require('./src/writeToFile.js');
const generateMarkup = require('./src/generateMarkup.js');

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
        
        }])
        .then(({selection}) => {
            if(selection === 'Engineer') {
                return inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Please enter Engineer\'s name'
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'Please enter Engineer\'s Employee ID'
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'Please enter Engineer\'s Email Address'
                },
                {
                    type: 'input',
                    name: 'github',
                    message: 'What is the Engineer\'s Github username?'
                },
                
            ])
            .then(({name, id, email, github}) => {
                    staffArray.engineer.push(new Engineer(name, id, email, github))
                
                    return employeeQuestions();
                })
            }

            else if(selection === 'Intern'){
                return inquirer.prompt([
                    {
                        type: 'input',
                        name: 'name',
                        message: 'Please enter Intern\'s Name'
                    },
                    {
                        type: 'input',
                        name: 'id',
                        message: 'Please enter Intern\'s Employee ID'
                    },
                    {
                        type: 'input',
                        name: 'email',
                        message: 'Please enter Intern\'s Email School'
                    },
                    {
                        type: 'input',
                        name: 'school',
                        message: 'Please enter Intern\'s school name'
                    },
            ])
            .then(({name, id, email, school}) => {
                staffArray.intern.push(new Intern(name, id, email, school))
                
                    return employeeQuestions();
                })
            }
            else 
            {
                writeData();
            }
        })
};

    const writeData = () => {
        const data = generateMarkup(staffArray);
        writeToFile('./dist/index.html', data);
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

