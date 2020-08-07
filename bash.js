process.stdout.write('prompt > ');
const request = require('request')
process.stdin.on('data', (data) =>{
  const cmd = data
  .toString()
  .trim();

  const fs = require('fs')

  if (cmd === 'pwd'){
    require('./pwd.js')();
  }
  if (cmd === 'ls'){
    require('./ls.js')();

  }
  if (cmd.slice(0, 3) === 'cat') {
    require('./cat.js')(cmd.slice(4));

  }
  if (cmd.slice(0,4) === 'curl'){
    // require('./curl.js')(cmd.slice(5))
    request(cmd.slice(5), function (error, response, body) {
      console.error('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body); // Print the HTML for the Google homepage.
    });
  }
   else {

    process.stdout.write('\nprompt > ')
  }




})
