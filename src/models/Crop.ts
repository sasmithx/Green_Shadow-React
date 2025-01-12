export class Crop{
    cropCode : string;
    cropCommonName : string;
    cropScientificName : string;
    cropImage : string;
    category : string;
    qty : number;
    cropSeason : string;
    fieldCodes : string;
    fieldNames : string;

    constructor(cropCode : string, cropCommonName : string, cropScientificName : string, cropImage : string, category : string, qty : number, cropSeason : string, fieldCodes : string, fieldNames : string){
        this.cropCode = cropCode;
        this.cropCommonName = cropCommonName;
        this.cropScientificName = cropScientificName;
        this.cropImage = cropImage;
        this.category = category;
        this.qty = qty;
        this.cropSeason = cropSeason;
        this.fieldCodes = fieldCodes;
        this.fieldNames = fieldNames;
    }
}