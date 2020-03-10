// Add some header info
// For TM template code

// Video
let music = false;
let canvas;
let video;
let label = "waiting...";
let classifier;
let modelURL = 'https://teachablemachine.withgoogle.com/models/4VurBOVf/';
let bass ;
let crowd;
function preload(){

    classifier = ml5.imageClassifier(modelURL + 'model.json');
    bass  = loadSound("scripts/bass_ea.mp3");
    // crowd  = loadSound("scripts/crowd1_ea.m4a");
}
// STEP 1: Load the model!

function setup() {
  canvas =createCanvas(640, 520);
  canvas.parent('sketch');
  // Create the video
  video = createCapture(VIDEO);
  video.hide();
  
  // STEP 2: Start classifying
  classifyVideo();
}
  
function classifyVideo(){
  classifier.classify(video, gotResults);
}

// STEP 2 classify!

function draw() {
  background(0);
//   if (!crowd.isPlaying()){
//     crowd.play(); 
// }
  // Draw the video
  image(video, 0, 0);

  // STEP 4: Draw the label
  //label =false;
  if (bass.isPlaying()){

  }
  if (label== "No Hand") {
      music = "show your hands";

      if (bass.isPlaying()){
          bass.stop(); 
      }
    } else if (label == "Left Hand") {
        if (!bass.isPlaying()){
            bass.play(); 
        }
        music = "so talented";
    } else if (label == "Right Hand") {
        if (!bass.isPlaying()){
            bass.play(); 
        }
        music = "so talented";
    }
  // STEP 4: Draw the label
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255);
  text(music, width / 2, height - 16);
  //textSize(156);
  //text(music, width / 2, height / 2);
}
//step 3: get the classification@

function gotResults(error, results){
  if(error){
    console.error(error);
    return
  }
 //console.log(results);
      // Store the label and classify again!
  label = results[0].label;
  //console.log(label);
  classifyVideo();
}


// STEP 3: Get the classification!
