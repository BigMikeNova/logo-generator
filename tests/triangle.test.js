const { createSVG } = require('../lib/svgUtils');

describe('createSVG', () => {
  test('should generate the correct SVG template', () => {
    const text = 'ABC';
    const textColor = 'blue';
    const shape = 'triangle';
    const shapeColor = 'orange';

const expectedSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400">
<polygon points="300, 50 100, 350 500, 350" fill="orange" />
<text x="50%" y="52.5%" font-size="48" text-anchor="middle" fill="blue">
ABC
</text>
</svg>`;

    const generatedSVG = createSVG(text, textColor, shape, shapeColor);
    expect(generatedSVG).toEqual(expectedSVG);
  });
});