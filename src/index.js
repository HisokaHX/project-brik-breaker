window.addEventListener("load", () => {
  const container = document.getElementById("game-board");
  const BtnStart = document.getElementById("intro-game-btn");
  const introBoard = document.getElementById("intro-game");
  const restartBtns = document.querySelectorAll(".btn-restart");

  restartBtns.forEach((button) => {
    button.addEventListener("click", () => {
      window.location.reload();
    });
  });


  BtnStart.addEventListener("click", () => {
    introBoard.remove();
    const game = new Game(container);
    game.start();
  });

})

