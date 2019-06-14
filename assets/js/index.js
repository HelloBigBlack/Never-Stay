var canvas;
var ctx;
var raf;
var gameStates = 'running' //running or over
var score = 0;
var maxScore = 0;
var ball = {
	a: 0.2,//加速度
	x: 100,
	y: 100,
	vx: 0,
	vy: 0,
	radius: 25,
	color: '#fd7e14',
	draw: function() {
		ball.vy += ball.a;
		if(ball.y + ball.vy > canvas.height - ball.radius) {
			ball.vx = 0;
			ball.vy = 0;
			gameStates = 'over'
		}
		//首先，判断小球是否在方块上方，并且方向向下
		if(ball.y + 25 >= rect.y && ball.vy > 0){
			if(ball.x >= rect.x && ball.x <= rect.x + rect.width && ball.y + 25 <= rect.y + ball.vy) {
				ball.vy = -ball.vy;
				ball.vx += rect.vx;
				score++;
				setScore(score);
			}
		}
		if(ball.x + ball.vx > canvas.width - ball.radius || ball.x + ball.vx < ball.radius) {
			ball.vx = -ball.vx;
		}
		// if(ball.x >= rect.x && ball.x <= rect.x + rect.width && ball.y + 25 >= rect.y) {
		// 	ball.vy = -ball.vy;
		// 	ball.vx += rect.vx;
		// 	score++;
		// 	setScore(score);
		// }
		ball.vy += ball.a;
		ball.x += ball.vx;
		ball.y += ball.vy;
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
		ctx.closePath();
		ctx.fillStyle = this.color;
		ctx.fill();
	}
};

var rect = {
	x: 100,
	y: 475,
	vx: 0,
	vy: 0,
	width: 100,
	height: 10,
	color: '#ebedf2',
	draw: function() {
		if(this.x + this.vx > canvas.width - 100 || this.x + this.vx < 0) {
			this.vx = 0;
		}
		this.x += this.vx;

		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
	},
	moveToLeft: function() {
		this.vx = -10;
	},
	moveToRight: function() {
		this.vx = 10;
	},
	stopMove: function() {
		this.vx = 0;
	}
}

function setScore(number) {
	$('#score span').text(number);
}

function setMaxScore(number) {
	$('#maxScore span').text(number);
}

function draw() {
	
	if(gameStates == 'over') {
		maxScore = maxScore >= score ? maxScore : score;
		score = 0;
		setScore(0);
		setMaxScore(maxScore);
		alert('game over!')
		window.cancelAnimationFrame(raf);
		return;
	}
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ball.draw();
	rect.draw();
	raf = window.requestAnimationFrame(draw);
}

function gameStart() {
	ball.x = 100;
	ball.y = 100;
	ball.vx = 5;
	ball.vy = 0;
	rect.x = 100;
	rect.stopMove();
	gameStates = 'running'
	raf = window.requestAnimationFrame(draw);　　
	$(document).keydown(function(event) {　　　　
		if(event.keyCode == 65) {　　　　　　
			rect.moveToLeft();　　　
		}
		if(event.keyCode == 68) {
			rect.moveToRight();
		}
	});
	$(document).keyup(function(event) {
		rect.stopMove();
	});
}

$(function() {
	canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');

	ball.draw();
	rect.draw();
})