//
const inquirer = require('inquirer') ;
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const path = require('path');
const util = require('util');

      //QUESTIONS//
const questions = [{
        type: 'input',
        message: 'what is the title of yout project?',
        name: 'title'
}, {
        type : 'input',     
        message: 'what is the Project about? GIVE A detailed Description of your project.',
        name: 'Description'
}, {
        type: "confirm",
        name: "linkProject",
        message: "Do you want to add a link for the project",
        default: true,
},  { 
        type: "input",
        name: "link",
        message: "Enter the link",
        when: ({ linkProject }) => linkProject
},  {          
        type: 'input',
        message: 'how to install dependencies?',
        name: 'installation'
},  {
        type: 'input',
         message: 'how to use the repo and app?',
        name: 'usage'
},  {
        type: "input",
        name: "screenshot", 
        message: "To add a screenshot, create a folder assets/images and add the screenshot inside. Enter your FILENAME and it will be added to your new README."
}, {
        type: "input", 
        name: "contribution", 
        message: "Enter your app's contribution guide."  

},  {       
        type: "input", 
        name: "test", 
        message: "Enter your test instructions." 

}, {
        type: "input", 
        name: "credits",
        message: "List your collaborators id you have them."
},  {
        type: "list",
        name: "license",
        message: "What type of license you used?",
        choices: ["Mozilla Public License 2.0", "GNU GPL License", "MIT License", "Apache License 2.0"]
},  {
        type: "input",
        name: "github",
        message: "Enter your Github Name:"
},  {
        type: "input",
        name: "email",
        message: "Enter your email:"



}];




    // Function to write README file using the user input
    function writeToFile(fileName, data) {
        return fs.writeFileSync(path.join(process.cwd(), fileName), data);
      }
      
      // Function to initialize app
      function init() {
        inquirer.prompt(questions).then((userResponse) => {
          console.log('user responses = ', userResponse);
          writeToFile('README.md', generateMarkdown({ ...userResponse}));
        });
      }
      
      init();
    
    
    
