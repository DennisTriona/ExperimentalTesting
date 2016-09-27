var app;
(function (app) {
    var nothing;
    (function (nothing) {
        var services;
        (function (services) {
            var GameService = (function () {
                function GameService() {
                    var _this = this;
                    // Player Input
                    this.KeyDownListener = function (e) {
                        var direction = 0;
                        if (e.which == 87)
                            direction = -1;
                        if (e.which == 83)
                            direction = 1;
                        _this.paddlePlayer.Move(direction);
                    };
                }
                Object.defineProperty(GameService.prototype, "canvas", {
                    get: function () {
                        return this._canvas;
                    },
                    set: function (value) {
                        this._canvas = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(GameService.prototype, "ctx", {
                    get: function () {
                        return this._ctx;
                    },
                    set: function (value) {
                        this._ctx = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                // Init and default gameLoop
                GameService.prototype.initGame = function () {
                    // init Ball
                    this.ball = new app.nothing.objects.Ball(400, 400, 1, 1, 8, "red", 10, 5);
                    // init Paddle - player
                    this.paddlePlayer = new app.nothing.objects.PlayerPaddle(1280 - 25, 720 / 2, 15, 80, 8);
                    // init Paddle - AI 
                    this.paddleAI = new app.nothing.objects.AIPaddle(10, 720 / 2, 15, 80, 8, 5);
                    // init Border
                    this.border = new app.nothing.objects.Border(0, 0, 1280, 720);
                    // event setup
                    document.addEventListener("keydown", this.KeyDownListener);
                };
                GameService.prototype.gameLoop = function () {
                    // Clear Canvas
                    this.clearCanvas();
                    // Draw Game
                    this.DrawGame();
                    // Update Game
                    this.UpdateGame();
                    // Do Collision Check
                    this.DetectCollisions();
                };
                // Frame Functions
                GameService.prototype.clearCanvas = function () {
                    var self = this;
                    requestAnimationFrame(this.gameLoop.bind(self));
                    this._ctx.fillStyle = "black";
                    this._ctx.fillRect(0, 0, 1280, 720);
                };
                GameService.prototype.DrawGame = function () {
                    // Draw Border
                    this.border.Draw(this._ctx);
                    // Draw Ball
                    this.ball.Draw(this._ctx);
                    // Draw Paddle-Player
                    this.paddlePlayer.Draw(this._ctx);
                    // Draw Paddle-AI
                    this.paddleAI.Draw(this._ctx);
                };
                GameService.prototype.UpdateGame = function () {
                    // Update Ball
                    this.ball.Update();
                    // Update Paddle-Player
                    this.paddlePlayer.Update();
                    // Update Paddle-AI
                    this.paddleAI.Update();
                };
                GameService.prototype.DetectCollisions = function () {
                    // Check ball collision to border
                    if (this.ball.InnerYCollisionCheck(this.border.rectangle)) {
                        this.paddleAI.CalculatePath(this.ball, this.border);
                    }
                    // check ball collision to paddlePlayer
                    if (this.ball.OuterCollisionCheck(this.paddlePlayer._rectangle)) {
                        this.paddleAI.CalculatePath(this.ball, this.border);
                    }
                    // check ball collision to paddleAI
                    this.ball.OuterCollisionCheck(this.paddleAI._rectangle);
                    // Check goal collision
                    var event = this.ball.InnerXCollisionCheck(this.border.rectangle);
                    if (event != 0) {
                        this.Scored(event);
                    }
                };
                // Game Functions
                GameService.prototype.RestartGame = function () {
                    // Reset Score
                    // Reset Paddle Positions
                    // Reset Ball
                };
                GameService.prototype.GameEnd = function () {
                    // Print Result
                };
                GameService.prototype.Scored = function (e) {
                    // Add to score
                    // Check win condition
                    // Restart game
                    // Reset ball
                    this.ball.ResetPosition(this.border.rectangle.width / 2, this.border.rectangle.height / 2);
                };
                return GameService;
            })();
            services.GameService = GameService;
            angular.module("ShareDemo").service("app.nothing.services.GameService", GameService);
        })(services = nothing.services || (nothing.services = {}));
    })(nothing = app.nothing || (app.nothing = {}));
})(app || (app = {}));
//# sourceMappingURL=GameService.js.map