import { useSelector } from "react-redux";
import { AppState } from "../../../Redux/AppState";
import "./AuthMenu.css";
import { NavLink } from "react-router-dom";
import { authService } from "../../../Services/AuthService";
import { notify } from "../../../Utils/Notify";

function AuthMenu(): JSX.Element {

    const user = useSelector((appState: AppState) => appState.user);
    console.log(user);
    
    function logMeOut(){
        authService.logout();
        notify.success("Bye Bye 😢");
    }

    if(!user){
        return (
            <div className="AuthMenu">
                <div className= "activate">
                    <span>Hello Guest | </span>
                    <NavLink to="/login">Login</NavLink>    
                    <span> | </span>  
                    <NavLink to="/register">Register</NavLink>  
                </div>                
            </div>
        );    
    }
    
    return (
        <div className="AuthMenu">
			<span>Hello {user.userName} | </span>
            <NavLink onClick={logMeOut} to="/home">Logout</NavLink>      
        </div>
    );
}

export default AuthMenu;
