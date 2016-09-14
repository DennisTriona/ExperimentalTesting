var app;
(function (app) {
    var services;
    (function (services) {
        // class defining the ImageService. doesnt seem to need the httpService to function atm. 
        var ImageService = (function () {
            // static $inject = ["$http"];
            function ImageService() {
            }
            // function that returns a hardcoded array of images. 
            ImageService.prototype.getImages = function () {
                var images = [
                    {
                        url: "http://static.bigstockphoto.com/images/homepage/2016_bigstock_picks.jpg",
                        title: "Finger-Buddies", description: "A creative image showing the possibilities of having fingers and pens present."
                    },
                    {
                        url: "http://img06.deviantart.net/25de/i/2012/134/3/1/037_by_koko_stock-d4zq28i.jpg",
                        title: "Trees in the forest", description: "A beutiful omage showing the stunning wonder which is mother-nature."
                    },
                    {
                        url: "http://indianapublicmedia.org/support/files/2011/09/04_03_1-Stock-Market-Prices_web.jpg",
                        title: "Glasses for reading", description: "You dont want to miss out on this fantastic image, remember to bring your glasses!"
                    },
                    {
                        url: "http://www.roiinvesting.com/wp-content/uploads/2015/09/Stock-Photos-of-Investing.jpg",
                        title: "The Key to time", description: "Who wouldnt want this precious key for which to unlock time itself? makes you wonder doesnt it?"
                    },
                    {
                        url: "http://static1.squarespace.com/static/550091b2e4b0fc0ace824d92/5509a3cfe4b097b91fbe462c/55845630e4b0de476a63f7bc/1434736488291/stock+provisions_672.jpg",
                        title: "Piece of meat", description: "Only a few people can find enough words to describe thi magnificent piece of beef, sadly i am not one of those people."
                    },
                    {
                        url: "http://img04.deviantart.net/67be/i/2013/286/a/b/forest_stock_by_koko_stock-d6qbfvg.jpg",
                        title: "Grass, Trees and sky", description: "With all these trees, standing in a field of tall grass under a beutiful greyish sky, who could ever ask for something more."
                    }
                ];
                return images;
            };
            return ImageService;
        })();
        services.ImageService = ImageService;
        // register the class as an angular-service. 
        angular.module("app").service("app.services.ImageService", ImageService);
    })(services = app.services || (app.services = {}));
})(app || (app = {}));
//# sourceMappingURL=ImageService.js.map