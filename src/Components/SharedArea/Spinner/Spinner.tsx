import "./Spinner.css";
import gif from "../../../Assets/Images/loading.gif";

function Spinner(): JSX.Element {
    return (
        <div className="Spinner">
			<img src={gif} />
        </div>
    );
}

export default Spinner;
