let video, classifier, label = "waiting...";

function preload() {
    classifier = ml5.imageClassifier("https://storage.googleapis.com/tm-model/W4qRx-0aF/model.json")
}

function setup() {
    createCanvas(640, 520), (video = createCapture(VIDEO)).hide(), classifyVideo()
}

function classifyVideo() {
    classifier.classify(video, gotResults)
}

function draw() {
    background(0), image(video, 0, 0), textSize(32), textAlign(CENTER, CENTER), fill(255), text(label, width / 2, height - 16)
}

function gotResults(e, i) {
    e ? console.error(e) : label = i[0].label
}
