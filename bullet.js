let bulletsArray = [];

class Bullet {
  constructor(x, y, w, h, angle) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.angle = angle;
    this.speed = 6;
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key == " ") {
    let bullet = new Bullet(
      player.x + player.w / 2 - 5,
      player.y + player.h / 2,
      10,
      5,
      player.angle
    );
    bulletsArray.push(bullet);
    ctx.fillStyle = "red";
    updateBullets();
  }
});

function updateBullets() {
  let index = 0;
  bulletsArray.forEach((bullet) => {
    switch (bullet.angle) {
      case 0:
        bullet.x += bullet.speed;
        break;
      case 90:
        bullet.y += bullet.speed;
        break;
      case 180:
        bullet.x -= bullet.speed;
        break;
      case 270:
        bullet.y -= bullet.speed;
        break;
    }
    // spawn of bullets
    ctx.fillStyle = "red";
    ctx.rect(bullet.x, bullet.y, 10, 5);
    ctx.fill();
    //deleting of not existing bullets
    if (bullet.x > 600 && bullet.x < 0 && bullet.y < 0 && bullet.y > 600) {
      bulletsArray.slice(index, 1);
    }
  });
}

function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function update() {
  // Очищаємо канву

  clear();
  //drawPlayer();

  // Оновлюємо позицію корабля

  player.newPos();
  updateBullets();
  // Формуємо наступний фрейм
  window.requestAnimationFrame(update);
}
// Формуємо наступний фрейм
window.requestAnimationFrame(update);
