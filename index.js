// index.js

import inquirer from "inquirer";
import fs from "fs";
import { Triangle, Circle, Square } from "./Lib/shapes.js"



// Define the main function that starts the application
function startApp() {

  // Use inquirer to prompt the user for various details
  inquirer
    .prompt([
      {
        type: "input",  // A basic input field
        name: "text",   // The variable where the response will be stored
        message: "Enter up to three characters for your logo:",  // The message shown to the user
        validate: function (value) {   // Validation function to ensure the input is 3 characters or less
          return (
            value.length <= 3 || "Please enter up to three characters only!"
          );
        },
      },
      {
        type: "list",  // A list from which the user can choose
        name: "shapeType",  // Variable to store the response
        message: "Choose a shape:",  // Message shown to the user
        choices: ["Triangle", "Circle", "Square"],  // The available choices
      },
      {
        type: "input",
        name: "color",
        message: "Enter a color for the shape (keyword or hex):",
      },
      {
        type: "input",
        name: "textColor",
        message: "Enter a color for the text (keyword or hex):",
      }
    ])
    .then((answers) => {   // Once we have all the answers, this function will be executed

      // Based on user input, we decide which shape to create
      let shape;
      if (answers.shapeType === "Triangle") {
        shape = new Triangle(answers.color);  // Create a new Triangle with the chosen color
      } else if (answers.shapeType === "Circle") {
        shape = new Circle(answers.color);    // Create a new Circle with the chosen color
      } else {
        shape = new Square(answers.color);    // Create a new Square with the chosen color
      }

      // Generate the SVG for the shape using its render method
      const shapeSVG = shape.render();

      // Create an SVG for the text using the user's input
      const textSVG = `<text x="150" y="100" font-family="Verdana" font-size="35" fill="${answers.textColor}" text-anchor="middle" dominant-baseline="middle">${answers.text}</text>`;

      // Combine both the SVGs for the shape and the text to form a complete SVG
      const svgContent = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n${shapeSVG}\n${textSVG}\n</svg>`;

      // Write the SVG content to a file called logo.svg
      fs.writeFileSync("logo.svg", svgContent);

      // Confirm to the user that the logo has been created
      console.log("Generated logo.svg");
    });
}

// Start the application by calling our main function
startApp();
