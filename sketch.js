let angle = 0;

function setup() {
  createCanvas(710, 400);
  background(230,255,248);
  noStroke();
  fill(0, 102);
}

function draw() {
  // Draw only when mouse is pressed
  if (mouseIsPressed === true) {
    angle += 5;
    let val = cos(radians(angle)) * 12.0;
    for (let a = 0; a < 360; a += 75) {
      let xoff = cos(radians(a)) * val;
      let yoff = sin(radians(a)) * val;
      fill (random(255),random(73),random(166))
      fill (random(228),random(151),random(255))
      ellipse(mouseX + xoff, mouseY + yoff, val, val);
    }
    fill(255);
    ellipse(mouseX, mouseY, 2, 2);
  }
}
