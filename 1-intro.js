// AppJS file

// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimun)

const SayHi = require('./2-utils')
const names = require('./1-intro')
const data = require('./3-alernative-flavor')
 
require('./4-mind-gernade')

// SayHi('susan')
// SayHi(names.john)
// SayHi(names.peter)
// local
const secret = 'SUPER SECRET'
// Share
const john = 'john'
const peter = 'peter'

// export default 
module.exports = {john,peter}
