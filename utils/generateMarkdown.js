// Creates a function that returns a license badge based on which license is passed in
function renderLicenseBadge(data) {

  if (data.licenseName === 'Apache License 2.0') {
    return ('[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)');
  }
  if (data.licenseName === 'GNU GPLv3') {
    return ('[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)');
  }
  if (data.licenseName === 'MIT') {
    return ('[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)');
  }
  if (data.licenseName === 'Unlicense') {
    return ('');
  }
}

// returns the license link
function renderLicenseLink(data) {
  if (data.license === 'Apache License 2.0') {
    return ('https://www.apache.org/licenses/LICENSE-2.0');
  };
  if (data.license === 'GNU GPLv3') {
    return ('https://www.gnu.org/licenses/gpl-3.0.en.html');
  };
  if (data.license === 'MIT') {
    return ('https://opensource.org/licenses/MIT');
  };
  if (data.license === 'Unlicense') {
    return ('');
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {

  if (data.license === 'Apache License 2.0') {
    return `
Copyright [${new Date().getFullYear()}] [${data.name}]
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
    `
  };

  if (data.license === 'GNU GPLv3') {
    return `
Copyright (C) [${new Date().getFullYear()}] [${data.name}]
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
You should have received a copy of the GNU General Public License
along with this program.  If not, see [licenses](https://www.gnu.org/licenses/).
Also add information on how to contact you by electronic and paper mail.
If the program does terminal interaction, make it output a short
notice like this when it starts in an interactive mode:
<program>  Copyright (C) [${new Date().getFullYear()}] [${data.name}]
This program comes with ABSOLUTELY NO WARRANTY; for details type 'show w'.
This is free software, and you are welcome to redistribute it
under certain conditions; type 'show c' for details.
The hypothetical commands 'show w' and 'show c' should show the appropriate
parts of the General Public License.  Of course, your program's commands
might be different; for a GUI interface, you would use an "about box".
You should also get your employer (if you work as a programmer) or school,
if any, to sign a "copyright disclaimer" for the program, if necessary.
For more information on this, and how to apply and follow the GNU GPL, see
[licenses](https://www.gnu.org/licenses/).
The GNU General Public License does not permit incorporating your program
into proprietary programs.  If your program is a subroutine library, you
may consider it more useful to permit linking proprietary applications with
the library.  If this is what you want to do, use the GNU Lesser General
Public License instead of this License.  But first, please read
[licenses](https://www.gnu.org/licenses/why-not-lgpl.html).
    `
  };

  if (data.license === 'MIT') {
    return `
MIT License
Copyright (c) [${new Date().getFullYear()}] [${data.name}]
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`
  };

  // If theres no license
  if (data.license === 'Unlicense') {
    return '';
  }
};



//This is the order of the professional readme example given to us. now fix the questions on index.js
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${renderLicenseBadge(data)} 

  ${data.description}

  ## Table of Contents

  *[Installation](#installation)
  *[Usage](#usage)
  *[Credit](#credit)
  *[License](#license)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Credits

  ${data.credits}

  ## License

  ${data.license}

  ## Badges

  ${data.badges}

  ## Features

  ${data.features}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ### Contact
* [Email](mailto:${data.email}) - Email ${data.name} : ${data.email}
* [GitHub](https://github.com/${data.github}) - GitHub username : ${data.github}
`;
}

module.exports = generateMarkdown;
