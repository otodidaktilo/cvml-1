
let particles =[]; 
let snapshots = [];
let capture;
let a =0 ; 
let w = 640;
let h = 480;

var button;
let stepSize;
let currentSnap;
let newColor = [];
let extraCanvas;
let numSnaps =1 ;
let canvas;

function setup() {

canvas= createCanvas(w+100,2*h);
extraCanvas = createGraphics(w,h);
background(0);
capture= createCapture(VIDEO);
capture.size = (w,h*2);
button = createButton('snap');
button.mousePressed(takesnap);
takesnap();
canvas.parent("#sketch");
extraCanvas.parent("#sketch");
button.parent("#sketch");
capture.hide();
//PARTICLES
let info = 'to take\na photo\npress\n   "s" \nor press \n snap \nbutton'
textSize(20);
fill (255); 
textLeading(20); // Set leading to 20
text(info, w+10 , 25);

//  print(particles.length);
  
 
}
function takesnap(){
    print("took a screenshot");
    numSnaps++;
    snapshots.push(capture.get());
    //console.log(capture.get());
     for (var i = 0 ; i < snapshots.length; i++){
   //   image(snapshots[i],0,0);
      image(snapshots[i],0,h);
      currentSnap = snapshots[i];
    
     }
     if (numSnaps < 3 ){
       numsnaps = 0 ;
       snapshots.shift();
     }
 //  print(currentSnap);
    stepSize = 40;
    for(let y = 0; y < h; y+=stepSize) {
      for (let x = 0; x < w; x+=stepSize) {
        let index = (x +(y+480) * w)*4;
        let p = new Particle();
        // get the pixel color at the current XY position
        
        //newColor.push(getColor(x,y));    
        // print(newColor[0]);
        let pixelColor1  = currentSnap.get(x,y);
        let pixelColor = [pixels[index],pixels[index+1],pixels[index+2], pixels[index+3]];
        //  print(getColor(x,y));
        //print(pixelColor);
        p.color = pixelColor1;
        p.pos = createVector(x, y);
        particles.push(p);
      } 

      //int 
      //floor random array.length 
    }

    fill(0);
    rect(w+10, 200,90,800);
   // let i =0; 
    let line1 = 'you\nlook\ngorgeous\n!!!!!!'
    let line2 = 'I am\nwatching\nyou'
    let line3 = 'wooow \nthis\nsketch is\nso cool\n!!!!'
    let lines = [line1,line2,line3];
   // randLine = random(0,2);
   textSize(20);
   fill (255); 
   textLeading(20); // Set leading to 20s
   
   //let a =0 ; 
   console.log(a);
    text(lines[a], w+10 , 300);
     a++;
  
    if(a ==3){
    a=0;
    //text(lines[i], w+10 , 300);
    }
}
// function getColor(_x, _y) {
  
//   //let currFallingLetter = fallingLetters[_i];
//   let index = (_x + _y * w)*4;
//   let _color =[
//     pixels[index],
//     pixels[index+1],
//     pixels[index+2],
//     pixels[index+3]
//   ];
//  // let brightness = colorTotal/3.0;
  
//   //print(_color);
//   // once we've calculated the brightness, return that value.
//   return _color;
  
// }

function draw() {
  loadPixels();
  capture.loadPixels();
//  background(currentSnap);
//    for (var i = 0 ; i < snapshots.length; i++){
//     image(snapshots[i],0,0);
//     currentSnap = snapshots [i] ;

//    }
  for(let z = 0; z < particles.length; z++) {
    
    particles[z].draw();
    particles[z].update();
    if(particles[z].age<0){
      particles.shift();  
      //  takesnap() ;
    }
  }
   image(extraCanvas,0,0);
}
class Particle {
  
  // velocity: change in position over time
  // acceleration: change in velocity over time
  
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(-0.5, 0.5), random(-0.5, 0.5));
    this.acc = createVector(random(-0.01, 0.01), random(-0.01, 0.01));
    
    this.color = [random(255), 255, 255];
    this.size = 40;
    this.age = 130;
    //this.drag = 0.99;
    
  }
  
  // draws our particle
  draw() {
     extraCanvas.noStroke();
     extraCanvas.fill(this.color);
     extraCanvas.rect(this.pos.x, this.pos.y, this.size,this.size);
  }
  
  // updates the state variables (position, velocity, etc.)
  update() {
    this.age -- ;
    this.vel.add(this.acc);
    // this.vel.mult(this.drag); // uncomment this line to add drag to the particles
    this.pos.add(this.vel);
    

    
  }
}
function keyTyped() {
  if (key === 's') {
    takesnap();
  } 
}