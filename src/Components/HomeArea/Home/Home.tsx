import { useTitle } from "../../../Utils/useTitle";
import Welcome from "../Welcome/Welcome";
import "./Home.css";

function Home(): JSX.Element {

    useTitle("Bolding Progress | Home");

    return (
        <div className="Home">

            <Welcome />

			Home
            
        </div>
    );
}

export default Home;
