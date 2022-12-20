const generateMarkdown = data => {
  return `# ${data.title}
  [![License: ${encodeURIComponent(data.license)}](https://img.shields.io/badge/License-${encodeURIComponent(data.license)}-green.svg)](https://opensource.org/licenses/${encodeURIComponent(data.license)})
  
## Description
  ${data.description}
  
## Table of Contents
- [Installation](#installation)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)
  
## Installation
  ${data.install}

## Tests
  ${data.test}

## License
  ${data.license}
  
## Questions
  If you have any questions, or have the need to contact me, my email is ${data.email} or you can find my Github Profile here at https://github.com/${data.github}. Thanks for viewing!
`;
}

module.exports = generateMarkdown;
