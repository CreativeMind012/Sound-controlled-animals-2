dog = 0;
lion = 0;
cow = 0;

startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/MZxHFyZdp/model.json', modelReady);
}
function modelReady()
{
    classifier.classify(gotResults);
}
function gotResults(error, results)
{
    if (error){
        console.error(error);
    }
    else {
        console.log("got results");

    }
}




















