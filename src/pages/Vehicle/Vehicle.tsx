import "./Vehicle.css";

export function Vehicle() {
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
                    {/* Vehicle Code and License Plate */}
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="vehicleCode">Vehicle Code</label>
                            <input
                                type="text"
                                className="form-control"
                                style={{ backgroundColor: "#558e55" }}
                                id="vehicleCode"
                                name="vehicleCode"
                                required
                            />
                        </div>

                        <div className="col-md-6 mb-3">
                            <label htmlFor="licensePlateNumber">License Plate Number</label>
                            <input
                                type="text"
                                className="form-control"
                                style={{ backgroundColor: "#558e55" }}
                                id="licensePlateNumber"
                                name="licensePlateNumber"
                                required
                            />
                        </div>
                    </div>

                    {/* Dropdown Selects */}
                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <label htmlFor="vehicleCategory">Vehicle Category</label>
                            <select
                                className="form-control"
                                id="vehicleCategory"
                                style={{ backgroundColor: "#558e55" }}
                                name="vehicleCategory"
                                defaultValue=""
                                required
                            >
                                <option value="" disabled>
                                    Select Category
                                </option>
                                <option value="CAR">CAR</option>
                                <option value="TRUCK">TRUCK</option>
                                <option value="TRACTOR">TRACTOR</option>
                                <option value="VAN">VAN</option>
                                <option value="SUV">SUV</option>
                                <option value="CRANE">CRANE</option>
                                <option value="ATV">ATV</option>
                            </select>
                        </div>

                        <div className="col-md-4 mb-3">
                            <label htmlFor="fuelType">Fuel Type</label>
                            <select
                                className="form-control"
                                id="fuelType"
                                style={{ backgroundColor: "#558e55" }}
                                name="fuelType"
                                defaultValue=""
                                required
                            >
                                <option value="" disabled>
                                    Select Fuel Type
                                </option>
                                <option value="PETROL">PETROL</option>
                                <option value="DIESEL">DIESEL</option>
                            </select>
                        </div>

                        <div className="col-md-4 mb-3">
                            <label htmlFor="status">Status</label>
                            <select
                                className="form-control"
                                id="status"
                                style={{ backgroundColor: "#558e55" }}
                                name="status"
                                defaultValue=""
                                required
                            >
                                <option value="" disabled>
                                    Select Status
                                </option>
                                <option value="AVAILABLE">AVAILABLE</option>
                                <option value="NOT">NOT</option>
                            </select>
                        </div>
                    </div>

                    {/* Staff ID and Remarks */}
                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <label htmlFor="allocatedStaffId">Allocated Staff ID</label>
                            <select
                                className="form-control"
                                id="allocatedStaffId"
                                style={{ backgroundColor: "#558e55" }}
                                name="allocatedStaffId"
                                defaultValue=""
                                required
                            >
                                <option value="" disabled>
                                    Select Staff
                                </option>
                            </select>
                        </div>
                        <div className="col-md-8 mb-3">
                            <label htmlFor="remarks">Remarks</label>
                            <input
                                type="text"
                                className="form-control"
                                style={{ backgroundColor: "#558e55" }}
                                id="remarks"
                                name="remarks"
                            />
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="row mt-3 mb-4">
                        <div className="col-md-12 d-flex justify-content-start gap-3">
                            <button
                                type="button"
                                className="btn btn-dark px-4"
                                style={{ backgroundColor: "#5d755d" }}
                                id="saveVbtn"
                            >
                                SAVE
                            </button>
                            <button
                                type="button"
                                className="btn btn-dark px-4"
                                style={{ backgroundColor: "#5d755d" }}
                                id="updateVbtn"
                            >
                                UPDATE
                            </button>
                            <button
                                type="button"
                                className="btn btn-dark px-4"
                                style={{ backgroundColor: "#5d755d" }}
                                id="deleteVbtn"
                            >
                                DELETE
                            </button>
                        </div>
                    </div>
                </form>

                {/* Table */}
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
                    {/* Dynamic rows go here */}
                    <tr></tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
