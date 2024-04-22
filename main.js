noseX=0;
noseY=0;

function preload() {
sonic = loadImage('https://i.postimg.cc/4yc6ZKBh/descarga.png');
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
console.log('poseNet está inicializado');
}

function gotPoses(results)
{
if(results.length > 0)  

{
  console.log(results);
  noseX = results[0].pose.nose.x-50;
  noseY = results[0].pose.nose.y-150;
  console.log("nose x =" + results[0].pose.nose.x);
  console.log("nose y =" + results[0].pose.nose.y);
}
}
function draw() {
  image(video, 0, 0, 300, 300);
  image(sonic, noseX, noseY, 100, 100);
}

function take_snapshot(){    
Save('myFilterImage.png');
}