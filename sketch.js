
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,dustBinImage
var ground,paper,dustBin1,dustBin2,dustBin3,fakeDustbin

function preload() {
	dustBinImage=loadImage("sprites/dustbingreen.png");
}

function setup() {
	createCanvas(1500, 800);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(750,height,1500,100);
	paper = new Paper(0,0,400,720);
	dustBin1 = new DustBin(1105,625,50,260);
	dustBin2 = new DustBin(1315,625,50,260);
	dustBin3 = new DustBin(1210,725,180,50);
	fakeDustbin = createSprite(1210,625,100,100);
	fakeDustbin.addImage(dustBinImage);
	Engine.run(engine);
	
  
}

function draw() {
	rectMode(CENTER);
	background(255,245,234);
	Engine.update(engine);
	ground.display();
	paper.display();
	dustBin1.display();
	dustBin2.display();
	dustBin3.display();
	keyPressed();
	drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(paper.body,paper.body.position,{x: 85,y: -85});
	}
}



