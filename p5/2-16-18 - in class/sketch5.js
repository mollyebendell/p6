/// <reference path="./p5.global-mode.d.ts" />
var x = 100;
var y = 100;
var z = 100;
var t = 100;

function setup() {
  // put setup code here
    createCanvas(600, 600);
    background(235, 215, 160);
}

function draw() {
    // put drawing code here
    stroke(5);
    strokeWeight(1);
    fill(255, 255, 255);
    rect(x, y, z, t);
    fill(255, 50, 50);
    beginShape();
    vertex(30, 20);
    bezierVertex(80, 0, 80, 75, 30, 75);
    bezierVertex(50, 80, 60, 25, 30, 20);
    endShape();
    fill(70, 60, 300)
    beginShape();
    vertex(200, 200);
    bezierVertex(460, 115, 410, 175, 430, 375);
    bezierVertex(150, 80, 160, 125, 130, 170);
    endShape();
    stroke(30);
    strokeWeight(5);
    line(220, 20, 24, 480);
    stroke(20);
    fill(150,0,0);
    line(240, 25, 42, 485);
    line(263, 39, 66, 489);
    line(285, 55, 82, 495);
    ellipse(550, 450, 200, 200);
    strokeWeight(2)
    fill(0, 0,200, 200);
    triangle(400, 300, 550, 300, 475, 600);
}