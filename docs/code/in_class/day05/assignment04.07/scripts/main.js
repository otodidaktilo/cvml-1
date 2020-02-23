// 04.07-EyeFollow: Create an eye, where the iris follows the direction of the mouse.

// Bonus challenge 01: can you put a pupil inside of the iris that also follows the mouse?
// (that's the version I put in the GIF)
// Bonus challenge 02: can you make the size of the pupil increase or decrease as the mouse
// moves closer and farther away from the eye?
// Bonus challenge 03: See if you can make this sketch by creating an 'Eye' class

// hint: use atan2 to calculate the angle between the eye and the mouse position!

let w = 500;
let h = 500;
let size;

function setup() {
  canvas = createCanvas(w, h);
  canvas.parent("sketch");
  background(20, 10, 0);
  angleMode(DEGREES);
  ellipseMode(CENTER);
  noStroke();
}

function draw() {
  background(100, 100, 0);
  let size = createVector( 200,150);
  let pos = createVector(w/2,h/2);
  let angle = atan2(mouseY-pos.y, mouseX-pos.x);
  let xDir = cos(angle);
  let yDir = sin(angle); 
  let eyeball = createVector(xDir*(size.x/2.5)+250, yDir*(size.y/3)+250);
  
  
//print(d);
  
  fill(255);
  ellipse(w/2,h/2,size.x,size.y);
 //push();
  //  translate(w/2, h/2);
    
  fill(0,0,255);
    ellipse(xDir*size.x/3.3+250, yDir*size.y/4+250, 80);
    fill(10);
    //ellipse(xDir, yDir, 30);
  
  let d= int(dist(eyeball.x,eyeball.y,mouseX, mouseY  ));
  let d1 = map( d, 0,200, 40,20 , true); 
    ellipse(eyeball.x,eyeball.y, d1); 
  
  //pop();
    //stroke(10);
 // line(eyeball.x,eyeball.y,mouseX,mouseY);
  
  
}