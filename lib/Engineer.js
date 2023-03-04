const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, ID, email, GitHubUsername) {
    super(name, ID, email);
    this.GitHubUsername = GitHubUsername;
    }

    getGithub() {
      return this.GitHubUsername;
    }

    getRole() {
      return 'Engineer';
    }
  }

  module.exports = Engineer