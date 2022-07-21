var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

function preload() {
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  trex_collided = loadImage("trex_collided.png");

  groundImage = loadImage("ground2.png")
}

function setup() {
createCanvas(600, 200);

//create a trex sprite
trex = createSprite(50,160,20,50);
trex.addAnimation("running", trex_running);
trex.scale = 0.5;
  
//create a ground sprite
ground = createSprite(200,180,400,20);
ground.addImage("ground",groundImage);
ground.x = ground.width /2;
ground.velocityX = -4;
  
}

function draw() {
background(220);

//jump when the space button is pressed
if (keyDown("space")) {
  trex.velocityY = -10;
}

trex.velocityY = trex.velocityY + 0.8



trex.collide(ground);
spawnClouds()
drawSprites();
}
 

function spawnClouds(){ if(frameCount % 60 == 0 ){
cloud = createSprite(600,100,40,10)
cloud.y = Math.round(random(10,160));
 cloud.addImage("cloud",cloudImage);
 cloud.velocityX = -3 
cloud.scale = 0.5;
cloud.depth = trex.depth 
trex.depth +=1;
 } }