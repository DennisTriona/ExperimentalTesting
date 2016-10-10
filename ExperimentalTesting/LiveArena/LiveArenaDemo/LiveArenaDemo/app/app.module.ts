module app {
    
    var main = angular.module("ShareDemo", ["ngRoute",  "720kb.socialshare"]);    // Setup the main angular module and define its dependencies. 
    main.config(app.Routes.configureRoutes);                // Call the configuration method for the Route-class, setting up the routing for the application.
    //main.run(["$rootScope", $rootScope => {
    //    $rootScope.$on("$routeChangeSuccess", (event, current, previous) => {
    //        $rootScope.title = current.$$route.title;
    //    });
    //}]);
}