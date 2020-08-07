

// const ls = fs.readdir('./', 'utf8', (err, files) => {
//   if (err) {
//     throw err
//   } else {
//     process.stdout.write(files.join('\n'))
//     process.stdout.write("prompt >")
//   }
// })
fs = require("fs")
module.exports = function(){
  return fs.readdir('./', 'utf8', (err, files) => {
    if (err) {
      throw err
    } else {
      process.stdout.write(files.join('\n'))
      process.stdout.write("\nprompt >")
    }
  })
}
