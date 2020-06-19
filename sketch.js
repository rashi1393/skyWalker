var canvas, backgroundImg;
var ball;
var wall, wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19;
var gameState = 0; 
var lava, lava1, lava2, lava3, lava4, lava5, lava6, lava7, lava8, lava9, lava10;
var light, light1;
var jump, jump1;
var checkPoint1;
var delay;
var obstacles = [];
var lavaA;
var button, homeScreen;
var speed, speed1;
var form, game;



function setup() {
  canavs = createCanvas(displayWidth*2, displayHeight);

  
 console.log("Hey!");
  console.log("Use WASD keys to move");
  console.log("Don't fall from heights or touch the red");
  console.log("Use 'S' to activate buttons");
  console.log("Yellow makes you smaller");
  console.log("Purple is a mega jump");
  console.log("Green is a checkpoint");
  
  game = new Game();
  game.start();

}
function draw() {
  
	game.play();
	drawSprites();
}