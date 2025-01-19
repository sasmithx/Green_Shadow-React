export class CropDetails{
    logCode : string;
    cropCode : string;
    staffId : string;
    quantity : number;
    membersInStaff : number;

    constructor(logCode: string, cropCode: string, staffId: string, quantity: number, membersInStaff: number) {
        this.logCode = logCode;
        this.cropCode = cropCode;
        this.staffId = staffId;
        this.quantity = quantity;
        this.membersInStaff = membersInStaff;
    }
}