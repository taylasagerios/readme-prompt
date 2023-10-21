const inquirer = require("inquirer");
const fs = require("fs");
inquirer
.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"  
    },
    {
        type: "input",
        name: "description",
        message: "What is a description of your project?"
    },
    {
        type: "input",
        name: "install",
        message: "How do you install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "How does a user use your project?"
    },
    {
        type: "list",
        name: "license",
        message: "What license should your project use?",
        choices: ['MIT', "Apache", "Artistic", "none"]
    },
    {
        type: "input",
        name: "contribution",
        message: "How do you contribute to this project?"
    },
    {
        type: "input",
        name: "test",
        message: "How do you test in this project?"
    },
])