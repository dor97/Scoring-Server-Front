import axios from "axios";

class Interceptors{

    public registerInterceptors(): void {
        axios.interceptors.request.use(requestObject => {

            //Get token from local storage:
            const token = localStorage.getItem("token");

            //Add header for jwt:
            requestObject.headers.Authorization = "Bearer " + token;

            //return changed request object:
            return requestObject;
        });
    }

}

export const interceptors = new Interceptors();