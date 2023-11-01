class Game {
    constructor(container) {
        this.container = container;
        this.background = new Background(this.container);
        this.player = new Player(this.container);
        this.ball = new Ball(this.container);
        this.bricks = [];
        this.score = new Score(this.container);

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
        const rowCount = 5;
        const colCount = 7;
        const brickWidth = 100;
        const brickHeight = 35;
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

    win() {
        const winBoard = document.getElementById("win-board");
        winBoard.style.display = "flex";

        clearInterval(this.intervalId);
    }



    gameOver() {
        const gameOverBoard = document.getElementById("game-over-board");
        gameOverBoard.style.display = "flex";



        clearInterval(this.intervalId);
    }

    /*iamDead() {
        if (this.ball.y + this.ball.height >= this.container.offsetHeight) {
            console.log("la bola salio");
            this.ball.x = 490;
            this.ball.y = 600;
            this.ball.vx = 0;
            this.ball.vy = 0;
            this.player.x = 400;
        }

        if (this.player.lives === 0) {
            this.gameOver();
        }
    }*/

    update() {
        this.player.move();
        this.ball.move();
        this.ball.didCollied(this.player);

        this.bricks.forEach((brick) => {
            if (brick.isColliding(this.ball)) {
                this.ball.vy *= -1;
                this.score.scorePoints(1);
                this.bricks = this.bricks.filter(block => block !== brick)
                brick.element.remove()
            };
        })


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
                brick.style.backgroundColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
            }
        }

        if (this.bricks.length === 0) {
            this.win();
        }

        if (this.ball.y + this.ball.height >= this.container.offsetHeight) {
            console.log("la bola salio");
            this.ball.x = 490;
            this.ball.y = 600;
            this.ball.vx = 0;
            this.ball.vy = 0;
            this.player.x = 400;
            this.player.lives -= 1;
        }

        if (this.player.lives === 0) {
            this.gameOver();
        }
    }
} 
