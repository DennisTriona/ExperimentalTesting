module app.controllers {

    export class ShareController {

        shareSiteList: app.interfaces.IShareSite[]; // Array of sharing sites
        sharingService: app.interfaces.IShareService; 

        //Inject the service!

        static $inject = ["app.services.ShareService"];
        constructor(sharingService: app.interfaces.IShareService) {
            this.sharingService = sharingService;
            this.getShareSites();
        }

        getShareSites(): void {

            this.shareSiteList = this.sharingService.getShareSites(); // Reference .shareSiteList to get the collection
        }
    }

    angular.module("ShareDemo").controller("app.controllers.ShareController", ShareController);
}