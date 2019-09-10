let myMobileNet; // Declaration of the mobile net model
let myVideo; // Creating a video caputure from the webcam
let modelStatus; // Header text
let resultText;
let canvas;
let detectedObj;
let itemOne, itemTwo, itemThree;
let itemFour, itemFive, itemSix;
let itemSeven, itemEight, itemNine;

// Loading the MobileNet model before doing anything else
function preload() {
  myMobileNet = ml5.imageClassifier("MobileNet");

  modelStatus = document.getElementById('model-status');
  modelStatus.classList.add('modelStatus');
  // modelStatus.innerHTML = "Please wait: Loading Model";

  resultText = document.getElementById('model-results');
  resultText.classList.add('resultText');
  resultText.innerHTML = "Getting ready to help you";
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

  // modelStatus.innerHTML = "Model Loaded";

  itemOne = document.getElementById('item-one');
  itemOne.classList.add('objectList');

  itemTwo = document.getElementById('item-two');
  itemTwo.classList.add('objectList');

  itemThree = document.getElementById('item-three');
  itemThree.classList.add('objectList');

  itemFour = document.getElementById('item-four');
  itemFour.classList.add('objectList');

  itemFive = document.getElementById('item-five');
  itemFive.classList.add('objectList');

  itemSix = document.getElementById('item-six');
  itemSix.classList.add('objectList');

  itemSeven = document.getElementById('item-seven');
  itemSeven.classList.add('objectList');

  itemEight = document.getElementById('item-eight');
  itemEight.classList.add('objectList');

  itemNine = document.getElementById('item-nine');
  itemNine.classList.add('objectList');
}

function gotResults(error, results) {

  // console.log("The machine is seeing", results);

  if (error) {
    console.log(error);
  } else if (results) {
    detectedObj = results[0].label;
    console.log(detectedObj);

    resultText.innerHTML = "The camera thinks this is : " + detectedObj;
    if (detectedObj == 'beer glass' || detectedObj == 'measuring cup') {
      itemOne.classList.add('objectIdentified');
    } else if (detectedObj == 'sunglasses, dark glasses, shades' || detectedObj == 'sunglass') {
      itemTwo.classList.add('objectIdentified');
    } else if (detectedObj == 'sweatshirt' || detectedObj == 'jersey, T-shirt, tee shirt') {
      itemThree.classList.add('objectIdentified');
    } else if (detectedObj == 'remote control, remote' || detectedObj == 'reflex camera' || detectedObj == 'cellular telephone, cellular phone, cellphone, cell, mobile phone' || detectedObj == 'iPod') {
      itemFour.classList.add('objectIdentified');
    } else if (detectedObj == 'backpack, back pack, knapsack, packsack, rucksack, haversack' || detectedObj == 'mailbag, postbag') {
      itemFive.classList.add('objectIdentified');
    } else if (detectedObj == 'Loafer' || detectedObj == 'running shoe') {
      itemSix.classList.add('objectIdentified');
    } else if (detectedObj == 'soccer ball') {
      itemSeven.classList.add('objectIdentified');
    } else if (detectedObj == 'toilet tissue, toilet paper, bathroom tissue') {
      itemEight.classList.add('objectIdentified');
    } else if (detectedObj == 'bow tie, bow-tie, bowtie') {
      itemNine.classList.add('objectIdentified');
    }
  }

  setTimeout(function() {
    myMobileNet.classify(myVideo, gotResults);
  }, 2000);

}

function draw() {}
