import "./SampleImageDetails.css"
import { NavLink } from "react-router-dom";
import { notify } from "../../../Utils/Notify";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SampleImageModel } from "../../../Models/SampleImageModel";
import { sampleImageService } from "../../../Services/SampleImageService";


function SampleImageDetails(): JSX.Element{

    const params = useParams();
    const id = +params.id;
    const navigate = useNavigate();

    const [image, setImage] = useState<SampleImageModel>();

    useEffect(() => {
        sampleImageService.getOneSampelImage(id)
        .then(dbImage => setImage(dbImage))
        .catch(err => notify.error(err));
    }, []);

    async function deleteMe(){
        try{
            const ok = window.confirm("Are you sure?");
            if(!ok) return;
            await sampleImageService.deleteImage(id);
            //alert("Image has been deleted.");
            notify.success("Image has been deleted.");
            navigate("/sampleImages");
        }
        catch(err: any){
            notify.error(err);
            //alert(err.message);
        }
    }

    return (
        <div className="SampleImageDetails">
            <h3>Date: {image?.date.split('T')[0]}</h3>                
            <h3>Score: {image?.score}</h3>                

            <img src={image?.imageUrl}/>
            <div>
                <NavLink to="/sampleImages">Back</NavLink>
                <span> | </span>
                <NavLink to={"/sampleImages/edit/" + image?.id}>Edit</NavLink>
                <span> | </span>
                <NavLink to="#" onClick={deleteMe}>Delete</NavLink>
            </div>
        </div>
    );
}

export default SampleImageDetails;