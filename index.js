// declaring variables here
const inquirer = require("inquirer");
const fs = require("fs");

// established inquirer prompts for the user's inputs/responses
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
      choices: ["MIT", "Apache 2.0", "GNU", "ISC"],
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
    {
      type: "input",
      message: "Please enter your Github username here.",
      name: "username",
    },
    {
      type: "input",
      message: "Please enter your email address here.",
      name: "email",
    },
  ])
  // markdown data here
  .then(function (response) {
    let markdownData = `## ${response.title}
* [Description](#description)
* [Installation](#installation)
* [License](#license)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Description
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

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
If you would like to learn more about me, this project or other projects I've completed, please visit my Github profile here: [Github Profile](https://github.com/${response.username})

It is understandable that questions may need to be answered regarding the aforementioned, please send all questions to my email address: ${response.email}`;

    // synchronous method to write to file
    fs.writeFileSync("newreadme.md", markdownData);
  });
