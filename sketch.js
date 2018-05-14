var suitStrings = ["Wands", "Pentacles", "Swords", "Cups"];
var numbers = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Page", "Knight", "King", "Queen"];
//var minorArcana = [];
var suit;
var cardNumber;
var covered1 = true;
var covered2 = true;
var covered3 = true;

var suits = [
    wands,
    pentacles,
    swords,
    cups
]

var majorArcana = ["The Magician", "The Fool", "The Magician", "The High Priestess", "The Empress", "The Emperor",  "The Hierophant", "The Lovers", "The Chariot", "Strength", "The Hermit", "Wheel of Fortune", "Justice", "The Hanged Man", "Death", "Temperance", "The Devil", "The Tower", "The Star", "The Moon", "The Sun", "Judgement", "The World"];

var cardWidth = 300;
var cardHeight = 600;
var cardRadius = 13;
var cardBorderOffset = 21;
var xPos1 = 0;
var yPos = 0;

function setup() {
  // put setup code here
    createCanvas(1400, 800);
    rectMode(CENTER);
    xPos1 = random(width);
    yPos = random(height);
    background(200);
    card1();
    card2();
    card3();
}


function draw() {
    // put drawing code here
}

function mousePressed() {
    var suit = int(random(0, 4));
    var cardNumber = int(random(1, 10));
    var d1 = dist(mouseX, mouseY, width / 5, height / 2);
    var d2 = dist(mouseX, mouseY, width / 2, height / 2);
    var d3 = dist(mouseX, mouseY, width - width / 5, height / 2);
    var d4 = dist(mouseX, mouseY, width, height);
    xPos1 = width / 5 + 70;
    xPos2 = width / 2 + 70;
    xPos3 = width - width / 5 + 70;
    yPos = height / 2 + 100;
    if (d1 < cardWidth / 2 && covered1 == true) {
        stroke(0);
        fill(230, 230, 255);
        rect(width / 5, height / 2, cardWidth - cardBorderOffset, cardHeight - cardBorderOffset, cardRadius);
        fill(255);
        rect(width / 5, height - height / 5, cardWidth - cardBorderOffset, 50);
        for (var i = 0; i < cardNumber; i++) {
            yPos -= 10;
            xPos1 -= 20;
            suits[suit](xPos1, yPos);
            fill(0);
            textAlign(CENTER);
            textSize(24);
            text(numbers[cardNumber - 1] + " of " + suitStrings[suit], width / 5, (height - height / 5) + 8);
        }
        covered1 = false;
    } 
    if (d2 < cardWidth / 2 && covered2 == true) {
        stroke(0);
        fill(230, 230, 255);
        rect(width / 2, height / 2, cardWidth - cardBorderOffset, cardHeight - cardBorderOffset, cardRadius);
        fill(255);
        rect(width / 2, height - height / 5, cardWidth - cardBorderOffset, 50);
        for (var i = 0; i < cardNumber; i++) {
            yPos -= 10;
            xPos2 -= 20;
            suits[suit](xPos2, yPos);
            fill(0);
            textAlign(CENTER);
            textSize(24);
            text(numbers[cardNumber - 1] + " of " + suitStrings[suit], width / 2, (height - height / 5) + 8);
        }
        covered2 = false;
    }
    if (d3 < cardWidth / 2 && covered3 == true) {
        stroke(0);
        fill(230, 230, 255);
        rect(width - width / 5, height / 2, cardWidth - cardBorderOffset, cardHeight - cardBorderOffset, cardRadius);
        fill(255);
        rect(width - width / 5, height - height / 5, cardWidth - cardBorderOffset, 50);
        for (var i = 0; i < cardNumber; i++) {
            yPos -= 10;
            xPos3 -= 20;
            suits[suit](xPos3, yPos);
            fill(0);
            textAlign(CENTER);
            textSize(24);
            text(numbers[cardNumber - 1] + " of " + suitStrings[suit], width - width / 5, (height - height / 5) + 8);
        }
        covered3 = false;
        text("start over", width - 50, height - 25);
    }
    if (covered1, covered2, covered3 == false && d4<100) {
        card1();
        card2();
        card3();
        covered1 = true;
        covered2 = true;
        covered3 = true;
        fill(200);
        rect(width - 50, height - 25, 100, 50);
    }
   
}

