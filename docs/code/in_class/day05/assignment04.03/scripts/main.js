
let w = 500;
let h = 500
let size = 20;
let v1 ; 
let v2;
let v3; 


function setup() {
  canvas=createCanvas(w, h);
  canvas.parent("sketch");
  angleMode(DEGREES);
  background(0);
}

function draw() {
  background(0);
  let v1 = createVector( 100,100) ;
  let v2 = createVector( 400,400) ;
  
  let _x = sin ( frameCount); 
  let x1= map( _x , -1, 1 , v1.x, v2.x,true ); 
  
  let _y = sin ( frameCount); 
  let y1= map( _y , -1, 1 , v1.y, v2.y,true ); 
  
  let _z = sin ( frameCount*1.2); 
  let z1 = map(_z,-1,1,v1.y, v2.y ,true);
  
  let lerpValue = map (_x, -1 ,1 ,0.0,1.0 ,true);
  //print();
  let q1 = lerp( v1.x,v2.x, lerpValue);
  let q2 = lerp( y1, z1, lerpValue);
  fill(155,0,0);
  ellipse ( v1.x,y1, 15 ) ;
  
  fill (155,0,0);
  ellipse ( v2.x,z1, 15 ) ;
 //stroke(10,255,255);
  fill(z1,255,255);
  ellipse ( q1,q2, 15 ) ;
  stroke(255);
  line(v1.x,y1,v2.x,z1);
  
}