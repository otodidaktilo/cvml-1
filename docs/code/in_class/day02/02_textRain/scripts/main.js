

let capture;
let fallingLetters = [];
let w = 640;
let h = 480;
let threshold = 80;
let colors = [];
let state ;

function setup() {
  // set up video
  capture = createCapture(VIDEO);
  capture.hide();
   pixelDensity(1);
  createCanvas(w, h);
    
  let sourceText = " THE GREAT ANNIHILATOR "
  
  let x = 0;
  
  let xSpacing = 10;
  
  for(let char of sourceText) {
    
    let newChar = new FallingLetter( char , x , random(80));

    fallingLetters.push(newChar);
    x+=20;
  colors =["0,0,0", "0,255,0" , "255,255,255" ];
    state = 0;
  }
  
  /* Challenge: Rewrite the loop above using a traditional for-loop structure?) Make sure to comment it out so it doesn't interfere with your code */
}


function draw() {
  print ( colors[state]);
  background(250);
 //hreshold();
  capture.loadPixels(); // load pixel data from the webcam
  let randColor;
  
  push();
    // flip the video so that it is mirrored correctly
      translate(640 , 0);
     scale(-1,1);
    image(capture, 0, 0, w, h);
  pop();
  
  
  

 //or( let char of fallingLetters){
  for ( let i = 0; i < fallingLetters.length; i++ ){
    
    
    while( getBrightness(capture.pixels,i) <threshold){
        fallingLetters[i].y -=1;
        state = 1;
         
    }
    //nt(getBrightness(capture.pixels,i));
  
    if( fallingLetters[i].y > h){
     fallingLetters[i].y  = 0 ; 
      
    }else {
      fallingLetters[i].y ++;
      state = 2;
    }

  }
  for(let fl of fallingLetters) {

    fill( 0,255,0 ) ; 
    text(fl.char, fl.x, fl.y  );
    fill( 0,210 ,0 ) ;
    text(fl.char, fl.x, fl.y-4);
    fill( 0,180 ,0 ) ;
    text(fl.char, fl.x, fl.y-8);
    fill( 0,150,0 ) ; 
    text(fl.char, fl.x, fl.y-12);
    fill( 0,120,0 ) ;
    text(fl.char, fl.x, fl.y-16);
    fill( 0,100,0 ) ;
    text(fl.char, fl.x, fl.y-20);
       
  }  

}

function getBrightness(_pixels, _i) {
  
  let currFallingLetter = fallingLetters[_i];
  let index = ((w-currFallingLetter.x) + (currFallingLetter.y*w))*4;
  
  let r = _pixels[index];
  let g = _pixels[index+1];
  let b = _pixels[index+2];
  
  let colorTotal = r + g + b;
  let brightness = colorTotal/3.0;
  
  
  // once we've calculated the brightness, return that value.
  return brightness;
  
}


class FallingLetter {
  
  constructor(_char, _x, _y) {
    
    this.char = _char;
    this.x = _x;
    this.y = _y;
  }  
}