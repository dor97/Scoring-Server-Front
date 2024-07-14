import { SampleImageModel } from "../Models/SampleImageModel";
import axios from "axios";
import { appConfig } from "../Utils/AppConfig";
import { appStore } from "../Redux/Store";
import { sampleImageActions } from "../Redux/SampleImageSlice";

class SampleImageService{

    public async addSampleImage(sampleImage: SampleImageModel) : Promise<number>{

        console.log(sampleImage);
        //Post image to server:
        const response = await axios.post<SampleImageModel>(appConfig.sampleImageUrl, sampleImage, appConfig.axiosOptions);

        console.log(response);

        if (response.status < 200 && response.status >= 300) {
            // Handle non-successful response status
            throw new Error(`Unexpected response status: ${response.status}`);
        }
            
        //Extract image:
        let addedImage = response.data;

        //Add to global state:
        if(appStore.getState().sampleImages.length > 0){
            console.log("sort");       
            appStore.dispatch(sampleImageActions.addOne(addedImage));
            appStore.dispatch(sampleImageActions.sortList())
        }            
 
        //Return:
        return addedImage.score;
    }

    public async getAllSampelImages(): Promise<SampleImageModel[]> {
        
        //Take images from the global state:
        let images = appStore.getState().sampleImages;

        //If we have images:
        if(images.length > 0) 
            return images;

        //Fetch images from server:
        const response = await axios.get<SampleImageModel[]>(appConfig.sampleImageUrl + "All");

        //Extract images:
        images = response.data;

        console.log(images[0]);
        
        images.sort((im1, im2) => new Date(im1.date.toString()).getTime() - new Date(im2.date.toString()).getTime())

        //Add images to global store:
        appStore.dispatch(sampleImageActions.initAll(images));

        //Return:
        return images
    }

    public async getOneSampelImage(id: number) : Promise<SampleImageModel>{

        //Take images from global state:
        let images = appStore.getState().sampleImages;

        //Find that image:
        let image = images.find(p => p.id === id);

        if(image) return image;

        //Fetch images from server:
        const response = await axios.get<SampleImageModel>(appConfig.sampleImageUrl + id);

        //Extract image:
        image = response.data;
 
        //Return:
        return image
    }

    public async updateImage(image: SampleImageModel): Promise<void>{

        //Send the image to backend:
        const response = await axios.put<SampleImageModel>(appConfig.sampleImageUrl + image.id, image, appConfig.axiosOptions);

        //Extract updated image:
        const updatedImage = response.data;

        //Update in global state:
        appStore.dispatch(sampleImageActions.updatedOne(updatedImage));

        //console.log(updatedProduct);
    }

    public async deleteImage(id: number) : Promise<void>{

        //Delete image from server:
        await axios.delete<SampleImageModel>(appConfig.sampleImageUrl + id);

        //Delete from global state:
        appStore.dispatch(sampleImageActions.deleteOne(id));
   }

}

export const sampleImageService = new SampleImageService();