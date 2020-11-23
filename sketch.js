const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
var plinkos = [];
var divisons = [];

function setup() {
	createCanvas(480,800);

	engine = Engine.create();
	world = engine.world;

	groundObj = new Ground(240,790,480,20);

	for(var k=0; k <= 480; k = k+80){
		divisons.push(new divison(k,650,10,260));
	}
	for(var j=40; j <= 480; j=j+50){
		plinkos.push(new plinko(j,450));
	}
	for(var j=15; j <= 480; j=j+50){
		plinkos.push(new plinko(j,380));
	}
	for(var j=40; j <= 480; j=j+50){
		plinkos.push(new plinko(j,310));
	}
	for(var j=15; j <= 480; j=j+50){
		plinkos.push(new plinko(j,240));
	}
	for(var j=40; j <= 480; j=j+50){
		plinkos.push(new plinko(j,170));
	}
	for(var j=15; j <= 480; j=j+50){
		plinkos.push(new plinko(j,100));
	}

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);

  groundObj.display();

  for(var k=0; k<divisons.length; k++){
	  divisons[k].display();
  }
  for(var j=0; j<plinkos.length; j++){
	  plinkos[j].display();
  }

  if(frameCount % 60 === 0){
	particles.push(new particle(random(100,400),10,10));
  }

  for(var i=0; i<particles.length; i++){
	  particles[i].display();
  }

  drawSprites();
}



