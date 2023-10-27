class Brik {
    constructor(container) {
        this.container = container;
        this.x = 10;
        this.y = 300;
        this.width = 50;
        this.height = 100;
        this.color = 'white';

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
