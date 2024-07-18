
export class UserModel {
    //public id: number;
    public userName: string;
    public email: string;
    public password: string;

    public static userNameValidation = {
        require:  {value: true, message: "Missing User Name."},
        minLength: {value: 4, message: "Name to short."},
        maxLength: {value: 20, message: "Name to long."},
        validate: {
            hasLowercase: (value: string) => /[a-z]/.test(value) || /[A-Z]/.test(value) ||
             "User Name must contain at least one letter"
        }
    };

    public static emailValidation = {
        required: {value: true, message: "Missing Email."}
    };

    public static passwardValidation = {
        require:  {value: true, message: "Missing Passward."},
        minLength: {value: 8, message: "Passward to short."},
        maxLength: {value: 20, message: "Passward to long."},
        validate: {
            hasLowercase: (value: string) => /[a-z]/.test(value) || "Password must contain at least one lowercase letter",
            hasUppercase: (value: string) => /[A-Z]/.test(value) || "Password must contain at least one uppercase letter",
            hasDigit: (value: string) => /\d/.test(value) || "Password must contain at least one digit"
        }
    };
}