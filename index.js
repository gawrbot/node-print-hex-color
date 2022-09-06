import { argv } from 'node:process';
import chalk from 'chalk';
import randomColorGen from 'randomcolor';

const hashString = `###############################\n###############################\n###############################\n#####                    ######\n#####       ${randomColorGen()}      ######\n#####                    ######\n###############################\n###############################\n###############################`;

const genObj = {};

function input() {
  if (argv[2] === 'blue' || argv[2] === 'red' || argv[2] === 'green') {
    genObj.hue = argv[2];
  } else if (argv[3] === 'blue' || argv[3] === 'red' || argv[3] === 'green') {
    genObj.hue = argv[3];
  }
  if (argv[2] === 'dark' || argv[2] === 'light') {
    genObj.luminosity = argv[2];
  } else if (argv[3] === 'dark' || argv[3] === 'light') {
    genObj.luminosity = argv[3];
  }
  return genObj;
}

if (argv[2] || argv[3]) {
  input();
  console.log(chalk.hex(randomColorGen(genObj))(hashString));
} else {
  console.log(chalk.hex(randomColorGen())(hashString));
}
