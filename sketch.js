var fixedrect,movingrect

function setup() {
  createCanvas(800,400);
 fixedrect= createSprite(200, 200, 50, 50);
 fixedrect.shapeColor="green"
 movingrect=createSprite(400,200,80,30)
 movingrect.shapeColor="green"
}

function draw() {
  background(0,0,0);  
  movingrect.x=World.mouseX
  movingrect.y=World.mouseY
  if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2){
    fixedrect.shapeColor="red" 
    movingrect.shapeColor="red"
  }
  else
  {
    fixedrect.shapeColor="green"
    movingrect.shapeColor="green"
  }
  drawSprites();
}