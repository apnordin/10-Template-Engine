// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officenumber) {
        super(name, id, email);
        this.officenumber = officenumber;
    }
}

// const nameInput = '123';
// const idInput = '1234';
// const emailInput = '12345';
// const officeInput = '123456'

// const manager = new Manager(nameInput, idInput, emailInput, officeInput);

// console.log(manager);

module.exports = Manager;