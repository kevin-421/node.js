const fs = require('fs');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const writeFile = require('./writeFile');
const employeeCard = require('./src/employeeCard');

const { prompt } = require('inquirer');
const team = { Manager: [], Engineer: [], Intern: [] };

init();

function init() {
    prompt([
        {
            type: 'confirm',
            name: 'position',
            message: 'Would you like to fill a position?'
        }
    ]).then(({ position }) => {
        position 
            ? fillPosition() 
            : fs.writeFile('dist/index.html',employeeCard(team), ()=>console.log('Done!'));
    });
};

function fillPosition() {
    prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Which position would you like to fill?',
            choices: ['Manager', 'Engineer', 'Intern']
        }
    ]).then(({ role }) => {
        const questions = [];
        const items = ['name', 'id', 'email'];
        items.push(role == 'Manager' ? 'officeNumber' : role == 'Engineer' ? 'github' : 'school');
        items.forEach(item => {
            questions.push({ type: 'input', name: item, message: `What is your ${item}?` });
        });

        prompt(questions).then(ans => {
            let items = Object.values(ans);

            switch (role) {
                case 'Manager':
                    const manager = new Manager(...items);
                    team.Manager.push(manager);
                    break;
                case 'Engineer':
                    const engineer = new Engineer(...items);
                    team.Engineer.push(engineer);
                    break;
                case 'Intern':
                    const intern = new Intern(...items);
                    team.Intern.push(intern);
                    break;
            }
        }).then(init)
    })
};
