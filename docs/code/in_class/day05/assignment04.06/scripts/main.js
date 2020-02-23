let w = 500;
let h = 500;
let size =200; 
function setup() {
  let  canvas =  createCanvas(w, h);
  canvas.parent("sketch");
  colorMode (HSB, 255); 
  angleMode(DEGREES);
  background(220,255,0);
}

function draw() {
 // background(220,255,0);
  
  let pos = createVector(w/2,h/2);
  let angle = atan2(mouseY-pos.y, mouseX-pos.x);
  let xDir = cos(angle);
  let yDir = sin(angle);
  stroke(0,0,255);
  fill (10,255,255,0);
  ellipse ( pos.x,pos.y,size);
  let hue = map(angle, -180, 180, 0, 255);
  fill(hue,255,255);
 // stroke(255,255,0);
 noStroke(); 
 ellipse(xDir*size/2+w/2, yDir*size/2+h/2, 30);
}