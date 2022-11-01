//
const inquirer = require('inquirer') ;
const generateMarkdown = require('./utils /generateMarkdown');
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
        type: 'input',
         message: 'what is your email address?',
         name: 'email'
},  { 
        type: 'input',
        message: 'what is your github usernamr?',
         name: 'github'
},  {          
        type: 'input',
        message: 'how to install dependcies?',
        name: 'installation'
},  {
        type: 'input',
        message: 'how to run tests?',
        name: 'test'
},  {       
         type: 'input',
         message: 'how to use the repo and app?',
        name: 'usage'
},  {   
        
        type: 'input',
        message: 'how to contribute to the development?',
        name: 'contribution'
},  {
        type : 'list',
        message : 'what kind of license was used?',
        name:'license',


        choices: ['None','apache 2.0','gpl 3.0', 'bsd 3']

}];



