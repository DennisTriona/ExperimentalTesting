var app;
(function (app) {
    var services;
    (function (services) {
        var SelectionService = (function () {
            function SelectionService() {
            }
            SelectionService.prototype.getSelectionItems = function () {
                var selectionItems = [
                    { id: 1, description: "a description of the selection-item", date: "09-19-2016", imgUrl: "http://url.something" }
                ];
                return selectionItems;
            };
            return SelectionService;
        }());
        services.SelectionService = SelectionService;
        angular.module("ShareDemo").service("app.services.SelectionService", SelectionService);
    })(services = app.services || (app.services = {}));
})(app || (app = {}));
//# sourceMappingURL=SelectionService.js.map