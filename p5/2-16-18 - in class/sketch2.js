/// <reference path="./p5.global-mode.d.ts" />

var x = 100;
var y = 100;
var putthe = true;
var thangdown = false;
var flipit = false;
var andreverseit = false;

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
    rect(x, y, 50, 50);
    if (putthe == true) {
        x = x + 1;
        if (x >= 500) {
            putthe = false;
            thangdown = true;
        }
    }
    if (thangdown == true) {
        x = 500;
        y= y+1;
        if (y >= 500) {
            thangdown = false;
            flipit = true;
        }
    }
    if (flipit == true) {
        x = x-1;
        y=500;
        if (x<=100) {
            flipit=false;
            andreverseit=true;
        }
    }
    if (andreverseit==true) {
        x=100;
        y=y-1;
        if (y<=100) {
            andreverseit=false;
            putthe=true;
        }
    }
}