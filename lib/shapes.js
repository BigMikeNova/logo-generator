//create triangle class
class Triangle {
    constructor(color) {
        this.color = color
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
    }
var triangle = new Triangle('yellow')
console.log(triangle.render())

//create circle class
class Circle {
    constructor(color) {
        this.color = color
    }
    render() {
        return `<circle cx ="300" cy="200" r="100" fill="${this.color}" />`;
    }
    }
var circle = new Circle('green')
console.log(circle.render())

//create square class
class Square {
    constructor(color) {
        this.color = color
    }
    render() {
        return `<rect x="200" y="100" width="200" height="200" fill="${this.color}" />`;
    }
    }
var square = new Square('blue')
console.log(square.render())

module.exports = { Triangle, Circle, Square }