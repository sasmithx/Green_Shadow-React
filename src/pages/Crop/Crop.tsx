import "./Crop.css";
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
            const form = document.getElementById("cropForm") as HTMLFormElement;
            if (form) {
                form.reset();
            }
        }
    };

    const handleUpdate = () => {
        if (crop) {
            dispatch(updateCrop(crop));
            setCrop(null);
            const form = document.getElementById("cropForm") as HTMLFormElement;
            if (form) {
                form.reset();
            }
        }
    };

    const handleDelete = () => {
        if (crop) {
            dispatch(deleteCrop(crop));
            setCrop(null);
            const form = document.getElementById("cropForm") as HTMLFormElement;
            if (form) {
                form.reset();
            }
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setCrop(prev => ({ ...prev, [name]: value } as CropModel));
    };

    const handleRowDoubleClick = (c: CropModel) => {
        setCrop(c);
    };

    return (
        <div className="container">
            <h2 className="text-center mb-4 mt-3" style={{ backgroundColor: "#5d755d", color: "white" }}>Crop</h2>

            <form id="cropForm" encType="multipart/form-data" name="FormData">
                <div className="form-group row">
                    <div className="col-md-4">
                        <label htmlFor="cropCode1">Crop Code</label>
                        <input type="text" className="form-control" style={{ backgroundColor: "#558e55" }} id="cropCode1" name="cropCode" required value={crop?.cropCode || ""} onChange={handleChange} />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="cropCommonName">Crop Common Name</label>
                        <select className="form-control" style={{ backgroundColor: "#558e55" }} id="cropCommonName" name="cropCommonName" required value={crop?.cropCommonName || ""} onChange={handleChange}>
                            {commonNames.map((option) => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="cropScientificName">Crop Scientific Name</label>
                        <select className="form-control" style={{ backgroundColor: "#558e55" }} id="cropScientificName" name="cropScientificName" required value={crop?.cropScientificName || ""} onChange={handleChange}>
                            {scientificNames.map((option) => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-md-4">
                        <label htmlFor="cropImage">Crop Image</label>
                        <input type="file" className="form-control file-input" style={{ backgroundColor: "#558e55" }} id="cropImage" name="cropImage" accept="image/*" onChange={handleChange} />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="category">Crop Category</label>
                        <select className="form-control" style={{ backgroundColor: "#558e55" }} id="category" name="category" required value={crop?.category || ""} onChange={handleChange}>
                            {categories.map((option) => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="qty">Quantity</label>
                        <input type="number" className="form-control" style={{ backgroundColor: "#558e55" }} id="qty" name="qty" required value={crop?.qty || ""} onChange={handleChange} />
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-md-4">
                        <label htmlFor="cropSeason">Crop Season</label>
                        <select className="form-control" style={{ backgroundColor: "#558e55" }} id="cropSeason" name="cropSeason" required value={crop?.cropSeason || ""} onChange={handleChange}>
                            {seasons.map((option) => (
                                <option key={option.value} value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="fieldCodes">Field Codes</label>
                        <select className="form-control" style={{ backgroundColor: "#558e55" }} id="fieldCodes" name="fieldCodes" required value={crop?.fieldCodes || ""} onChange={handleChange}>
                            {/* Add options here */}
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="fieldNames">Field Names</label>
                        <input type="text" className="form-control" style={{ backgroundColor: "#558e55" }} id="fieldNames" name="fieldNames" required value={crop?.fieldNames || ""} onChange={handleChange} />
                    </div>
                </div>

                <div className="mt-3 col-md-12 d-flex justify-content-start gap-3">
                    <ActionButton id="saveCropBtn" label="SAVE" style={buttonStyle} onClick={handleSave} />
                    <ActionButton id="updateCropBtn" label="UPDATE" style={buttonStyle} onClick={handleUpdate} />
                    <ActionButton id="deleteCropBtn" label="DELETE" style={buttonStyle} onClick={handleDelete} />
                </div>
            </form>

            <table className="table table-bordered table-striped table-hover" id="cropTable" style={{ marginTop: "20px" }}>
                <thead className="table-header">
                <tr>
                    <th scope="col">Crop Code</th>
                    <th scope="col">Crop Common Name</th>
                    <th scope="col">Crop Scientific Name</th>
                    <th scope="col">Crop Image</th>
                    <th scope="col">Category</th>
                    <th scope="col">QTY</th>
                    <th scope="col">Crop Season</th>
                    <th scope="col">Field Codes</th>
                    <th scope="col">Field Names</th>
                </tr>
                </thead>
                <tbody id="cropTableBody">
                {crops.map((c) => (
                    <tr key={c.cropCode} onDoubleClick={() => handleRowDoubleClick(c)}>
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