var app;
(function (app) {
    // define the main 'angular' module for the application. 
    var main = angular.module("app", ['ngRoute']);
    // call function to configure application routes. 
    main.config(app.Routes.configureRoutes);
})(app || (app = {}));
//# sourceMappingURL=app.module.js.map