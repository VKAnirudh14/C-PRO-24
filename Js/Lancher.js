class Chain {
    constructor(body, point) {
        var options = {
            bodyA: body,
            pointB: point,
            length: 0,
            stiffness: 0.009
        }

        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }

    launch() {
        this.sling.bodyA = null;
    }

    display() {
        if (this.sling.bodyA) {
            var bodyA = this.sling.bodyA.position;
            var pointB = this.sling.pointB;

            line(bodyA.x, bodyA.y, pointB.x, pointB.y);
        }
    }
}