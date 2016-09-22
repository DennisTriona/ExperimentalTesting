module app.directives {

    "use strict";
    //Import the controller you use
    import ShareController = app.controllers.ShareController;

    //The directives second parameter is the instancing function.
    angular.module("ShareDemo").directive("shareButtons", () => ({
        restrict: 'E',
        templateUrl: "/app/views/Share.html",
        controller: ShareController,
        controllerAs: "ShareController"
    }));
}

