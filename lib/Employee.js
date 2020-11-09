const inquirer = require("inquirer");

// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

}

const employee = new Employee('Alex', 1, 'apnordin@gmail.com');

console.log(employee);