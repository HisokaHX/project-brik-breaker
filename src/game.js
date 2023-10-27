class Game {
    constructor(container) {
        this.container = container;
        this.background = new Background(this.container);
        this.player = new Player(this.container);
        this.ball = new Ball(this.container);
        this.brik = new Brik(this.container);
        

        this.intervalId = null;
    }

    start() {
        this.intervalId = setInterval(() => {
            this.update();
        }, 1000 / 36);
    }

    update() {
        this.player.move();
        this.ball.move();
    }
} 
