var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var app;
(function (app) {
    var nothing;
    (function (nothing) {
        var objects;
        (function (objects) {
            var States;
            (function (States) {
                States[States["idle"] = 1] = "idle";
                States[States["Aiming"] = 2] = "Aiming";
                States[States["Adjust"] = 3] = "Adjust";
            })(States || (States = {}));
            var AIPaddle = (function (_super) {
                __extends(AIPaddle, _super);
                function AIPaddle(x, y, width, height, speed, humanError) {
                    _super.call(this, x, y, width, height, speed);
                    this.humanError = humanError;
                }
                AIPaddle.prototype.Update = function () {
                    if (this.destination > this._rectangle.y + (this._rectangle.height / 2))
                        this.Move(1);
                    if (this.destination < this._rectangle.y + (this._rectangle.height / 2))
                        this.Move(-1);
                    _super.prototype.Update.call(this);
                };
                AIPaddle.prototype.Draw = function (ctx) {
                    // Redraw Ball at new position
                    ctx.restore();
                    ctx.beginPath();
                    ctx.strokeStyle = "red";
                    ctx.lineWidth = 2;
                    ctx.setLineDash([0]);
                    ctx.arc(this.destinationX, this.destination, 2, 0, 2 * Math.PI);
                    ctx.stroke();
                    _super.prototype.Draw.call(this, ctx);
                };
                // Called when Player hits Ball or Ball hits Wall
                AIPaddle.prototype.CalculatePath = function (ball, border) {
                    // Simulation of exact ball path
                    var simX = ball.x;
                    var simY = ball.y;
                    var simDirX = ball.dirX;
                    var simDirY = ball.dirY;
                    if (simDirX > 0)
                        simDirX *= -1;
                    while (simX >= this._rectangle.x) {
                        // simulate ball update
                        simX += simDirX * ball.speed;
                        simY += simDirY * ball.speed;
                        if (simY - (ball.size / 2) - ball.lineWidth <= 0 || simY + (ball.size / 2) + ball.lineWidth > border.rectangle.height)
                            simDirY *= -1;
                    }
                    // Add human error
                    var random = (Math.random() - 0.5) * 100;
                    simY += random * this.humanError;
                    this.destination = simY + (ball.size / 2) + ball.lineWidth;
                    this.destinationX = simX;
                };
                return AIPaddle;
            })(objects.Paddle);
            objects.AIPaddle = AIPaddle;
        })(objects = nothing.objects || (nothing.objects = {}));
    })(nothing = app.nothing || (app.nothing = {}));
})(app || (app = {}));
//# sourceMappingURL=AIPaddle.js.map