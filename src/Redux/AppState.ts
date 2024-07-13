import { SampleImageModel } from "../Models/SampleImageModel"
import { UserModel } from "../Models/UserModel";


// AppState - Containing the enter application state:
export type AppState = {

    //List of sample Images:
    sampleImages: SampleImageModel[];

    //User:
    user: UserModel;
}