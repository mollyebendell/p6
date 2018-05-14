//the variables go up here. a variable is a placeholder for a value you may need to change later.
//here, the variable starts out as one color, but on mouse click you need to change it to another color.
//the need to change the color is what makes using a variable necessary.

var r = 0; //this variable, r, is the placeholder for the red value. r could be any letter or word. I chose r for "red."
var g = 0; //the placeholder for the green value.
var b = 0; //the placeholder for the blue value.

//the code didn't work earlier because I tried to store too much information within a single variable.
//the better way to do it is to make three separate variables, each representing a different number.

function setup() {
    // put setup code here
    createCanvas(800, 600);
}

function draw() {
    // put drawing code here
    background(0, 0, 100); //dark blue. we don't need the background color to change later, so we use numbers, not variables.
    fill(r, g, b); //we DO want to change the color of the shapes we're about to draw later, so we use variables, not numbers.
    
    ellipse(50, 50, 100, 100);
}

function mouseClicked() {
    //change the ellipse to a different color if the mouse is clicked
    if (r, g, b == 0) {
        r = 255;
        g = 255;
        b = 255;
    }
    else {
        r = 0;
        g = 0;
        b = 0;
    }
}