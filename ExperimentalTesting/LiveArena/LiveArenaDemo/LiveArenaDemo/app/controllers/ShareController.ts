module app.controllers {

    export class ShareController {

        shareSiteList: app.interfaces.IShareSite[]; // Array of sharing sites
        sharingService: app.interfaces.IShareService; 

        getShareSites(): void {

            this.shareSiteList = this.sharingService.getShareSites(); // Reference .shareSiteList to get the collection
        }

        //Inject the service!

        static $inject = ["app.services.ShareService"];
        constructor(sharingService: app.interfaces.IShareService) {
            this.sharingService = sharingService;
            this.getShareSites();
        }
    }

    angular.module("ShareDemo").controller("app.controllers.ShareController", ShareController);
}