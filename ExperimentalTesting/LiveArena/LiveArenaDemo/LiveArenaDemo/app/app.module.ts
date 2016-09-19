module app {
    
    var main = angular.module("app", ["ngRoute", "720kb.socialshare"]);

    main.config(app.Routes.configureRoutes);

}