process.stdout.write('prompt > ');
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

  } else {

    process.stdout.write('\nprompt > ')
  }




})
