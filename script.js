const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set initial canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Load DVD logo image
const dvdLogo = new Image();
dvdLogo.src = 'https://www.freeiconspng.com/thumbs/dvd-logo-png/dvd-logo-png-31.png';

const logoWidth = 100;
const logoHeight = 50;

let x = Math.random() * (canvas.width - logoWidth);
let y = Math.random() * (canvas.height - logoHeight);
let dx = 3;
let dy = 3;

function draw() {
  const WIDTH = canvas.width;
  const HEIGHT = canvas.height;

  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  ctx.drawImage(dvdLogo, x, y, logoWidth, logoHeight);

  x += dx;
  y += dy;

  // Bounce off edges
  if (x + logoWidth > WIDTH || x < 0) {
    dx = -dx;
    x = Math.max(0, Math.min(WIDTH - logoWidth, x));
  }
  if (y + logoHeight > HEIGHT || y < 0) {
    dy = -dy;
    y = Math.max(0, Math.min(HEIGHT - logoHeight, y));
  }

  requestAnimationFrame(draw);
}

dvdLogo.onload = function () {
  draw();
};

// Handle resizing
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
