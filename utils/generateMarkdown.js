// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if(license === "No License"){
      return''
  } else {
      return`![badge](https://img.shields.io/badge/license-${license}-brightgreen)`
  }
}

// Function takes care of License section of the README
function renderLicense(license) {
  if(license === "No License"){
      return`This Application does not have any license`
  } else {
      return`This Application is covered under ${license}`
  }
}

// function that returns the license link
function renderLicenseLink(license) {
  if (license === 'MITLicense'){
    return `For more information about the License visit [MIT License Page](https://choosealicense.com/licenses/mit/)`
  }
  if (license === 'GNUGPLv3'){
    return `For more information about the License visit [GNU GPLv3 Page](https://choosealicense.com/licenses/gpl-3.0/)`
  }
  if (license === 'ApacheLicense2.0'){
    return `For more information about the License visit [Apache License2.0 Page](https://choosealicense.com/licenses/apache-2.0/)`
  }
  if (license === 'MozillaPublicLicense2.0'){
    return `For more information about the License visit [Mozilla Public License 2.0 Page](https://choosealicense.com/licenses/mpl-2.0/)`
  }
  else 
  if (license === "No License")
  return ''
}


// Generate markdown for README
const generateMarkdown = ({title, description, installation, usage, contributing, tests,
  license, gitHubUserName, email}) =>
  `# ${title}
## Description
${description}

${renderLicenseBadge(license)}
## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [License](#License)
* [Questions](#Questions)
## Installation
${installation}
## Usage
${usage}
## Contributing
${contributing}
## Tests
${tests}
## License
${renderLicense(license)}

${renderLicenseLink(license)}
## Questions
For further questions please contact me at:\n
GitHub: [https://github.com/${gitHubUserName}](https://github.com/${gitHubUserName})\n
Email: [${email}](mailto:${email})`;

module.exports = generateMarkdown;
