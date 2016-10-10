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
            var PlayerPaddle = (function (_super) {
                __extends(PlayerPaddle, _super);
                function PlayerPaddle(x, y, width, height, speed) {
                    _super.call(this, x, y, width, height, speed);
                }
                return PlayerPaddle;
            }(objects.Paddle));
            objects.PlayerPaddle = PlayerPaddle;
        })(objects = nothing.objects || (nothing.objects = {}));
    })(nothing = app.nothing || (app.nothing = {}));
})(app || (app = {}));
//# sourceMappingURL=PlayerPaddle.js.map