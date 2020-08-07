const done = (output) => {
  console.log(output)
  process.stdout.write('prompt > ');
}








process.stdout.write('prompt > ');
const request = require('request')






process.stdin.on('data', (data) =>{
  const cmd = data
  .toString()
  .trim();

  const fs = require('fs')

  if (cmd === 'pwd'){
    require('./pwd.js')(done);
  }
  else if (cmd === 'ls'){
    require('./ls.js')(done);

  }
  else if (cmd.slice(0, 3) === 'cat') {
    require('./cat.js')(done, cmd.slice(4));

  }
  else if (cmd.slice(0,4) === 'curl'){
    require('./curl.js')(done, cmd.slice(5))
  }
  else {

    process.stdout.write('\nprompt > ')
  }




})
