function startclassification(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/BgnWsU-vK/model.json" , modelReady)

}
function modelReady(){
    console.log("modelReady");
    classifier.classify(gotResult)

}
function gotResult(error,result){
    if(error){
        console.error(error)
    }
    else{
        console.log(result);
        var soundName = result[0].label
        var confidence = (result[0].confidence*100).toFixed(2);
        r = Math.floor(Math.random()*255)+1
        g = Math.floor(Math.random()*255)+1
        b = Math.floor(Math.random()*255)+1
        document.getElementById("result_label").innerHTML = "I Can Hear-" + soundName
        document.getElementById("result_confidence").innerHTML = "Accuracy-" + confidence
        document.getElementById("result_label").style.color = "rgb("+r+","+g+","+b+")"
        document.getElementById("result_confidence").style.color = "rgb("+r+","+g+","+b+")"


 img1 = document.getElementById("alien1");
 img2 = document.getElementById("alien2");
 img3 = document.getElementById("alien3");
 img4 = document.getElementById("alien4");

 if(soundName == "Claps"){
img1.src = "aliens-01.gif"
img1.src = "aliens-02.png"
img1.src = "aliens-03.png"
img1.src = "aliens-04.png"

 }
 else if(soundName == "Snap"){
     img1.src = "aliens-01.png"
     img2.src = "aliens-02.gif"
     img3.src = "aliens-03.png"
     img4.src = "aliens-04.png"
 }
 else if(soundName == "Drum"){
     img1.src = "aliens-01.png"
     img2.src = "aliens-02.png"
     img3.src = "aliens-03.gif"
     img4.src = "aliens-04.png"
 }
 else{
     img1.src="aliens-01.png"
     img2.src="aliens-02.png"
     img3.src="aliens-03.png"
     img4.src="aliens-04.gif"
     
 }
    }

    
}

