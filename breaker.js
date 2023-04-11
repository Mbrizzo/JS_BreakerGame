var canvas, ctx;
var ballX, ballY, ballDX, ballDY, ballRadius;
var paddleX, paddleWidth, paddleHeight;
var brickRowCount, brickColumnCount, brickWidth, brickHeight, brickPadding, brickOffsetTop, brickOffsetLeft;
var bricks = [];
var score = 0;
var lives = 3;

function init() {
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	ballRadius = 10;
	ballX = canvas.width/2;
	ballY = canvas.height-30;
	ballDX = 2;
	ballDY = -2;
	paddleWidth = 75;
	paddleHeight = 10;
	paddleX = (canvas.width-paddleWidth)/2;
	brickRowCount = 3;
	brickColumnCount = 5;
	brickWidth = 75;
	brickHeight = 20;
	brickPadding = 10;
	brickOffsetTop = 30;
	brickOffsetLeft = 30;
	for(var c=0; c<brickColumnCount; c++) {
		bricks[c] = [];
		for(var r=0; r<brickRowCount; r++) {
			bricks[c][r] = { x: 0, y: 0, status: 1 };
		}
	}
	draw();
}