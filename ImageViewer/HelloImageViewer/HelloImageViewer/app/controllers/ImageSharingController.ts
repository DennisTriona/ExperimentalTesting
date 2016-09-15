module app.controllers {
    export class ImageSharingController {
        imageList: app.interfaces.IImage[];         // List of available images.   
        imageService: app.interfaces.IImageService; // instance of the imageService class.
        public currentImage: app.interfaces.IImage; // Current "displayed image".

        shareSiteList: app.interfaces.IShareSite[];
        sharingService: app.interfaces.ISharingService;

        // inject the dependency for the used imageService.
        static $inject = ["app.services.ImageService", "app.services.SharingService"];
        constructor(imageService: app.interfaces.IImageService, sharingService: app.interfaces.ISharingService) {
            // Initialize class members and fetch initial values from the service.
            this.imageService = imageService;
            this.getImages();
            this.currentImage = this.imageList[0];

            this.sharingService = sharingService;
            this.getShareSites();
        }

        // public function to fetch the images
        getImages(): void {
            this.imageList = this.imageService.getImages();
        }
        getShareSites(): void {
            this.shareSiteList = this.sharingService.getShareSites();
        }

        // public function that replaces the current image with a new one. 
        setCurrentImage(new_image: app.interfaces.IImage): void {
            this.currentImage = new_image;
        }
    }
    angular.module("app").controller("app.controllers.ImageSharingController", ImageSharingController);
}