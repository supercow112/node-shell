

const fs = require('fs')
module.exports = (filename) => {
  return fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      throw err;
    } else {
      console.log(data)
    }
  })
}
