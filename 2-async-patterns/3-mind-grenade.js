const { readFile , writeFile} = require("fs");
const util = require('util')
const path = require("path");
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)





const start = async() =>{
    try{
        const first = await readFilePromise('./content/subfolder/first.txt','utf8');
        const second = await readFilePromise('./content/subfolder/second.txt','utf8');
        await writeFilePromise('./content/subfolder/result-mind-grenade.txt',`THIS IS AWSOME: ${first} ${second}`,
        {flag: 'a'})
        console.log(first,second)

    }catch(error){
        console.log(error)
    }
    
    
}

start()