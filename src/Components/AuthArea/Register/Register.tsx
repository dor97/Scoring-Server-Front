import { useForm } from "react-hook-form";
import "./Register.css";
import { UserModel } from "../../../Models/UserModel";
import { useNavigate } from "react-router-dom";
import { notify } from "../../../Utils/Notify";
import { authService } from "../../../Services/AuthService";

function Register(): JSX.Element {
    
    const {register, handleSubmit, formState} = useForm<UserModel>();
    const navigate = useNavigate();
    
    async function send(user: UserModel) {
        try{
            await authService.register(user);
            notify.success("Welcome " + user.userName + "!");
            navigate("/home");
        }
        catch(err: any){

        }
    }

    return (
        <div className="Register">
			<form onSubmit={handleSubmit(send)}>
 
                <label>User Name:</label>
                <input type="text" {...register("userName", UserModel.userNameValidation)}/>
                <span className="error">{formState.errors?.userName?.message}</span>

                <label>Email:</label>
                <input type="email" {...register("email", UserModel.emailValidation)}/>
                <span className="error">{formState.errors?.email?.message}</span>

                <label>Password:</label>
                <input type="password" {...register("password", UserModel.passwardValidation)}/>
                <span className="error">{formState.errors?.password?.message}</span>

                <button>Register</button>

            </form>
        </div>
    );
}

export default Register;
