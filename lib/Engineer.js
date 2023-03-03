const Employee = require('./Employee');

class Engeneer extends Employee {
    constructor(name, ID, email, GitHubUsername) {
    super(name, ID, email);
    this.GitHubUsername = GitHubUsername;
    }

    getGitHub() {}

    getRole() {}
  }

  module.exports = Engeneer