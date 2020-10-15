
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground= new Roof(330,250,380,20);
bob1=new Bob(200,450);
bob2=new Bob(260,450);
bob3=new Bob(320,450);
bob4=new Bob(380,450);
bob5=new Bob(440,450);
sling1= new Rope(bob1.body,ground.body,-130,0);
sling2= new Rope(bob2.body,ground.body,-70,0);
sling3= new Rope(bob3.body,ground.body,-10,0);
sling4= new Rope(bob4.body,ground.body,50,0);
sling5= new Rope(bob5.body,ground.body,110,0);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("green");
  ground.display();
  bob1.display();
 bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
  keypressed();
  drawSprites();
 
}




