let particles =[]; 
let snapshots = [];
let colorPallet = [];
let capture;
let a =0 ; 
let w = 640;
let h = 480;

var button;
var button5;
let stepSize = 40;
let currentSnap;
let newColor = [];
let extraCanvas;
let drawingCanvas;
let numSnaps =1 ;
let totalSnaps = 0; 
let canvas;
// let button1; //INVERT
// let button2; //TRESHOLD
// let button3; //GRAY
// let button4; //POSTERIZE
// let effects = ["INVERT","TRESHOLD","GRAY","POSTERIZE"];
// let choosenEffect;

let sketchName;
var input;
let currentColor;
let drawingColor = [];
let readyToPicColor = false;
let readyToDraw = false;
let isDrawing = false;
let hit = false;
// function doFirst(){
//   button5 = document.getElementById("button5");button5.addEventListener("click", saveName,false); 
// }
// function saveName(){
//   var name = document.getElementById("name").value;
// }
// window.addEventListener("load", doFirst,false);
function setup() {
input = createInput();
input.changed(newText);
let c = color(10,10,255,255);
colorPallet[0] = c;
colorPallet[1] = c;
colorPallet[2] = c;
colorPallet[3] = c;
colorPallet[4] = c;
colorPallet[5] = c;
colorPallet[6] = c;
colorPallet[7] = c;
colorPallet[8] = c;
colorPallet[9] = c;
drawingColor[0] = c;
canvas= createCanvas(w+100,2*h+50);
extraCanvas = createGraphics(w,h);
drawingCanvas = createGraphics(w,2*h);
background(0);
capture= createCapture(VIDEO);
capture.size = (w,h*2);
//Input


//BUTTONS
    button = createButton('snap'); //Take Photo
    button.mousePressed(takesnap);
    // button1= createButton('INVERT'); //INVERT
    // button1.mousePressed(Effect1);
    // button2= createButton('TRESHOLD'); //TRESHOLD
    // button2.mousePressed(Effect2);
    // button3= createButton('GRAY'); //GRAY
    // button3.mousePressed(Effect3);
    // button4= createButton('POSTERIZE'); //POSTERIZE
    // button4.mousePressed(Effect4);
//takesnap();
canvas.parent("#sketch");
extraCanvas.parent("#sketch");
drawingCanvas.parent("#sketch");
button.parent("#sketch");
capture.hide();
//INFO
let info = 'To Snap\n Press\n   "1" \nOr Use \nButton';
let info1 = 'Press\n   "2" \nto Draw';
textSize(20);
fill (255); 
textLeading(20); // Set leading to 20
text(info, w+10 , 25);
text(info1, w+10 , 150);
//  print(particles.length);
}
//FILTER EFFECTS
// function Effect1(){
//     choosenEffect = effects[1];
// }
// function Effect2(){
//     choosenEffect = effects[2];
// }
// function Effect3(){
//     choosenEffect = effects[3];
// }
// function Effect4(){
//     choosenEffect = effects[4];
// }

function newText(){
  console.log(input.value());
}
function takesnap(){
    readyToPicColor = true;
    numSnaps++;
    totalSnaps++;
    snapshots.push(capture.get());
     for (var i = 0 ; i < snapshots.length; i++){
   //   image(snapshots[i],0,0);
        image(snapshots[i],0,h);
        currentSnap = snapshots[i];
     }
     if (numSnaps < 2 ){
       numsnaps = 0 ;
       snapshots.shift();
     }
 //  print(currentSnap);
    stepSize = 40;
    for(let y = 0; y < h; y+=stepSize) {
      for (let x = 0; x < w; x+=stepSize) {
        let index = (x +(y+480) * w)*4;
        let p = new Particle();
        let pixelColor1  = currentSnap.get(x,y);
        p.color = pixelColor1;
        p.pos = createVector(x, y);
        particles.push(p);
      } 
      //int 
      //floor random array.length 
    }
    fill(0);
    rect(w+10, 700,150,800); //rect to refresh background for the text
    textSize(20);
    fill (255); 
    textLeading(20); // Set leading to 20s
    // text(lines[a], w+10 , 300);
    let totalSnapText= 'Total \nSnaps\nYou Will \nNever \nSee\nAgain:';
    text (totalSnapText + totalSnaps , w+10, 850);
    for(let z = 0; z < particles.length; z++) {
        particles[z].draw();
        particles[z].update();
        if(particles[z].age<0){
          particles.shift();  
        }
      }
       image(extraCanvas,0,0);
}

function createPallet(){
    //PALLETTE RECTS
    //fill([currentColor]);
    //print(colorPallet[0]) ;
   
        fill(color(colorPallet[0]));
        rect(w+15, 200, stepSize,stepSize);
        fill(colorPallet[1]);
        rect(w+15, 200+stepSize, stepSize,stepSize);
        fill(colorPallet[2]);
        rect (w+15, 200+stepSize*2, stepSize,stepSize);
        fill(colorPallet[3]);
        rect (w+15, 200+stepSize*3, stepSize,stepSize);
        fill(colorPallet[4]);
        rect (w+15, 200+stepSize*4, stepSize,stepSize);
        fill(colorPallet[5]);
        rect (w+15, 200+stepSize*5, stepSize,stepSize);
        fill(colorPallet[6]);
        rect (w+15, 200+stepSize*6, stepSize,stepSize);
        fill(colorPallet[7]);
        rect (w+15, 200+stepSize*7, stepSize,stepSize);
        fill(colorPallet[8]);
        rect (w+15, 200+stepSize*8, stepSize,stepSize);
        fill(colorPallet[9]);
        rect (w+15, 200+stepSize*9, stepSize,stepSize);
        if(colorPallet.length>10){
             colorPallet.shift();  
        
         }
    }
function draw() {
  if (!readyToDraw){
    loadPixels();
    capture.loadPixels();

  }
    if (readyToPicColor == false){readyToDraw =true;}
    hit = collidePointRect(mouseX,mouseY,w+15, 200,stepSize,200 + stepSize*9);
    //console.log(hit);
    if (readyToDraw == true){
       image(drawingCanvas,0,0);
    }
    createPallet();
}
class Particle {
  constructor() {
    this.color = [random(255), 255, 255];
    this.size = 40;
    this.age = 130; 
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
  }
}
function keyTyped() {
  if (key === '1') {
    takesnap();
    readyToPicColor=true;
    readyToDraw =false;
  } 
  if (key === '2') {  
      readyToPicColor = false;
      readyToDraw =true;
        //print(readyToDraw);
        fill(0);
        rect(0,0,w,h*2);
  }
  if (key == '3'){
    let b = input.value();
    save( input.value() +'.png');
  }
}
function mousePressed(){
  if(readyToPicColor==true){
      currentColor = get(mouseX,mouseY );
      colorPallet.push(currentColor) ;
      createPallet();
  }
  if(readyToDraw==true && hit == true){
      loadPixels();
      let x = get(mouseX,mouseY);
      drawingColor.push(x);
     // console.log(drawingColor.length);
      //delete the prev color on drawing color 
      readyToDraw= true;
      if(drawingColor.length>1){
          drawingColor.shift();  
        }    
  }
}
function mouseDragged(){
  if (readyToDraw == true && hit == false){
       isDrawing = true;
      let a = color (drawingColor[0]); 
      a.setAlpha(50);
      noStroke();
      fill(a);
      ellipse(mouseX,mouseY,stepSize*2,stepSize*2  ) ;
    //console.log(drawingColor);      
    }  
}
