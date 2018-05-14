//OK, now the ellipse changes color if you click the screen, but what if it were a litle more interesting?
//this code will show you how to change color depending on the position of the mouse.

var r = 0; //this variable, r, is the placeholder for the red value. r could be any letter or word. I chose r for "red."
var g = 0; //the placeholder for the green value.
var b = 0; //the placeholder for the blue value.

function setup() {
    // put setup code here
    createCanvas(765, 765);
    //changed canvas size to 255*3. this just makes the math simple later.
    //we will tell the program to change r, g, and b based on the position of the mouse on the canvas.
}

function draw() {
    // put drawing code here
    background(0, 0, 100); //dark blue. we don't need the background color to change later, so we use numbers, not variables.
    fill(r, g, b); //we DO want to change the color of the shapes we're about to draw later, so we use variables, not numbers.

    //these four lines divide the canvas into thirds, like a tic tac toe board.
    line(width / 3, 0, width / 3, height);
    line(width - width / 3, 0, width - width / 3, height);
    line(0, height / 3, width, height / 3);
    line(0, height - height / 3, width, height - height / 3);
    

    //OK PAY ATTENTION.
    //the piece of code below looks complicated, but it isn't
    //it divides the canvas up into 9 parts
    //it then changes the color depending on which part the mouse is in.

    //so

    //if the mouse is in the top third of the canvas, the red value changes
    //if the mouse is in the middle third, the blue value changes
    //if the mouse is in the bottom third, the green value changes

    //likewise, moving the mouse horizontally changes either r, g, or b.
    //this makes it possible to display all RGB values by moving your mouse around the screen.

    //the && you see in the "if" part of these statements means 
    //"do not execute the code in the brackets unless both these things are true"
    //the if/else statement is called a conditional statement.
    //conditional statements are the key to creating an interactive program.

    //"else if" means "if the above code is not true for some reason, see if this next block is true instead."
    //you can have as many "else if"s as you want
    //you must start this chain of statements with "if"
    //and end with "else"
    //as I have done below:

    if (mouseY < 255 && mouseX < 255) {
        //top row, left column
        r = mouseX;
        g = 0;
        b = 0;

        rect(0, 0, 255, 255); //put a rectangle in the top left

    } else if (mouseY < 510 && mouseX < 255) {
        //middle row, left column
        r = mouseX;
        g = mouseY - 255; //subtracting to keep the number below 255
        b = 0;

        rect(0, 255, 255, 255);

    } else if (mouseY < 765 && mouseX < 255) {
        //bottom row, left column
        r = mouseX;
        g = 0;
        b = mouseY - 510;

        rect(0, 510, 255, 255);

    } else if (mouseY < 255 && mouseX < 510) {
        //top row, middle column
        r = mouseX-255;
        g = mouseY;
        b = 0;

        rect(255, 0, 255, 255);

    } else if (mouseY < 510 && mouseX < 510) {
        //middle row, middle column
        r = 0;
        g = mouseX-255;
        b = 0;

        rect(255, 255, 255, 255);

    } else if (mouseY < 765 && mouseX < 510) {
        //bottom row, middle column
        r = 0;
        g = mouseX - 255;
        b = mouseY - 510;

        rect(255, 510, 255, 255);

    } else if (mouseY < 255 && mouseX < 765) {
        //top row, right column
        r = mouseY;
        g = 0;
        b = mouseX - 510;

        rect(510, 0, 255, 255);

    } else if (mouseY < 510 && mouseX < 765) {
        //middle row, right column
        r = 0;
        g = mouseY - 255;
        b = mouseX - 510;

        rect(510, 255, 255, 255);

    } else {
        //bottom row, right column
        r = 0;
        g = 0;
        b = mouseX - 510;

        rect(510, 510, 255, 255);

    }
}