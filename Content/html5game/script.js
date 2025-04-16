const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ballDirection = Math.floor(Math.random() * 360);

// * Ball Parameters
let ball = {
    x: canvas.width/2,
    y: canvas.height/2,
    radius: 10,
    color:'purple',
    speedX: 20,
    speedY: 20,
    direction: ballDirection
}

let player = {
    x: canvas.width/12,
    y: canvas.height/2,
    radius: 10,
    color:'black',
    speedX: 20,
    speedY: 20,
    width: 10,
    height:125
}


document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") player.y -= player.speedY;
    if (e.key === "ArrowDown") player.y += player.speedY;
  });

  function drawPlayer() {
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);
  }

   function drawBall() {
    ctx.beginPath();
    ctx.fillStyle = ball.color;
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fill();
  }

  function loop () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPlayer();
    requestAnimationFrame(loop);
  }

  loop();

 

// * Ball Start Position

// * Player Speed

// * Player Size

// * Player Color

// * Player Start Position

// * Score Font

//* Score Size

//* Score Color

// * Score Position