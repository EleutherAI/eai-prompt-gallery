// const sharp = require("sharp");
// const fs = require("fs-extra");

// let rawdata = fs.readFileSync(fileName);
// const fileName = process.argv.slice(2)[0];

// console.log("fileName: ", fileName);

// sharp("./public/api/art/a_bedroom.png")
//   .resize(320, 240)
//   .toFile("./public/api/art/thumbnails/output.webp", (err, info) => {
//     console.log(err);
//     console.log(info);
//   });

//   fs.writeFile(htmlTableFile, html, (err) => {
//     if (err) throw err;
//   });

//   let rawdata = fs.readFileSync(fileName);

//requiring path and fs modules
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

function getExtension(filename) {
  var parts = filename.split(".");
  return parts[parts.length - 1];
}
const directoryPath = path.join(__dirname, "/public/api/art");
//passsing directoryPath and callback function
fs.readdir(directoryPath + "/optimised/", function (err, files) {
  //handling error
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }
  //listing all files using forEach
  files.forEach(function (file) {
    // Do whatever you want to do with the file

    if (getExtension(file) === "png") {
      console.log(file);
      sharp(directoryPath + "/optimised/" + file)
        .resize({ width: 400 })
        .toFile(directoryPath + "/thumbnails/" + file, (err, info) => {
          console.log(err);
          console.log(info);
        });
    }
  });
});
