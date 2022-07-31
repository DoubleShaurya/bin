
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, groundObj;

function preload () {
	
}

function setup() {
	createCanvas(1600, 700);

	ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	engine = Engine.create();
	world = engine.world;

	ball = Bodies.circle(50, 290, 20, ball_options);
	World.add(world, ball);

	console.log(ball);

	groundObj = new Ground(width/2, 670, width, 20);
	leftSide = new Ground(1100, 600, 20, 120);
	rightSide = new Ground(1350, 600, 20, 120);

	console.log(groundObj);
	console.log(leftSide);

	// Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  ellipseMode(RADIUS);

  background(0);

  ellipse(ball.position.x, ball.position.y, 20);
  groundObj.display();
  leftSide.display();
  rightSide.display();
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode == RIGHT_ARROW) {
		Body.applyForce(ball, {x:0, y:0}, {x:85, y:-85});
	}
	if (keyCode == LEFT_ARROW) {
		Body.applyForce(ball, {x:0, y:0}, {x:-85, y:85});
	}
}