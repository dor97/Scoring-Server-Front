import { useForm } from "react-hook-form";
import { SampleImageModel } from "../../../Models/SampleImageModel";
import "./PostSampleImage.css";
import { sampleImageService } from "../../../Services/SampleImageService";
import { useNavigate } from "react-router-dom";
import { notify } from "../../../Utils/Notify";
import { useTitle } from "../../../Utils/useTitle";
import { useEffect, useState } from "react";
import Spinner from "../../SharedArea/Spinner/Spinner";

function PostSampleImage(): JSX.Element {
    useTitle("NorthWind | Post Sample Image");

    const [score, setScore] = useState<number>();
    const [loading, setLoading] = useState<boolean>(false);
    
    const navigate = useNavigate();

    const { register, handleSubmit, formState } = useForm<SampleImageModel>();

    async function send(sampleImage: SampleImageModel) {
        try{
            setLoading(true);
            console.log(sampleImage);
            sampleImage.sampleImage = (sampleImage.sampleImage as unknown as FileList)[0];
            const score = await sampleImageService.addSampleImage(sampleImage);
            //alert("Adding image");
            setScore(score)
            notify.success("Adding Image");
            //navigate("/sampleImages");
        }
        catch(err : any){
            //alert(err.message);
            notify.error(err);
        }
        finally {
            setLoading(false); // Set loading to false after the request completes
        }
    }


    return (
        <div className="PostSampleImage">

            <form onSubmit={handleSubmit(send)}>
                <label>Image:</label>
                <input type="file" accept="image/*" {...register("sampleImage", SampleImageModel.imageValidation)}/>
                <span className="error">{formState.errors?.sampleImage?.message}</span>
                
                <input type="date" {...register("date")}/>

                <button type="submit" disabled={loading}>Add</button>

            </form>

            {score !== null && <p>Score: {score}</p>}
            {loading === true && <Spinner />}

        </div>
    );
}

export default PostSampleImage;
