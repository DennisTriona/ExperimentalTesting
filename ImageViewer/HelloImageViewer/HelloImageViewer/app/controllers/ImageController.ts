module app.controllers {

    // Controller for the ImageView
    export class ImageController {
        
        imageList: app.interfaces.IImage[];         // List of available images.   
        imageService: app.interfaces.IImageService; // instance of the imageService class.
        public currentImage: app.interfaces.IImage; // Current "displayed image".

        // inject the dependency for the used imageService.
        static $inject = ["app.services.ImageService"];
        constructor(imageService: app.interfaces.IImageService) {
            // Initialize class members and fetch initial values from the service.
            this.imageService = imageService;
            this.getImages();
            this.currentImage = this.imageList[0];
        }

        // public function to fetch the images
        getImages(): void {
            this.imageList = this.imageService.getImages();
        }

        // public function that replaces the current image with a new one. 
        setCurrentImage(new_image: app.interfaces.IImage): void {
            this.currentImage = new_image;
        }
    }
    // register the controller as a angular-controller. 
    angular.module("app").controller("app.controllers.ImageController", ImageController);
}