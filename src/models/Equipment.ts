export class Equipment{
    equipmentId : string;
    name : string;
    type : string;
    status : string;
    equantity : number;
    assignedStaffId : string;
    assignedFieldCode : string;

    constructor(equipmentId : string, name : string, type : string, status : string, equantity : number, assignedStaffId : string, assignedFieldCode : string){
        this.equipmentId = equipmentId;
        this.name = name;
        this.type = type;
        this.status = status;
        this.equantity = equantity;
        this.assignedStaffId = assignedStaffId;
        this.assignedFieldCode = assignedFieldCode;
    }
}