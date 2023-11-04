class Score {
  constructor(container, lifes) {
    this.container = container;
    this.lifes = lifes;
    this.highScore = localStorage.getItem("highScore") || 0;
    this.bricks = 0;

    this.width = 1000;
    this.heigth = 100;
    this.x = 10;
    this.y = 10;

    this.element = document.createElement("div");
    this.element.id = "score";

    this.scoreTextEl = document.createElement("h2");
    this.scoreTextEl.id = "score-text";
    this.scoreTextEl.textContent = `Score : ${this.bricks}`;

    this.element = document.createElement("div");
    this.element.id = "high-score";

    this.highScoreEl = document.createElement("h2");
    this.highScoreEl.id = "high-score-text";
    this.highScoreEl.textContent = `High Score : ${this.highScore}`;

    this.energysContainer = document.createElement("div");
    this.energysContainer.id = "energys-container";

    new Array(this.lifes).fill("").forEach((_) => {
      const energy = document.createElement("img");
      energy.src = `./assets/image.png`;
      energy.style.width = "40px";
      energy.style.height = "40px";

      this.energysContainer.appendChild(energy);
    });

    this.element.appendChild(this.scoreTextEl);
    this.element.appendChild(this.energysContainer);
    this.element.appendChild(this.highScoreEl);

    this.element.style.position = "absolute";

    this.element.style.width = `${this.width - 20}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.left = `${this.x}px`;
    this.element.style.top = `${this.y}px`;

    this.container.appendChild(this.element);
  }

  scorePoints(points) {
    this.bricks += points;

    const scoreText = document.getElementById("score-text");
    scoreText.textContent = `Score: ${this.bricks}`;

    if (this.bricks > this.highScore) {
      this.highScore = this.bricks;
      const highScoreEl = document.getElementById("high-score-text");
      highScoreEl.textContent = `High Score: ${this.highScore}`;
    }
  }

}
