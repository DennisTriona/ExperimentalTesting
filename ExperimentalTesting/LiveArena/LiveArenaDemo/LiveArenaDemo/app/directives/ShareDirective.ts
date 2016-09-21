module app {
    
    "use strict";

    import ShareService = app.services.ShareService;
    import MyService = app.interfaces.IShareService;

    //function shareDirective(shareService : app.interfaces.IShareService) : ng.IDirective {
        
        
    //    let link: Function = (scope: any) => { };

    //    return {
    //        restrict: "EA",
    //        controller: app.controllers.ShareController,
    //        controllerAs: "ShareController",
    //        scope: {},
    //        replace: true,
    //        templateUrl: "/app/views/Share.html",
    //        link: link
    //    };
    //}

    export class ShareDirective implements ng.IDirective {

        //static $inject = ["app.services.ShareService"];
        restrict: "EA";
        controller: "app.controllers.ShareController";
        templateUrl: "/app/views/Share.html";
        controllerAs: "ShareController";

        constructor(private _shareService: ShareService) {
        }

        public static factory(): ng.IDirectiveFactory {
            const directive = (shareService: ShareService) => new ShareDirective(shareService);
            directive.$inject = ["app.services.ShareService"];
            return directive;
        }
    }

    //angular.module("ShareDemo").directive("app.directives.ShareDirective", shareDirective);
    angular.module("ShareDemo").directive("shareDirective", ShareDirective.factory());
}