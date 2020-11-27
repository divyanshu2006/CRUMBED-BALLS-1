const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground, dustbin1, dustbin2, dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
  paper = new Paper(50, 350, 20);
  ground = new Ground(400, 690, 800, 20);
  dustbin1 = new Dustbin(650, 670, 100, 20);
  dustbin2 = new Dustbin(590, 645, 20, 70); 
  dustbin3 = new Dustbin(710, 645, 20, 70);
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();

  drawSprites();
 
}
function keyPressed(){
  if(keyCode = UP_ARROW){
    Body.applyForce(paper.body, paper.body.position, {x:50, y:-85});
  }
}