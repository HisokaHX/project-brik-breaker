class Player {
    constructor(container) {
      this.container = container; 
      this.width = 200; 
      this.height = 80; 
      this.x = 400; 
      this.y = 600;

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
    }
}