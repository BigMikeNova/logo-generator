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
      var circle = new Circle(shapeColor)
      return circle.render();
    case 'triangle':
      var triangle = new Triangle(shapeColor)
      return triangle.render();
    case 'square':
      var square = new Square(shapeColor)
      return square.render();
    default:
      return '';
  }
}

module.exports = { createSVG };

  