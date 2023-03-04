class Employee {
    constructor(name, ID, email){
    this.name = name;
    this.ID = ID;
    this.email = email
    }

    getName() {
      return this.name
    }
    getId() {
      return this.ID
    }
    
    getEmail() {
      return this.email
    }c

    getRole() {
      return 'Employee';
    } 
  }

  module.exports = Employee