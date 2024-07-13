import { useEffect, useState } from "react";
import { useTitle } from "../../../Utils/useTitle";
import "./SampleImagesList.css";
import { SampleImageModel } from "../../../Models/SampleImageModel";
import { sampleImageService } from "../../../Services/SampleImageService";
import { notify } from "../../../Utils/Notify";
import Spinner from "../../SharedArea/Spinner/Spinner";
import ImageCard from "../SampleImagesCard/SampleImagesCard";


function SampleImagesList(): JSX.Element{
    useTitle("Socring Images | Images");

    const [images, setImages] = useState<SampleImageModel[]>([]);

    useEffect(() => {
        sampleImageService.getAllSampelImages()
            .then(dbSampleImages => setImages(dbSampleImages))
            .catch(err => notify.error(err));
    }, []);

    return (
        <div className="SampleImagesList">
            <h2>Images List:</h2>
            {images.length == 0 && <Spinner />}

			{images.map(p => <ImageCard key={p.id} sampleImage={p}/>)}
            
        </div>
    );
}

export default SampleImagesList;