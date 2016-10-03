var app;
(function (app) {
    var nothing;
    (function (nothing) {
        var objects;
        (function (objects) {
            var Ball = (function () {
                function Ball(x, y, dirX, dirY, speed, color, size, linewidth) {
                    this.x = x;
                    this.y = y;
                    this.dirX = Math.random();
                    this.dirY = Math.random();
                    this.speed = speed;
                    this.color = color;
                    this.size = size;
                    this.lineWidth = linewidth;
                }
                Ball.prototype.Update = function () {
                    // Update Ball position
                    this.x += this.dirX * this.speed;
                    this.y += this.dirY * this.speed;
                };
                Ball.prototype.Draw = function (ctx) {
                    // Redraw Ball at new position
                    ctx.restore();
                    ctx.beginPath();
                    ctx.strokeStyle = this.color;
                    ctx.lineWidth = this.lineWidth;
                    ctx.setLineDash([0]);
                    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
                    ctx.stroke();
                };
                Ball.prototype.ResetPosition = function (x, y) {
                    this.x = x;
                    this.y = y;
                    this.dirX = Math.random();
                    this.dirY = Math.random();
                    this.speed = 8;
                };
                Ball.prototype.InnerYCollisionCheck = function (rectangle) {
                    var hasCollided = false;
                    // Upper check
                    if (this.y - (this.size / 2) - this.lineWidth <= 0) {
                        this.dirY = this.dirY * -1;
                        hasCollided = true;
                        this.speed++;
                    }
                    // Lower Check
                    if (this.y + (this.size / 2) + this.lineWidth >= rectangle.height) {
                        this.dirY = this.dirY * -1;
                        hasCollided = true;
                        this.speed++;
                    }
                    return hasCollided;
                };
                Ball.prototype.InnerXCollisionCheck = function (rectangle) {
                    var event = 0; // 0 = nothing, 1 = PlayerScore, 2 = AIScore
                    // Left Check
                    if (this.x + (this.size / 2) + this.lineWidth <= 0) {
                        event = 1;
                    }
                    // Right Check
                    if (this.x - (this.size / 2) - this.lineWidth >= rectangle.width) {
                        event = 2;
                    }
                    return event;
                };
                Ball.prototype.OuterCollisionCheck = function (rectangle) {
                    if (this.x - this.size < rectangle.x + rectangle.width &&
                        this.x + this.size > rectangle.x &&
                        this.y - this.size < rectangle.y + rectangle.height &&
                        this.size + this.y > rectangle.y) {
                        this.dirX *= -1;
                        return true;
                    }
                    return false;
                };
                return Ball;
            }());
            objects.Ball = Ball;
        })(objects = nothing.objects || (nothing.objects = {}));
    })(nothing = app.nothing || (app.nothing = {}));
})(app || (app = {}));
//# sourceMappingURL=Ball.js.map