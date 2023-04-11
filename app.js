var http = require('http')
var fs = require('fs')

http
    .createServer(function (req, res){
        // const text = fs.readFileSync('./content/subfolder/big.txt', 'utf8')
        // res.end(text)

        const fileStream = fs.createReadStream('./content/subfolder/big.txt', 'utf8');
        fileStream.on('open', ()=>{
        fileStream.pipe(res)
        })
        fileStream.on('error',(err) =>{
            res.end(err)
        })
    })
    .listen(5000)


// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//       readFile(path, "utf8", (err, data) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(data);
//         }
//       });
//     });
//   };

// getText("./content/subfolder/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err))




//Lodash Example

// const _ = require('lodash')

// const items = [1, [2,[3,[4]]]]
// const newItems = _.flattenDeep(items)
// console.log(newItems)
// console.log('hello people')
