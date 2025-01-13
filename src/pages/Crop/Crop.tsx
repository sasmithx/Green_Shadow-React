import "./Crop.css";

export function Crop() {
    return (
        <>
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
                        {/* Crop Code */}
                        <div className="col-md-4">
                            <label htmlFor="cropCode1">Crop Code</label>
                            <input
                                type="text"
                                className="form-control"
                                style={{ backgroundColor: "#558e55" }}
                                id="cropCode1"
                                name="cropCode"
                                required
                            />
                        </div>

                        {/* Crop Common Name */}
                        <div className="col-md-4">
                            <label htmlFor="cropCommonName">Crop Common Name</label>
                            <select
                                className="form-control"
                                style={{ backgroundColor: "#558e55" }}
                                id="cropCommonName"
                                name="cropCommonName"
                                defaultValue=""
                                required
                            >
                                <option value="" disabled>
                                    Select Common Name
                                </option>
                                <option value="RICE">RICE</option>
                                <option value="COWPEA">COWPEA</option>
                                <option value="GREENGRAM">GREENGRAM</option>
                                <option value="CHIKPEA">CHIKPEA</option>
                                <option value="SWEETPOTATO">SWEETPOTATO</option>
                                <option value="CASSAVA">CASSAVA</option>
                            </select>
                        </div>

                        {/* Crop Scientific Name */}
                        <div className="col-md-4">
                            <label htmlFor="cropScientificName">Crop Scientific Name</label>
                            <select
                                className="form-control"
                                style={{ backgroundColor: "#558e55" }}
                                id="cropScientificName"
                                name="cropScientificName"
                                defaultValue=""
                                required
                            >
                                <option value="" disabled>
                                    Select Scientific Name
                                </option>
                                <option value="BG34">BG34</option>
                                <option value="CP10">CP10</option>
                                <option value="MI60">MI60</option>
                                <option value="CH56">CH56</option>
                                <option value="CS78">CS78</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group row">
                        {/* Crop Image */}
                        <div className="col-md-4">
                            <label htmlFor="cropImage">Crop Image</label>
                            <input
                                type="file"
                                className="form-control file-input"
                                style={{ backgroundColor: "#558e55" }}
                                id="cropImage"
                                name="cropImage"
                                accept="image/*"
                            />
                        </div>

                        {/* Crop Category */}
                        <div className="col-md-4">
                            <label htmlFor="category">Crop Category</label>
                            <select
                                className="form-control"
                                style={{ backgroundColor: "#558e55" }}
                                id="category"
                                name="category"
                                defaultValue=""
                                required
                            >
                                <option value="" disabled>
                                    Select Category
                                </option>
                                <option value="FEED">FEED</option>
                                <option value="FIBER">FIBER</option>
                                <option value="OIL">OIL</option>
                                <option value="CEREAL">CEREAL</option>
                            </select>
                        </div>

                        {/* Quantity */}
                        <div className="col-md-4">
                            <label htmlFor="qty">Quantity</label>
                            <input
                                type="number"
                                className="form-control"
                                style={{ backgroundColor: "#558e55" }}
                                id="qty"
                                name="qty"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        {/* Crop Season */}
                        <div className="col-md-4">
                            <label htmlFor="cropSeason">Crop Season</label>
                            <select
                                className="form-control"
                                style={{ backgroundColor: "#558e55" }}
                                id="cropSeason"
                                name="cropSeason"
                                defaultValue=""
                                required
                            >
                                <option value="" disabled>
                                    Select Season
                                </option>
                                <option value="JANUARY">JANUARY</option>
                                <option value="FEBRUARY">FEBRUARY</option>
                                <option value="MARCH">MARCH</option>
                                <option value="APRIL">APRIL</option>
                                <option value="MAY">MAY</option>
                                <option value="JUNE">JUNE</option>
                                <option value="JULY">JULY</option>
                                <option value="AUGUST">AUGUST</option>
                                <option value="SEPTEMBER">SEPTEMBER</option>
                                <option value="OCTOBER">OCTOBER</option>
                                <option value="NOVEMBER">NOVEMBER</option>
                                <option value="DECEMBER">DECEMBER</option>
                            </select>
                        </div>

                        {/* Field Codes */}
                        <div className="col-md-4">
                            <label htmlFor="fieldCodes">Field Codes</label>
                            <select
                                className="form-control"
                                style={{ backgroundColor: "#558e55" }}
                                id="fieldCodes"
                                name="fieldCodes"
                                defaultValue=""
                                required
                            >
                                <option value="" disabled>
                                    Select Field Code
                                </option>
                                {/* Dynamically populated options */}
                            </select>
                        </div>

                        {/* Field Names */}
                        <div className="col-md-4">
                            <label htmlFor="fieldNames">Field Names</label>
                            <input
                                type="text"
                                className="form-control"
                                style={{ backgroundColor: "#558e55" }}
                                id="fieldNames"
                                name="fieldNames"
                                required
                            />
                        </div>
                    </div>

                    <div className="row-md-4 mt-4 mb-4">
                        {/* Buttons */}
                        <div className="col-md-12 d-flex justify-content-start gap-3">
                            <button
                                type="submit"
                                className="btn btn-dark"
                                style={{backgroundColor: "#5d755d"}}
                                id="saveCropBtn"
                            >
                                SAVE
                            </button>
                            <button
                                type="button"
                                className="btn btn-dark"
                                style={{backgroundColor: "#5d755d"}}
                                id="updateCropBtn"
                            >
                                UPDATE
                            </button>
                            <button
                                type="button"
                                className="btn btn-dark"
                                style={{backgroundColor: "#5d755d"}}
                                id="deleteCropBtn"
                            >
                                DELETE
                            </button>
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
                    {/* Dynamically populated rows */}
                    </tbody>
                </table>
            </div>
        </>
    );
}
