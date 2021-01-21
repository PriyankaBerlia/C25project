
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var cBall,dBin,dBin1,dBin2, ground,paperImg,dustbinImg;
function preload()
{
	dustbinImg = loadImage("dustbingreen.png");					//added the line
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	cBall = new Paper(160,660,40);
	
	dBin = new Dustbin(600,670,198,10);
	dBin1 = new Dustbin(494.5,635,10,80);
	dBin2 = new Dustbin(705.5,635,10,80);

	//dustbinImg = new Dustbin(700,625,110,110)     //Commented the line
	ground = new Ground(450,690,900,30);;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  ground.display();
  cBall.display();
  
   dBin.display();			//Uncommented the line
   dBin1.display();			//Uncommented the line
   dBin2.display();			//Uncommented the line
//dustbinImg.display();			//Commented the line

  image(dustbinImg,600,620,250,150);			//added the line

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(cBall.body,cBall.body.position,{x:10,y:-20})			//Changed x value to 10 from 12
		//Matter.Body.setStatic(cBall.body,false)
	}
}



