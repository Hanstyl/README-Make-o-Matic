// Creates a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  let licenseName = license;

  if (licenseName === 'Apache License 2.0') {
    return ('[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)');
  }
  if (licenseName === 'GNU GPLv3') {
    return ('[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)');
  }
  if (licenseName === 'MIT') {
    return ('[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)');
  }
  if (licenseName === 'unlicense') {
    return ('');
  }
}

// returns the license link
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
