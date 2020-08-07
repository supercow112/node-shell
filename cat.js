const fs = require('fs')
module.exports = (done, filename) => {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      done('Something went wrong!')
    } else {
      done(data)
    }
  })
}
