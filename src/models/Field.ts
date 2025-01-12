export class Field{
    fieldCode: string;
    fieldName: string;
    fieldLocation: string;
    size: number;
    cropCode: string;
    nameOfCrop: string;
    staffId: string;
    fieldImage: string;

    constructor(fieldCode: string, fieldName: string, fieldLocation: string, size: number, cropCode: string, nameOfCrop: string, staffId: string, fieldImage: string){
        this.fieldCode = fieldCode;
        this.fieldName = fieldName;
        this.fieldLocation = fieldLocation;
        this.size = size;
        this.cropCode = cropCode;
        this.nameOfCrop = nameOfCrop;
        this.staffId = staffId;
        this.fieldImage = fieldImage;
    }
}