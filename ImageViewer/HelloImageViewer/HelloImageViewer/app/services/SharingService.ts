module app.service {
    export class SharingService implements app.interfaces.ISharingService {
        shareSites: app.interfaces.IShareSite[];

        constructor() { }

        getShareSites(): app.interfaces.IShareSite[] {
            var shareSites: app.interfaces.IShareSite[] = [
                { provider: "facebook", img_url: "fa fa-5x fa-facebook-square" },          
                { provider: "twitter", img_url: "fa fa-5x fa-twitter-square" },
                { provider: "google", img_url: "fa fa-5x fa-google-plus-square" },
                { provider: "reddit", img_url: "fa fa-5x fa-reddit-square" },
                { provider: "linkedin", img_url: "fa fa-5x fa-linkedin-square" },
                { provider: "pinterest", img_url: "fa fa-5x fa-pinterest-square" },
                { provider: "tumblr", img_url: "fa fa-5x fa-tumblr-square" },
                { provider: "ok", img_url: "fa fa-5x fa-odnoklassniki-square" }
            ];
            return shareSites;
        }
    }
    angular.module("app").service("app.services.SharingService", SharingService);
}