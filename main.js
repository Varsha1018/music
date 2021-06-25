song1="";
song2="";

leftwristX=0;
rightwristX=0;

leftwristY=0;
rightwristY=0;

function preload(){
    song1=loadSound("music.mp3");
    song2=loadSound("music2.mp3");
}

function setup() {
video=createCapture(VIDEO);
video.size(550, 550);
video.hide();
canvas=createCanvas(550, 430);
canvas.position(500, 250);
poseNet=ml5.poseNet(video, modelloaded);
poseNet.on("pose", gotPose);
}

function modelloaded(){
    console.log("Model Is Loaded!!")
}

function gotPose(results){
    if(results.length>0){
        console.log(results);
        leftwristX=results[0].pose.leftWrist.x;
        leftwristY=results[0].pose.leftWrist.y;

        rightwristX=results[0].pose.rightWrist.x;
        rightwristY=results[0].pose.rightWrist.y;
    }
}

function draw(){
    image(video, 0, 0, 600, 500);
}