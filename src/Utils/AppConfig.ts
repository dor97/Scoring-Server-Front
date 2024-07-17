

class AppConfig{

    // Ends each url with ending slash (/)
    public readonly sampleImageUrl = "http://localhost:8080/api/scoreimage/"

    public readonly registerUrl = "http://localhost:8080/api/account/register/";
    public readonly loginUrl = "http://localhost:8080/api/account/login/";

    //Axios options:
    public readonly axiosOptions = {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    };

}

export const appConfig = new AppConfig();