// shapes.js

// This is the main Shape class. It's like a blueprint for basic shape properties.
class Shape {
    constructor(color) {
        this.color = color;  // Each shape will have a color.
    }
}

// This is a subclass for the Triangle shape.
class Triangle extends Shape {
    render() {
        // This method will return an SVG string for a triangle.
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

// This is a subclass for the Circle shape.
class Circle extends Shape {
    render() {
        // This method will return an SVG string for a circle.
        return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
    }
}

// This is a subclass for the Square shape.
class Square extends Shape {
    render() {
        // This method will return an SVG string for a square.
        return `<rect x="100" y="50" width="100" height="100" fill="${this.color}" />`;
    }
}

// This is so that other files (like your tests or index.js) can use these classes.
module.exports = { Triangle, Circle, Square };

//Reference for Shapes: https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial 
