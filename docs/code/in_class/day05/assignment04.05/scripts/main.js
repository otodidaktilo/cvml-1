let particles= [];

function setup() {
  canvas = createCanvas(400, 400);
  canvas.parent("sketch");
  //colorMode(HSB);
  noStroke(); 
  for(let i = 0 ; i< 300  ; i ++){
    let p = new Particle();
    particles.push(p);
  }
  
}

function draw() {
  background(100);
  for(let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();
  }
  
}
class Particle {
  constructor(){
    //randomly generated source position
    this.srcPos = createVector(random(0,200),random (100,300));    
    //randomly generated destination position
    this.dstPos =createVector(random(200,400),random (0,400));
    this.color = (0,210,0);
    this._s = sin(frameCount/2);
    //this.s1= map(this._s, -1,1, 0.0,0.1,true);
//     this.l1 = lerp( this.srcPos.x,this.dstPos.x, this.s1);
//     this.l2 = lerp( this.srcPos.y,this.dstPos.y, this.s1);
    
  }
  
  update(){
    this._s = sin(frameCount/20);
    this.s1= map(this._s, -1,1, 0.0,1.0,true);
    this.l1 = lerp( this.srcPos.x,this.dstPos.x, this.s1);
   this.l2 = lerp( this.srcPos.y,this.dstPos.y, this.s1);
    //print(this.srcPos);
  }
  draw(){
     fill(0,210,0);
      ellipse(this.l1,this.l2,5);
   // print(this.l1);
    // fill(0,255,0);
    // ellipse( this.srcPos.x,this.srcPos.y,15);
    //   text( 'p.srcPos', this.srcPos.x +10 ,this.srcPos.y );
    // ellipse( this.dstPos.x,this.dstPos.y,15);
    //   text( 'p.srcPos', this.dstPos.x +10 ,this.dstPos.y );
  }
}