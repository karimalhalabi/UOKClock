let ref = 0;
let logoLocation = "images/PlainLogo.png";
let logo = null;
function preload() {
  logo = loadImage(logoLocation);
}
function setup() {
  let size = ((windowWidth < windowHeight) ? windowWidth : windowHeight);
  createCanvas(size, size);
  angleMode(DEGREES);
  ref = size / 2 - 10;
}

function resize()
{
    
}
function draw() {
  // background(0);
  let HR = hour();
  let MN = minute();
  let SC = second();
  //push();
  translate(ref+10, ref+10, 0);
  noStroke();
  // the blue circle;
  fill(12, 77, 162);
  circle(0, 0, ref*2);
  push();
  scale((2 * ref) / 300);
  image(logo, -148, -148);
  pop();

  // the gray circle;
  stroke(100);
  strokeWeight(ref * 0.275);
  noFill();
  circle(0, 0, ref * 1.75);
 
  rotate(-90);

  /*
  noStroke();
  fill(255,0,0);
  text(HR+':'+MN+':'+SC,0,0);
*/
  noFill();

  strokeWeight(ref/20);

  // drawing white arc
  stroke(255);
  let end2 = map(SC, 0, 60, 0, 360);
  arc(0, 0, ref * 1.95, ref * 1.95, 0, end2);

  // drawing Magenta arc
  stroke(12, 77, 162);
  let end1 = map(MN, 0, 60, 0, 360);
  arc(0, 0, ref * 1.75, ref * 1.75, 0, end1);

  // drawing Orange arc
  stroke(250, 152, 26);
  let end0 = map(HR % 12, 0, 12, 0, 360);
  arc(0, 0, ref * 1.55, ref * 1.55, 0, end0);

  // drawing the sconds arm
  push();
  rotate(end0);
  stroke(0);
  strokeWeight(ref/15);
  line(0, 0, ref * 0.68, 0);
  pop();

  // drawing the minutes arm
  push();
  rotate(end1);
  stroke(0);
  strokeWeight(ref/30);
  line(0, 0, ref * 0.83, 0);
  pop();

  // drawing the sconds arm
  push();
  rotate(end2);
  stroke(0);
  strokeWeight(ref/45);
  line(0, 0, ref * 0.95, 0);
  pop();

  stroke(120);
  strokeWeight(0.1 * ref);
  point(0, 0);
  stroke(220);
  strokeWeight(0.05 * ref);
  point(0, 0);
}
