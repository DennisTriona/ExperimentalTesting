var app;
(function (app) {
    var controllers;
    (function (controllers) {
        var ImageSharingController = (function () {
            function ImageSharingController(imageService, sharingService) {
                // Initialize class members and fetch initial values from the service.
                this.imageService = imageService;
                this.getImages();
                this.currentImage = this.imageList[0];
                this.sharingService = sharingService;
                this.getShareSites();
            }
            // public function to fetch the images
            ImageSharingController.prototype.getImages = function () {
                this.imageList = this.imageService.getImages();
            };
            ImageSharingController.prototype.getShareSites = function () {
                this.shareSiteList = this.sharingService.getShareSites();
            };
            // public function that replaces the current image with a new one. 
            ImageSharingController.prototype.setCurrentImage = function (new_image) {
                this.currentImage = new_image;
            };
            // inject the dependency for the used imageService.
            ImageSharingController.$inject = ["app.services.ImageService", "app.services.SharingService"];
            return ImageSharingController;
        })();
        controllers.ImageSharingController = ImageSharingController;
        angular.module("app").controller("app.controllers.ImageSharingController", ImageSharingController);
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=ImageSharingController.js.map