let myMobileNet;
let myVideo;

function preload() {
  myMobileNet = ml5.imageClassifier("MobileNet")
  myVideo = createCapture(VIDEO);

}

function setup() {
  console.log(myMobileNet);
  myMobileNet.classify(myVideo, gotResults);
  myDiv = createElement('div', '');
}

function gotResults(err, results) {
  console.log("results", results);
  myDiv.html(results[0].label);
  myMobileNet.classify(myVideo, gotResults);
}

function draw() {}
