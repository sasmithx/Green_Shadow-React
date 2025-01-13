interface VehicleInputModalProps {
    vehicleCode: string;
    licensePlateNumber: string;
    vehicleCategory: string;
    fuelType: string;
    status: string;
    allocatedStaffId: string;
    remarks: string;
    setVehicleCode: (vehicleCode: string) => void;
    setLicensePlateNumber: (licensePlateNumber: string) => void;
    setVehicleCategory: (vehicleCategory: string) => void;
    setFuelType: (fuelType: string) => void;
    setStatus: (status: string) => void;
    setAllocatedStaffId: (allocatedStaffId: string) => void;
    setRemarks: (remarks: string) => void;
}

export const VehicleInputModal = (props: VehicleInputModalProps) => {
    return (
        <>
            <input
                type="text"
                placeholder="Enter vehicle code"
                value={props.vehicleCode}
                onChange={(e) => {
                    props.setVehicleCode(e.target.value)
                }}
            />
            <input
                type="text"
                placeholder="Enter license plate number"
                value={props.licensePlateNumber}
                onChange={(e) => {
                    props.setLicensePlateNumber(e.target.value)
                }}
            />
            <input
                type="text"
                placeholder="Enter vehicle category"
                value={props.vehicleCategory}
                onChange={(e) => {
                    props.setVehicleCategory(e.target.value)
                }}
            />
            <input
                type="text"
                placeholder="Enter fuel type"
                value={props.fuelType}
                onChange={(e) => {
                    props.setFuelType(e.target.value)
                }}
            />
            <input
                type="text"
                placeholder="Enter status"
                value={props.status}
                onChange={(e) => {
                    props.setStatus(e.target.value)
                }}
            />
            <input
                type="text"
                placeholder="Enter allocated staff id"
                value={props.allocatedStaffId}
                onChange={(e) => {
                    props.setAllocatedStaffId(e.target.value)
                }}
            />
            <input
                type="text"
                placeholder="Enter remarks"
                value={props.remarks}
                onChange={(e) => {
                    props.setRemarks(e.target.value)
                }}
            />
        </>
    );
};