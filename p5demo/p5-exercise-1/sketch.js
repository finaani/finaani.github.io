let carX = 50;
let angle = 0;


function setup() {
  createCanvas(500, 500);

}

function draw() {
  //background(150, 50, 225, 80);
  //background (228,151,255);
  background(230,255,248); //(groovy color)


if (frameCount > 120){
if (carX >= 500){  // speed
  carX = -50;
} else if (carX >= 300) {
  carX += 6;
}else {
  carX += 3;  // shortcut writing to make it go faster ----> carX = carX + 3;

  // Draw only when mouse is pressed (groovy sketch)
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
    } // groovy end
}
}
  //drawing car body
  noStroke();
  fill(255, 50, 50);
  triangle(carX, 50, carX + 60, 80, carX, 80);
  //traingle(50, 50, 110, 80, 50, 80);

  //carwheels
  fill(0);
  ellipse(carX, 80, 20, 20);
  ellipse(carX + 50, 80, 20, 20);
  //ellipse(100,80,20,20);
}
