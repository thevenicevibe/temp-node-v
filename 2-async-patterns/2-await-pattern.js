const { readFile } = require("fs");
const util = require('util');
const path = require("path");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const start = async() =>{
    try{
        const first = await getText('./content/subfolder/first.txt');
        const second = await getText('./content/subfolder/second.txt');
        console.log(first,second)

    }catch(error){
        console.log(error)
    }
    
    
}

start()

// getText("./content/subfolder/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err))
