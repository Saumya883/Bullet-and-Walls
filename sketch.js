var wall,thicjkness;
var bullet,speed,weight;
function setup() {
  createCanvas(1600,400);
 
  thickness=random(22,83)
  speed = random(233,321)
  weight = random(30,52)
 
  bullet=createSprite(100,250,50,50)
  bullet.velocityX = speed;
  bullet.shapeColor="black"

  wall=createSprite(1500,200,60,height/2)
  
  
}

function draw() {
  background(255,255,255); 
  hasCollided();
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  
    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }
  
    if(damagw<10){
      wall.shapeColor=color(0,225,0);
    }
  }
  drawSprites();
  } 
  

function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet6.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;

  


}