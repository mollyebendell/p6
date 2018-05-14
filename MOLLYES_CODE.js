// lines that begin with two slashes are comments. they don't do anything to the code, they just help non-computers understand the code.

// comments can also be used like a lightswitch to disable and enable lines of code:

//var mollyesVariable = 0; 

// won't run but

var mollyesVariable = 0;

// will run.

// the above line of code is called a variable. it holds a value that can change later. 
// at the end of the lesson, we will use this to change the color of a shape.
// you can name variables whatever you want. single letters like "x" are often used by programmers to keep things simple.

function setup() {
    // this code runs only once.
    // put shapes that won't be interactive in this code.
    // createCanvas must be the first statement. The canvas is the size of the area on which we will be working.

    // in this case, we are creating a canvas 800 pixels wide and 600 pixels tall.

    createCanvas(800, 600);

}

function draw() {
    // The statements in draw() are executed until the 
    // program is stopped. Each statement is executed in 
    // sequence and after the last line is read, the first 
    // line is executed again.

    // if you animate anything it will likely go in the draw() function.

    // this designates a background color

    background(0, 0, 150); //uses RGB values: this will display a dark blue background. you may change the numbers to anything between 0 and 255.

    // this designates a stroke color, the color that will outline my shapes.

    stroke(255, 200, 200); //RGB light red

    // our first shape: a line. experiment with changing the numbers to change the direction of the line.
    // the first number is the X-value of the start point - i.e. how far across is the first point?
    // The second number is the Y-value of the start point - i.e. how far down is the first point?
    // the third and fourth numbers are the X and Y values of the end point.

    line(10, 20, 590, 580); // a diagonal line stretching from the top left of the screen to the bottom right of the screen.

    //let's make it slightly more interesting. let's make another line that bends when we move our mouse.
    //mouseX and mouseY tell the program to get the position of the mouse and use that instead of a number.

    stroke(200, 0, 0); //change line color to darker red

    //make two lines that meet at the current mouse position.

    line(10, 20, mouseX, mouseY);
    line(590, 580, mouseX, mouseY);

    //width and height represent the width and height of the canvas. 
    //let's use those values to make two lines that move away from the mouse.

    line(10, 20, width - mouseX, height - mouseY);
    line(590, 580, width - mouseX, height - mouseY);

    //cool, but my cursor looks ugly. let's hide it.

    noCursor();

    //let's set up a fill color that we can change later.
    //remember, at the top we declared mollyesVariable = 0.
    //so this line sets the fill to 0, or black.

    fill(mollyesVariable);

    //I don't want an outline around this shape so I set the stroke to

    noStroke();

    //now we'll add a circle to the bottom left corner
    //the first two numbers are the position of the ellipse.
    //the second two numbers are the width and height of the ellipse.

    ellipse(50, 550, 25, 25);

}

//this block of code changes the color of the circle when you click in the canvas

function mouseClicked() {

    if (mollyesVariable == 0) {
        mollyesVariable = 255;
    } else {
        mollyesVariable = 0;
    }
}

	//in the above example, we are basically saying "If mollyesVariable is black, and the mouse has been clicked,
	//change the color of mollyesVariable to white. Otherwise, if mollyesVariable is already white, 
	//change mollyesVariable back to black."