class Score {
    constructor(container, lifes, highScore) {
        this.container = container;
        this.lifes = lifes;
        this.highScore = 0;
        this.bricks = 0;

        this.width = 150;
        this.heigth = 100;
        this.x = 10;
        this.y = 10;

        this.element = document.createElement("div");
        this.element.id = "score";


        this.scoreTextEl = document.createElement("h2");
        this.scoreTextEl.id = "score-text";
        this.scoreTextEl.textContent = `Score : ${this.bricks}`;


        this.energysContainer = document.createElement("div");
        this.energysContainer.id = "energys-container";

        new Array(this.lifes).fill("").forEach((_) => {
            const energy = document.createElement("img");
            energy.src = `./assets/image.png`;
            energy.style.width = "30px";
            energy.style.height = "30px";

            this.energysContainer.appendChild(energy);
        });


        this.element.appendChild(this.scoreTextEl);
        this.element.appendChild(this.energysContainer);

        this.element.style.position = "absolute";

        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;

        this.container.appendChild(this.element);


    }


    scorePoints(points) {
        this.bricks += points;

        const scoreText = document.getElementById("score-text");
        scoreText.textContent = `Score: ${this.bricks}`;
    }

    updatesEnergy() {
        const energysNodes = this.element.getElementsByTagName("img");
        const lastEnergy = energysNodes[energysNodes.length - 1];
        return lastEnergy.remove();
    }
}