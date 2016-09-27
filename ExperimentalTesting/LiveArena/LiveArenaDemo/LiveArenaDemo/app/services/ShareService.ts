module app.services {

    //Shareservice!
    export class ShareService implements app.interfaces.IShareService {
        shareSites: app.interfaces.IShareSite[];
        constructor(){}

        // Collection of share sites, their name and extra
        getShareSites(): app.interfaces.IShareSite[] {
            var shareSites: app.interfaces.IShareSite[] = [
                { provider: "pinterest", imgUrl: "fa-pinterest-square", color: "color-pinterest-red" },
                { provider: "google", imgUrl: "fa-google-plus-square", color: "color-googleplus-red" },
                { provider: "linkedin", imgUrl: "fa-linkedin-square", color: "color-linkedin-blue" },
                { provider: "twitter", imgUrl: "fa-twitter-square", color: "color-twitter-blue" },
                { provider: "facebook", imgUrl: "fa-facebook-square", color: "color-facebook-blue" }
            ];
            return shareSites;
        }
    }

    angular.module("ShareDemo").service("app.services.ShareService", ShareService);
}