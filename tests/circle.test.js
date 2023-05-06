const { createSVG } = require('../lib/svgUtils');

describe('createSVG', () => {
  test('should generate the correct SVG template', () => {
    const text = 'ABC';
    const textColor = 'red';
    const shape = 'circle';
    const shapeColor = 'blue';

const expectedSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400">
<circle cx="300" cy="200" r="100" fill="blue" />
<text x="50%" y="52.5%" font-size="48" text-anchor="middle" fill="red">
ABC
</text>
</svg>`;

    const generatedSVG = createSVG(text, textColor, shape, shapeColor);
    expect(generatedSVG).toEqual(expectedSVG);
  });
});
