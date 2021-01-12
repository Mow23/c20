var abc
var bcd
function setup() {
  createCanvas(800,400);
  abc = createSprite(400, 200, 50, 50);
  bcd = createSprite(590, 280, 80, 50);
}

function draw() {
  background("orange"); 

  abc.velocityX = -2;
  bcd.velocityX = 2.5;
  abc.velocityY = 3;
  bcd.velocityY = 3.5;

  abc.y = mouseY; 
  abc.x = mouseX;

  if(bcd.y - abc.y <= (abc.height/2) + (bcd.height/2) && abc.y - bcd.y <= (abc.height/2)+(bcd.height/2)
  && (bcd.x - abc.x <= (abc.width/2) + (bcd.width/2) && abc.x - bcd.x <= (abc.width/2)+(bcd.width/2))) {
  abc.shapeColor = "pink";
  bcd.shapeColor = "green";
  }else{
    abc.shapeColor = "grey";
bcd.shapeColor = "grey"
  }

if(bcd.y - abc.y <= (abc.height/2) + (bcd.height/2) && abc.y - bcd.y <= (abc.height/2)+(bcd.height/2)){
  abc.velocityY = -1 * abc.velocityY;
  bcd.velocityY = -1 * bcd.velocityY;
}

if(bcd.x - abc.x <= (abc.width/2) + (bcd.width/2) && abc.x - bcd.x <= (abc.width/2)+(bcd.width/2)){
  abc.velocityX = -1 * abc.velocityX;
  bcd.velocityX = -1 * bcd.velocityX;
}
  drawSprites();
}