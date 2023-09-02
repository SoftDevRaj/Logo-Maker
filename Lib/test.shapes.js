// Get the shape classes
const { Triangle, Circle, Square } = require('/shapes');

// Test for Triangle
test('Check Triangle', () => {
    // Make a blue triangle
    const triangle = new Triangle("blue");
    
    // See if it matches the expected design
    expect(triangle.render()).toBe('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});

// Test for Circle
test('Check Circle', () => {
    // Make a red circle
    const circle = new Circle("red");
    
    // See if it matches the expected design
    expect(circle.render()).toBe('<circle cx="150" cy="100" r="50" fill="red" />');
});

// Test for Square
test('Check Square', () => {
    // Make a green square
    const square = new Square("green");
    
    // See if it matches the expected design
    expect(square.render()).toBe('<rect x="100" y="50" width="100" height="100" fill="green" />');
});
