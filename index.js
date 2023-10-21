const inquirer = require("inquirer");
const fs = require("fs");
inquirer
.prompt{[
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
]}