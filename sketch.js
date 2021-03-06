let classifier;

function preload() {
    classifier = ml5.imageClassifier("https://storage.googleapis.com/tm-model/W4qRx-0aF/model.json");
}

function classifyImg() {
    var imageoutput = document.getElementById('output');
	x=imageoutput.src;
    alert(x);
    classifier.classify(x, gotResults);
}

function gotResults(e, i) {
    alert(i[0]);
}

var loadFile = function(event) {
	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
	classifyImg();
};
