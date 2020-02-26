let w = 1280;
let h = 720; 
let particles = [];
let kinectron; 
var hit = false;
let capture; 
let snapshots = [];
let c;
function setup(){
    let canvas = createCanvas(w/2, h/2);
    canvas.parent("sketch");
    background(0);
    rectMode(CENTER);
    capture =createCapture(VIDEO);
    //capture.size = (w,h*2);
    kinectron = new Kinectron("10.75.29.87");
    kinectron.makeConnection();
    kinectron.startTrackedBodies(drawBody);
    button = createButton('snap');
    button.mousePressed(takesnap);
    //takesnap();
    capture.hide();
    //console.log(kinectron);
    // background(0);
  
}
function draw(){
//   push();
//   translate(0 ,h);
//    scale(1.5);
//     image(capture, 0, 0);

//  pop();
}
function drawBody(body){
  loadPixels();
  for(let z = 0; z < particles.length; z++) {
    
    particles[z].draw();
    particles[z].update();
  }
  //  let lh = createVector( body.joints[7].depthX*w,body.joints[7].depthY*h) ;
  //  let rh = createVector( body.joints[11].depthX*w,body.joints[11].depthY*h) ;
  //   //let leftHand = body.joints[11];
  //   let rSize = 10;
  //   fill (0,255,0);
  //   ellipse(lh.x, lh.y,10,10);
  //   let r1 = rect(w/2,h/2,rSize*2,rSize*2);
  //   fill (0,0,255);
  //   ellipse(rh.x, rh.y,10,10);

  //   fill ( 0, 0,255);  
  //   let r2 = rect(mouseX,mouseY,rSize*2,rSize*2);
  //   hit = collideRectRect(w/2,h/2,rSize*2,rSize*2,mouseX,mouseY,rSize*2,rSize*2);
  //   text("Colliding : " + hit , 50,50);

  //brightness
    // var val = body.joints[11].cameraZ;
    // var brightness = map(val,0,3,0,255);
  //------- 
    //console.log(brightness);
    //background(brightness);
}
function takesnap(){
  print("took a screenshot");
    // numSnaps++;
    snapshots.push(capture.get());
    //console.log(capture.get());
     for (var i = 0 ; i < snapshots.length; i++){
      //image(snapshots[i],0,0);
      //image(snapshots[i],0,h);
      currentSnap = snapshots[i];

    }
    // if (numSnaps < 3 ){
    //   numsnaps = 0 ;
    //   snapshots.shift();
    // }
    for (i = 0 ; i< w/2; i ++){
      //for (_y = 0 ; _y< h/2; _y+50){
        let c  = currentSnap.get(_x,10);
        console.log(c);
        // fill (c);
        // rect(_x,_y, 50,50);
        
     // }
    }
    class Particle {
  
      // velocity: change in position over time
      // acceleration: change in velocity over time
      
      constructor() {
        // this.pos = createVector(random(width), random(height));
        // this.vel = createVector(random(-0.5, 0.5), random(-0.5, 0.5));
        // this.acc = createVector(random(-0.01, 0.01), random(-0.01, 0.01));
        
        this.color = [random(255), 255, 255];
        this.size = 40;
        this.age = 130;
        //this.drag = 0.99;
        
      }
      
      // draws our particle
      draw() {
         noStroke();
         fill(this.color);
         rect(this.pos.x, this.pos.y, this.size,this.size);
      }
      
      // updates the state variables (position, velocity, etc.)
      update() {
        this.age -- ;
        // this.vel.add(this.acc);
        // // this.vel.mult(this.drag); // uncomment this line to add drag to the particles
        // this.pos.add(this.vel);
        
    
        
      }
    }
}


  