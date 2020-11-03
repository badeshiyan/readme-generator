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
      message: "Select the preferred license for your project here.",
      name: "license",
      choices: ["MIT", "Apache 2.0", "GNU"],
    },
    {
      type: "input",
      message: "Describe how your project will be actively used.",
      name: "usage",
    },
    {
      type: "input",
      message: "Add resources that contributed to your project.",
      name: "contributing",
    },
    {
      type: "input",
      message: "Provide the tests that were employed for your project, if any.",
      name: "tests",
    },
  ])
  .then(function (response) {
    let markdownData = `## ${response.title}

    ## Table of Contents

    * [Description](#Description)
    * [Installation](#Installation)
    * [License](#License)
    * [Usage](#Usage)
    * [Contributing](#Contributing)
    * [Tests](#Tests)

## Description
${response.description}

## Installation
${response.installation}

## License
${response.license}

## Usage
${response.usage}

## Contributing
${response.contributing}

## Tests
${response.tests}

## Questions
${response.questions}`;
    fs.writeFileSync("newreadme.md", markdownData);
  });
