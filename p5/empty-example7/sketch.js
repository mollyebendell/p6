/// <reference path="./p5.global-mode.d.ts" />

function setup() {
  // put setup code here
	createCanvas(800, 800);
	background(255);
}


function draw() {
	// put drawing code here
	//start curves on the left, end center right, midpoints play with mouse values
	noFill();
	stroke(0, 0, 200);
	bezier(0, 0, mouseX, mouseY, mouseX, mouseY, 400, 400); 
	bezier(800, 0, mouseX, mouseY, mouseX, mouseY, 400, 400); 
	bezier(0, 800, mouseX, mouseY, mouseX, mouseY, 400, 400);
	bezier(800, 800, mouseX, mouseY, mouseX, mouseY, 400, 400); 
}