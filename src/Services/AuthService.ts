import axios from "axios";
import { UserModel } from "../Models/UserModel";
import { appConfig } from "../Utils/AppConfig";
import { jwtDecode } from "jwt-decode";
import { appStore } from "../Redux/Store";
import { authActions } from "../Redux/AuthSlice";
import { CredentialsModel } from "../Models/CredentialsModel";
import { LoginModel } from "../Models/LoginModel";
import { TokenDataModel } from "../Models/TokenDataModel";

class AuthService {

    public constructor(){

        //Load token from local storage:
        const token = localStorage.getItem("token");

        if(token)
        {
            //Extract the user from the token:
            const container = jwtDecode<{userData: string}>(token);
            const addedUser: TokenDataModel = JSON.parse(container.userData);

            //Send to global store:
            appStore.dispatch(authActions.initUser(addedUser));
        }
    }

    public async register(user: UserModel): Promise<void> {

        //Send user to backend:
        const response = await axios.post<LoginModel>(appConfig.registerUrl, user);

        //Extract token given (JWT) by the backend:
        const token = response.data.token;

        //Extract the user from the token:
        const container = jwtDecode<{userData: string}>(token);
        const addedUser: TokenDataModel = JSON.parse(container.userData);

        //Send to global store:
        appStore.dispatch(authActions.initUser(addedUser));

        //Save token to local storage:
        localStorage.setItem("token", token);
    }

    public async login(credentials: CredentialsModel): Promise<void> {

        //Send credentials to backend:
        const response = await axios.post<LoginModel>(appConfig.loginUrl, credentials);
        
        //Extract token given (JWT) by the backend:
        const token = response.data.token;

        //Extract the user from the token:
        const container = jwtDecode<{userData: string}>(token);
        const loggedInUser: TokenDataModel = JSON.parse(container.userData);

        //Send to global store:
        appStore.dispatch(authActions.initUser(loggedInUser));

        //Save token to local storage:
        localStorage.setItem("token", token);
    }

    //Logout user:
    public logout(): void{
        //Remove user from global storage:
        appStore.dispatch(authActions.removeUser());

        //Remove token from local storage:
        localStorage.clear();
    }
}

export const authService = new AuthService();