img = "";
noseX = 0;
noseY = 0;
marioX = 325;
marioY = 325;



function preload() {
	mario_jump=loadSound("jump.wav");
	mario_coin=loadSound("coin.wav");
	mario_kick=loadSound("kick.wav");
	mario_die=loadSound("mariodie.wav");
	mario_gameover=loadSound("gameover.wav");
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	img = loadImage("mario.jpg");
}

function setup() {
	canvas = createCanvas(650,400);
	canvas.parent('canvas');
	instializeInSetup(mario);
	
	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console');
	
    poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function draw() {
background("#D3D3D3");
	game();
	if(noseX < 300)
	{
		marioX = marioX - 1;
	}
	
	if(noseX > 300)
	{
		marioX = marioX + 1;
	}
	
		if(noseY < 150)
	{
		marioY = marioY - 1;
	}
	
image(img,marioX, marioY, 40,70);
}

function modelLoaded() {
	console.log('Model Loaded!');
}

function gotPoses(results) {
	if(results.length > 0)
		{
			console.log(results);
			noseX = results[0].pose.nose.x;
			noseY = results[0].pose.nose.y;
			console.log("noseX = " + noseX +", noseY = " + noseY);
		}
}





