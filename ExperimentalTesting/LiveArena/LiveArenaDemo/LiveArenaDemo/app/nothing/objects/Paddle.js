var app;
(function (app) {
    var nothing;
    (function (nothing) {
        var objects;
        (function (objects) {
            var Paddle = (function () {
                function Paddle(x, y, width, height, speed) {
                    this._rectangle = new objects.Rectangle(x, y, width, height);
                    this.speed = speed;
                }
                Paddle.prototype.Move = function (direction) {
                    this._rectangle.y += direction * this.speed;
                };
                Paddle.prototype.Update = function () {
                };
                Paddle.prototype.Draw = function (ctx) {
                    ctx.fillStyle = "white";
                    ctx.fillRect(this._rectangle.x, this._rectangle.y, this._rectangle.width, this._rectangle.height);
                };
                return Paddle;
            })();
            objects.Paddle = Paddle;
        })(objects = nothing.objects || (nothing.objects = {}));
    })(nothing = app.nothing || (app.nothing = {}));
})(app || (app = {}));
//# sourceMappingURL=Paddle.js.map