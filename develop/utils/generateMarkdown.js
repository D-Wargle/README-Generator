// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'MIT') {
        return '![License](https://img.shields.io/badge/License-MIT-blue.svg)';
    } else if (license === 'GNU GPLv3') {
        return '![License](https://img.shields.io/badge/License-GNU%20GPLv3-blue.svg)';
    } else if (license === 'Apache 2.0') {
        return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
    } else if (license === 'ISC') {
        return '![license](https://img.shields.io/badge/License-ISC-blue.svg)';
    } else {
        return '';
    }
}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === 'MIT') {
        return '[MIT](https://opensource.org/licenses/MIT)';
    } else if (license === 'GNU GPLv3') {
        return '[GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0)';
    } else if (license --- 'Apache 2.0') {
        return '[Apache 2.0](https://opensource.org/licenses/Apache-2.0)';
    } else if (license === 'ISC') {
        return '[ISC](https://opensource.org/licenses/ISC)';
    } else {
        return '';
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === 'MIT') {
        return 'This project is licensed under the [MIT](https://opensource.org/licenses/MIT) license.';
    } else if (license === 'GNU GPLv3') {
        return 'This project is licensed under the [GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0) license.';
    } else if (license === 'Apache 2.0') {
        return 'This project is licensed under the [Apache 2.0](https://opensource.org/licenses/Apache-2.0) license.';
    } else if (license === 'ISC') {
        return 'This project is licensed under the [ISC](https://opensource.org/licenses/ISC) license.';
    } else {
        return '';
    }
}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//     return `# ${data.title} 
// ![License](https://img.shields.io/badge/License-${data.license}-blue.svg)
// ## Description 
// ${data.description}
// ## Table of Contents
// - [Installation](#installation)
// - [Usage](#usage)
// - [License](#license)
// - [Contributing](#contributing)
// - [Tests](#tests)
// - [Questions](#questions)
// ## Installation
// ${data.installation}
// ## Usage
// ${data.usage}
// ## License
// ${renderLicenseSection(data.license)}
// ## Contributing
// ${data.contribution}
// ## Tests
// ${data.test}
// ## Questions
// -If you have any questions contact me at [${data.email}]!
// -You can find more of my work at [${data.github}].
// `;
// }

function generateMarkdown(data) {
    return `# ${data.title} 
${renderLicenseBadge(data.license)}
## Description 
${data.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
## License
${renderLicenseSection(data.license)}
## Contributing
${data.contribution}
## Tests
${data.test}
## Questions
-If you have any questions contact me at [${data.email}]!
-You can find more of my work at [${data.github}].
`;
}
export default generateMarkdown;
