





module.exports = () => {
  return function (){
    console.log(process.cwd());
    process.stdout.write('prompt > ')
  }
  // process.stdout.write('\nprompt > ')
};
