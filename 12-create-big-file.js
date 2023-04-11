const { writeFileSync } = require('fs')
for (let i = 0; i < 1000; i++){
    writeFileSync('./content/subfolder/big.txt',`hello world ${i}\n`,{ flag: 'a' })
}