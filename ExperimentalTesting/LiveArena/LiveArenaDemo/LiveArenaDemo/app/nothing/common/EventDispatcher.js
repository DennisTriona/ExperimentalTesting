var app;
(function (app) {
    var nothing;
    (function (nothing) {
        var common;
        (function (common) {
            var EventDispatcher = (function () {
                function EventDispatcher() {
                    this._subscriptions = new Array();
                }
                EventDispatcher.prototype.subscribe = function (fn) {
                    if (fn) {
                        this._subscriptions.push(fn);
                    }
                };
                EventDispatcher.prototype.unsubscribe = function (fn) {
                    var i = this._subscriptions.indexOf(fn);
                    if (i > -1) {
                        this._subscriptions.splice(i, 1);
                    }
                };
                EventDispatcher.prototype.dispatch = function (sender, args) {
                    for (var _i = 0, _a = this._subscriptions; _i < _a.length; _i++) {
                        var handler = _a[_i];
                        handler(sender, args);
                    }
                };
                return EventDispatcher;
            })();
            common.EventDispatcher = EventDispatcher;
        })(common = nothing.common || (nothing.common = {}));
    })(nothing = app.nothing || (app.nothing = {}));
})(app || (app = {}));
//# sourceMappingURL=EventDispatcher.js.map