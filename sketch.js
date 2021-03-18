var canvas, bgImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0
var database;

var form, player, game;
var cars, car1, car2, car3, car4;

function preload(){

  bgImage = loadImage("Images/Road.png")
}


function setup() {
  canvas = createCanvas(displayWidth - 200, displayHeight - 100);

  database = firebase.database();
  

  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(bgImage); 
  if(playerCount === 4){
    game.update(1);
  } 
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.play();
    text("GAME END", displayWidth/2, displayHeight/2)
  }

  drawSprites();
}