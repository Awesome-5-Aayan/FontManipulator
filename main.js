leftWristX=0;
rightWristX=0;
difference=0;
function setup(){
video = createCapture(VIDEO);
video.size(550,500);

canvas=createCanvas(550,550);
canvas.position(560,150);

posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose', gotPoses);
}

function draw(){
    background('#4287f5');
   textSize(difference);
    document.getElementById('font_size').innerHTML="width and height of the square will be = " + difference;
    fill("#065e1f");
    stroke("#065e1f");
    text("Hello",50,400)
}
function modelLoaded(){
    console.log('PoseNet is initialized');
}
function gotPoses(results){
    if (results.length>0) {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;

        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
    }
}

