module app.controllers {

    export class ShareController {
        shareSiteList: app.interfaces.IShareSite[];
        sharingService: app.interfaces.IShareService;

        //Inject the service!

        static $inject = ["app.services.ShareService"];
        constructor(sharingService: app.interfaces.IShareService) {
            this.sharingService = sharingService;
            this.getShareSites();
        }

        getShareSites(): void {
            this.shareSiteList = this.sharingService.getShareSites();
        }
    }

    angular.module("app").controller("app.controllers.ShareController", ShareController);
}