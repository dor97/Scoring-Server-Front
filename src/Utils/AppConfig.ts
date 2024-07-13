

class AppConfig{

    // Ends each url with ending slash (/)
    public readonly sampleImageUrl = "http://localhost:8080/api/scoreimage/"

    //Axios options:
    public readonly axiosOptions = {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    };

}

export const appConfig = new AppConfig();