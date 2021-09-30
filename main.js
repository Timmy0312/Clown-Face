noseX=0
noseY=0
function preload(){

clown_nose=loadImage("https://i.postimg.cc/tg4pcSvL/530-5302717-clown-face-emoji-clipart-clown-face-png-transparent-2.png")
}

function setup(){

canvas=createCanvas(300,300)
canvas.center()
video=createCapture(VIDEO)
video.size(300,300)
video.hide()

poseNet_var=ml5.poseNet(video,modelLoaded)
poseNet_var.on('pose',gotPoses)
}

function modelLoaded(){

console.log("poseNet is initialized")

}

function gotPoses(results){

if(results.length>0){

console.log(results);
noseX=results[0].pose.nose.x-30
noseY=results[0].pose.nose.y-30
}

}

function draw(){
image(video,0,0,300,300)
fill(255,0,0)
stroke(255,0,0)
image(clown_nose,noseX,noseY,80,80)
}

function take_snapshot(){

save("filtersnap.png")

}