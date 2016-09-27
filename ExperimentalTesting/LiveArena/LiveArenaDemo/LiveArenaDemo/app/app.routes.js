var app;
(function (app) {
    var Routes = (function () {
        function Routes() {
        }
        Routes.configureRoutes = function ($routeProvider) {
            // Add a New route with a New controller.
            $routeProvider.when("/ItemDetail/:itemID", {
                controller: "app.controllers.ItemDetailController",
                templateUrl: "app/views/ItemDetails.html",
                controllerAs: "DetailCtrl"
            });
            $routeProvider.otherwise({ redirectTo: "/home" }); //Default catch all
        };
        // Class that manages all the routing
        Routes.$inject = ["$routeProvider"];
        return Routes;
    })();
    app.Routes = Routes;
})(app || (app = {}));
//# sourceMappingURL=app.routes.js.map