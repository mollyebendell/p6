// Examples use USGS Earthquake API:
//   https://earthquake.usgs.gov/fdsnws/event/1/#methods
var weather;
var alphaString = "abcdefghijklmnopqrstuvwxyz";
var alphabet = [];
var xAlpha = [];
var forecast = [];
var xFore = [];
var xPos = 0;
var yPos = 0;
var xxPos = 0;
var d = 0;
var letter = "rain";
function preload() {
  // Get the most recent earthquake in the database
  var url =
   'http://api.openweathermap.org/data/2.5/weather?q=Baltimore&APPID=bbe359ade9f1800342fa96cb94171581';
   //http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22
  weather = loadJSON(url);
}
function setup() {
  createCanvas(800,600);
  console.log(weather);
  alphabet = alphaString.split("");
  background(200, 205, 255);
  var cityname = weather.name;
  textAlign(CENTER);
  //text(weathertemp, 0, height - 200, width, 30);
  textSize(24);
  stroke(255);
  textFont('Georgia');
  text(cityname, 0, height - 100, width, 30);
  textSize(48);
  text("Ouither Forecast", width / 2, 75);
  textSize(18);
  var lineSpace = 110;
  text("Is your weather forecast too easy to understand?", width / 2, lineSpace+20);
  text("Do you long for the obfuscation of a Ouija Board combined with the magic of digital media?", width / 2, lineSpace + 40);
  text("Think there's nothing you can do? There is!", width / 2, lineSpace + 60);
  text("Move your mouse across the alphabet to reveal your weather forecast.", width / 2, lineSpace + 80);
}
function draw() {
  var letter = weather.weather[0].description;
  var weathertemp = weather.main.temp;
  var weathertemp= Math.floor(Math.trunc((weather.main.temp)*9/5-459.67));
  //text(letter, 0, height - 140, width, 30);
  textSize(40);
  xPos = 30;
  yPos = height/2;
  xxPos = 200;
  forecast = letter.split("");
  for (i = 0; i < 26; i++) {
      xAlpha.push(xPos);
      text(alphabet[i], xPos, yPos);
      xPos += 30;
      //text(xAlpha[i], xPos, yPos + 120);
  }
  for (i = 0; i < forecast.length; i++){
      var t = (alphabet.indexOf(forecast[i]) + 1);
      //text(t * 30, xxPos, 250);
      xxPos += 80;
      d = dist(mouseX, mouseY, t * 30, height/2);
      if (d < 50) {
          writeWeather(forecast[i], forecast.indexOf(forecast[i]) * 30);
      }
  }

  function writeWeather(x, y) {
      text(x, y+width/2, 400);
  }

  /*for (i = 0; i < forecast.length; i++) {
      var j = alphabet.indexOf(forecast[i])*35;
      xFore.push(j);
      text(xFore[i], x, yPos + 50);
      x += 50;
      xPos = 25;
      text(forecast[i], xPos, yPos + 30);
  }*/

}

