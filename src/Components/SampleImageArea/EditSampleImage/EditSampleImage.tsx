import { useNavigate, useParams } from "react-router-dom";
import "./EditSampleImage.css";
import { useForm } from "react-hook-form";
import { SampleImageModel } from "../../../Models/SampleImageModel";
import { sampleImageService } from "../../../Services/SampleImageService";
import { notify } from "../../../Utils/Notify";
import { useEffect } from "react";

function EditSampleImage(): JSX.Element{

    const navigate = useNavigate();

    const { register, handleSubmit, formState, setValue, watch } = useForm<SampleImageModel>();
    
    const params = useParams();
    const id = +params.id;

    useEffect(() => {
        sampleImageService.getOneSampelImage(id)
        .then(dbImage => {
            console.log(dbImage)
            setValue("id", dbImage.id);
            setValue("date", dbImage.date.split('T')[0]);
            setValue("score", dbImage.score);
            setValue("sampleImage", dbImage.sampleImage);
            setValue("imageUrl", dbImage.imageUrl);
            // setImg(dbProduct.imageUrl);
        })
        .catch(err => notify.error(err));
    }, [])

    async function send(image: SampleImageModel) {
        try{
            console.log(image);
            //if(image.sampleImage !== undefined){
            //    image.sampleImage = (image.sampleImage as unknown as FileList)[0];
            //}
            await sampleImageService.updateImage(image);
            //alert("Image is updating");
            notify.success("Image is updating");
            navigate("/Image");
        }
        catch(err : any){
            //alert(err.message);
            notify.error(err);
        }
    }

    return (
        <div className="SampleImage">

			<form onSubmit={handleSubmit(send)}>

                <input type="hidden" {...register("id")}/>

                <label>Score:</label>
                <input type="number" step="0.01" {...register("score")}  />
                <span className="error">{formState.errors?.score?.message}</span>

                <label>Date:</label>
                <input type="date" {...register("date")} />
                <span className="error">{formState.errors?.date?.message}</span>

                {/* <img src={img}/> */}
                <img src={watch("imageUrl")}/>

                <button>Update</button>

            </form>

        </div>
    );
}

export default EditSampleImage;