var app;
(function (app) {
    var services;
    (function (services) {
        var ResourceService = (function () {
            function ResourceService() {
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
            ResourceService.prototype.getSelectionItems = function () {
                return this.selectionItems;
            };
            ResourceService.prototype.getSelectionItem = function (id) {
                for (var i = 0; i < this.selectionItems.length; i++) {
                    if (this.selectionItems[i].id == id) {
                        return this.selectionItems[i];
                    }
                }
                return this.dummyItem;
            };
            return ResourceService;
        })();
        services.ResourceService = ResourceService;
        angular.module("ShareDemo").service("app.services.ResourceService", ResourceService);
    })(services = app.services || (app.services = {}));
})(app || (app = {}));
//# sourceMappingURL=ResourceService.js.map