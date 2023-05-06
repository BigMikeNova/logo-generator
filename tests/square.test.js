const { createSVG } = require('../lib/svgUtils');

describe('createSVG', () => {
  test('should generate the correct SVG template', () => {
    const text = 'ABC';
    const textColor = 'white';
    const shape = 'square';
    const shapeColor = 'green';

const expectedSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400">
<rect x="200" y="100" width="200" height="200" fill="green" />
<text x="50%" y="52.5%" font-size="48" text-anchor="middle" fill="white">
ABC
</text>
</svg>`;

    const generatedSVG = createSVG(text, textColor, shape, shapeColor);
    expect(generatedSVG).toEqual(expectedSVG);
  });
});