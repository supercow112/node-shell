const request = require('request')

module.exports = function(url){
   request(url, function (err, body) {
    if (err) {
      throw err
    } else {
      console.log('body:', body);
      process.stdout.write("\nprompt >")
    }
  });
}
