const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;



function setup() {

  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,height,1200,20);

  box1 = new Box(500,360,80,80);
  box2 = new Box(700,360,80,80);
  log1 = new Log(540,360,300);

  log2 = new Log(580,360,600);
  log6 = new Log(560,360,600);

  log3 =  new Log(660,360,300);

  log7 = new Log(640,360,600);
  log4 = new Log(600,360,600);
  log5 = new Log(620,360,600);

}

function draw() {

  box1.display();
  box2.display();
  ground.display();
  log1.display();

  log2.display();
  log6.display();
  log3.display();

  log7.display();
  log4.display();
  log5.display();

  drawSprites();
}