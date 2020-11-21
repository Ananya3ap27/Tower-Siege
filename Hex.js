class Hex {
    constructor(x, y) {
      var options = {
        isStatic:false,
          'restitution':0.8,
          'friction':0.1,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 30, 30, options);
      
  
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("yellow");
      rect(0,0, 30, 30);
      pop();
  }
}