var movendo, fixa;


function setup() {
  createCanvas(800,400);
  fixa = createSprite(400, 200, 50, 50);
  movendo = createSprite(100,100,50,50)
}

function draw() {
  background("black");  
  movendo.x = mouseX;
  movendo.y = mouseY;
  if(tocando(movendo,fixa)){
    fixa.shapeColor = "red"
    movendo.shapeColor = "red"
  }
  else{
    fixa.shapeColor = "green"
    movendo.shapeColor = "green"
  }
  drawSprites();
}

function tocando(spriteA,spriteB){

//SE TIVER TOCANDO
console.log(spriteA.x - spriteB.x );
console.log((spriteA.width + spriteB.width)/2)
if(spriteA.x - spriteB.x < spriteA.width/2 + spriteB.width/2&&spriteA.y - spriteB.y<spriteA.height/2 +spriteB.height/2){
  console.log("entrou")
  return true;
  
}
else{
  console.log(" nao entrou")
  return false;
}
//

// spriteA.x = spriteA.y
//SE NAO TIVER TOCANDO
//return false;
}