import { CredentialsModel } from "../../../Models/CredentialsModel";
import "./Login.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


function Login(): JSX.Element {

    const {register, handleSubmit} = useForm<CredentialsModel>();
    const navigate = useNavigate();

    async function send(credentials: CredentialsModel) {
        try{
            
            navigate("/home");
        }
        catch(err: any){

        }
    }


    return (
        <div className="Login">
			<form onSubmit={handleSubmit(send)}>

                <label>Email:</label>
                <input type="email" {...register("email")}/>

                <label>Password:</label>
                <input type="password" {...register("password")}/>

                <button>Login</button>

            </form>
        </div>
    );
}

export default Login;
