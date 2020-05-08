const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
let point_x_A = (width - 500)/2;
let point_y_B = (height - 433)/2;
let point_y_A = height - point_y_B;
let point_x_B = point_x_A + 250;
let point_x_C = point_x_A + 500;
let Points = [point_x_A, point_y_A, point_x_B, point_y_B, point_x_C, point_y_A];
let balls = [];
let times = 0;

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

class Ball{
    constructor(x, y, color, size){
	this.x = x;
	this.y = y;
    	this.color = color;
 	this.size = size;
    }
    
    draw(){
	ctx.beginPath();
  	ctx.fillStyle = this.color;
  	ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  	ctx.fill();
    }
}

function loop() {
 
  let numran = Math.floor(Math.random() * 3);
  let x1 = balls[balls.length-1].x + (Points[numran*2] - balls[balls.length-1].x)/2;
  let y1 = balls[balls.length-1].y + (Points[numran*2+1] - balls[balls.length-1].y)/2
  let ball = new Ball(
    x1,
    y1,
    'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',
    3
  );
  balls.push(ball);
  ball.draw();
  if(times<10000){
    times+=1;
    requestAnimationFrame(loop);
  }
}

let ball1 = new Ball(
    point_x_B,
    (point_y_B-216),
    'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',
    3
 );
balls.push(ball1);
loop();