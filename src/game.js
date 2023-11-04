class Game {
    constructor(container) {
        this.container = container;
        this.background = new Background(this.container);
        this.player = new Player(this.container);
        this.ball = new Ball(this.container);
        this.bricks = [];
        this.score = new Score(this.container, this.player.lives);

        this.backgroundMusic = document.getElementById("hero");

        this.intervalId = null;

        this.tick = 0;
    }

    start() {
        this.backgroundMusic.play();

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
        const padding = 38;

        let xOffset = padding;
        let yOffset = padding + 50;

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
        const theChampion = document.getElementById("champion");
        this.backgroundMusic.pause();
        theChampion.play();
        winBoard.style.display = "flex";
        document.getElementById("score-game-win").textContent = `Score: ${this.score.bricks}`;
        document.getElementById("high-score-game-win").textContent = `High Score: ${this.score.highScore}`;

        clearInterval(this.intervalId);
    }



    gameOver() {
        const gameOverBoard = document.getElementById("game-over-board");
        const theLoser = document.getElementById("loser");
        this.backgroundMusic.pause();
        theLoser.play()
        gameOverBoard.style.display = "flex";
        document.getElementById("score-game-over").textContent = `Score: ${this.score.bricks}`;
        document.getElementById("high-score-game-over").textContent = `High Score: ${this.score.highScore}`;

        clearInterval(this.intervalId);
    }

    iamDead() {
        const energysNodes = this.score.element.getElementsByTagName("img");

        if (this.ball.y + this.ball.height >= this.container.offsetHeight) {
            console.log("la bola salio");
            this.ball.x = 490;
            this.ball.y = 600;
            this.ball.vx = 0;
            this.ball.vy = 0;
            this.player.x = 400;
            this.player.lives -= 1;
            this.ball.canStart = true;
            console.log(energysNodes);
            const lastEnergy = energysNodes[energysNodes.length - 1];
            lastEnergy.remove();

        }

        if (this.player.lives === 0) {
            this.setHighScore()
            this.gameOver();
        }
    }

    setHighScore() {
        localStorage.setItem("highScore", this.score.highScore);
    }

    getCrazy() {
        if (this.score.bricks % 10 === 0 && this.score.bricks > 0) {
            this.ball.vx = this.ball.vx * 1.01;
            this.ball.vy = this.ball.vy * 1.01;
            this.player.vx = this.player.vx * 1.01;
        }
    }

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

        this.iamDead()

        this.getCrazy()

        this.setHighScore()
    }

} 
