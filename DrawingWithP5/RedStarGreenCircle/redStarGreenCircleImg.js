function setup() {
  createCanvas(200, 200);
}

function draw() {
  background(0,12,102);

  push();
  stroke("white")
  strokeWeight(3);
  fill(0,102,0);
  circle(100,100,100);
  fill(255,0,0);
  star(100, 100, 20, 50, 5);
  pop();
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = .95; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

