let classifier;

function preload() {
    classifier = ml5.imageClassifier("https://storage.googleapis.com/tm-model/W4qRx-0aF/model.json");
}

function classifyImg() {
    var x = document.forms["myForm"]["image"].value;
    alert(x)
    classifier.classify(x, gotResults);
}

function gotResults(e, i) {
    alert(i[0]);
}
