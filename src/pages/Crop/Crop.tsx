import "./Crop.css";
import { InputField } from "../../components/InputModal";
import { SelectField } from "../../components/SelectModal";
import { ActionButton } from "../../components/ActionButtonModal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/Store";
import { addCrop, updateCrop, deleteCrop } from "../../reducers/CropSlice";
import { useState } from "react";
import { Crop as CropModel } from "../../models/Crop";

export function Crop() {
    const dispatch = useDispatch();
    const crops = useSelector((state: RootState) => state.crop);
    const [crop, setCrop] = useState<CropModel | null>(null);

    const commonNames = [
        { value: "RICE", label: "RICE" },
        { value: "COWPEA", label: "COWPEA" },
        { value: "GREENGRAM", label: "GREENGRAM" },
        { value: "CHIKPEA", label: "CHIKPEA" },
        { value: "SWEETPOTATO", label: "SWEETPOTATO" },
        { value: "CASSAVA", label: "CASSAVA" },
    ];

    const scientificNames = [
        { value: "BG34", label: "BG34" },
        { value: "CP10", label: "CP10" },
        { value: "MI60", label: "MI60" },
        { value: "CH56", label: "CH56" },
        { value: "CS78", label: "CS78" },
    ];

    const categories = [
        { value: "FEED", label: "FEED" },
        { value: "FIBER", label: "FIBER" },
        { value: "OIL", label: "OIL" },
        { value: "CEREAL", label: "CEREAL" },
    ];

    const seasons = [
        { value: "JANUARY", label: "JANUARY" },
        { value: "FEBRUARY", label: "FEBRUARY" },
        { value: "MARCH", label: "MARCH" },
        { value: "APRIL", label: "APRIL" },
        { value: "MAY", label: "MAY" },
        { value: "JUNE", label: "JUNE" },
        { value: "JULY", label: "JULY" },
        { value: "AUGUST", label: "AUGUST" },
        { value: "SEPTEMBER", label: "SEPTEMBER" },
        { value: "OCTOBER", label: "OCTOBER" },
        { value: "NOVEMBER", label: "NOVEMBER" },
        { value: "DECEMBER", label: "DECEMBER" },
    ];

    const buttonStyle = { backgroundColor: "#5d755d" };

    const handleSave = () => {
        if (crop) {
            dispatch(addCrop(crop));
            setCrop(null);
        }
    };

    const handleUpdate = () => {
        if (crop) {
            dispatch(updateCrop(crop));
            setCrop(null);
        }
    };

    const handleDelete = () => {
        if (crop) {
            dispatch(deleteCrop(crop));
            setCrop(null);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setCrop(prev => ({ ...prev, [name]: value } as CropModel));
    };

    return (
        <div className="container" id="cropSection">
            <div className="container mt-3">
                <h2
                    className="text-center mb-4"
                    style={{ backgroundColor: "#5d755d", color: "white" }}
                >
                    Crop
                </h2>
            </div>

            <form id="cropForm" encType="multipart/form-data" name="FormData">
                <div className="form-group row">
                    <InputField
                        label="Crop Code"
                        id="cropCode1"
                        name="cropCode"
                        style={{ backgroundColor: "#558e55" }}
                        required
                        onChange={handleChange}
                    />
                    <SelectField
                        label="Crop Common Name"
                        id="cropCommonName"
                        name="cropCommonName"
                        options={commonNames}
                        style={{ backgroundColor: "#558e55" }}
                        required
                        onChange={handleChange}
                    />
                    <SelectField
                        label="Crop Scientific Name"
                        id="cropScientificName"
                        name="cropScientificName"
                        options={scientificNames}
                        style={{ backgroundColor: "#558e55" }}
                        required
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group row">
                    <InputField
                        label="Crop Image"
                        id="cropImage"
                        name="cropImage"
                        type="file"
                        style={{ backgroundColor: "#558e55" }}
                        accept="image/*"
                        onChange={handleChange}
                    />
                    <SelectField
                        label="Crop Category"
                        id="category"
                        name="category"
                        options={categories}
                        style={{ backgroundColor: "#558e55" }}
                        required
                        onChange={handleChange}
                    />
                    <InputField
                        label="Quantity"
                        id="qty"
                        name="qty"
                        type="number"
                        style={{ backgroundColor: "#558e55" }}
                        required
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group row">
                    <SelectField
                        label="Crop Season"
                        id="cropSeason"
                        name="cropSeason"
                        options={seasons}
                        style={{ backgroundColor: "#558e55" }}
                        required
                        onChange={handleChange}
                    />
                    <InputField
                        label="Field Codes"
                        id="fieldCodes"
                        name="fieldCodes"
                        style={{ backgroundColor: "#558e55" }}
                        required
                        onChange={handleChange}
                    />
                    <InputField
                        label="Field Names"
                        id="fieldNames"
                        name="fieldNames"
                        style={{ backgroundColor: "#558e55" }}
                        required
                        onChange={handleChange}
                    />
                </div>

                <div className="row mt-4 mb-4">
                    <div className="col-md-12 d-flex justify-content-start gap-3">
                        <ActionButton id="saveCropBtn" label="SAVE" style={buttonStyle} onClick={handleSave} />
                        <ActionButton id="updateCropBtn" label="UPDATE" style={buttonStyle} onClick={handleUpdate} />
                        <ActionButton id="deleteCropBtn" label="DELETE" style={buttonStyle} onClick={handleDelete} />
                    </div>
                </div>
            </form>

            <table
                className="table table-bordered table-striped table-hover"
                id="cropTable"
                style={{ marginTop: "20px" }}
            >
                <thead className="table-header">
                <tr>
                    <th>Crop Code</th>
                    <th>Crop Common Name</th>
                    <th>Crop Scientific Name</th>
                    <th>Crop Image</th>
                    <th>Category</th>
                    <th>QTY</th>
                    <th>Crop Season</th>
                    <th>Field Codes</th>
                    <th>Field Names</th>
                </tr>
                </thead>
                <tbody id="cropTableBody">
                {crops.map((c) => (
                    <tr key={c.cropCode}>
                        <td>{c.cropCode}</td>
                        <td>{c.cropCommonName}</td>
                        <td>{c.cropScientificName}</td>
                        <td>{c.cropImage}</td>
                        <td>{c.category}</td>
                        <td>{c.qty}</td>
                        <td>{c.cropSeason}</td>
                        <td>{c.fieldCodes}</td>
                        <td>{c.fieldNames}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}