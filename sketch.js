
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
//groundSprite=creatSprite(width/2,height-35,width,10);
//groundSprite.shapeColor=color(255);

ground = Bodies.rectangle(width/2,650,width,10,{isStatic:true});
World.add(world,ground);

	//Create the Bodies Here.
	//paper1 = new Paper(200,400,10);
	paper1 = new Paper(200,400,100);
	//box1 = new Box(width/2,400,80,80);
	box1 = new Box(width/2,400,80,100);


	
	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background("white");
  box1.display();
  
  paper1.display();
  drawSprites();
 
}

function keyPressed() {
if(keyCode === UP_ARROW) {
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:10,y:-14});
}

}

