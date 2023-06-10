// const fs = require("node:fs");
const {readFileSync, writeFileSync} = require("node:fs");


function readJSONFile(path, fileName){

const object = readFileSync(`${path}/${__filename}`,"utf-8")
return object ? JSON.parse(object) : []

// readFileSync

}

function writeJSONFile(path, fileName, data){

data = JSON.stringify(data);
return writeFileSync(`${path}/${fileName}`, data, {encoding: "utf-8"})

    // num += 1
    
    // writeFileSync

}

module.exports = {

    readJSONFile, 
    writeJSONFile
}