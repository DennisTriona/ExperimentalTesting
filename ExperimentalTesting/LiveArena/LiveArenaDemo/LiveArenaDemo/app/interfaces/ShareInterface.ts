module app.interfaces {

    export interface IShareService {
        shareSites: IShareSite[];

        getShareSites();
    }

    export interface IShareSite {
        provider: string;
        imgUrl: string;
    }
}