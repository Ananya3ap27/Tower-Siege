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
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(this.v);
    //stroke (rgb(0, 255, 204));
    rect(0,0, 30, 40);
    pop();
  }
};