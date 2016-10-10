module app.interfaces {
    export interface IMetaTag {
        siteName: string;
        description: string;
    }

    export interface IMetaService {
        createTag(siteName: string, description: string): void;
        metaDescription();
    }
}