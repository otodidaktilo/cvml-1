
let particles =[]; 
let snapshots = [];
let capture;
let hit = false; 
let w = 640;
let h = 480;
let d= 0; 
var button;
let stepSize =20;
let currentSnap;
let newColor = [];
let extraCanvas;
let numSnaps =1 ;
let canvas;
let curTime = 100;
let mouseIsPressing = false;
let num = 0 ;
function setup() {

canvas= createCanvas(w*22,h+100);
extraCanvas = createGraphics(w,h+100);
newCanvas =createGraphics(w*2,h+100);
background(255);
capture= createCapture(VIDEO);
capture.size = (w,h);
button = createButton('snap');
button.mousePressed(takesnap);
takesnap();
canvas.parent("#sketch");
extraCanvas.parent("#sketch");
newCanvas.parent("#sketch");
button.parent("#sketch");
capture.hide();

//PARTICLES
 
//  print(particles.length);
  
 
}
function takesnap(){
   // print("took a screenshot");
   // print(particles.length);
    numSnaps++;
    snapshots.push(capture.get());
    
    for (var i = 0 ; i < snapshots.length; i++){
     currentSnap = snapshots[i];
    }
     if (numSnaps < 3 ){
       numsnaps = 0 ;
       snapshots.shift();
     }

    for(let y = 0; y < h; y+=stepSize) {
      for (let x = 0; x < w; x+=stepSize) {
       // let index = (x +(y+480) * w)*4;
        let p = new Particle();
        // get the pixel color at the current XY position    
        let pixelColor1  = currentSnap.get(x,y);
        p.color = pixelColor1;
        p.pos = createVector(x, y);
        particles.push(p);
      } 
    }
    num ++;
    extraCanvas.fill(0);
    extraCanvas.rect( 10,h+20,w-20, 70);
    extraCanvas.fill(255);
    extraCanvas.text("Number of snaps: " + num,15, h+50);
    image(extraCanvas,0,0);
}

function draw() {
  //newCanvas.background(0);
  loadPixels();
  capture.loadPixels();
  fill(255);

  //rect(10, h+10, w-20,80); 

  for(let z = 0; z < particles.length; z++) {
    
    particles[z].draw();
    particles[z].update();
   // checkCollision(particles[z].pos.x,particles[z].pos.x );
    // if(particles[z].age<0&& particles.length> 768){
      if(particles.length>768)
      {
      particles.shift();  
    }
  }
  
  if (mouseIsPressing == true){
    print("pressing"); 
    extraCanvas.fill(255);
    extraCanvas.text("Mouse is Pressing: " + mouseIsPressing,15, h+60);
    // p = new Particle();
    let pixelColor1  = currentSnap.get(mouseX,mouse);
    let c1 = get(mouseX,mouseY);
    // print(c1);
    // p.color = c1;
    // p.pos = createVector(mouseX, mouseY);
    // particles.push(p);
    // print(particles.length);
    rectMode(CENTER);
    //newCanvas.rectMode(CENTER);
    extraCanvas.fill(pixelColor1);
    extraCanvas.ellipse(mouseX,mouseY,stepSize,stepSize);
  }
 // image(extraCanvas,0,0);
  //  for (let i = 0 ; i< 1 ; i++){
  //    //add filters; 
  //   if(button.mousePressed(takesnap)){
  //     i = 0 ; 
  //   }
  //  } 
   //filter(INVERT);
}
class Particle {
  constructor() {    
    this.color = [random(255), 255, 255];
    this.size = 40;
    this.age = 0;

  }
  draw() {
    extraCanvas.noStroke();
    extraCanvas.fill(this.color);
    extraCanvas.rect(this.pos.x, this.pos.y, this.size,this.size);
    //rr.mouseOver(changeColor);
  }
  update() {
   // this.age -- ;
    
  }
}
// function changeColor(){
//   filter(INVERT);
// }
function mousePressed(){
  mouseIsPressing = true;
}
function mouseReleased(){
  mouseIsPressing = false;
}
// function mouseDrag(){
//   d+10;
// }
function keyTyped() {
  if (key === 's') {
    takesnap();
  } 

}
