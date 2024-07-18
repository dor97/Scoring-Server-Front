import { CredentialsModel } from "../../../Models/CredentialsModel";
import "./Login.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { notify } from "../../../Utils/Notify";
import { authService } from "../../../Services/AuthService";
import { UserModel } from "../../../Models/UserModel";


function Login(): JSX.Element {

    const {register, handleSubmit, formState} = useForm<CredentialsModel>();
    const navigate = useNavigate();

    async function send(credentials: CredentialsModel) {
        try{
            await authService.login(credentials);
            notify.success("Welcome Back!");
            navigate("/home");
        }
        catch(err: any){
            notify.error(err);
        }
    }


    return (
        <div className="Login">
			<form onSubmit={handleSubmit(send)}>

                <label>User Name:</label>
                <input type="text" {...register("userName", UserModel.userNameValidation)}/>
                <span className="error">{formState.errors?.userName?.message}</span>
                <br/>
                <label>Password:</label>
                <input type="password" {...register("password", UserModel.passwardValidation)}/>
                <span className="error">{formState.errors?.password?.message}</span>

                <button>Login</button>

            </form>
        </div>
    );
}

export default Login;
