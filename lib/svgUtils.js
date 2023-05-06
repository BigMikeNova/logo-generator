const {Triangle, Circle, Square} = require('./shapes')
function createSVG(text, textColor, shape, shapeColor) {
  const svgTemplate = `
<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400">
${getShapeElement(shape, shapeColor)}
<text x="50%" y="52.5%" font-size="48" text-anchor="middle" fill="${textColor}">
${text}
</text>
</svg>`;
  return svgTemplate;
}

function getShapeElement(shape, shapeColor) {
  switch (shape) {
    case 'circle':
      return `<circle cx="300" cy="200" r="100" fill="${shapeColor}" />`;
    case 'triangle':
      return `
        <polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}" />
      `;
    case 'square':
      return `<rect x="200" y="100" width="200" height="200" fill="${shapeColor}" />`;
    default:
      return '';
  }
}

module.exports = { createSVG };

  