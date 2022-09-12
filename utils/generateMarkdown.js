// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Create checks for non required answers
const installCheck = check => {
  if (!check) {
    return ''
  } else {
    return `* [Installation](#installation)`
  }
} 
const genInstall = installation => {
  if (!installation) {
    return ''
  } else {
    return `
    ## Installation
    ${installation}`
  }
}

const contribCheck = check => {
  if (!check) {
    return ''
  } else {
    return `* [Contributors](#contributors)`
  }
}  
const genContrib = contributors => {
  if (!contributors) {
    return ''
  } else {
    return `
    ## Contributors
    ${contributors}`
  }
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return `
  # ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  ${installCheck(data.installation)}
  * [Usage](#usage)
  * [License](#license)
  ${contribCheck(data.contributors)}

  ${genInstall(data.installation)}
  ## Usage
  ${data.usage}
  ## License
  ${data.license}
  ${genContrib(data.credits)}

  ### Created by:
  * [${data.name}](https://github.com/${data.github})
  #### Have questions, suggestions, or concerns? Please email me at:
  * ${data.email}
`;
}

module.exports = generateMarkdown;