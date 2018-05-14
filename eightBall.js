//color variables

var Y_AXIS = 1;
var X_AXIS = 2;
var b1, b2;

var timer = 0;


var fortunes = ['YES', 'VERY\nDOUBTFUL', 'IT IS\nCERTAIN', 'IT IS\nDECIDEDLY\nSO', 'WITHOUT\nA DOUBT', 'YES\nDEFINITELY', 'YOU MAY RELY\nON IT', 'AS I SEE\nIT, YES', 'MOST LIKELY', 'OUTLOOK\nGOOD', 'SIGNS POINT\nTO YES', 'REPLY HAZY\nTRY AGAIN', 'ASK AGAIN\nLATER', 'BETTER NOT\nTELL YOU\nNOW', 'CANNOT\nPREDICT\nNOW', 'CONCENTRATE\nAND ASK\nAGAIN', 'DONT COUNT\nON IT', 'MY REPLY\nIS NO', 'MY SOURCES\nSAY NO', 'OUTLOOK\nNOT SO\nGOOD', 'VERY\nDOUBTFUL'];
var fortune = 'place';





function setup() {
    // put setup code here
    createCanvas(800, 600);
    background(0, 0, 75);


    fortune = random(fortunes);

    //define gradient colors
    b1 = color(0, 0, 80);
    b2 = color(0);

}


function draw() {
    // Background
    setGradient(0, 0, width / 2, height, b1, b2, Y_AXIS);
    setGradient(width / 2, 0, width / 2, height, b1, b2, Y_AXIS);
    noCursor();
    shakeIt();

}

function setGradient(x, y, w, h, c1, c2, axis) {
    noFill();
    if (axis == Y_AXIS) {  // Top to bottom gradient
        for (var i = y; i <= y + h; i++) {
            var inter = map(i, y, y + h, 0, 1);
            var c = lerpColor(c1, c2, inter);
            stroke(c);
            line(x, i, x + w, i);
        }
    }
    else if (axis == X_AXIS) {  // Left to right gradient
        for (var i = x; i <= x + w; i++) {
            var inter = map(i, x, x + w, 0, 1);
            var c = lerpColor(c1, c2, inter);
            stroke(c);
            line(i, y, i, y + h);
        }
    }
}

function shakeIt() {
    if (mouseX == pmouseX && timer < 500) {
        timer = timer + 0;
    }
    else {
        timer = timer + 5;
    }

    if (timer < 100) {
        eightBallEight();
    }
    else {
        eightBallFortune();
    }

}

function mouseClicked() {
    timer = 0;
    fortune = random(fortunes);
}

function eightBallEight() {

    fill(20);
    ellipse(mouseX, mouseY, 400, 400);
    fill(0);
    ellipse(mouseX - 10, mouseY - 10, 350, 350);
    fill(20);
    ellipse(mouseX - 60, mouseY - 60, 200, 200);

    fill(190);
    ellipse(mouseX, mouseY, 200, 200);
    fill(0);
    textSize(150);
    textAlign("center");
    textFont('Courier New');
    strokeWeight(5);
    text("8", mouseX, mouseY + 50);
}

function eightBallFortune() {


    fill(20);
    ellipse(mouseX, mouseY, 400, 400);
    fill(0);
    ellipse(mouseX - 10, mouseY - 10, 350, 350);
    fill(20);
    ellipse(mouseX - 60, mouseY - 60, 200, 200);

    fill(0, 0, 40);
    stroke(50);
    ellipse(mouseX, mouseY, 200, 200);
    noStroke();
    fill(0, 0, 200);
    triangle(mouseX - 55, mouseY - 40, mouseX + 55, mouseY - 40, mouseX, mouseY + 50);
    fill(190, 190, 255);
    textSize(11);
    textAlign("center");
    textFont('Helvetica');
    text(fortune, mouseX, mouseY - 25);
}