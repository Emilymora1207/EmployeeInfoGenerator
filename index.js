const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engeneer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


const managerQuestions = [
  {
    type: 'input',
    message: `What is the Manager's name?`,
    name: 'name',
  },
  {
    type: 'input',
    message: `What is the manager's ID`,
    name: 'ID',
  },
  {
    type: 'input',
    message: `What is the manager's email?`,
    name: 'email',
  },
  {
    type: 'input',
    message: `What is the manager's office number?`,
    name: 'officeNumber',
  },
]

const engineerQuestions = [
  {
    type: 'input',
    message: `What is the Engineer's name?`,
    name: 'name',
  },
  {
    type: 'input',
    message: `What is the Engineer's ID`,
    name: 'ID',
  },
  {
    type: 'input',
    message: `What is the Engineer's email?`,
    name: 'email',
  },
  {
    type: 'input',
    message: `What isthe Engineer's GitHub Username?`,
    name: 'GitHubUserName',
  },
]

const InternQuestions = [
  {
    type: 'input',
    message: `What is the Intern's name?`,
    name: 'name',
  },
  {
    type: 'input',
    message: `What is the Intern's ID`,
    name: 'ID',
  },
  {
    type: 'input',
    message: `What is the Intern's email?`,
    name: 'email',
  },
  {
    type: 'input',
    message: `What is the Intern's School?`,
    name: 'School',
  },
]

const employeeTypeQuestion = [
  {
    type: 'list',
    message: 'What type of Employee do you want',
    name: 'employeeType',
    choices: ['Engineer', 'Intern', 'End of Employee list']
  },
]

function managerResponse(response){
const boss = new Manager(response.name, response.ID, response.email, response.officeNumber)
const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href = "style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;800;900&display=swap" rel="stylesheet">
</head>
<body>
  <header><h1>My Team</h1></header>
  <main>
    <section>
      <div>
        <h1>${response.name}</h1>
        <h2><i class="fa-solid fa-mug-hot"></i> Manager</h2>
      </div>
      <ul>
        <li>ID: ${response.ID}</li>
        <li>Email: <a href=mailto:“${response.email}”>${response.email}</a></li>
        <li>Office Number: ${response.officeNumber}</li>

      </ul>
    </section>
      ` 
      fs.writeFile('dist/index.html', html , (err) =>
      err ? console.error(err) : console.log('Commit logged!'))
      console.log(response);
}

function engineerResponse(response) {
  const boss = new Engeneer(response.name, response.ID, response.email, response.officeNumber)
    const engineerHtml =     `<section>
    <div>
      <h1>${response.name}</h1>
      <h2><i class="fa-solid fa-laptop-code"></i> Engineer</h2>
    </div>
    <ul>
      <li>ID: ${response.ID}</li>
      <li>Email: <a href=mailto:“${response.email}”>${response.email}</a></li>
      <li>GitHub Username: <a href = https://github.com/${response.GitHubUserName}>${response.GitHubUserName}</a></li>
    </ul>
  </section>`
  fs.appendFile('dist/index.html', engineerHtml , (err) =>
  err ? console.error(err) : console.log('Commit logged!'))
  console.log(response);
}

function internResponse(response){
  const boss = new Intern(response.name, response.ID, response.email, response.officeNumber)
  const internHtml =     `<section>
  <div>
    <h1>${response.name}</h1>
    <h2><i class="fa-solid fa-user-graduate"></i> Intern</h2>
  </div>
  <ul>
    <li>ID: ${response.ID}</li>
    <li>Email: <a href=mailto:“${response.email}”>${response.email}</a></li>
    <li>School: ${response.School}</li>
  </ul>
</section>`
fs.appendFile('dist/index.html', internHtml , (err) =>
err ? console.error(err) : console.log('Commit logged!'))
console.log(response);
}

function employeeTypePrompt() {
  inquirer
  .prompt(employeeTypeQuestion)
  .then((response) => {
    if(response.employeeType === 'Engineer') {
      inquirer
      .prompt(engineerQuestions)
      .then((response) => {
        //need to build this function
        engineerResponse(response);
        employeeTypePrompt();
      })
    } else if (response.employeeType === `Intern`){
      inquirer
      .prompt(InternQuestions)
      .then((response) => {
        //need to build this function
        internResponse(response);
        employeeTypePrompt();
      })
    } else {
      const endHtml = `</main>
      <script src="https://kit.fontawesome.com/b992a995bb.js" crossorigin="anonymous"></script>
      </body>
      </html>`
      fs.appendFile('dist/index.html', endHtml , (err) =>
      err ? console.error(err) : console.log('Commit logged!'))
      console.log(response);
    }


  })
}

inquirer
  .prompt(managerQuestions)
  .then((response) => {
    managerResponse(response);
    employeeTypePrompt()
}
  );