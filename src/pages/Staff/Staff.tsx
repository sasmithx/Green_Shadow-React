import "./Staff.css";

export function Staff() {
    return (
        <>
            <div className="container" id="staffSection">
                <div className="container mt-3">
                    <h2
                        className="text-center mb-4"
                        style={{ backgroundColor: "#5d755d", color: "white" }}
                    >
                        Staff
                    </h2>
                </div>
            </div>

            <form id="staffForm">
                {/* Personal Information Section */}
                <div className="form-section">
                    <div className="row">
                        {/* Staff ID */}
                        <div className="col-md-3 mb-3">
                            <label htmlFor="staffId1">Staff ID</label>
                            <input
                                type="text"
                                className="form-control"
                                style={{ backgroundColor: "#558e55" }}
                                id="staffId1"
                                name="staffId"
                                readOnly
                            />
                        </div>

                        {/* First Name */}
                        <div className="col-md-3 mb-3">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                className="form-control"
                                style={{ backgroundColor: "#558e55" }}
                                id="firstName"
                                name="firstName"
                                required
                            />
                        </div>

                        {/* Last Name */}
                        <div className="col-md-3 mb-3">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                className="form-control"
                                style={{ backgroundColor: "#558e55" }}
                                id="lastName"
                                name="lastName"
                                required
                            />
                        </div>

                        {/* Designation */}
                        <div className="col-md-3 mb-3">
                            <label htmlFor="designation">Designation</label>
                            <input
                                type="text"
                                className="form-control"
                                style={{ backgroundColor: "#558e55" }}
                                id="designation"
                                name="designation"
                                required
                            />
                        </div>
                    </div>

                    <div className="row">
                        {/* Gender */}
                        <div className="col-md-3 mb-3">
                            <label htmlFor="gender">Gender</label>
                            <select
                                className="form-control"
                                style={{ backgroundColor: "#558e55" }}
                                id="gender"
                                name="gender"
                            >
                                <option value="MALE">Male</option>
                                <option value="FEMALE">Female</option>
                            </select>
                        </div>

                        {/* Joined Date */}
                        <div className="col-md-3 mb-3">
                            <label htmlFor="joinedDate">Joined Date</label>
                            <input
                                type="date"
                                className="form-control"
                                style={{ backgroundColor: "#558e55" }}
                                id="joinedDate"
                                name="joinedDate"
                                required
                            />
                        </div>

                        {/* Date of Birth */}
                        <div className="col-md-3 mb-3">
                            <label htmlFor="dob">Date of Birth</label>
                            <input
                                type="date"
                                className="form-control"
                                style={{ backgroundColor: "#558e55" }}
                                id="dob"
                                name="dob"
                                required
                            />
                        </div>

                        {/* Address Line 1 */}
                        <div className="col-md-3 mb-3">
                            <label htmlFor="addressLine1">Address Line 1</label>
                            <input
                                type="text"
                                className="form-control"
                                style={{ backgroundColor: "#558e55" }}
                                id="addressLine1"
                                name="addressLine1"
                                required
                            />
                        </div>
                    </div>

                    <div className="row">
                        {/* Address Line 2 */}
                        <div className="col-md-3 mb-3">
                            <label htmlFor="addressLine2">Address Line 2</label>
                            <input
                                type="text"
                                className="form-control"
                                style={{ backgroundColor: "#558e55" }}
                                id="addressLine2"
                                name="addressLine2"
                                required
                            />
                        </div>

                        {/* Address Line 3 */}
                        <div className="col-md-3 mb-3">
                            <label htmlFor="addressLine3">Address Line 3</label>
                            <input
                                type="text"
                                className="form-control"
                                style={{ backgroundColor: "#558e55" }}
                                id="addressLine3"
                                name="addressLine3"
                                required
                            />
                        </div>

                        {/* Address Line 4 */}
                        <div className="col-md-3 mb-3">
                            <label htmlFor="addressLine4">Address Line 4</label>
                            <input
                                type="text"
                                className="form-control"
                                style={{ backgroundColor: "#558e55" }}
                                id="addressLine4"
                                name="addressLine4"
                                required
                            />
                        </div>

                        {/* Address Line 5 */}
                        <div className="col-md-3 mb-3">
                            <label htmlFor="addressLine5">Address Line 5</label>
                            <input
                                type="text"
                                className="form-control"
                                style={{ backgroundColor: "#558e55" }}
                                id="addressLine5"
                                name="addressLine5"
                                required
                            />
                        </div>
                    </div>
                </div>

                <div className="form-section">
                    <div className="row">
                        {/* Contact No */}
                        <div className="col-md-3 mb-3">
                            <label htmlFor="contactNo">Contact No</label>
                            <input
                                type="text"
                                className="form-control"
                                style={{ backgroundColor: "#558e55" }}
                                id="contactNo"
                                name="contactNo"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className="col-md-3 mb-3">
                            <label htmlFor="email1">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                style={{ backgroundColor: "#558e55" }}
                                id="email1"
                                name="email"
                                required
                            />
                        </div>

                        {/* Field Code */}
                        <div className="col-md-3 mb-3">
                            <label htmlFor="fieldCode1">Field Code</label>
                            <select
                                className="form-control"
                                style={{ backgroundColor: "#558e55" }}
                                id="fieldCode1"
                                name="fieldCode"
                            >
                                <option value="">Select Field Code</option>
                            </select>
                        </div>

                        {/* V Code */}
                        <div className="col-md-3 mb-3">
                            <label htmlFor="vCode">Vehicle Code</label>
                            <select
                                className="form-control"
                                style={{ backgroundColor: "#558e55" }}
                                id="vCode"
                                name="vcode"
                            >
                                <option value="">Select Vehicle Code</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        {/* Members */}
                        <div className="col-md-2 mb-3">
                            <label htmlFor="members">Members</label>
                            <input
                                type="number"
                                className="form-control"
                                style={{ backgroundColor: "#558e55" }}
                                id="members"
                                name="members"
                            />
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <button
                    type="button"
                    className="btn btn-dark"
                    style={{ backgroundColor: "#5d755d" }}
                    id="savestaffbtn"
                >
                    SAVE
                </button>
                <button
                    type="button"
                    className="btn btn-dark"
                    style={{ backgroundColor: "#5d755d" }}
                    id="updatestaffbtn"
                >
                    UPDATE
                </button>
                <button
                    type="button"
                    className="btn btn-dark"
                    style={{ backgroundColor: "#5d755d" }}
                    id="deletestaffbtn"
                >
                    DELETE
                </button>
            </form>

            {/* Display Table */}
            <div className="container mt-4">
                <div style={{ overflowX: "auto", overflowY: "auto" }}>
                    <table className="table table-bordered table-responsive" id="staffTable">
                        <thead id="tableHead">
                        <tr>
                            <th>Staff ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Designation</th>
                            <th>Gender</th>
                            <th>Joined Date</th>
                            <th>DOB</th>
                            <th>Address1</th>
                            <th>Address2</th>
                            <th>Address3</th>
                            <th>Address4</th>
                            <th>Address5</th>
                            <th>Contact No</th>
                            <th>Email</th>
                            <th>Members</th>
                            <th>Field Code</th>
                            <th>Vehicle Code</th>
                        </tr>
                        </thead>
                        <tbody id="staffTbody">
                        {/* Use JavaScript to populate this table dynamically */}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
