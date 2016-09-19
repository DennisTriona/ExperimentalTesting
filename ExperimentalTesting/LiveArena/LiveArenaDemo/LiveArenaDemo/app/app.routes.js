var app;
(function (app) {
    var Routes = (function () {
        function Routes() {
        }
        Routes.configureRoutes = function ($routeProvider) {
            $routeProvider.when("/home", {
                controller: "",
                templateUrl: "",
                controllerAs: ""
            });
            $routeProvider.when("/ItemDetail/:itemID", {
                controller: "app.controllers.ItemDetailController",
                templateUrl: "app.views...",
                controllerAs: "DetailCtrl"
            });
            $routeProvider.otherwise({ redirectTo: "/home" });
        };
        // Class that manages all the routing
        Routes.$inject = ["$routeProvider"];
        return Routes;
    })();
    app.Routes = Routes;
})(app || (app = {}));
//# sourceMappingURL=app.routes.js.map