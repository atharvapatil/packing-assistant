let myMobileNet; // Declaration of the mobile net model
let myVideo; // Creating a video caputure from the webcam
let modelStatus; // Header text
let resultText;
let canvas;
let detectedObj;
let itemOne, itemTwo, itemThree;

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
  myVideo.hide();
  myVideo.size(canvas.width, canvas.height);
  myVideo.position((windowWidth - canvas.width) / 2, 300);

  myMobileNet.classify(myVideo, gotResults);

  modelStatus.innerHTML = "Model Loaded";

  itemOne = document.getElementById('item-one');
  itemOne.classList.add('objectList');

  itemTwo = document.getElementById('item-two');
  itemTwo.classList.add('objectList');

  itemThree = document.getElementById('item-three');
  itemThree.classList.add('objectList');
}

function gotResults(err, results) {

  // console.log("The machine is seeing", results);
  resultText.innerHTML = results[0].label;

  if (results) {
    detectedObj = results[0].label;
    console.log(detectedObj);
    if (detectedObj === 'beer glass') {
      itemOne.classList.add('objectIdentified');
    } else if (detectedObj === 'sweatshirt') {
      itemThree.classList.add('objectIdentified');
    } else if (detectedObj === 'sunglasses, dark glasses, shades') {
      itemTwo.classList.add('objectIdentified');
    }
  }

  setTimeout(function() {
    myMobileNet.classify(myVideo, gotResults);
  }, 1000);

}

function draw() {}
