import { useForm } from "react-hook-form";
import "./Register.css";
import { UserModel } from "../../../Models/UserModel";
import { useNavigate } from "react-router-dom";

function Register(): JSX.Element {
    
    const {register, handleSubmit} = useForm<UserModel>();
    const navigate = useNavigate();
    
    async function send(user: UserModel) {
        try{

            navigate("/home");
        }
        catch(err: any){

        }
    }

    return (
        <div className="Register">
			<form onSubmit={handleSubmit(send)}>
{/* 
                <label>Name:</label>
                <input type="text" {...register("name")}/> */}

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
