class CanonBall {
  constructor(x, y, radius, bodyA, pointB) {
    var options = {
      "density": 1.5,
      "friction": 1.0,
      "restitution": 0.8,
      "gravity": 0.6
      // "frictionAir": 0.015

    }

    this.body = Bodies.circle(x, y, radius, options);
    World.add(world, this.body);
    this.radius = radius;
  };

  display() {
    var pos = this.body.position;

    push();
    translate(pos.x, pos.y);
    fill(255);
    stroke(0);
    strokeWeight(2);
    ellipse(0, 0, this.radius);
    pop();

  };
};
