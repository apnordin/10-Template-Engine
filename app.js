const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let employees = []

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
class App {


    runApp() {
        this.managerInfo();
    }

    managerInfo() {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "What is your manager's name?",
                    name: 'name'
                },
                {
                    type: "input",
                    message: "What is your manager's ID?",
                    name: "id",
                },
                {
                    type: "input",
                    message: "What is your manager's email?",
                    name: "email"
                },
                {
                    type: "input",
                    message: "What is your manager's office number?",
                    name: "officenumber"
                },
                {
                    type: "list",
                    message: "Which type of team member would you like to add?",
                    choices: ['Engineer', 'Intern', 'No additional team members'],
                    name: 'addmemberprompt'
                }
            ])
            .then(
                ({ name, id, email, officenumber, addmemberprompt }) => {
                    const manager = new Manager(name, id, email, officenumber);

                    employees.push(manager)
                    console.log(employees)

                    if (addmemberprompt === 'Engineer') {
                        console.log('You chose to add an engineer!');
                        this.engineerInfo();
                    } else if (addmemberprompt === 'Intern') {
                        console.log('You chose to add an intern!');
                        this.internInfo();
                    }
                    else { render(employees); }
                }
            )
    }

    engineerInfo() {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "What is your engineer's name?",
                    name: 'name'
                },
                {
                    type: "input",
                    message: "What is your engineer's ID?",
                    name: "id",
                },
                {
                    type: "input",
                    message: "What is your engineer's email?",
                    name: "email"
                },
                {
                    type: "input",
                    message: "What is your engineer's GitHub ID?",
                    name: "githubid"
                },
                {
                    type: "list",
                    message: "Which type of team member would you like to add?",
                    choices: ['Engineer', 'Intern', 'No additional team members'],
                    name: 'addmemberprompt'
                }
            ])
            .then(
                ({ name, id, email, githubid, addmemberprompt }) => {
                    const engineer = new Engineer(name, id, email, githubid);

                    employees.push(engineer)
                    console.log(employees)

                    if (addmemberprompt === 'Engineer') {
                        console.log('You chose to add an engineer!');
                        this.engineerInfo();
                    } else if (addmemberprompt === 'Intern') {
                        console.log('You chose to add an intern!');
                        this.internInfo();
                    }
                    else { render(employees); }
                }
            )
    }

    internInfo() {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "What is your intern's name?",
                    name: 'name'
                },
                {
                    type: "input",
                    message: "What is your intern's ID?",
                    name: "id",
                },
                {
                    type: "input",
                    message: "What is your intern's email?",
                    name: "email"
                },
                {
                    type: "input",
                    message: "What is your intern's school?",
                    name: "school"
                },
                {
                    type: "list",
                    message: "Which type of team member would you like to add?",
                    choices: ['Engineer', 'Intern', 'No additional team members'],
                    name: 'addmemberprompt'
                }
            ])
            .then(
                ({ name, id, email, school, addmemberprompt }) => {
                    const intern = new Intern(name, id, email, school);

                    employees.push(intern)
                    console.log(employees)

                    if (addmemberprompt === 'Engineer') {
                        console.log('You chose to add an engineer!');
                        this.engineerInfo();
                    } else if (addmemberprompt === 'Intern') {
                        console.log('You chose to add an intern!');
                        this.internInfo();
                    }
                    else { render(employees); }
                }
            )
    }
}


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will generate and return a block of HTML including templated divs for each employee!


// After you have your html, you're now ready to create an HTML file using the HTML returned from the `render` function. Now write it to a file named `team.html` in the `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it does not.




// HINT: make sure to build out your classes first! Remember that your Manager, Engineer, and Intern classes should all extend from a class named Employee; see the directions for further information. Be sure to test out each class and verify it generates an object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

const app = new App();

app.runApp();