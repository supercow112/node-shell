const pwd = require('./pwd.js');

process.stdout.write('prompt > ');
process.stdin.on('data', (data) =>{
  const cmd = data
  .toString()
  .trim();

  if (cmd === 'pwd'){
    const pwd = require('./pwd.js')()
    pwd()
  }
  if (cmd === 'ls'){
    const ls = require('./ls.js');
    ls()
  }

  // process.stdout.write('You typed: ' + cmd);
  // process.stdout.write('\nprompt > ')

})
