var nosex = 0;
var nosey = 0;
function preload(){
	clownose = loadImage("https://i.postimg.cc/2SjCyPvH/download-removebg-preview.png");
}
function setup(){
	canvas = createCanvas(500,500);
	canvas.center();
	video = createCapture(VIDEO);
	video.size(500,500);
	video.hide();
	poseNet = ml5.poseNet(video,modelloaded);
	poseNet.on('pose', gotPoses);
}
function modelloaded(){
	console.log("poseNet fired");
}
function gotPoses(results){
	if(results.length > 0){
		console.log(results);
		console.log("nose x "+results[0].pose.nose.x+" nose y "+results[0].pose.nose.y);
		nosex = results[0].pose.nose.x - 50;
		nosey = results[0].pose.nose.y - 30;
	}
}
function draw(){
	image(video,0,0,500,500);
	image(clownose,nosex,nosey,100,50);
}
function take_snapshot(){
	save("pic.png");
}