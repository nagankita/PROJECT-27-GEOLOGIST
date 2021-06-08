
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){

}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground1=new Ground(600,780,1200,30)
stone1=new Stone(400,100,100,100)
stone2=new Stone(200,50,50,50)
stone3=new Stone(650,450,70,70)
rubber1=new Rubber(300,200,30)
rubber2=new Rubber2(750,200,35)
hammer1=new Hammer(500,100,160,30)
sand1=new Sand(500,530,7)
sand2=new Sand(520,600,7)
sand3=new Sand(550,590,7)
sand4=new Sand(570,400,7)
sand5=new Sand(560,300,7)
sand6=new Sand(550,200,7)
sand7=new Sand(300,250,7)
sand8=new Sand(547,123,7)
iron1=new Iron(700,400,100,100)
iron2=new Iron(356,450,100,100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  
  drawSprites();
  ground1.display()
 stone1.display()
 stone2.display()
 stone3.display()
 rubber1.display()
 rubber2.display()
 hammer1.display()
 sand1.display()
 sand2.display()
 sand3.display()
 sand4.display()
 sand5.display()
 sand6.display()
 sand7.display()
 sand8.display()
 iron1.display()
 iron2.display()
 
}



