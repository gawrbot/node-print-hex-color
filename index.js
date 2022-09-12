import { argv } from 'node:process';
import { createInterface } from 'node:readline';
import chalk from 'chalk';
import randomColor from 'randomcolor';

const hashString = `###############################
###############################
###############################
#####                    ######
#####       ${randomColor()}      ######
#####                    ######
###############################
###############################
###############################`;

const inputForGenerator = {
  hue: '',
  luminosity: '',
};

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (str) => new Promise((resolve) => rl.question(str, resolve));

const ask = {
  start: async () => {
    return await ask.hue();
  },
  hue: async () => {
    const hue = await question('HUE: ');
    inputForGenerator.hue = hue;
    console.log('\u261e');
    return ask.lumi();
  },
  lumi: async () => {
    const lumi = await question('LUMINOSITY: ');
    inputForGenerator.luminosity = lumi;
    console.log('\u261f');
    return ask.end();
  },
  end: async () => {
    await rl.close();
  },
};

function input() {
  if (argv[2] === 'blue' || argv[2] === 'red' || argv[2] === 'green') {
    inputForGenerator.hue = argv[2];
  } else if (argv[3] === 'blue' || argv[3] === 'red' || argv[3] === 'green') {
    inputForGenerator.hue = argv[3];
  }
  if (argv[2] === 'dark' || argv[2] === 'light') {
    inputForGenerator.luminosity = argv[2];
  } else if (argv[3] === 'dark' || argv[3] === 'light') {
    inputForGenerator.luminosity = argv[3];
  }
  return inputForGenerator;
}

if (argv[2] === 'ask') {
  await ask.start();
  console.log(chalk.hex(randomColor(inputForGenerator))(hashString));
} else if (argv[2] || argv[3]) {
  input();
  console.log(chalk.hex(randomColor(inputForGenerator))(hashString));
} else {
  console.log(chalk.hex(randomColor())(hashString));
}
