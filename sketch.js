
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodsGroup , obstaclesGroup;

var ground;
var score = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
monkey=createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1
 
  ground=createSprite(400,350,900,10)
  ground.velocityX=-4
  ground.x=ground.width/2
  
  
  FoodsGroup=new Group()
 obstaclesGroup=new Group()
  
}


function draw() {

  background(255);
  textSize("20");
  text("Survival:"+score,160,30);
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
   if(keyDown("space")&&monkey.y>=180){
    monkey.velocityY=-15;
  }
  
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  
 console.log(monkey.y);
  
  spawnBananas();
  
  
  drawSprites();
  
}
function spawnBananas(){
  if(frameCount % 60 === 0){
    banana=createSprite(600,250,40,10);
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.y = Math.round(random(120,200));
    banana.velocityX=-4;
    FoodsGroup.add(banana);
  }
 
}





