
let w = 500;
let h = 500
let size = 20;
let v1 ; 
let v2;
let v3; 


function setup() {
  canvas =createCanvas(w, h);
  canvas.parent("sketch");
  angleMode(DEGREES);
  colorMode(HSB);
  background(0, 180, 0);
}

function draw() {
  
  let v1 = createVector( 100,100) ;
  let v2 = createVector( 400,400) ;
  
  let _x = sin ( frameCount); 
  let x1= map( _x , -1, 1 , v1.x, v2.x ); 
  let _y = sin ( frameCount); 
  let y1= map( _y , -1, 1 , v1.y, v2.y ); 
  let z1 = map(_y,-1,1,0,255);
  
  fill (10,255,255);
  ellipse ( v1.x,v1.y, 15 ) ;
  fill (10,255,255);
  ellipse ( v2.x,v2.y, 15 ) ;
  stroke(10,255,255);
  fill(z1,255,255);
  ellipse ( x1,y1, 15 ) ;
  
}