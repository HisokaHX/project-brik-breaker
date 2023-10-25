class Background {
    constructor (container) {
        this.container = container;

        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;
    
        this.element = document.createElement("div");
        this.element.style.position = "absolute";
        this.element.style.background = `url(../assets/board-game.jpg)`;
        this.element.style.backgroundSize = "cover";
        this.element.style.backgroundPosition = "bottom";
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;

        this.container.appendChild(this.element)
    }
    
}