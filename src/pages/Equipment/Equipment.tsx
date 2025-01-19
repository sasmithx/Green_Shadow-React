import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/Store";
import { addEquipment, updateEquipment, deleteEquipment } from "../../reducers/EquipmentSlice";
import { Equipment as EquipmentModel } from "../../models/Equipment";

export function Equipment() {
    const dispatch = useDispatch();
    const equipmentList = useSelector((state: RootState) => state.equipment);
    const [equipment, setEquipment] = useState<EquipmentModel | null>(null);

    const handleSave = () => {
        if (equipment) {
            dispatch(addEquipment(equipment));
            setEquipment(null);
            const form = document.getElementById("equipmentForm") as HTMLFormElement;
            if (form) {
                form.reset();
            }
        }
    };

    const handleUpdate = () => {
        if (equipment) {
            dispatch(updateEquipment(equipment));
            setEquipment(null);
            const form = document.getElementById("equipmentForm") as HTMLFormElement;
            if (form) {
                form.reset();
            }
        }
    };

    const handleDelete = () => {
        if (equipment) {
            dispatch(deleteEquipment(equipment));
            setEquipment(null);
            const form = document.getElementById("equipmentForm") as HTMLFormElement;
            if (form) {
                form.reset();
            }
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setEquipment(prev => ({ ...prev, [name]: value } as EquipmentModel));
    };

    const handleRowDoubleClick = (eq: EquipmentModel) => {
        setEquipment(eq);
    };

    return (
        <div className="container">
            <div className="container">
                <h2
                    className="text-center mt-3 mb-4"
                    style={{ backgroundColor: "#5d755d", color: "white" }}
                >
                    Equipment
                </h2>

                {/* Form for Equipment Entry */}
                <form id="equipmentForm">
                    <div className="row">
                        <div className="col-md-3">
                            <label htmlFor="equipmentId">Equipment ID</label>
                            <input type="text" className="form-control" style={{ backgroundColor: "#558e55" }} id="equipmentId" name="equipmentId" required value={equipment?.equipmentId || ""} onChange={handleChange} />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="name1">Name</label>
                            <input type="text" className="form-control" style={{ backgroundColor: "#558e55" }} id="name1" name="name" required value={equipment?.name || ""} onChange={handleChange} />
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="type">Type</label>
                            <select className="form-control" style={{ backgroundColor: "#558e55" }} id="type" name="type" required value={equipment?.type || ""} onChange={handleChange}>
                                <option value="ELECTRICAL">ELECTRICAL</option>
                                <option value="MECHANICAL">MECHANICAL</option>
                            </select>
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="status1">Status</label>
                            <select className="form-control" style={{ backgroundColor: "#558e55" }} id="status1" name="status" required value={equipment?.status || ""} onChange={handleChange}>
                                <option value="AVAILABLE">AVAILABLE</option>
                                <option value="NOT">NOT</option>
                            </select>
                        </div>
                        <div className="col-md-2">
                            <label htmlFor="quantity">Quantity</label>
                            <input type="number" className="form-control" style={{ backgroundColor: "#558e55" }} id="quantity" name="equantity" required value={equipment?.equantity || ""} onChange={handleChange} />
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-md-3">
                            <label htmlFor="assignedStaffId">Assigned Staff</label>
                            <select className="form-control" style={{ backgroundColor: "#558e55" }} id="assignedStaffId" name="assignedStaffId" required value={equipment?.assignedStaffId || ""} onChange={handleChange}>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="assignedFieldCode">Assigned Field Code</label>
                            <select className="form-control" style={{ backgroundColor: "#558e55" }} id="assignedFieldCode" name="assignedFieldCode" required value={equipment?.assignedFieldCode || ""} onChange={handleChange}>
                            </select>
                        </div>

                        <div className="mt-3 mb-3 col-md-12 d-flex justify-content-start gap-3">
                            <button type="button" className="btn btn-dark mt-4" style={{ backgroundColor: "#5d755d" }} id="saveEq" onClick={handleSave}>SAVE</button>
                            <button type="button" className="btn btn-dark mt-4" style={{ backgroundColor: "#5d755d" }} id="updateEq" onClick={handleUpdate}>UPDATE</button>
                            <button type="button" className="btn btn-dark mt-4" style={{ backgroundColor: "#5d755d" }} id="deleteEq" onClick={handleDelete}>DELETE</button>
                        </div>
                    </div>
                </form>

                {/* Table to display equipment data */}
                <div className="table-container">
                    <table className="table table-bordered" id="eqTable">
                        <thead>
                        <tr>
                            <th>Equipment ID</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Status</th>
                            <th>Quantity</th>
                            <th>Assigned Staff</th>
                            <th>Assigned Field Code</th>
                        </tr>
                        </thead>
                        <tbody id="equipmentTableBody">
                        {equipmentList.map((eq) => (
                            <tr key={eq.equipmentId} onDoubleClick={() => handleRowDoubleClick(eq)}>
                                <td>{eq.equipmentId}</td>
                                <td>{eq.name}</td>
                                <td>{eq.type}</td>
                                <td>{eq.status}</td>
                                <td>{eq.equantity}</td>
                                <td>{eq.assignedStaffId}</td>
                                <td>{eq.assignedFieldCode}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}