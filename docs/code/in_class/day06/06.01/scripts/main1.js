let particles =[]; 
let snapshots = [];
let colorPallet = [];
let capture;
let a =0 ; 
let w = 640;
let h = 480;

var button;
let stepSize = 40;
let currentSnap;
let newColor = [];
let extraCanvas;
let drawingCanvas;
let numSnaps =1 ;
let totalSnaps = 0; 
let canvas;
let button1; //INVERT
let button2; //TRESHOLD
let button3; //GRAY
let button4; //POSTERIZE
let effects = ["INVERT","TRESHOLD","GRAY","POSTERIZE"];
let choosenEffect;
let currentColor;
let drawingColor = [];
let readyToPicColor = false;
let readyToDraw = false;
let isDrawing = false;
let hit = false;

function setup() {
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
canvas= createCanvas(w+100,2*h);
extraCanvas = createGraphics(w,h);
drawingCanvas = createGraphics(w,2*h);
background(0);
capture= createCapture(VIDEO);
capture.size = (w,h*2);

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
let info = 'To Snap\n Press\n   "S" \nOr Use \nButton';
let info1 = 'Press\n   "A" \nto Draw';
textSize(20);
fill (255); 
textLeading(20); // Set leading to 20
text(info, w+10 , 25);
text(info1, w+10 , 150);
//  print(particles.length);
}
// //FILTER EFFECTS
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
function takesnap(){
//    print("took a screenshot");
    readyToPicColor = true;
   // console.log(choosenEffect);
    numSnaps++;
    totalSnaps++;
    snapshots.push(capture.get());
    //console.log(capture.get());
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
          //  takesnap() ;
        }
      }
       image(extraCanvas,0,0);

}
function mousePressed(){
    if(readyToPicColor==true){
        currentColor = get(mouseX,mouseY );
        colorPallet.push(currentColor) ;
        // console.log(currentColor);
        // console.log(colorPallet);
        createPallet();
    }
    if(readyToDraw==true && hit == true){
        
        drawingColor= get(mouseX,mouseY);
        
        //readyToDraw= true;
        let x = get(mouseX,mouseY);
        drawingColor.push(x);
       // console.log(drawingColor.length);
        //delete the prev color on drawing color 
        readyToDraw= true;
        if(drawingColor.length<1){
            drawingColors.shift();  
            //  takesnap() ;
          }
        
    }
    if (readyToDraw == true && hit == false){
         isDrawing = true;
        let a = color (drawingColor[0]); 
        fill(a);
        ellipse(mouseX,mouseY,stepSize*2,stepSize*2  ) ;
        console.log(drawingColor);
        
    }


}
// function mousePressed(){
//     if(readyToPicColor==true){
//         currentColor = get(mouseX,mouseY );
//         colorPallet.push(currentColor) ;
//         console.log(currentColor);
//         console.log(colorPallet);
//         createPallet();s
//     }else if(readyToDraw==true){
//         isDrawing = true;
//         //  drawingCanvas.fill(color('rgba(drawingColor[0])'));
//         //  drawingCanvas.ellipse(mouseX,mouseY,stepSize*2,stepSize*2  ) ;
//     }
//     if (hit==true){
//         let x = get(mouseX,mouseY);
//         drawingColor.push(x);
//         print(drawingColor[0]);
//         //delete the prev color on drawing color 
//         readyToDraw= true;
//         if(drawingColor.length<1){
//             particles.shift();  
//             //  takesnap() ;
//           }
 
//     }
    

// }
function mouseReleased(){
    isDrawing = false;
}


function createPallet(){
    //PALLETTE RECTS
    //fill([currentColor]);
    //print(colorPallet[0]) ;
   
        fill(color(colorPallet[0]));
        let rect1 = rect(w+15, 200, stepSize,stepSize);
        fill(colorPallet[1]);
        let rect2 = rect(w+15, 200+stepSize, stepSize,stepSize);
        fill(colorPallet[2]);
        let rect3 = rect (w+15, 200+stepSize*2, stepSize,stepSize);
        fill(colorPallet[3]);
        let rect4 = rect (w+15, 200+stepSize*3, stepSize,stepSize);
        fill(colorPallet[4]);
        let rect5 = rect (w+15, 200+stepSize*4, stepSize,stepSize);
        fill(colorPallet[5]);
        let rect6 = rect (w+15, 200+stepSize*5, stepSize,stepSize);
        fill(colorPallet[6]);
        let rect7 = rect (w+15, 200+stepSize*6, stepSize,stepSize);
        fill(colorPallet[7]);
        let rect8 = rect (w+15, 200+stepSize*7, stepSize,stepSize);
        fill(colorPallet[8]);
        let rect9 = rect (w+15, 200+stepSize*8, stepSize,stepSize);
        fill(colorPallet[9]);
        let rect10 = rect (w+15, 200+stepSize*9, stepSize,stepSize);
        if(colorPallet.length>9){
             colorPallet.shift();  
        
         }
    }
function draw() {
  loadPixels();
  capture.loadPixels();
    if (readyToPicColor == false){readyToDraw =true;}
    hit = collidePointRect(mouseX,mouseY,w+15, 200,stepSize,200 + stepSize*9);
    console.log(hit);
    if (readyToDraw == true){
       image(drawingCanvas,0,0);
    }
    createPallet();
    // if (mouseIsPressed){
    //     fill(drawingColor);
    //     rect (ellipse(mouseX,mouseY,stepSize*2,stepSize*2  ));
    //     console.log("Fuck yeah!");
    // }
    // if(isDrawing = true){
    //     // drawingCanvas.fill([drawingColor]);
    //     // adrawingCanvas.ellipse(mouseX,mouseY,stepSize*2,stepSize*2  ) ;
    // }

}
class Particle {
  
  // velocity: change in position over time
  // acceleration: change in velocity over time
  
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
  if (key === 's') {
    takesnap();
    readyToPicColor=true;
    readyToDraw =false;
  } 
  if (key === 'a') {  
      readyToPicColor = false;
      readyToDraw =true;
        //print(readyToDraw);
        fill(0);
        rect(0,0,w,h*2);
  }
}