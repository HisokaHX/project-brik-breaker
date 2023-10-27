class Ball {
    constructor(container, x, y) {
        this.container = container;
        this.x = 490;
        this.y = 600;
        this.width = 20;
        this.height = 20;
        this.vx = 10;

        this.element = document.createElement("div");
        this.element.style.position = "absolute";

        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
        this.element.style.backgroundColor = "white";
        this.element.style.borderRadius = "100px";

        this.container.appendChild(this.element);
    }

    move() {
        this.x += this.vx;
        this.element.style.left = `${this.x}px`;
    }
}