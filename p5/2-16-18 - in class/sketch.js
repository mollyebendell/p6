/// <reference path="./p5.global-mode.d.ts" />

var x = 100;
var flipit = true;

function setup() {
  // put setup code here
    createCanvas(600, 600);
    frameRate(100); //speed
}
function draw() {
    // put drawing code here
    background(0);
    stroke(5);
    fill(0, 0, 255);
    rect(x, 100, 50, 50);
    if (flipit == true) {
        x = x + 1;
        if (x >= 500) {
            flipit = false;
        }
    }
    if (flipit == false) {
        x = x - 1;
        if (x <= 50) {
            flipit = true;
        }
    }
}