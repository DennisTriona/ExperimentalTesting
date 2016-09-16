module app {
    
    var main = angular.module("ShareDemo", ["ngRoute"]);

    main.config(app.Routes.configureRoutes);

}