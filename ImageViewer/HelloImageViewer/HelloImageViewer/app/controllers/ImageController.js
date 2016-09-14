var app;
(function (app) {
    var controllers;
    (function (controllers) {
        // Controller for the ImageView
        var ImageController = (function () {
            function ImageController(imageService) {
                // Initialize class members and fetch initial values from the service.
                this.imageService = imageService;
                this.getImages();
                this.currentImage = this.imageList[0];
            }
            // public function to fetch the images
            ImageController.prototype.getImages = function () {
                this.imageList = this.imageService.getImages();
            };
            // public function that replaces the current image with a new one. 
            ImageController.prototype.setCurrentImage = function (new_image) {
                this.currentImage = new_image;
            };
            // inject the dependency for the used imageService.
            ImageController.$inject = ["app.services.ImageService"];
            return ImageController;
        })();
        controllers.ImageController = ImageController;
        // register the controller as a angular-controller. 
        angular.module("app").controller("app.controllers.ImageController", ImageController);
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
//# sourceMappingURL=ImageController.js.map