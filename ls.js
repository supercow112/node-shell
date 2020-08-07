// const ls = fs.readdir('./', 'utf8', (err, files) => {
//   if (err) {
//     throw err
//   } else {
//     process.stdout.write(files.join('\n'))
//     process.stdout.write("prompt >")
//   }

// })
fs = require("fs")
module.exports = function(done){
  fs.readdir('./', 'utf8', (err, files) => {
    if (err) {
      done('Something went wrong!')
    } else {
      done(files.join('\n'))
      // process.stdout.write("\nprompt >")
    }
  })
}
