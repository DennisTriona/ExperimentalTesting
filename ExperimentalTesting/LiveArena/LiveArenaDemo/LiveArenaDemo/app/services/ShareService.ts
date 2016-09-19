module app.services {
    export class ShareService implements app.interfaces.IShareService {
        shareSites: app.interfaces.IShareSite[];

        getShareSites(): app.interfaces.IShareSite[] {
            return this.shareSites = [
                {provider: "Facebook", imgUrl: "fa fa-5x fa-facebook-square"}
 
            ];
        }
    }

    angular.module("app").service("app.services.ShareService", ShareService);
}