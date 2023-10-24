window.addEventListener("load", () => {
    const container = document.getElementsByClassName("game-board");
    const BtnStart = document.getElementById("intro-game-btn");
    const introBoard = document.getElementById("intro-game")


    BtnStart.addEventListener("click", () => {
        introBoard.remove();
        const game = new Game(container);
      });

})

