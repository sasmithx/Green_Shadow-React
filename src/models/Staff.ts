export class Staff{
    staffId: string;
    firstName: string;
    lastName: string;
    designation: string;
    gender: string;
    joinedDate: string;
    dob: string;
    addressLine1: string;
    addressLine2: string;
    addressLine3: string;
    addressLine4: string;
    addressLine5: string;
    contactNo: string;
    email: string;
    members:number;
    fieldCode: string;
    vCode: string;

    constructor(staffId: string, firstName: string, lastName: string, designation: string, gender: string, joinedDate: string, dob: string, addressLine1: string, addressLine2: string, addressLine3: string, addressLine4: string, addressLine5: string, contactNo: string, email: string, members: number, fieldCode: string, vCode: string) {
        this.staffId = staffId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
        this.gender = gender;
        this.joinedDate = joinedDate;
        this.dob = dob;
        this.addressLine1 = addressLine1;
        this.addressLine2 = addressLine2;
        this.addressLine3 = addressLine3;
        this.addressLine4 = addressLine4;
        this.addressLine5 = addressLine5;
        this.contactNo = contactNo;
        this.email = email;
        this.members = members;
        this.fieldCode = fieldCode;
        this.vCode = vCode;
    }
}