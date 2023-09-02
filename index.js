// index.js

// Import necessary modules
const inquirer = require("inquirer");
const fs = require("fs"); // Required to save the SVG to a file
const { Triangle, Circle, Square } = require("./Lib/shapes");

// Start the application
function startApp() {
  // TODO: Prompt user for text, text color, shape, and shape color using Inquirer
  inquirer
    .prompt([
      {
        type: "input",
        name: "text",
        message: "Enter up to three characters for your logo:",
        validate: function (value) {
          return (
            value.length <= 3 || "Please enter up to three characters only!"
          );
        },
      },
      {
        type: "list",
        name: "shapeType",
        message: "Choose a shape:",
        choices: ["Triangle", "Circle", "Square"],
      },
      {
        type: "input",
        name: "color",
        message: "Enter a color for the shape (keyword or hex):",
      },
    ])
    .then((answers) => {
      // TODO: Based on user input, create the desired shape object
      let shape;
      if (answers.shapeType === "Triangle") {
        shape = new Triangle(answers.color);
      } else if (answers.shapeType === "Circle") {
        shape = new Circle(answers.color);
      } else {
        shape = new Square(answers.color);
      }

      // TODO: Generate SVG string using the shape object's render() method
      const svgContent = shape.render();

      // TODO: Save SVG string to a file named logo.svg
      fs.writeFileSync("logo.svg", svgContent);

      // TODO: Print a confirmation message to the user
      console.log("Generated logo.svg");
    });
}

// Invoke the startApp function to run the application
startApp();
