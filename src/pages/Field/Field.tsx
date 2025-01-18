import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/Store";
import { addField, updateField, deleteField } from "../../reducers/FieldSlice";
import { Field as FieldModel } from "../../models/Field";
import { InputField } from "../../components/InputModal";
import { SelectField } from "../../components/SelectModal";
import { ActionButton } from "../../components/ActionButtonModal";

export function Field() {
    const dispatch = useDispatch();
    const fields = useSelector((state: RootState) => state.field.fields);
    const [field, setField] = useState<FieldModel>({} as FieldModel);

    const inputStyle = { backgroundColor: "#558e55" };
    const buttonStyle = { backgroundColor: "#5d755d" };

    const handleSave = () => {
        if (field) {
            dispatch(addField(field));
            setField({} as FieldModel);
            const form = document.getElementById("fieldForm") as HTMLFormElement;
            if (form) {
                form.reset();
            }
        }
    };

    const handleUpdate = () => {
        if (field) {
            dispatch(updateField(field));
            setField({} as FieldModel);
            const form = document.getElementById("fieldForm") as HTMLFormElement;
            if (form) {
                form.reset();
            }
        }
    };

    const handleDelete = () => {
        if (field) {
            dispatch(deleteField(field));
            setField({} as FieldModel);
            const form = document.getElementById("fieldForm") as HTMLFormElement;
            if (form) {
                form.reset();
            }
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setField(prev => ({ ...prev, [name]: value } as FieldModel));
    };

    const handleRowDoubleClick = (f: FieldModel) => {
        setField(f);
    };

    return (
        <div className="container">
            <h2 className="text-center mb-4 mt-3" style={{ backgroundColor: "#5d755d", color: "white" }}>Field</h2>
            <div className="container">
                <form id="fieldForm" className="mb-5">
                    <div className="row mb-3">
                        <div className="col-md-4">
                            <InputField
                                label="Field Code"
                                id="fieldCode"
                                name="fieldCode"
                                required
                                style={inputStyle}
                                value={field.fieldCode || ""}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-4">
                            <InputField
                                label="Field Name"
                                id="fieldName"
                                name="fieldName"
                                required
                                style={inputStyle}
                                value={field.fieldName || ""}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-4">
                            <InputField
                                label="Field Location"
                                id="fieldLocation"
                                name="fieldLocation"
                                required
                                style={inputStyle}
                                value={field.fieldLocation || ""}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-md-4">
                            <InputField
                                label="Size"
                                id="size"
                                name="size"
                                type="number"
                                required
                                style={inputStyle}
                                value={field.size || ""}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-4">
                            <SelectField
                                label="Crop Code"
                                id="cropCode"
                                name="cropCode"
                                options={[{ value: "", label: "Select CROP ID" }]}
                                required
                                style={inputStyle}
                                value={field.cropCode || ""}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-4">
                            <InputField
                                label="Crop Name"
                                id="nameOfCrop"
                                name="nameOfCrop"
                                required
                                style={inputStyle}
                                value={field.nameOfCrop || ""}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-md-6">
                            <SelectField
                                label="Staff ID"
                                id="staffId"
                                name="staffId"
                                options={[{ value: "", label: "Select Staff ID" }]}
                                required
                                style={inputStyle}
                                value={field.staffId || ""}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-6">
                            <InputField
                                label="Field Image"
                                id="fieldImage1"
                                name="fieldImageFile"
                                type="file"
                                accept="image/*"
                                required
                                style={inputStyle}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="mt-3 mb-3 col-md-12 d-flex justify-content-start gap-3">
                        <ActionButton id="savefieldbtn" label="SAVE" style={buttonStyle} onClick={handleSave} />
                        <ActionButton id="updatefields" label="UPDATE" style={buttonStyle} onClick={handleUpdate} />
                        <ActionButton id="deleteFiled" label="DELETE" style={buttonStyle} onClick={handleDelete} />
                    </div>
                </form>

                <table className="table table-bordered table-striped table-hover" id="filedTable">
                    <thead className="table-header">
                    <tr>
                        <th scope="col">Field Code</th>
                        <th scope="col">Field Name</th>
                        <th scope="col">Location</th>
                        <th scope="col">Size</th>
                        <th scope="col">Crop Code</th>
                        <th scope="col">Crop Name</th>
                        <th scope="col">Staff ID</th>
                        <th scope="col">Field Image</th>
                    </tr>
                    </thead>
                    <tbody id="fieldTableBody">
                    {fields.map((f: FieldModel) => (
                        <tr key={f.fieldCode} onDoubleClick={() => handleRowDoubleClick(f)}>
                            <td>{f.fieldCode}</td>
                            <td>{f.fieldName}</td>
                            <td>{f.fieldLocation}</td>
                            <td>{f.size}</td>
                            <td>{f.cropCode}</td>
                            <td>{f.nameOfCrop}</td>
                            <td>{f.staffId}</td>
                            <td>{f.fieldImage}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}