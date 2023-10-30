class Brick {
    constructor(container, x, y, width, height) {
        this.container = container;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = '#00FFFB';

        this.element = document.createElement("div");
        this.element.style.position = "absolute";

        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
        this.element.classList.add("brick");
        this.element.style.backgroundColor = this.color;

        this.container.appendChild(this.element);

    }

    isColliding(ball) {
        return (
          ball.x + ball.width > this.x &&
          ball.x - ball.width < this.x + this.width &&
          ball.y + ball.height > this.y &&
          ball.y - ball.height < this.y + this.height
        );
      }
} 


