module app.interfaces {
    export interface ISharingService {
        shareSites: IShareSite[];

        getShareSites(): IShareSite[];
    }
}