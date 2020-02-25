let particles= [];

function setup() {
  canvas =createCanvas(400, 400);
  colorMode(HSB);
  noStroke();
  canvas.parent("sketch"); 
  let p = new Particle();
  particles.push(p);
}

function draw() {
  background(55);
  for(let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();
  }
  
}
class Particle {
  constructor(){
    //randomly generated source position
    this.srcPos = createVector(random(width),random (height));    
    //randomly generated destination position
    this.dstPos =createVector(random(width),random (height));
    this.color = (0,255,255);
    this._s = sin(frameCount/2);
    //this.s1= map(this._s, -1,1, 0.0,0.1,true);
//     this.l1 = lerp( this.srcPos.x,this.dstPos.x, this.s1);
//     this.l2 = lerp( this.srcPos.y,this.dstPos.y, this.s1);
    
  }
  
  update(){
    this._s = sin(frameCount/15);
    this.s1= map(this._s, -1,1, 0.0,1.0,true);
    this.l1 = lerp( this.srcPos.x,this.dstPos.x, this.s1);
   this.l2 = lerp( this.srcPos.y,this.dstPos.y, this.s1);
    //print(this.srcPos);
  }
  draw(){
     fill(this.l1,this.l2,255);
    ellipse(this.l1,this.l2,20);
    print(this.l1);
    fill(0,255,0);
    ellipse( this.srcPos.x,this.srcPos.y,15);
      text( 'p.srcPos', this.srcPos.x +10 ,this.srcPos.y );
    ellipse( this.dstPos.x,this.dstPos.y,15);
      text( 'p.dstPos', this.dstPos.x +10 ,this.dstPos.y );
  }
}