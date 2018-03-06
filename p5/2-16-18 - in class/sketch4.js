/// <reference path="./p5.global-mode.d.ts" />
var missy;
function preload(){
    missy = loadImage('./missy1.jpg');
}
function setup() {
  // put setup code here
    createCanvas(600, 600);
    image(missy, 100, 100);
}
function draw() {
    // put drawing code here
    stroke(5);
    fill(0, 0, 255);
    rect(10, 10, 50, 50);
    }