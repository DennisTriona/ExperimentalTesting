var app;
(function (app) {
    var nothing;
    (function (nothing) {
        var objects;
        (function (objects) {
            var ScoreManager = (function () {
                function ScoreManager() {
                }
                ScoreManager.prototype.DetectGoal = function (ball, border) {
                    // PlayerGoal Check
                    if (ball.x - (ball.size / 2) - ball.lineWidth <= 0) {
                    }
                    // AI Goal Check
                    if (ball.x + (ball.size / 2) + ball.lineWidth >= border.rectangle.width) {
                    }
                };
                ScoreManager.prototype.AIScored = function () {
                    this.AIScore++;
                };
                ScoreManager.prototype.PlayerScored = function () {
                    this.PlayerScore++;
                };
                return ScoreManager;
            }());
            objects.ScoreManager = ScoreManager;
        })(objects = nothing.objects || (nothing.objects = {}));
    })(nothing = app.nothing || (app.nothing = {}));
})(app || (app = {}));
//# sourceMappingURL=ScoreManager.js.map