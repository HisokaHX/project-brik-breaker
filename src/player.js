class Player {
    constructor(container) {
      this.container = container; 
      this.width = 200; 
      this.height = 80; 
      this.x = 400; 
      this.y = 600;
      this.vx = 0;

      this.element = document.createElement("div");
      this.element.style.position = "absolute"; 

      this.element.style.background = `url(../assets/Barra2.png)`;
      this.element.style.backgroundSize = "cover"; 
      this.element.style.backgroundPosition = "bottom";

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
  
      if (this.x + this.width / 2 >= this.container.offsetWidth / 2) {
        this.x = this.container.offsetWidth / 2 - this.width / 2;
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

