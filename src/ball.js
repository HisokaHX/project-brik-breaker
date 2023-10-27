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

        this.container.appendChild(this.element);

        this.setListeners();
    }


    move() {
        this.x += this.vx;
        this.y += this.vy;
      
        if (this.x <= 0) {
          this.x = 0;
        }
        if (this.x + this.width >= this.container.offsetWidth) {
          this.x = this.container.offsetWidth - this.width;
        }
      
        if (this.y <= 0) {
          this.y = 0;
        }
        if (this.y + this.height >= this.container.offsetHeight) {
          this.y = this.container.offsetHeight - this.height;
        }
      
        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
      }

    setListeners () {
        window.addEventListener("keydown", (e) => {
            switch (e.code) {
              case "Space":
                console.log("esta entrando")
                this.vy = -10;
                this.vx = 10;
                break;
            }
        })

    }
}