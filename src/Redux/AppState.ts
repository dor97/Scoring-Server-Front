import { SampleImageModel } from "../Models/SampleImageModel"
import { TokenDataModel } from "../Models/TokenDataModel";


// AppState - Containing the enter application state:
export type AppState = {

    //List of sample Images:
    sampleImages: SampleImageModel[];

    //User:
    user: TokenDataModel;
}