class Game {
    constructor(container) {
        this.container = container;
        this.background = new Background(this.container);
        this.player = new Player(this.container);
        this.ball = new Ball(this.container);
        this.bricks = [];

        this.intervalId = null;

        this.tick = 0;
    }

    start() {
        this.intervalId = setInterval(() => {
            this.update();

            this.tick++;
        }, 1000 / 36);

        this.createBrick();
    }

    createBrick() {
        const rowCount = 4;
        const colCount = 7;
        const brickWidth = 100;
        const brickHeight = 40;
        const padding = 37;

        let xOffset = padding;
        let yOffset = padding;  

        new Array(rowCount).fill("").forEach(() => {
            new Array(colCount).fill("").forEach(() => {
                const brick = new Brick(this.container, xOffset, yOffset, brickWidth, brickHeight);
                this.bricks.push(brick);
                xOffset += brick.width + padding;
            })
            xOffset = padding;
            yOffset += brickHeight + padding;
        })
    }

    update() {
        this.player.move();
        this.ball.move();
        this.ball.didCollied(this.player);

        // if (this.tick === 200) {
        //     const bricks = this.container.querySelectorAll(".brick");
        //     for (let brick of bricks) {
        //         brick.classList.add("red");
        //     }
        // }

        if (this.tick % 20 === 0) {
            console.log("do something!");
            const bricks = this.container.querySelectorAll(".brick");
            for (let brick of bricks) {
                brick.style.backgroundColor = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
            }
        }
    }
} 
