var garden,rabbit;
var gardenImg,rabbitImg;
var apple;
var appleImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
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
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  function createApples(){
    apple=createSprite(random(50,350),40,10,10);
    apple.addImage(appleImg);
    apple.scale =0.05;
    apple.VelocityY= -13;
  }

  drawSprites();
}