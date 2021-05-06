var spaceShipImage;
var bgImage;
var spaceShip;
var alien,alienImage,alien2,alienImage2;
var laser,laserImage,laser2,laserImage2;
var earth,earthImage;
var asteroid,asteroidImage;
var buttonImage1,buttonImage2;
var button1,button2;
var laserSound1,laserSound2;
var asteroidSound;
var score=0
var des=0
var kill=0

var nice,niceImage;
var good,goodImage;
var excellent,excellenImage;

function preload()
{
  bgImage=loadImage("SpaceBg.PNG");
  spaceShipImage=loadImage("plane.PNG");
  alienImage=loadImage("alien2.PNG");
  laserImage=loadImage("laser.PNG");
  laserImage2=loadImage("laser2.PNG");
  alienImage2=loadImage("alien1.PNG");
  earthImage=loadImage("Earth.PNG");
  asteroidImage=loadImage("asteroid.PNG");
  buttonImage1=loadImage("button1.PNG");
  buttonImage2=loadImage("button2.PNG");
  niceImage=loadImage("nice.PNG");
  goodImage=loadImage("good.PNG");
  excellenImage=loadImage("excellent.PNG");

  laserSound1=loadSound("laser.mp3")
  laserSound2=loadSound("Ast.mp3")
  asteroidSound=loadSound("laser2.mp3")
}


function setup() {
  createCanvas(750, 900);
  
  spaceShip=createSprite(350,600,50,50)
  spaceShip.addImage(spaceShipImage);
  spaceShip.scale=0.3

  earth=createSprite(370,1250,50,50);
  earth.addImage(earthImage);
  earth.scale=1.5

  button1=createSprite(550,670,50,50);
  button1.addImage(buttonImage1);
  button1.scale=0.2;

  button2=createSprite(650,580,50,50);
  button2.addImage(buttonImage2);
  button2.scale=0.17;

  nice=createSprite(340,100,150,100);
  nice.addImage(niceImage);
  nice.scale=0.5
  nice.visible=false;

  good=createSprite(340,100,150,100);
  good.addImage(goodImage);
  good.visible=false;

  excellent=createSprite(340,100,150,100);
  excellent.addImage(excellenImage);
  excellent.scale=0.2
  excellent.visible=false;
  
  alienGroup = new Group();
  alienGroup2 = new Group();
  laserGroup=new Group();
  laserGroup2=new Group();
  asteroidGroup=new Group();
}

function draw() {
  background(bgImage);

if(keyDown(LEFT_ARROW))
{
  spaceShip.x = spaceShip.x-7;
}

if(keyDown(RIGHT_ARROW))
{
  spaceShip.x=spaceShip.x+7;
}

if(mousePressedOver(button1))
{
   createLaser2();
   laserSound1.play();
}

if(mousePressedOver(button2))
{
   createLaser();
   laserSound2.play();
}


if(laserGroup.isTouching(alienGroup))
{
 alienGroup.destroyEach();
 laserGroup.destroyEach();
 score=score+1;
 kill=kill+1
}

if(laserGroup.isTouching(alienGroup2))
{
 alienGroup2.destroyEach();
 laserGroup.destroyEach();
 score=score+1;
 kill=kill+1
}

if(laserGroup.isTouching(asteroidGroup))
{
 asteroidGroup.destroyEach();
 laserGroup.destroyEach();
 asteroidSound.play();
 score=score+1;
 des=des+1
}

if(laserGroup2.isTouching(alienGroup))
{
 alienGroup.destroyEach();
 laserGroup2.destroyEach();
 score=score+1;
 kill=kill+1
}

if(laserGroup2.isTouching(alienGroup2))
{
 alienGroup2.destroyEach();
 laserGroup2.destroyEach();
 score=score+1;
 kill-kill+1
}

if(laserGroup2.isTouching(asteroidGroup))
{
 asteroidGroup.destroyEach();
 laserGroup.destroyEach();
 asteroidSound.play();
 score=score+1;
 des=des+1
}

if(score===5)
{
 nice.visible=true;
}

if(score===6)
{
  nice.visible=false;
}

if(score===10)
{
  good.visible=true;
}

if(score===11)
{
  good.visible=false;
}

if(score===15)
{
  excellent.visible=true;
}
if(score===16)
{
   excellent.visible=false;
}



spawnAliens();
spawnAliens2();
spawnAsteroids()

textSize(30);
fill("white")
text("Score:"+score,30,100);
text("Asteroids Destroyed:"+ des,450,100);
text("Aliens Killed:"+kill,550,50);

  drawSprites();
}

function spawnAliens()
{
 if(frameCount%250===0)
 {
    alien=createSprite(350,20,60,60);
    alien.velocityY = 3.5
    alien.addImage(alienImage);
    alien.x=Math.round(random(20,600));
    alienGroup.add(alien);
 }
}
function spawnAliens2()
{
 if(frameCount%300===0)
 {
    alien2=createSprite(350,20,60,60);
    alien2.velocityY = 3 
    alien2.addImage(alienImage2);
    alien2.x=Math.round(random(20,600));
    alienGroup2.add(alien2);
 }
}

function spawnAsteroids()
{
 if(frameCount%350===0)
 {
    asteroid=createSprite(300,20,60,60);
    asteroid.scale=0.2;
    asteroid.velocityY = 2.5 
    asteroid.addImage(asteroidImage);
    asteroid.x=Math.round(random(20,600));
    asteroidGroup.add(asteroid);
 }
}

function createLaser()
{
  laser=createSprite(200, 470, 5, 50);
              laser.addImage(laserImage);
              laser.velocityY=-6;
              laser.x=spaceShip.x;
              laser.scale=0.3;
              laser.lifetime = 80;
              laserGroup.add(laser);
}

function createLaser2()
{
  laser2=createSprite(200, 470, 5, 50);
              laser2.addImage(laserImage2);
              laser2.velocityY=-6;
              laser2.x=spaceShip.x;
              laser2.scale=0.1;
              laser2.lifetime = 80;
              laserGroup2.add(laser2);
}