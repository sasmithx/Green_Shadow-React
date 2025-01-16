import "./Crop.css";
import { InputField } from "../../components/InputModal.tsx";
import { SelectField } from "../../components/SelectModal.tsx";
import { ActionButton } from "../../components/ActionButtonModal.tsx";

export function Crop() {
    // Dropdown options
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
                    />
                    <SelectField
                        label="Crop Common Name"
                        id="cropCommonName"
                        name="cropCommonName"
                        options={commonNames}
                        style={{ backgroundColor: "#558e55" }}
                        required
                    />
                    <SelectField
                        label="Crop Scientific Name"
                        id="cropScientificName"
                        name="cropScientificName"
                        options={scientificNames}
                        style={{ backgroundColor: "#558e55" }}
                        required
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
                    />
                    <SelectField
                        label="Crop Category"
                        id="category"
                        name="category"
                        options={categories}
                        style={{ backgroundColor: "#558e55" }}
                        required
                    />
                    <InputField
                        label="Quantity"
                        id="qty"
                        name="qty"
                        type="number"
                        style={{ backgroundColor: "#558e55" }}
                        required
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
                    />
                    <InputField
                        label="Field Codes"
                        id="fieldCodes"
                        name="fieldCodes"
                        style={{ backgroundColor: "#558e55" }}
                        required
                    />
                    <InputField
                        label="Field Names"
                        id="fieldNames"
                        name="fieldNames"
                        style={{ backgroundColor: "#558e55" }}
                        required
                    />
                </div>

                <div className="row mt-4 mb-4">
                    <div className="col-md-12 d-flex justify-content-start gap-3">
                        <ActionButton id="saveCropBtn" label="SAVE" style={buttonStyle} />
                        <ActionButton id="updateCropBtn" label="UPDATE" style={buttonStyle} />
                        <ActionButton id="deleteCropBtn" label="DELETE" style={buttonStyle} />
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
                <tbody id="cropTableBody">{/* Dynamically populated rows */}</tbody>
            </table>
        </div>
    );
}