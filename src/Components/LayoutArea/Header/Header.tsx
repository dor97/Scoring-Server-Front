import "./Header.css";
import AuthMenu from "../../AuthArea/AuthMenu/AuthMenu";

function Header(): JSX.Element {
    return (
        <div className="Header">
			<h1>Bolding Progress Tracker</h1>
            
            <AuthMenu />

        </div>
    );
}

export default Header;
