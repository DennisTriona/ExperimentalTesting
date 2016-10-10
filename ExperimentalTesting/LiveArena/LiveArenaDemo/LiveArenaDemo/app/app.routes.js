var app;
(function (app) {
    var Routes = (function () {
        function Routes() {
        }
        Routes.configureRoutes = function ($routeProvider, $locationProvider) {
            // Add a New route with a New controller.
            $routeProvider.when("/ItemDetail/:itemID", {
                controller: "app.controllers.ItemDetailController",
                templateUrl: "app/views/ItemDetails.html",
                controllerAs: "DetailCtrl"
            });
            $routeProvider.otherwise({ redirectTo: "/home" }); //Default catch all
            // For better routing but does not really work well on our current set up
            // Must install IIS rewrite extension and such so don't bother
            //if (window.history && window.history.pushState) {
            //    $locationProvider.html5Mode({ enabled: true, requireBase: false });
            //}
        };
        // Class that manages all the routing
        Routes.$inject = ["$routeProvider"];
        return Routes;
    }());
    app.Routes = Routes;
})(app || (app = {}));
//# sourceMappingURL=app.routes.js.map