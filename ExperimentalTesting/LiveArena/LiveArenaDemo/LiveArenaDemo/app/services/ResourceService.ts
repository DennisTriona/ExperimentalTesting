module app.services {

    export class ResourceService implements app.interfaces.IResourceService {
        
        selectionItems: app.interfaces.ISelectItem[];
        dummyItem: app.interfaces.ISelectItem;

        constructor() {
            this.selectionItems = [
                { id: 0, description: "No selection-item found", date: "00-00-0000", imgUrl: "http://www.codeodor.com/images/Empty_set.png" },
                { id: 0, description: "No selection-item found", date: "00-00-0000", imgUrl: "http://www.codeodor.com/images/Empty_set.png" },
                { id: 0, description: "No selection-item found", date: "00-00-0000", imgUrl: "http://www.codeodor.com/images/Empty_set.png" },
                { id: 0, description: "No selection-item found", date: "00-00-0000", imgUrl: "http://www.codeodor.com/images/Empty_set.png" },
                { id: 0, description: "No selection-item found", date: "00-00-0000", imgUrl: "http://www.codeodor.com/images/Empty_set.png" },
                { id: 0, description: "No selection-item found", date: "00-00-0000", imgUrl: "http://www.codeodor.com/images/Empty_set.png" },
                { id: 0, description: "No selection-item found", date: "00-00-0000", imgUrl: "http://www.codeodor.com/images/Empty_set.png" },
                { id: 0, description: "No selection-item found", date: "00-00-0000", imgUrl: "http://www.codeodor.com/images/Empty_set.png" },
            ];

            this.dummyItem = { id: 0, description: "No selection-item found", date: "00-00-0000", imgUrl: "http://www.codeodor.com/images/Empty_set.png" };
        }    

        getSelectionItems(): app.interfaces.ISelectItem[] {
            return this.selectionItems;
        }
        getSelectionItem(id: number): app.interfaces.ISelectItem {
            for (var i = 0; i < this.selectionItems.length; i++)
            {
                if (this.selectionItems[i].id == id)
                {
                    return this.selectionItems[i];
                }
            }

            return this.dummyItem;
        } 
    }

    angular.module("ShareDemo").service("app.services.ResourceService", ResourceService);
}