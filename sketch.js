let myMobileNet; // Declaration of the mobile net model
let myVideo; // Creating a video caputure from the webcam
let modelStatus; // Header text
let resultText;
let canvas;

// Loading the MobileNet model before doing anything else
function preload() {
  myMobileNet = ml5.imageClassifier("MobileNet");

  modelStatus = document.getElementById('model-status');
  modelStatus.classList.add('modelStatus');
  modelStatus.innerHTML = "Please wait: Loading Model";

  resultText = document.getElementById('model-results');
  resultText.classList.add('resultText');
  resultText.innerHTML = "waiting for results";
}


function setup() {
  // Check if the MobileNet model loaded before the page loaded
  console.log("The mobileNet model status: ", myMobileNet);

  canvas = createCanvas(900, 200);
  canvas.position((windowWidth - canvas.width) / 2, 100);

  myVideo = createCapture(VIDEO);
  // myVideo.hide();
  myVideo.size(canvas.width, canvas.height);
  myVideo.position((windowWidth - canvas.width) / 2, 200);

  myMobileNet.classify(myVideo, gotResults);

  modelStatus.innerHTML = "Model Loaded";
}


function gotResults(err, results) {

  console.log("The machine is seeing", results);
  resultText.innerHTML = results[0].label;
  setTimeout(function() {
    myMobileNet.classify(myVideo, gotResults);
  }, 2000);

}

function draw() {}
