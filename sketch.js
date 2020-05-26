//creating the variable globally
var bullet, wall;
var speed, weight;
var thickness;

function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet= createSprite(50,200,50,20); 
  bullet.shapeColor= color(255,255,255);
  bullet.velocityX= speed;
  
  wall= createSprite(1200,200,thickness,height/2);
  wall.shapeColor= color(80,80,80)
  
  
}

function draw() {
  //background
  background(0);
  
  //Collison detection
  if(hasCollided(bullet,wall)){
    //making the bullet stop
    bullet.velocityX=0;
    //calculate the damage
    var damage =0.5*weight*speed*speed/22500;
    //to change the color of the wall
    if(damage>10){
      wall.shapeColor=color(255, 0, 0);
    }  
    if (damage<10){
      wall.shapeColor=color(0,128, 0);
    } 
    
  } 
  //display
  drawSprites();
}

//has collided function
function hasCollided(object1, object2){
  object1RightEdge= object1.x + object1.width;
  object2LeftEdge= object2.x;
  if(object1RightEdge >= object2LeftEdge ){
    return true;
  }
  else {
    return false;
  }

}

