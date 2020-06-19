class Game{
  constructor(){
    this.gameState=0;

  }

  updateGameState(lgamestate)
  {
    this.gameState=lgamestate
  }

 start(){
    if(this.gameState === 0){
      
      form = new Form(this);
      form.display();
    }
}




play(){
  background("blue");
 wall1 = createSprite(displayWidth/20, displayHeight/1.285, displayWidth/2.15, displayHeight/5.142);
  wall2 = createSprite(displayWidth/2.969, displayHeight/1.304, 50, 180);
  wall3 = createSprite(565, 680, 50, 200);
  wall4 = createSprite(805, 670, 350, 220);
  wall5 = createSprite(1200, 575, 900, 30);
  wall6 = createSprite(1300, 500, 400, 30);
  wall7 = createSprite(950, 480, 200, 20);
  wall8 = createSprite(700, 460, 200, 20);
  wall9 = createSprite(350, 440, 400, 20);
  var wall10 = createSprite(35, 420, 100, 20);
  wall11 = createSprite(-125, 380, 100, 20);
  wall12 = createSprite(35, 330, 100, 20);
  wall13 = createSprite(350, 320, 400, 20);
  wall14 = createSprite(650, 320, 400, 20);
  wall15 = createSprite(675, 230, 350, 20)
  wall16 = createSprite(935, 290, 100, 20);
  wall17 = createSprite(1100, 260, 100, 20);
  wall18 = createSprite(1650, 575, 700, 30);
  wall19 = createSprite(1850, 555, 20, 10);
  lava1 = createSprite(670, 560, 15, 5);
  lava1.shapeColor = "red";
  lava2 = createSprite(745, 560, 15, 5);
  lava2.shapeColor = "red";
  lava3 = createSprite(820, 560, 15, 5);
  lava3.shapeColor = "red";
  lava4 = createSprite(895, 560, 15, 5);
  lava4.shapeColor = "red";
  lava5 = createSprite(1250, 535, 550, 10);
  lava5.shapeColor = "red";
  lava6 = createSprite(1525, 495, 10, 100);
  lava6.shapeColor = "red";

  light1 = createSprite(950, 560, 45, 5);
  light1.shapeColor = "yellow";

  jump1 = createSprite(1575, 560, 45, 5);
  jump1.shapeColor = "purple";

  checkPoint1 = createSprite(1175, 485, 45, 5);
  checkPoint1.shapeColor = "green";

  var lavaA1 = createSprite(600, 300, 10, 20);
  lavaA1.shapeColor = "red";
  var lavaA2 = createSprite(660, 250, 10, 20);
  lavaA2.shapeColor = "red";
  var lavaA3 = createSprite(720, 300, 10, 20);
  lavaA3.shapeColor = "red";
  var lavaA4 = createSprite(780, 250, 10, 20);
  lavaA4.shapeColor = "red";

  var speed1 = createSprite(1100, 250, 45, 5);
  speed1.shapeColor = "pink";
  ball = createSprite(70, 600, 30, 30);
  ball.shapeColor = "green";
 

  

  wall =[wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19];
  lava = [lava1, lava2, lava3, lava4, lava5, lava6];
  light = [light1];
  jump = [jump1];
  lavaA = [lavaA1, lavaA2, lavaA3, lavaA4];
  speed = [speed1]
    background("blue");
  camera.position.x = ball.x + 200;
  camera.position.y = displayHeight/2;
	ball.velocityY = ball.velocityY+0.5;
  
	ball.collide(wall);

   

  if(keyWentDown("w")) {
  	ball.velocityY = -7;
    
  }
  
  
  
  if(gameState === 1){
    homeScreen.visible = false;
    button.visible = false;
    obstacles.visible = true;
  }
  if(keyWentDown("a")){
  	ball.velocityX = -4;
  }
  if(keyWentUp("a")){
  	ball.velocityX = 0;
  }
  if(keyWentDown("d")){
  	ball.velocityX = 4;
  }
  if(keyWentUp("d")){
  	ball.velocityX = 0; 
  }

  if(ball.isTouching(lava)){
  	ball.x = 70;
  	ball.y = 600;
  	ball.width = 30;
  	ball.height = 30;
  }

  if(ball.y > displayHeight){
  	ball.x = 70;
  	ball.y = 600;
  	ball.width = 30;
  	ball.height = 30;
  }

  if(ball.isTouching(light) && keyWentDown("s")){
  	ball.width = 10;
  	ball.height = 10;
  }

  if(ball.isTouching(jump) && keyWentDown("s")){
  	ball.width = 30;
  	ball.height = 30;
  	ball.velocityY = -75;
  }

  if(keyWentUp("s")){
  	ball.velocityY = 0;
  }

  if(ball.isTouching(obstacles)){
    ball.x = 1175;
    ball.y = 485;
    ball.width = 30;
    ball.height = 30;
  }

  if(ball.isTouching(lavaA)){
    ball.x = 1175;
    ball.y = 485;
    ball.width = 30;
    ball.height = 30;
  }

  if(ball.isTouching(speed) && keyWentDown("s")){
    ball.velocityX = 20;
  }
  
  spawn();
  spawn2();
  spawn3();
  spawn4();
  drawSprites();

}

}













  function spawn(){
  if(frameCount % 40 === 0) {
    var obstacle1 = createSprite(500,10,10,100);
    obstacle1.shapeColor = "red";
    obstacle1.velocityY = 6;
    
    //generate random obstacles
    
    
    //assign scale and lifetime to the obstacle           
    //obstacle.scale = 0.5;
    obstacle1.lifetime = 65;
    obstacles.push(obstacle1)

}
}
  function spawn2(){
  if(frameCount % 50 === 0) {
    var obstacle2 = createSprite(400,10,10,100);
    obstacle2.shapeColor = "red";
    obstacle2.velocityY = 7;
    
    //generate random obstacles
    
    
    //assign scale and lifetime to the obstacle           
    //obstacle.scale = 0.5;
    obstacle2.lifetime = 57;
    obstacles.push(obstacle2)

}
}

 function spawn3(){
  if(frameCount % 60 === 0) {
    var obstacle3 = createSprite(200,10,10,100);
    obstacle3.shapeColor = "red";
    obstacle3.velocityY = 8;
    
    //generate random obstacles
    
    
    //assign scale and lifetime to the obstacle           
    //obstacle.scale = 0.5;
    obstacle3.lifetime = 50;
    obstacles.push(obstacle3)
  }
}

function spawn4(){
  if(frameCount % 70 === 0) {
    var obstacle4 = createSprite(300,10,10,100);
    obstacle4.shapeColor = "red";
    obstacle4.velocityY = 7;
    
    //generate random obstacles
    
    
    //assign scale and lifetime to the obstacle           
    //obstacle.scale = 0.5;
    obstacle4.lifetime = 55;
    obstacles.push(obstacle4)
  }
}