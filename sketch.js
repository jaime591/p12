var ship,sea,ship_running;
function preload(){
  ship_running=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImg=loadImage("sea.png");
}
function setup(){
  createCanvas(600,600);
  sea=createSprite(0,150,10,10);
  sea.addImage(seaImg);
  sea.velocityX=5
  ship=createSprite(150,400,50,50);
  ship.addAnimation("running",ship_running);
  ship.scale=0.5
  sea.x = sea.width /2;
  sea.velocityX = -4;
}
function draw() {
  background("blue");
  if(sea.x<0){
    sea.x=sea.width/2;
  }
 drawSprites();
}