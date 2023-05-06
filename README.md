# Logo Generator

## Description

A command-line application that generates an SVG file based on user input.

## Installation

Clone this repository to your local machine and navigate to the project directory.


git clone https://github.com/BigMikeNova/logo-generator
cd application


Install the necessary dependencies:

npm install
fs
inquirer

## Mock-Up

The following image shows a mock-up of the generated SVG given the following input entered by the user: `CWR` for the text, `white` for the text color, `circle` from the list of shapes, and `red` for the shape color. Note that this is just an image of the output SVG and not the SVG file itself:

![Image showing a red circle with white text that reads "CWR".](./images/logo%20test.png)

## Tutorial Video Link

The following link will show you how this application functions in the terminal as well as the successful tests.

https://www.loom.com/share/8df118ec0cd84b70b1fbd7b8678d9ee1

## Usage

To start the application, run:

node index.js

The application will prompt you for text, text color, shape, and shape color.

### Text Input

You can enter up to three characters when prompted for text.

### Text Color

You can enter a color keyword or a hexadecimal number when prompted for text color.

### Shape

You can choose from three shapes when prompted: circle, triangle, or square.

### Shape Color

You can enter a color keyword or a hexadecimal number when prompted for shape color.

### Output

Once you have entered input for all the prompts, the application will generate an SVG file named `fileName.svg` and print "Generated fileName.svg" in the command line.

## Contributing

If you would like to contribute to this project, please submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.