
var car;
var wall;
var speed;
var weight;




function setup() {
  
createCanvas(1500,400);
  
  
  
  car=createSprite(50, 200, 50, 50);
  car.shapeColor("white")
}

function draw() {
  background("grey");  
  drawSprites();
}