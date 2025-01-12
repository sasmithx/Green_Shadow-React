export class Vehicle{
    vehicleCode: string;
    licensePlateNumber: string;
    vehicleCategory: string;
    fuelType: string;
    status: string;
    allocatedStaffId: string;
    remarks: string;

    constructor(vehicleCode: string, licensePlateNumber: string, vehicleCategory: string, fuelType: string, status: string, allocatedStaffId: string, remarks: string){
        this.vehicleCode = vehicleCode;
        this.licensePlateNumber = licensePlateNumber;
        this.vehicleCategory = vehicleCategory;
        this.fuelType = fuelType;
        this.status = status;
        this.allocatedStaffId = allocatedStaffId;
        this.remarks = remarks;
    }
}