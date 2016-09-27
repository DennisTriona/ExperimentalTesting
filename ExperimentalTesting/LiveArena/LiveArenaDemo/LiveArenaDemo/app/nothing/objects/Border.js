var app;
(function (app) {
    var nothing;
    (function (nothing) {
        var objects;
        (function (objects) {
            var Border = (function () {
                // Border line? 
                function Border(x, y, width, height) {
                    this._rectangle = new app.nothing.objects.Rectangle(x, y, width, height);
                }
                Object.defineProperty(Border.prototype, "rectangle", {
                    get: function () {
                        return this._rectangle;
                    },
                    enumerable: true,
                    configurable: true
                });
                Border.prototype.Draw = function (ctx) {
                    ctx.beginPath();
                    ctx.strokeStyle = "white";
                    ctx.setLineDash([34.5]);
                    ctx.lineWidth = 4;
                    ctx.moveTo(this._rectangle.width / 2, 0);
                    ctx.lineTo(this._rectangle.width / 2, this.rectangle.height);
                    ctx.stroke();
                };
                return Border;
            })();
            objects.Border = Border;
        })(objects = nothing.objects || (nothing.objects = {}));
    })(nothing = app.nothing || (app.nothing = {}));
})(app || (app = {}));
//# sourceMappingURL=Border.js.map