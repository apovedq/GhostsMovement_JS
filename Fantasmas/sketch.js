 let ghost = new Ghost(50,50);
let yellowGhost = new YellowGhost(30, 30);
let redGhost = new RedGhost(70, 30);
let greenGhost = new GreenGhost(150, 30);

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  yellowGhost.display();
  redGhost.display();
  greenGhost.display();
}
