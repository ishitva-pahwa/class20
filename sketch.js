var fixedRect,movingRect;




function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 100, 50);
  movingRect=createSprite(20,100,50,100);

  fixedRect.shapeColor="red"
  movingRect.shapeColor="red"

  fixedRect.debug=true;
  movingRect.debug=true
  
}

function draw() {
  background(0); 
  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if (fixedRect.x-movingRect.x< fixedRect.width/2+movingRect.width/2&&
    movingRect.x-fixedRect.x< fixedRect.width/2+movingRect.width/2 
    && fixedRect.y-movingRect.y< fixedRect.height/2+movingRect.height/2&&
    movingRect.y-fixedRect.y< fixedRect.height/2+movingRect.height/2){

    fixedRect.shapeColor="yellow"
    movingRect.shapeColor="yellow"
  }

else{
  fixedRect.shapeColor="red"
  movingRect.shapeColor="red"
}

  drawSprites();
}