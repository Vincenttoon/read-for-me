// Variable call for fs
const fs = require('fs');

// Arrow function to write README File
let writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'Markdown Created!'
            });
        });
    });
};

// Export to index.js
module.exports = {writeFile};