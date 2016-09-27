module app.nothing.controllers {

    class GameController {
        gameService: app.nothing.interfaces.IGameService;

        static $inject = ['app.nothing.services.GameService'];
        constructor(gameService: app.nothing.interfaces.IGameService) {
            this.gameService = gameService;
        }

        startGame(): void {
            this.gameService._canvas = <HTMLCanvasElement>document.getElementById('nothingCanvas');
            this.gameService._ctx = this.gameService._canvas.getContext("2d");

            this.gameService.initGame();
            this.gameService.gameLoop();
        }
    }

    angular.module("ShareDemo").controller("app.nothing.controllers.GameController", GameController);
}