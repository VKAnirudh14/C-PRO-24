const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;

var engine;
var world;

var ground;

var tank;

var projectile;
var string;

var state = 0;
var conon_state = 0;

var Tar1, Tar2, Tar3, Tar4, Tar5;

function setup() {
    createCanvas(1000, 600);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(500, 600, 1000, 10);
    tank = new Tanker(50, 590);

    projectile = new CanonBall(45, 555, 40);
    string = new Chain(projectile.body, { x: 100, y: 465 });

    Tar1 = new Target(950, 500, 80, 80);
    Tar2 = new Target(950, 400, 80, 80);
    Tar3 = new Target(950, 300, 80, 80);
    Tar4 = new Target(950, 200, 80, 80);
    Tar5 = new Target(950, 100, 80, 80);
}

function draw() {
    background(255);
    Engine.update(engine);
    ground.display();
    tank.display();

    noStroke();
    fill(0);
    textSize(18);
    textFont("Verdana");
    text("Press Space to launch the CannonBall", 300, 150);
    text("Press BackSpace to reload the Same CannonBall", 250, 180);
    textSize(11);
    text("Note: Wait for 5 Seconds after you pressed the BackSpace to reload", 280, 200);

    if (state == 1 && conon_state == 1) {
        projectile.display();
    }

    Tar1.display();
    Tar2.display();
    Tar3.display();
    Tar4.display();
    Tar5.display();
}

function keyPressed() {
    if (keyCode == 32 && conon_state == 0) {
        Matter.Body.setPosition(projectile.body, { x: 40, y: 560 });
        string.display();
        state = 1;
        conon_state = 1;
    }

    if (keyCode == 8 && conon_state == 1) {
        string = new Chain(projectile.body, { x: 100, y: 465 });
        conon_state = 0;
    }
}

function keyReleased() {
    if (keyCode == 32) {
        string.launch();
    }
}