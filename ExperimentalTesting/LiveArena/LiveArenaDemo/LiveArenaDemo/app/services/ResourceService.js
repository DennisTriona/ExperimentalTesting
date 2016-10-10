var app;
(function (app) {
    var services;
    (function (services) {
        // A Class to provide a service to fetch and manage selection-item resources. 
        var ResourceService = (function () {
            function ResourceService() {
                this.selectionItems = [
                    {
                        itemID: 0, description: "SDHL Linköping HC - HV 71", date: "24 sep. 2016 14:25", publisher: "by Linköping HC SDHL",
                        thumbnail_imgUrl: "https://bcstatic.azureedge.net/default-images/7028ac9a-32df-4b19-f005-3ae5d64ce919-c_22735_15142118_large_thumbnail.jpg?sv=2014-02-14&sr=c&si=default-images&sig=adnUtvq%2F89HPIjummkv%2BTG8FDpmBw4rbz8GRXUR0jF0%3D",
                        display_imgUrl: "https://bcstatic.blob.core.windows.net/default-images/93ee3dfe-3613-48f1-dae0-1adc5178cd36-c_22735_15142118_large.jpg?sv=2014-02-14&sr=c&si=default-images&sig=adnUtvq%2F89HPIjummkv%2BTG8FDpmBw4rbz8GRXUR0jF0%3D"
                    },
                    {
                        itemID: 1, description: "SDHL IF Sundsvall Hockey - Luleå", date: "24 sep. 2016 15:25", publisher: "by Sundsvall Hockey SDHL",
                        thumbnail_imgUrl: "https://bcstatic.azureedge.net/default-images/6fb06053-9ef2-4fd0-a941-15ff509d6bb8-p_15338561537_01073039_large_thumbnail.jpg?sv=2014-02-14&sr=c&si=default-images&sig=adnUtvq%2F89HPIjummkv%2BTG8FDpmBw4rbz8GRXUR0jF0%3D",
                        display_imgUrl: "https://bcstatic.blob.core.windows.net/default-images/ab37f6ef-62bf-420c-dd2f-cfffd963795f-p_15338561537_01073039_large.jpg?sv=2014-02-14&sr=c&si=default-images&sig=adnUtvq%2F89HPIjummkv%2BTG8FDpmBw4rbz8GRXUR0jF0%3D"
                    },
                    {
                        itemID: 2, description: "SDHL Leksands IF - AIK", date: "24 sep. 2016 15:55", publisher: "by Leksands IF SDHL",
                        thumbnail_imgUrl: "https://bcstatic.azureedge.net/laimages/45977c00-52e3-4006-8cb1-f7f05dab06c5-c_36461_11104205_large_thumbnail.jpg?sv=2014-02-14&sr=c&si=laimages&sig=lTg32QAVw7qRhsN0lSQJ6vtLIiBjWEyITsazwuEZII0%3D",
                        display_imgUrl: "https://bcstatic.azureedge.net/laimages/45977c00-52e3-4006-8cb1-f7f05dab06c5-c_36461_11104205_large.jpg?sv=2014-02-14&sr=c&si=laimages&sig=lTg32QAVw7qRhsN0lSQJ6vtLIiBjWEyITsazwuEZII0%3D"
                    },
                    {
                        itemID: 3, description: "SDHL SDE HF - Djurgårdens IF", date: "24 sep. 2016 16:40", publisher: "by SDE Hockey SDHL",
                        thumbnail_imgUrl: "https://bcstatic.azureedge.net/default-images/7652e22f-ecd2-48cf-bb38-c34408d5c547-p_578511873_large_thumbnail.jpg?sv=2014-02-14&sr=c&si=default-images&sig=adnUtvq%2F89HPIjummkv%2BTG8FDpmBw4rbz8GRXUR0jF0%3D",
                        display_imgUrl: "https://bcstatic.blob.core.windows.net/default-images/f430f8fc-8eaa-4774-92b3-f057d1567901-p_578511873_large.jpg?sv=2014-02-14&sr=c&si=default-images&sig=adnUtvq%2F89HPIjummkv%2BTG8FDpmBw4rbz8GRXUR0jF0%3D"
                    },
                    {
                        itemID: 4, description: "SDHL Brynäs IF - MODO Hockey", date: "24 sep. 2016 16:55", publisher: "by Brynäs IF SDHL",
                        thumbnail_imgUrl: "https://bcstatic.azureedge.net/default-images/73924713-b216-43a9-b6ca-a0d4ae572df3-p_14445081601_06121424_large_thumbnail.jpg?sv=2014-02-14&sr=c&si=default-images&sig=adnUtvq%2F89HPIjummkv%2BTG8FDpmBw4rbz8GRXUR0jF0%3D",
                        display_imgUrl: "https://bcstatic.blob.core.windows.net/default-images/01cdb2a0-7ba5-4c0e-fcfc-8274977e046f-p_14445081601_06121424_large.jpg?sv=2014-02-14&sr=c&si=default-images&sig=adnUtvq%2F89HPIjummkv%2BTG8FDpmBw4rbz8GRXUR0jF0%3D"
                    },
                    {
                        itemID: 5, description: "SDHL Brynäs IF - Luleå HF", date: "25 sep. 2016 10:55", publisher: "by Brynäs IF SDHL",
                        thumbnail_imgUrl: "https://bcstatic.azureedge.net/default-images/73924713-b216-43a9-b6ca-a0d4ae572df3-p_14445081601_06121424_large_thumbnail.jpg?sv=2014-02-14&sr=c&si=default-images&sig=adnUtvq%2F89HPIjummkv%2BTG8FDpmBw4rbz8GRXUR0jF0%3D",
                        display_imgUrl: "https://bcstatic.blob.core.windows.net/default-images/01cdb2a0-7ba5-4c0e-fcfc-8274977e046f-p_14445081601_06121424_large.jpg?sv=2014-02-14&sr=c&si=default-images&sig=adnUtvq%2F89HPIjummkv%2BTG8FDpmBw4rbz8GRXUR0jF0%3D"
                    },
                    {
                        itemID: 6, description: "SDHL Djurgårdens IF - Linköping HC", date: "27 sep. 2016 19:25", publisher: "by Djurgårdens IF SDHL",
                        thumbnail_imgUrl: "https://bcstatic.azureedge.net/laimages/fe935415-0988-460e-ba77-6026baf391fc-c_45577_08110448_large_thumbnail.jpg?sv=2014-02-14&sr=c&si=laimages&sig=lTg32QAVw7qRhsN0lSQJ6vtLIiBjWEyITsazwuEZII0%3D",
                        display_imgUrl: "https://bcstatic.azureedge.net/laimages/fe935415-0988-460e-ba77-6026baf391fc-c_45577_08110448_large.jpg?sv=2014-02-14&sr=c&si=laimages&sig=lTg32QAVw7qRhsN0lSQJ6vtLIiBjWEyITsazwuEZII0%3D"
                    },
                    {
                        itemID: 7, description: "SDHL HV 71 - MODO Hockey", date: "1 okt. 2016 16:25", publisher: "by HV71 SDHL",
                        thumbnail_imgUrl: "https://bcstatic.azureedge.net/default-images/d1c747d2-8738-45e2-e413-106dc1f80da1-HV71_thumbnail.gif?sv=2014-02-14&sr=c&si=default-images&sig=adnUtvq%2F89HPIjummkv%2BTG8FDpmBw4rbz8GRXUR0jF0%3D",
                        display_imgUrl: "https://bcstatic.blob.core.windows.net/default-images/0d8f063a-bf30-4502-92d9-bcf80ebd7333-HV71.gif?sv=2014-02-14&sr=c&si=default-images&sig=adnUtvq%2F89HPIjummkv%2BTG8FDpmBw4rbz8GRXUR0jF0%3D"
                    }
                ];
                this.dummyItem = {
                    itemID: 0, description: "No selection-item found", date: "00-00-0000", publisher: "LA",
                    thumbnail_imgUrl: "http://www.codeodor.com/images/Empty_set.png",
                    display_imgUrl: "http://www.codeodor.com/images/Empty_set.png"
                };
            }
            // A function to fetch all selection-items. 
            ResourceService.prototype.getSelectionItems = function () {
                return this.selectionItems;
            };
            // A function to fetch a specific selection-item. 
            ResourceService.prototype.getSelectionItem = function (id) {
                for (var i = 0; i < this.selectionItems.length; i++) {
                    if (this.selectionItems[i].itemID == id) {
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