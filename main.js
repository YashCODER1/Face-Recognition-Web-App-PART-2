//teachablemachine.withgoogle.com/models/b43h3PolA/
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90 
});

var camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_Snapshot()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML='<img id="capture_img" src="'+data_uri+'">'
    });
}
console.log("ml5 version:" , ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/b43h3PolA/model.json",modelLoaded);