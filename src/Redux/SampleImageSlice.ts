import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SampleImageModel } from "../Models/SampleImageModel";

//Reducers:

//Init all images for the first time:
function initAll(currentState: SampleImageModel[],
     action: PayloadAction<SampleImageModel[]>): SampleImageModel[]{

    const allImages = action.payload;
    const newState = allImages;
    return newState;
}

//Add a new image:
function addOne(currentState: SampleImageModel[],
    action: PayloadAction<SampleImageModel>): SampleImageModel[]{

    const imagetToAdd = action.payload;
    const newState = [...currentState, imagetToAdd];
    return newState;
}

//Update a given image
function updatedOne(currentState: SampleImageModel[],
    action: PayloadAction<SampleImageModel>): SampleImageModel[]{

    const imageToUpdate = action.payload;
    const newState = [...currentState];
    const index = newState.findIndex(p => p.id === imageToUpdate.id);
    if(index >= 0) newState[index] = imageToUpdate;
    return newState;
}

//Delete a image
function deleteOne(currentState: SampleImageModel[],
    action: PayloadAction<number>): SampleImageModel[]{

    const idToDelete = action.payload;
    const newState = [...currentState];
    const index = newState.findIndex(p => p.id === idToDelete);
    if(index >= 0) newState.splice(index, 1); // 1 = how many to delete
    return newState;
}

//sort the images
function sortList(currentState: SampleImageModel[]){
    return currentState.sort((im1, im2) => new Date(im1.date).getTime() - new Date(im2.date).getTime());
}

//Creating the slice:
const sampleImageSlice = createSlice({
    name: "products",
    initialState: [],
    reducers: {initAll, addOne, updatedOne, deleteOne, sortList}
});

//Create actions:
export const sampleImageActions = sampleImageSlice.actions;

//Create reducers:
export const sampleImageReducers = sampleImageSlice.reducer;