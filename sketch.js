const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var block1 , ground , string , hex , backgroundImg , score=0 ;

function preload(){
  getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    ground=new Ground(380,360,200,20);
    ground1=new Ground(600,500,1200,20);
    block1=new Block(330,235,"lightblue");
    block2=new Block(360,235,"lightblue");
    block3=new Block(390,235,"lightblue");
    block4=new Block(450,235,"lightblue");
    block5=new Block(420,235,"lightblue");
    block6=new Block(360,195,"pink");
    block7=new Block(390,195,"pink");
    block8=new Block(420,195,"pink");
    block9=new Block(390,155,rgb(0, 255, 204));
    hex = new Hex(1000,250);
    string=new Launcher(hex.body,{x:800,y:250});

}

function draw() {
  if(backgroundImg)
        background(backgroundImg);
  Engine.update(engine);
  
  drawSprites();

  text("Score - "+score,900,100);
  ground.display();
  ground1.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  hex.display();
  string.display();

}
function mouseDragged()
{
	Matter.Body.setPosition(hex.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
  string.fly();
  score=score+Math.round(hex.body.speed);
  
}
function keyPressed(){
  if(keyCode === 32){
    string.attach(hex.body);
  }
}
async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
      bg = "bg2.png";
  }
  else{
      bg = "bg1.png";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}
