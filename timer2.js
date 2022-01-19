//user press 'b' beep right away
// user input '1 - 9' output:
    //'setting timer for x seconds..'
      //console.log(`Setting timer for ${x} seconds...`)
    //beep after x seconds
      //setTimeout(() => process.stdout.write('\x07'), (x) * 1000);
//use crtl c to exit & display message 'Thanks for using me, ciao!'
      

const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

const numberArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
stdin.on('data', (key) => {
  for (let num of numberArray) {
    if (key === num) {
      console.log(`Setting timer for ${num} seconds...`)
      setTimeout(() => process.stdout.write('\x07'), (Number(num)) * 1000);
    }
  }
  if (key === 'b') {
    process.stdout.write('\x07')
  }
  if (key === '\u0003') {
    console.log('Thanks for using me, ciao!');
    process.exit();
  }
})
