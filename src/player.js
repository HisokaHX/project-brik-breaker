class Player {
  constructor(container) {
    this.container = container;
    this.width = 200;
    this.height = 40;
    this.x = 400;
    this.y = 625;
    this.vx = 0;
    this.ball = 0;
    this.canShoot = true;
    this.animationTick = 0;

    this.element = document.createElement("div");
    this.element.style.position = "absolute";

    // this.element.style.background = `url(../assets/Barra2.png)`;
    // this.element.style.backgroundSize = "cover";
    // this.element.style.backgroundPosition = "bottom";
    this.element.style.backgroundColor = "#00FF08";

    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.left = `${this.x}px`;
    this.element.style.top = `${this.y}px`;

    this.container.appendChild(this.element);

    this.setListeners()
  }

  move() {
    this.x += this.vx;

    if (this.x <= 0) {
      this.x = 0;
    }

    if (this.x + this.width >= this.container.offsetWidth) {
      this.x = this.container.offsetWidth - this.width;
    }

    this.element.style.left = `${this.x}px`;

  }

  setListeners() {
    window.addEventListener("keydown", (e) => {
      switch (e.code) {
        case "ArrowRight":
          this.vx = 10;
          break;
        case "ArrowLeft":
          this.vx = -10;
          break;
        /*case "Space":
          if (this.canShoot) {
            this.shoot();
          }*/
      }
    });

    window.addEventListener("keyup", (e) => {
      switch (e.code) {
        case "ArrowRight":
        case "ArrowLeft":
          this.vx = 0;
          break;
      }
    })
  }

}

