import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
			
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/sampleImages" end>Images</NavLink>
            <NavLink to="/sampleImage/post">Add Image</NavLink>
            <NavLink to="/sampleImages/graph">View Graph</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/contact-us">Contact Us</NavLink>

            {/*<TotalImages />*/}

            {/*<a href="/home">Home</a>
            <a href="/sampleImages">Images</a>
            a href="/contact-us">Contact Us</a>*/}

        </div>
    );
}

export default Menu;
