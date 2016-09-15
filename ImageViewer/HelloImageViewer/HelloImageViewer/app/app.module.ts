module app {
    // define the main 'angular' module for the application. 
    var main = angular.module("app", ['ngRoute', '720kb.socialshare']);
    // call function to configure application routes. 
    main.config(app.Routes.configureRoutes);
}