/*function generateMinorArcana() {
    var minorArcana = new Array();

    for (var i = 0; i < suits.length; i++) {
        for (var x = 0; x < numbers.length; x++) {
            var card = { Number: numbers[x], Suit: suits[i] };
            minorArcana.push(card);
        }
    }
    return minorArcana;
}*/

function whatSuit(x, y) {
    suits[suit](x, y);

}

function card1() {
    fill(255);
    rect(width / 5, height / 2, cardWidth, cardHeight, cardRadius);
    noStroke;
    fill(116, 33, 122);
    rect(width / 5, height / 2, cardWidth - cardBorderOffset, cardHeight - cardBorderOffset, cardRadius);
    covered = true;
}

function card2() {
    fill(255);
    rect(width / 2, height / 2, cardWidth, cardHeight, cardRadius);
    noStroke();
    fill(116, 33, 122);
    rect(width / 2, height / 2, cardWidth - cardBorderOffset, cardHeight - cardBorderOffset, cardRadius);
    covered = true;
}

function card3() {
    fill(255);
    rect(width - (width / 5), height / 2, cardWidth, cardHeight, cardRadius);
    noStroke;
    fill(116, 33, 122);
    rect(width - (width / 5), height / 2, cardWidth - cardBorderOffset, cardHeight - cardBorderOffset, cardRadius);
    covered = true;
}

function pentacles(b, c) {
    fill(255, 255, 85);
    stroke(0);
    ellipse(b, c+25, 60, 60);
    ellipse(b, c+25, 50, 50);
    beginShape();
    vertex(b, c);
    vertex(b+15, c+45);
    vertex(b-23, c+17);
    vertex(b+23, c+17);
    vertex(b-15, c+45);
    vertex(b, c);
    endShape();
}

function wands(x, y) {
    fill(102, 67, 33);
    stroke(0);
    beginShape();
    curveVertex(x, y);
    curveVertex(x - 3, y - 120);
    curveVertex(x-4, y - 240);
    curveVertex(x-7, y - 280);
    curveVertex(x - 9, y - 290);
    curveVertex(x, y - 300);
    curveVertex(x+5, y - 270);
    curveVertex(x+2, y - 120);
    curveVertex(x, y);
    endShape();
    line(x - 3, y - 120, x + 2, y - 120);
}

function cups(x, y) {
    fill(255, 200, 0);
    stroke(0);
    beginShape();
    vertex(x, y + 14);
    vertex(x, y + 16);
    curveVertex(x, y + 16);
    curveVertex(x + 5, y + 30);
    curveVertex(x + 27, y + 60);
    curveVertex(x + 15, y + 100);
    curveVertex(x + 7, y + 105);
    curveVertex(x + 5, y + 110);
    curveVertex(x + 10, y + 110);
    vertex(x+10, y + 110);
    vertex(x + 50, y + 110);
    curveVertex(x + 50, y + 110);
    curveVertex(x + 55, y + 110);
    curveVertex(x + 53, y + 105);
    curveVertex(x + 45, y + 100);
    curveVertex(x + 33, y + 60);
    curveVertex(x + 55, y + 30);
    curveVertex(x + 60, y + 16);
    curveVertex(x + 60, y + 16);    
    endShape();
    rect(x+29, y+8, 61, 16);
}

function swords(x, y) {
    fill(222, 222, 255);
    stroke(0);
    beginShape();
    vertex(x, y);
    vertex(x - 7, y - 8);
    vertex(x - 7, y - 220);
    vertex(x + 7, y - 220);
    vertex(x + 7, y - 8);
    vertex(x, y);
    endShape();
    line(x, y, x, y - 220);
    rect(x, y - 220, 35, 10);
    ellipse(x, y - 265, 12, 12);
    ellipse(x-20, y - 220, 12, 12);
    ellipse(x+20, y - 220, 12, 12);
    rect(x, y - 245, 12, 40);
    rect(x, y - 225, 12, 20);
    for (var i = 0; i < 10; i++) {
        rect(x, y - 225, 12, 1);
        y -= 4;
    }
}