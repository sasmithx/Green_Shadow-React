// import "./Vehicle.css";
// import {InputField} from "../../components/InputModal.tsx";
// import {SelectField} from "../../components/SelectModal.tsx";
// import {ActionButton} from "../../components/ActionButtonModal.tsx";
//
//
// // Vehicle Component
// export function Vehicle() {
//     const inputStyle = { backgroundColor: "#558e55" };
//     const buttonStyle = { backgroundColor: "#5d755d" };
//
//     const vehicleCategories = [
//         { value: "CAR", label: "CAR" },
//         { value: "TRUCK", label: "TRUCK" },
//         { value: "TRACTOR", label: "TRACTOR" },
//         { value: "VAN", label: "VAN" },
//         { value: "SUV", label: "SUV" },
//         { value: "CRANE", label: "CRANE" },
//         { value: "ATV", label: "ATV" },
//     ];
//
//     const fuelTypes = [
//         { value: "PETROL", label: "PETROL" },
//         { value: "DIESEL", label: "DIESEL" },
//     ];
//
//     const statuses = [
//         { value: "AVAILABLE", label: "AVAILABLE" },
//         { value: "NOT", label: "NOT" },
//     ];
//
//     return (
//         <div className="container" id="vehicleSection">
//             <div className="container mt-3">
//                 <h2
//                     className="text-center mb-4"
//                     style={{ backgroundColor: "#5d755d", color: "white" }}
//                 >
//                     Vehicle
//                 </h2>
//
//                 <form id="vehicleForm">
//                     <div className="row">
//                         <InputField
//                             label="Vehicle Code"
//                             id="vehicleCode"
//                             name="vehicleCode"
//                             required
//                             style={inputStyle}
//                         />
//                         <InputField
//                             label="License Plate Number"
//                             id="licensePlateNumber"
//                             name="licensePlateNumber"
//                             required
//                             style={inputStyle}
//                         />
//                     </div>
//
//                     <div className="row">
//                         <SelectField
//                             label="Vehicle Category"
//                             id="vehicleCategory"
//                             name="vehicleCategory"
//                             options={vehicleCategories}
//                             required
//                             style={inputStyle}
//                         />
//                         <SelectField
//                             label="Fuel Type"
//                             id="fuelType"
//                             name="fuelType"
//                             options={fuelTypes}
//                             required
//                             style={inputStyle}
//                         />
//                         <SelectField
//                             label="Status"
//                             id="status"
//                             name="status"
//                             options={statuses}
//                             required
//                             style={inputStyle}
//                         />
//                     </div>
//
//                     <div className="row">
//                         <SelectField
//                             label="Allocated Staff ID"
//                             id="allocatedStaffId"
//                             name="allocatedStaffId"
//                             options={[]}
//                             required
//                             style={inputStyle}
//                         />
//                         <InputField
//                             label="Remarks"
//                             id="remarks"
//                             name="remarks"
//                             style={inputStyle}
//                         />
//                     </div>
//
//                     <div className="row mt-3 mb-4">
//                         <div className="col-md-12 d-flex justify-content-start gap-3">
//                             <ActionButton id="saveVbtn" label="SAVE" style={buttonStyle} />
//                             <ActionButton id="updateVbtn" label="UPDATE" style={buttonStyle} />
//                             <ActionButton id="deleteVbtn" label="DELETE" style={buttonStyle} />
//                         </div>
//                     </div>
//                 </form>
//
//                 <table className="table table-bordered table-striped mt-5" id="vTable">
//                     <thead className="thead-dark">
//                     <tr>
//                         <th>Vehicle Code</th>
//                         <th>License Plate Number</th>
//                         <th>Vehicle Category</th>
//                         <th>Fuel Type</th>
//                         <th>Status</th>
//                         <th>Allocated Staff ID</th>
//                         <th>Remarks</th>
//                     </tr>
//                     </thead>
//                     <tbody id="vTbody">
//                     <tr></tr>
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }


import "./Vehicle.css";
import { InputField } from "../../components/InputModal.tsx";
import { SelectField } from "../../components/SelectModal.tsx";
import { ActionButton } from "../../components/ActionButtonModal.tsx";
import { useDispatch, useSelector } from "react-redux";
import { addVehicle, updateVehicle, deleteVehicle } from "../../reducers/VehicleSlice.ts";
import { useState } from "react";
import { Vehicle as VehicleModel } from "../../models/Vehicle.ts";
import {RootState} from "@reduxjs/toolkit/query";

