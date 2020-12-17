
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ground,dustbin1,dustbin2,dustbin3;
var engine,world;
var bin_img,bin;

function preload()
{
	bin_img = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);
bin=createSprite(650,540,50,50)
  bin.addImage(bin_img);
bin.scale=0.9
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(400,680,800,20);
ball=new Paper(50,600,50)
	Engine.run(engine);
  dustbin1 = new Dustbin(750,555,15,250)
  dustbin2 = new Dustbin(550,555,15,250)
dustbin3 = new Dustbin(650,670,200,15)
keyPressed();
}


function draw() {
  rectMode(CENTER);
  background("white");
  ball.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
}

function keyPressed(){
  if (keyCode===UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:300,y:-300})
  }
}