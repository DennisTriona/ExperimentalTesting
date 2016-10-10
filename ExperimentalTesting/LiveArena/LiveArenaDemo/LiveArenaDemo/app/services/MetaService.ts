module app.services {
    export class MetaService implements app.interfaces.IMetaService {

        _tag: app.interfaces.IMetaTag;
        _metaDescription: string;
        _metaSiteName : string;

        get tag(): app.interfaces.IMetaTag {
            return this._tag;
        }
        set tag(value : app.interfaces.IMetaTag) {
            this._tag = value;
        }

         createTag(siteName : string, description : string) : void {
            this._metaSiteName = siteName;
            this._metaDescription = description;
         }
         constructor() { }

         metaDescription() {
             return this._metaDescription;
         }
         metaSiteName() {
             return this._metaSiteName;
         }
    }

    angular.module("ShareDemo").service("app.services.MetaService", MetaService);
}