export function Vehicle() {
    const dispatch = useDispatch();
    const vehicles = useSelector((state: RootState) => state.vehicle);
    const [vehicle, setVehicle] = useState<VehicleModel | null>(null);

    const inputStyle = { backgroundColor: "#558e55" };
    const buttonStyle = { backgroundColor: "#5d755d" };

    const vehicleCategories = [
        { value: "CAR", label: "CAR" },
        { value: "TRUCK", label: "TRUCK" },
        { value: "TRACTOR", label: "TRACTOR" },
        { value: "VAN", label: "VAN" },
        { value: "SUV", label: "SUV" },
        { value: "CRANE", label: "CRANE" },
        { value: "ATV", label: "ATV" },
    ];

    const fuelTypes = [
        { value: "PETROL", label: "PETROL" },
        { value: "DIESEL", label: "DIESEL" },
    ];

    const statuses = [
        { value: "AVAILABLE", label: "AVAILABLE" },
        { value: "NOT", label: "NOT" },
    ];

    const handleSave = () => {
        if (vehicle) {
            dispatch(addVehicle(vehicle));
            setVehicle(null);
        }
    };

    const handleUpdate = () => {
        if (vehicle) {
            dispatch(updateVehicle(vehicle));
            setVehicle(null);
        }
    };

    const handleDelete = () => {
        if (vehicle) {
            dispatch(deleteVehicle(vehicle));
            setVehicle(null);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setVehicle(prev => ({ ...prev, [name]: value } as VehicleModel));
    };

    return (
        <div className="container" id="vehicleSection">
            <div className="container mt-3">
                <h2
                    className="text-center mb-4"
                    style={{ backgroundColor: "#5d755d", color: "white" }}
                >
                    Vehicle
                </h2>

                <form id="vehicleForm">
                    <div className="row">
                        <InputField
                            label="Vehicle Code"
                            id="vehicleCode"
                            name="vehicleCode"
                            required
                            style={inputStyle}
                            onChange={handleChange}
                        />
                        <InputField
                            label="License Plate Number"
                            id="licensePlateNumber"
                            name="licensePlateNumber"
                            required
                            style={inputStyle}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="row">
                        <SelectField
                            label="Vehicle Category"
                            id="vehicleCategory"
                            name="vehicleCategory"
                            options={vehicleCategories}
                            required
                            style={inputStyle}
                            onChange={handleChange}
                        />
                        <SelectField
                            label="Fuel Type"
                            id="fuelType"
                            name="fuelType"
                            options={fuelTypes}
                            required
                            style={inputStyle}
                            onChange={handleChange}
                        />
                        <SelectField
                            label="Status"
                            id="status"
                            name="status"
                            options={statuses}
                            required
                            style={inputStyle}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="row">
                        <InputField
                            label="Allocated Staff ID"
                            id="allocatedStaffId"
                            name="allocatedStaffId"
                            required
                            style={inputStyle}
                            onChange={handleChange}
                        />
                        <InputField
                            label="Remarks"
                            id="remarks"
                            name="remarks"
                            style={inputStyle}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="row mt-3 mb-4">
                        <div className="col-md-12 d-flex justify-content-start gap-3">
                            <ActionButton id="saveVbtn" label="SAVE" style={buttonStyle} onClick={handleSave} />
                            <ActionButton id="updateVbtn" label="UPDATE" style={buttonStyle} onClick={handleUpdate} />
                            <ActionButton id="deleteVbtn" label="DELETE" style={buttonStyle} onClick={handleDelete} />
                        </div>
                    </div>
                </form>

                <table className="table table-bordered table-striped mt-5" id="vTable">
                    <thead className="thead-dark">
                    <tr>
                        <th>Vehicle Code</th>
                        <th>License Plate Number</th>
                        <th>Vehicle Category</th>
                        <th>Fuel Type</th>
                        <th>Status</th>
                        <th>Allocated Staff ID</th>
                        <th>Remarks</th>
                    </tr>
                    </thead>
                    <tbody id="vTbody">
                    {vehicles.map((v) => (
                        <tr key={v.vehicleCode}>
                            <td>{v.vehicleCode}</td>
                            <td>{v.licensePlateNumber}</td>
                            <td>{v.vehicleCategory}</td>
                            <td>{v.fuelType}</td>
                            <td>{v.status}</td>
                            <td>{v.allocatedStaffId}</td>
                            <td>{v.remarks}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}