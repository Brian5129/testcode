var david
function setup() {
  createCanvas(1000,700);
david=createSprite(80,70,100,100)
}

function draw() 
{
  background("yellow");
  if(keyDown("left")){
    david.x=david.x-2
  }
  if(keyDown("right")){
    david.x=david.x+2
  }
  if(keyDown("up")){
    david.y=david.y-2
  }
  if(keyDown("down")){
    david.y=david.y+2
  }
  drawSprites()

}




