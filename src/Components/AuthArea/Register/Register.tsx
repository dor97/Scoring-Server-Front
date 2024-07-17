import { useForm } from "react-hook-form";
import "./Register.css";
import { UserModel } from "../../../Models/UserModel";
import { useNavigate } from "react-router-dom";
import { notify } from "../../../Utils/Notify";
import { authService } from "../../../Services/AuthService";

function Register(): JSX.Element {
    
    const {register, handleSubmit} = useForm<UserModel>();
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
                <input type="text" {...register("userName")}/>

                <label>Email:</label>
                <input type="email" {...register("email")}/>

                <label>Password:</label>
                <input type="password" {...register("password")}/>

                <button>Register</button>

            </form>
        </div>
    );
}

export default Register;
