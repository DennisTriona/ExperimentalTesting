var app;
(function (app) {
    var nothing;
    (function (nothing) {
        var services;
        (function (services) {
            var GameArea = (function () {
                function GameArea() {
                }
                GameArea.prototype.initGame = function () {
                    this.ball = new app.nothing.objects.Ball(400, 400, 1, 1, 1, "red", 10, 5);
                };
                GameArea.prototype.gameLoop = function () {
                    // Draw
                    this.clearCanvas();
                    this.ball.Draw(this._ctx);
                    // Update
                    this.ball.Update();
                };
                GameArea.prototype.clearCanvas = function () {
                    var self = this;
                    requestAnimationFrame(this.gameLoop.bind(self));
                    this._ctx.fillStyle = "black";
                    this._ctx.fillRect(0, 0, 1280, 720);
                };
                Object.defineProperty(GameArea.prototype, "canvas", {
                    get: function () {
                        return this._canvas;
                    },
                    set: function (value) {
                        this._canvas = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(GameArea.prototype, "ctx", {
                    get: function () {
                        return this._ctx;
                    },
                    set: function (value) {
                        this._ctx = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                return GameArea;
            })();
            services.GameArea = GameArea;
            angular.module("ShareDemo").service("app.nothing.services.GameArea", GameArea);
        })(services = nothing.services || (nothing.services = {}));
    })(nothing = app.nothing || (app.nothing = {}));
})(app || (app = {}));
//window.onload = () => {
//    app.nothing.services.GameArea.canvas = <HTMLCanvasElement>document.getElementById('nothingCanvas');
//    app.nothing.services.GameArea.ctx = app.nothing.services.GameArea.canvas.getContext("2d");
//    app.nothing.services.GameArea.gameLoop();
//} 
//# sourceMappingURL=GameArea.js.map