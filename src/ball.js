class Ball {
  constructor(container, x, y) {
    this.container = container;
    this.x = 490;
    this.y = 600;
    this.width = 20;
    this.height = 20;
    this.vx = 0;
    this.vy = 0;

    this.element = document.createElement("div");
    this.element.style.position = "absolute";

    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.left = `${this.x}px`;
    this.element.style.top = `${this.y}px`;
    this.element.style.backgroundColor = "white";
    this.element.style.borderRadius = "100px";
    this.element.style.border = "2px solid white";

    this.container.appendChild(this.element);

    this.setListeners();

    this.keepAlive = true;
    this.canStart = true;
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x <= 0 || this.x + this.width >= this.container.offsetWidth) {
      this.vx = -this.vx;
    }

    if (this.y <= 0) {
      this.vy = -this.vy;
    }

    this.element.style.left = `${this.x}px`;
    this.element.style.top = `${this.y}px`;
  }


  didCollied(player) {
    const ballRect = this.element.getBoundingClientRect();
    const playerRect = player.element.getBoundingClientRect();

    if (playerRect.top < ballRect.bottom) {
      if (
        playerRect.left < ballRect.right &&
        playerRect.right > ballRect.left &&
        this.keepAlive
      ) {
        this.y = 600;
        this.vy = -this.vy;
        if (player.vx < 0 && this.vx > 0 || player.vx > 0 && this.vx < 0) {
          this.vx = -this.vx;
        }
      } else {
        this.keepAlive = false;
      }
    }
  }


  setListeners() {
    window.addEventListener("keydown", (e) => {
      switch (e.code) {
        case "Space":
          if (this.canStart) {
            const minAngle = Math.PI / 4;
            const maxAngle = 3 * Math.PI / 4;
            let randomAngle;
            do {
              randomAngle = Math.random() * (maxAngle - minAngle) + minAngle;
            } while (Math.abs(Math.sin(randomAngle) - Math.sin(minAngle)) < 0.2);
            this.vx = Math.cos(randomAngle) * 10;
            this.vy = Math.sin(randomAngle) * 10;
            this.keepAlive = true;
            this.canStart = false;
          }
      }
    });
  }
}
