const inquirer = require("inquirer");

// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

}

module.exports = Employee;

const employee = new Employee('Alex', 1, 'apnordin@gmail.com');