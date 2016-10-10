module app.controllers {

    export class MetaController {
        siteName: "Share Site";
        description: "Hello World!";
        metaTag : app.interfaces.IMetaTag;
        metaService: app.interfaces.IMetaService;

        static $inject = ["app.services.MetaService", "$scope", "$rootScope"];
        constructor(metaService: app.interfaces.IMetaService, $scope, $rootScope) {
            $rootScope.metaService = metaService;
            $rootScope.metaService.createTag(this.siteName, this.description);
        }
    }

    angular.module("ShareDemo").controller("app.controllers.MetaController", MetaController);
}
