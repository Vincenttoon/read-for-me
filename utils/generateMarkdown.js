// function to call license badges and links based on license input
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache License 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'Creative Commons Zero v1.0 Universal') {
    return '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)'
  } else if (license === 'BSD 2') {
    return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
  } else if (license === 'BSD 3') {
    return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  } else if (license === 'Eclipse Public License') {
    return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
  } else if (license === 'GNU GPLv3') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  } else if (license === 'ISC') {
    return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
  } else if (license === 'Mozilla Public License 2.0') {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  } else if (license === 'None') {
    return ''
  }
};

// function to render license links based on license input prompts
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return 'https://opensource.org/licenses/MIT'
  } else if (license === 'Apache License 2.0') {
    return 'https://opensource.org/licenses/Apache-2.0'
  } else if (license === 'Creative Commons Zero v1.0 Universal') {
    return 'http://creativecommons.org/publicdomain/zero/1.0/'
  } else if (license === 'BSD 2') {
    return 'https://opensource.org/licenses/BSD-2-Clause)'
  } else if (license === 'BSD 3') {
    return 'https://opensource.org/licenses/BSD-3-Clause'
  } else if (license === 'Eclipse Public License') {
    return 'https://opensource.org/licenses/EPL-1.0'
  } else if (license === 'GNU GPLv3') {
    return 'https://www.gnu.org/licenses/gpl-3.0'
  } else if (license === 'ISC') {
    return 'https://opensource.org/licenses/ISC'
  } else if (license === 'Mozilla Public License 2.0') {
    return 'https://opensource.org/licenses/MPL-2.0'
  } else if (license === 'None') {
    return ''
  }
}


// Create checks for non required answers
// Generate for Installation Prompt
const genInstall = (installation) => {
	if (!installation) {
		return 'n/a';
	} else {
		return `${installation}`;
	}
};

// Generate for Contributor Prompt
const genContrib = (credit, link) => {
	if (!credit) {
		return 'n/a';
	} else {
    // splits credit return and link return from user input
		let creditList = credit.split(',');
		let linkList = link.split(',');
    // Sets up empty container, loops through the length of it, attaches the link to it, then forms the necessary Markdown syntax for preferred functionality
		let creditLink = '';
		for (let i = 0; i < creditList.length; i++) {
			creditLink += `[${creditList[i].trim()}](https://github.com/${linkList[i].trim()}), `;
		}
    // final return for use
		return `${creditLink}`;
	}
};

// Generate for Tests prompt
const genTests = (tests) => {
	if (!tests) {
		return 'n/a';
	} else {
		return `${tests}`;
	}
};

// Arrow function to create ReadMe Markdown
const generateMarkdown = (data) => {
	return `# ${data.title}

## License
### ${renderLicenseBadge(data.license)}
### [${data.license}](${renderLicenseLink(data.license)})

## Description

${data.description}

By: [${data.name}](https://github.com/${data.github})

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)  

* [Contributors](#contributors)

* [Tests](#tests)

* [Questions?](#questions)

## Installation

* Head to the repository to download or view this code: [${data.title}](${data.gitlink})

${genInstall(data.installation)}

## Tests

${genTests(data.tests)}

## Usage

${data.usage}

## Contributors

* ${genContrib(data.credits, data.creditsLink)}

## Questions?

Questions, comments, or concerns? Please Email me at:
* ${data.email}
`;
};

// Export ReadMe to index.js
module.exports = {generateMarkdown, renderLicenseBadge, renderLicenseLink};

// link to repo for testing
// https://github.com/Vincenttoon/read-for-me