var rain;

function draw() {
  background(255,255,255);
  var size = random(70,200);
  rain = createSprite(random(0,400),0,size/4,size);
  rain.scale = 0.03;
  rain.velocityY = 15;  
  drawSprites();
}