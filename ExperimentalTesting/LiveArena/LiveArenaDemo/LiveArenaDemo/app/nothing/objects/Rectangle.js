var app;
(function (app) {
    var nothing;
    (function (nothing) {
        var objects;
        (function (objects) {
            var Rectangle = (function () {
                function Rectangle(x, y, width, height) {
                    this.x = x;
                    this.y = y;
                    this.width = width;
                    this.height = height;
                }
                return Rectangle;
            }());
            objects.Rectangle = Rectangle;
        })(objects = nothing.objects || (nothing.objects = {}));
    })(nothing = app.nothing || (app.nothing = {}));
})(app || (app = {}));
//# sourceMappingURL=Rectangle.js.map