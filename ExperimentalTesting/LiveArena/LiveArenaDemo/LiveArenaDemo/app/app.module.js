var app;
(function (app) {
    var main = angular.module("ShareDemo", ["ngRoute"]); // Setup the main angular module and define its dependencies. 
    main.config(app.Routes.configureRoutes); // Call the configuration method for the Route-class, setting up the routing for the application. 
})(app || (app = {}));
//# sourceMappingURL=app.module.js.map