var value = 0;
function setup() {
  // put setup code here
  createCanvas(400, 400);
}


function draw() {
  // put drawing code here
  fill(0);
  if(mouseIsPressed){
  ellipse(mouseX, mouseY, 20, 20);
  }
  if(mouseClicked){
  	  fill(10);
  }
  }