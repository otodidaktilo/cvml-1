// 04.01-SingleLerp: Make a single ellipse interpolate between two ellipses. Your
// color choices and canvas size can be unique

let w = 500;
let h = 500;
let size = 20;
let v1 ; 
let v2;
let v3; 


function setup() {
let canvas=createCanvas(w, h);
  canvas.parent("sketch");
  background(0);  
}

function draw() {
 // background(180, 20, 20);  
  let v1 = createVector( 100,100) ;
  let v2 = createVector( 400,400) ;
  
  let _x = sin ( frameCount/50); 
  let x1= map( _x , -1, 1 , v1.x, v2.x ); 
  let _y = sin ( frameCount/50); 
  let y1= map( _y , -1, 1 , v1.y, v2.y ); 
  fill (255);
  ellipse ( v1.x,v1.y, 15 ) ;
  fill (255);
  ellipse ( v2.x,v2.y, 15 ) ;
  fill(0);
  stroke(0,255,0);
  ellipse ( x1,y1, 15 ) ;
  
}