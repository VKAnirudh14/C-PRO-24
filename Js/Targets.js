class Target {
  constructor(x, y, w, h) {
    var options = {
      frictionAir: 0.003,
      friction: 0.3,
      frictionStatic: 1,
      density: 0.4,
      inertia: Infinity,
      restitution: 0.7
    }
    this.target = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.target);
  }

  display() {
    var pos = this.target.position;
    var angle = this.target.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    stroke(255);
    fill(0);
    rect(0, 0, this.w, this.h);
    pop();
  }
}
