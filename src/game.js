class Game {
    constructor(container) {
       this.container = container; 
       this.background = new Background (this.container);
       this.player = new Player(this.container);
    } 

    update() {
        this.player.move();
    }
} 
