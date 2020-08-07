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
    require('./curl.js')(cmd.slice(5))
  }
   else {

    process.stdout.write('\nprompt > ')
  }




})
