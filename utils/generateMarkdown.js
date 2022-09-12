// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache License 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'ISC') {
    return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
  } else if (license === 'BSD 3') {
    return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  } else if (license === 'BSD 2') {
    return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
  } else if (license === 'Creative Commons Zero v1.0 Universal') {
    return '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)'
  } else if (license === 'GNU GPLv3') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  }else if (license === 'Eclipse Public License') {
    return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
  } else if (license === 'Mozilla Public License 2.0') {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  } else if (license === 'None') {
    return ''
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
  if (license === 'MIT') {
    return 'https://opensource.org/licenses/MIT'
  } else if (license === 'Apache License 2.0') {
    return 'https://opensource.org/licenses/Apache-2.0'
  } else if (license === 'ISC') {
    return 'https://opensource.org/licenses/ISC'
  } else if (license === 'BSD 3') {
    return 'https://opensource.org/licenses/BSD-3-Clause'
  } else if (license === 'BSD 2') {
    return 'https://opensource.org/licenses/BSD-2-Clause)'
  } else if (license === 'Creative Commons Zero v1.0 Universal') {
    return 'http://creativecommons.org/publicdomain/zero/1.0/'
  } else if (license === 'GNU GPLv3') {
    return 'https://www.gnu.org/licenses/gpl-3.0'
  }else if (license === 'Eclipse Public License') {
    return 'https://opensource.org/licenses/EPL-1.0'
  }else if (license === 'Mozilla Public License 2.0') {
    return 'https://opensource.org/licenses/MPL-2.0'
  } else if (license === 'None') {
    return ''
  }
}


// Create checks for non required answers
// Check and Generate for Installation Prompt
const installCheck = check => {
  if (!check) {
    return ''
  } else {
    return `* [Installation](#installation)`
  }
};
const genInstall = installation => {
  if (!installation) {
    return ''
  } else {
    return `
    ## Installation
    ${installation}`
  }
};

// Check and Generate for Contributor Prompt
const contribCheck = check => {
  if (!check) {
    return ''
  } else {
    return `* [Contributors](#contributors)`
  }
}; 

const genContrib = contributors => {
  if (!contributors) {
    return ''
  } else {
    return `
    ## Contributors
    ${contributors}`
  }
};

const testCheck = check => {
  if (!check) {
    return ''
  } else {
    return `* [Tests](#tests)`
  }
}; 
const genTests = tests => {
  if (!tests) {
    return ''
  } else {
    return `
    ## Tests
    ${tests}`
  }
};

// Arrow function to create ReadMe
const generateMarkdown = (data) => {
  return `
  # ${data.title}
  ## Description
  ${data.description}
  By: [${data.name}](https://github.com/${data.github})
  ## Table of Contents
  ${installCheck(data.installation)}
  * [Usage](#usage)
  * [License](#license)  
  ${contribCheck(data.contributors)}
  ${testCheck(data.tests)}
  * [Questions?](#questions)<br>

  ${genInstall(data.installation)}  
  ## Usage
  ${data.usage}
  ## License
  ### ${data.license}<br>
  ${genContrib(data.credits)}
  [${data.credits}](${data.creditsLink})<br>
  ${genTests(data.tests)}
  ## Questions?
  Questions, comments, or concerns? Please Email me at:
  * ${data.email}
`;
}

// Export ReadMe to index.js
module.exports = generateMarkdown;