module app.interfaces {
    
    // interface to define a base service for images.  
    export interface IImageService {
        imageList: IImage[];

        getImages(): IImage[];
    }
}