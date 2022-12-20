const generateMarkdown = data => {
  return `# ${data.title}
   
  
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
    If you have any questions, or have the need to contact me, me email is ${data.email} or you can find my Github Profile here at https://github.com/${data.github}. Thanks viewing!
`;
}

module.exports = generateMarkdown;
