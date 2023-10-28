class Game {
    constructor(container) {
        this.container = container;
        this.background = new Background(this.container);
        this.player = new Player(this.container);
        this.ball = new Ball(this.container);
        this.bricks = [];
        

        this.intervalId = null;
    }

    start() {
        this.intervalId = setInterval(() => {
            this.update();
        }, 1000 / 36);

        this.createBrick();
    }

    createBrick() {
        const rowCount = 4;
        const colCount = 7; 
        const padding = 37;

        let xOffset = padding;
        let yOffset = padding; 

        for (let row = 0; row < rowCount; row++) {
            for (let col = 0; col < colCount; col++) {
                const brick = new Brick(this.container, xOffset, yOffset);
                this.bricks.push(brick);
                xOffset += brick.width + padding;
            }

            xOffset = padding;
            yOffset += brick.height + padding;
        }

    
    }

    update() {
        this.player.move();
        this.ball.move();
        this.ball.didCollied(this.player);
    }
} 
