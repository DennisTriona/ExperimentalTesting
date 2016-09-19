module app.services {

    //Shareservice!
    export class ShareService implements app.interfaces.IShareService {
        shareSites: app.interfaces.IShareSite[];
        constructor(){}

        getShareSites(): app.interfaces.IShareSite[] {
            var shareSites: app.interfaces.IShareSite[] = [
                { provider: "Facebook", imgUrl: "fa fa-5x fa-facebook-square" },
                { provider: "Twitter", imgUrl: "fa fa-5x fa-twitter-square"}
            ];
            return shareSites;
        }
    }

    angular.module("ShareDemo").service("app.services.ShareService", ShareService);
}