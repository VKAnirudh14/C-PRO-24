class Tanker {
  constructor(x, y) {
    var options = {
      isStatic: true
    }
    
    this.base1 = Bodies.rectangle(x, y, 60, 10);
    this.base2 = Bodies.rectangle(x, y - 15, 60, 10);

    this.barrel = Bodies.rectangle(x - 430, y - 260, 70, 45);

    this.body = Bodies.circle(x, y - 50, 65);
  };

  display() {

    rectMode(CENTER);
    fill(255);
    stroke(0);
    strokeWeight(1.5);
    push();
    rotate(-45);
    rect(this.barrel.position.x, this.barrel.position.y, 70, 45);
    pop();

    ellipse(this.body.position.x, this.body.position.y, 90);

    rect(this.base1.position.x, this.base1.position.y, 90, 15);
    rect(this.base2.position.x, this.base2.position.y, 90, 15);



  };
}
