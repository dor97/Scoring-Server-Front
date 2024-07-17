import { NavLink } from "react-router-dom";
import { SampleImageModel } from "../../../Models/SampleImageModel";
import "./SampleImagesCard.css"

type SampleImagesCardProps = {
    sampleImage: SampleImageModel;
};

function ImageCard(props: SampleImagesCardProps): JSX.Element {
    
    return (
        <div className="SampleImagesCard">
			<div>
                <span>Date: {props.sampleImage.date.toString().split('T')[0]}</span>
                <span>Socre: {props.sampleImage.score}</span>
            </div>                
            <div>
                <NavLink to={"/sampleImages/details/" + props.sampleImage.id}>
                    <img src={props.sampleImage.imageUrl}/>
                </NavLink>
            </div>
        </div>
    );
}

export default ImageCard;