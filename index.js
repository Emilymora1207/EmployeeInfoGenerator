//requiring the other files
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engeneer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//array of questions for the manager
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

//array
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

//array of questions for the Intern
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

//the user chooses to add a, engineer, intern, or to stop adding employees. 
const employeeTypeQuestion = [
  {
    type: 'list',
    message: 'What type of Employee do you want',
    name: 'employeeType',
    choices: ['Engineer', 'Intern', 'End of Employee list']
  },
]

//starter html code with added Manager info
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
        <h1>${boss.getName()}</h1>
        <h2><i class="fa-solid fa-mug-hot"></i> ${boss.getRole()}</h2>
      </div>
      <ul>
        <li>ID: ${boss.getId()}</li>
        <li>Email: <a href=mailto:“${boss.getEmail()}”>${boss.getEmail()}</a></li>
        <li>Office Number: ${boss.getOfficeNumber()}</li>

      </ul>
    </section>
      ` 
      fs.writeFile('dist/index.html', html , (err) =>
      err ? console.error(err) : console.log('Commit logged!'))
      console.log(response);
}

//adding engineer info to the html code 
function engineerResponse(response) {
  const engin = new Engeneer(response.name, response.ID, response.email, response.officeNumber)
    const engineerHtml =     `<section>
    <div>
      <h1>${engin.getName()}</h1>
      <h2><i class="fa-solid fa-laptop-code"></i> ${engin.getRole()}</h2>
    </div>
    <ul>
      <li>ID: ${engin.getId()}</li>
      <li>Email: <a href=mailto:“${engin.getEmail()}”>${engin.getEmail()}</a></li>
      <li>GitHub Username: <a href = https://github.com/${engin.getGithub()}>${engin.getGithub()}</a></li>
    </ul>
  </section>`
  fs.appendFile('dist/index.html', engineerHtml , (err) =>
  err ? console.error(err) : console.log('Commit logged!'))
  console.log(response);
}

//adding intern info to the html code 
function internResponse(response){
  const intern = new Intern(response.name, response.ID, response.email, response.officeNumber)
  const internHtml =     `<section>
  <div>
    <h1>${intern.getName()}</h1>
    <h2><i class="fa-solid fa-user-graduate"></i> ${intern.getRole()}</h2>
  </div>
  <ul>
    <li>ID: ${intern.getId()}</li>
    <li>Email: <a href=mailto:“${intern.getEmail()}”>${intern.getEmail()}</a></li>
    <li>School: ${intern.getSchool()}</li>
  </ul>
</section>`
fs.appendFile('dist/index.html', internHtml , (err) =>
err ? console.error(err) : console.log('Commit logged!'))
console.log(response);
}


function employeeTypePrompt() {
  inquirer
//prompts to choose to add an engineer. intern, or to stop adding employees 
  .prompt(employeeTypeQuestion)
  .then((response) => {
    //if they choose "Engineer" the engineer questions will  run and then add the info to the html code
    if(response.employeeType === 'Engineer') {
      inquirer
      .prompt(engineerQuestions)
      .then((response) => {
        //need to build this function
        engineerResponse(response);
        employeeTypePrompt();
      })
         //if they choose "Intern" the Intern questions will  run and then add the info to the html code
    } else if (response.employeeType === `Intern`){
      inquirer
      .prompt(InternQuestions)
      .then((response) => {
        //need to build this function
        internResponse(response);
        employeeTypePrompt();
      })
      //If they choose to stop adding employees then this code will be added to the end of the html document 
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

//starts the first prompt of the manager questions
inquirer
  .prompt(managerQuestions)
  .then((response) => {
    managerResponse(response);
    employeeTypePrompt()
}
  );