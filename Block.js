class Block {
  constructor(x, y,v) {
    var options = {
      isStatic:false,
        'restitution':0.8,
        'friction':0.6,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, 30, 40, options);
    this.v=v;
    

    World.add(world, this.body);
  }
  display(){
     var pos =this.body.position;
    var angle = this.body.angle;
     
    if(this.body.speed > 7){
       World.remove(world, this.body);
       this.Visiblity = this.Visiblity - 5;
       tint(255,this.Visiblity);
     }else{
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill(this.v);
      rect(0,0, 30, 40);
      pop();
     }
  }
};
