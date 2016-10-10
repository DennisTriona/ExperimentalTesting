var app;
(function (app) {
    var nothing;
    (function (nothing) {
        var controllers;
        (function (controllers) {
            var GameController = (function () {
                function GameController(gameService) {
                    this.gameService = gameService;
                }
                GameController.prototype.startGame = function () {
                    this.gameService._canvas = document.getElementById('nothingCanvas');
                    this.gameService._ctx = this.gameService._canvas.getContext("2d");
                    this.gameService.initGame();
                    this.gameService.gameLoop();
                };
                GameController.$inject = ['app.nothing.services.GameService'];
                return GameController;
            }());
            angular.module("ShareDemo").controller("app.nothing.controllers.GameController", GameController);
        })(controllers = nothing.controllers || (nothing.controllers = {}));
    })(nothing = app.nothing || (app.nothing = {}));
})(app || (app = {}));
//# sourceMappingURL=GameController.js.map