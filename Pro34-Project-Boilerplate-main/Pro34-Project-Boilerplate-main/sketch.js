
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var caminhao
function preload(){
  fundoimg = loadImage("fundo.jpg")
}


function setup() {
  createCanvas(1600,700);
  
  engine = Engine.create();
  world = engine.world;
  caminhao = Bodies.rectangle(800,200,100,100)
World.add(world,caminhao)
}


function draw() 
{
  background(fundoimg);
  Engine.update(engine);
  rect(caminhao.position.x,caminhao.position.y,100,100)
 
}

