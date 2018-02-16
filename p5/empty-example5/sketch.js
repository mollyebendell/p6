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
	stroke(0, 30, 200);
	curves(10, 20, 30, 40);
	curves(100, 200, 300, 400);
	curves(5, 10, 15, 20);
	fill(255);
}
function curves(x, y, z, t) {
	bezier(0, 0, mouseX + x, mouseY + y, mouseX + z, mouseY + t, 400, 400);
	bezier(0, 800, mouseX + x, mouseY + y, mouseX + z, mouseY + t, 400, 400);
	bezier(800, 800, mouseX + x, mouseY + y, mouseX + z, mouseY + t, 400, 400);
	bezier(800, 0, mouseX + x, mouseY + y, mouseX + z, mouseY + t, 400, 400);
}