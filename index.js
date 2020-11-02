const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "Write an informative description of your project here.",
      name: "description",
    },
    {
      type: "input",
      message: "What commands are needed to install the dependencies?",
      name: "installation",
    },
    {
      type: "list",
      message: "What commands are needed to install the dependencies?",
      name: "license",
      choices: ["MIT", "Apache 2.0", "GNU"],
    },
  ])
  .then(function (response) {
    let markdownData = `# ${response.title}

## Description
${response.description}

## Installation
${response.installation}

## Licence
${response.license}`;

    fs.writeFileSync("newreadme.md", markdownData);
  });
