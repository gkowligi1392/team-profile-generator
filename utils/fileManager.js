const fs = require("fs");

function createHtmlFile(dirname, dir, data) {
    //validate if the folder exists
    const folderName = `${dirname}/${dir}`;
    if (!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName);
    }

    //Copy Style File
    const src = `${dirname}/style.css`;
    const dest = `${folderName}/style.css`;
    fs.copyFileSync(src, dest);
    //Create Html File
    const fileName = `${dirname}/${dir}/index.html`;
    writeFile(fileName, data);
}

function writeFile(filename, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filename, data, (error) => {
        if (error) {
            reject(error);
            return;
        } else {
            resolve({
            ok: true,
            message: "File Cretad!!",
            });
        }
        });
    });
}

module.exports = createHtmlFile;
