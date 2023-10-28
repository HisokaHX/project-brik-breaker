class Brick {
    constructor(container, x, y) {
        this.container = container;
        this.x = x;
        this.y = y;
        this.width = 100;
        this.height = 50;
        this.color = '#00FFFB';

        this.element = document.createElement("div");
        this.element.style.position = "absolute";

        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
        this.element.style.backgroundColor = this.color;

        this.container.appendChild(this.element);

    }
}
