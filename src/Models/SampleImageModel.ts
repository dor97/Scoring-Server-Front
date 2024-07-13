
export class SampleImageModel {
    public id: number;
    public imageUrl: string;
    public sampleImage: File;
    public userName: string;
    public score: number;
    public date: string;

    public static imageValidation = {
        required: {value: true, message: "Missing image."}
    };
}
