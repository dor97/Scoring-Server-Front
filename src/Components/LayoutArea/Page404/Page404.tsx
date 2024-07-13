import "./Page404.css";
import imgSorce from "../../../Assets/Images/ERROR404.jpg";
import { useTitle } from "../../../Utils/useTitle";

function Page404(): JSX.Element {
    useTitle("Page Not Found");
    return (
        <div className="Page404">
            {/* <p>
                Error
            </p> */}
            <img src={imgSorce}/>
        </div>
    );
}

export default Page404;
