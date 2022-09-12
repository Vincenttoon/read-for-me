const fs = require('fs');

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

module.exports = {writeFile};