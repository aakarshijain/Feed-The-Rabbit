var garden,rabbit;
var gardenImg,rabbitImg;
var apple;
var appleImg;
var orange;
var orangeImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg= loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x= World.mouseX;
  var select_sprites = Math.round(random(1,3)); 
  if (frameCount % 80 == 0) { 
  if (select_sprites == 1) 
  { 
  createApples(); }
  else if (select_sprites == 2) {
  createOrange(); }

} 
  edges= createEdgeSprites();
  rabbit.collide(edges);

  

  drawSprites();
}
function createApples(){
  apple=createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.scale =0.05;
  apple.velocityY= 3;
}
function createOrange() {
  orangeL = createSprite(random(50, 350),40, 10, 10);
  orangeL.addImage(orangeImg);
  orangeL.scale=0.08; 
  orangeL.velocityY = 3; 
  orangeL.lifetime = 150; 
}
