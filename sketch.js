var ground ;
var trex ,trex_running;
var groundimg
var invisibleGround;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundimg = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite

  trex = createSprite(200,100);
  trex.addAnimation("run",trex_running);
  trex.scale = 0.5;


//Creating Ground
  ground = createSprite(300,170,600,10);
  ground.addImage(groundimg);
  ground.velocityX = -5;
 // console.log(ground);
 // console.log(groundimg)

 invisibleGround = createSprite(300,175,600,10);
 invisibleGround.visible = true;
 trex.debug = true;
}

function draw(){
  background("white")
  //Jumping
  if(keyDown("space")&&trex.isTouching(ground)){
    trex.velocityY = -5;
  }
  trex.velocityY = trex.velocityY+ 0.5;
 trex.collide(invisibleGround);

 //reseting ground
 if(ground.x <0){
   ground.x = 300;
 }
drawSprites();
}
