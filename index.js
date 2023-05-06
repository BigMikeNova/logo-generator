const fs = require('fs');
const inquirer = require('inquirer');
const { createSVG } = require('./lib/svgUtils');

// Define the questions for inquirer
const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter text (up to three characters):',
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter text color (keyword or hexadecimal):',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: ['circle', 'triangle', 'square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter shape color (keyword or hexadecimal):',
  },
  {
    type: 'input',
    name: 'fileName',
    message: 'Enter the name for your file',
  }
];

// Prompt the user for input using inquirer
inquirer.prompt(questions).then((answers) => {
  const { text, textColor, shape, shapeColor, fileName } = answers;

  // Generate SVG content
  const svgContent = createSVG(text, textColor, shape, shapeColor);

  // Write SVG content to file
  fs.writeFile(`${fileName}.svg`, svgContent, (err) => {
    if (err) {
      console.error('Error writing SVG file:', err);
    } else {
      console.log('Generated logo.svg');
    }
  });
});
