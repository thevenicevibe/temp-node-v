const { createReadStream } = require('fs')

const stream = createReadStream('./content/subfolder/big.txt',{ highWaterMark:90000, encoding: 'utf8' })

// default 64kb
// last buffer - remainder
// highWaterMark - control Size
// const stream = createReadStream('./content/subfolder/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('./content/subfolder/big.txt' , {encoding: 'utf8'})
stream.on('data', (result) => {
    console.log(`Recieved ${result.length} bytes of data`)
})

stream.on('error', (err) =>
console.log(err))















// Synchronous Method

// const {readFileSync, writeFileSync} = require('fs');
// console.log('start');
// const first = readFileSync('./content/subfolder/first.txt','utf8')
// const second = readFileSync('./content/subfolder/second.txt','utf8')

// writeFileSync(
//     './content/subfolder/result-sync.txt',
// `Here is the result: ${first},${second}`,
// {flag:'a'}
// )
// console.log('done with this task');
// console.log('starting the next one');
