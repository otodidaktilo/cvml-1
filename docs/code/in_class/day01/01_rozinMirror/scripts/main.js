let myCapture;
let stepSize =32;
let curTime = 100;
function setup() {
  let canvas = createCanvas(640, 480);
  myCapture = createCapture(VIDEO);
  canvas.parent("sketch");
}

function draw() {
  let time = millis() *0.006;
   curTime-= deltaTime/5;
  //millis()* 0.02;
  
  background(225);
  //load pixel data into myCapture project
  myCapture.loadPixels();
  myCapture.hide();
 // fill(0);
  noStroke();
  let minTime = 200;
  if (curTime <=0){
    if ( stepSize !=6 ){
      stepSize-=1;
      curTime = minTime;
    }
  }
  if (stepSize <=6){stepSize= 6;}
  // const stepSize = round(constrain(mouseX/8, 6 ,  32));
  
  //int(deltaTime/4);
  for(let y = 0; y< height ; y+=stepSize){
    for(let x = 0; x< width ; x+=stepSize){
      
      
      const i = y * width +x ; 
      let sineValue = sin ( time+ i);
      let z = map (sineValue, -1,1, 0,100);
     //sineValue 
      const darkness = (255 - myCapture.pixels[i*4])/255;
      const radius = stepSize * darkness;
      //for(let z = 0 ; z < 10; z++){
          let xValue = darkness/2
          let yValue = darkness*5*z;
          let zValue =darkness*z ;
      //const radius = stepSize  * darkness;
      push()
          translate(width,0);
          scale(-1,1);
          fill( xValue, yValue,zValue);
          rect(x,y,stepSize,stepSize);
          //lipse(x,y,stepSize,stepSize);
        //if(z == 10){z =0;}
      pop();
        
      }
    }
  }