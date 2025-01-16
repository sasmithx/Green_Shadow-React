import { ActionButton } from "../../components/ActionButtonModal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/Store";
import { addStaff, updateStaff, deleteStaff } from "../../reducers/StaffSlice";
import { useState } from "react";
import { Staff as StaffModel } from "../../models/Staff";

export function Staff() {
    const dispatch = useDispatch();
    const staffList = useSelector((state: RootState) => state.staff.staffList);
    const [staff, setStaff] = useState<StaffModel | null>(null);

    const inputStyle = { backgroundColor: "#558e55" };
    const buttonStyle = { backgroundColor: "#5d755d" };

    const genderOptions = [
        { value: "MALE", label: "Male" },
        { value: "FEMALE", label: "Female" },
    ];

    const fieldCodeOptions = [{ value: "", label: "Select Field Code" }];
    const vehicleCodeOptions = [{ value: "", label: "Select Vehicle Code" }];

    const handleSave = () => {
        if (staff) {
            dispatch(addStaff(staff));
            setStaff(null);
        }
    };

    const handleUpdate = () => {
        if (staff) {
            dispatch(updateStaff(staff));
            setStaff(null);
        }
    };

    const handleDelete = () => {
        if (staff) {
            dispatch(deleteStaff(staff));
            setStaff(null);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setStaff(prev => ({ ...prev, [name]: value } as StaffModel));
    };

    return (
        <div className="container">
            <div className="container-fluid mt-3">
                <h2 className="text-center mb-4" style={{ backgroundColor: "#5d755d", color: "white" }}>Staff</h2>
                <form id="staffForm">
                    <div className="form-section">
                        <div className="row">
                            <div className="col-md-3 mb-3">
                                <label htmlFor="staffId1">Staff ID</label>
                                <input type="text" className="form-control" id="staffId1" name="staffId" value={staff?.staffId || ''} style={inputStyle} onChange={handleChange} />
                            </div>
                            <div className="col-md-3 mb-3">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" className="form-control" id="firstName" name="firstName" required style={inputStyle} onChange={handleChange} />
                            </div>
                            <div className="col-md-3 mb-3">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" className="form-control" id="lastName" name="lastName" required style={inputStyle} onChange={handleChange} />
                            </div>
                            <div className="col-md-3 mb-3">
                                <label htmlFor="designation">Designation</label>
                                <input type="text" className="form-control" id="designation" name="designation" required style={inputStyle} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 mb-3">
                                <label htmlFor="gender">Gender</label>
                                <select className="form-control" id="gender" name="gender" style={inputStyle} onChange={handleChange}>
                                    {genderOptions.map(option => (
                                        <option key={option.value} value={option.value}>{option.label}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-md-3 mb-3">
                                <label htmlFor="joinedDate">Joined Date</label>
                                <input type="date" className="form-control" id="joinedDate" name="joinedDate" required style={inputStyle} onChange={handleChange} />
                            </div>
                            <div className="col-md-3 mb-3">
                                <label htmlFor="dob">Date of Birth</label>
                                <input type="date" className="form-control" id="dob" name="dob" required style={inputStyle} onChange={handleChange} />
                            </div>
                            <div className="col-md-3 mb-3">
                                <label htmlFor="addressLine1">Address Line 1</label>
                                <input type="text" className="form-control" id="addressLine1" name="addressLine1" required style={inputStyle} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3 mb-3">
                                <label htmlFor="addressLine2">Address Line 2</label>
                                <input type="text" className="form-control" id="addressLine2" name="addressLine2" required style={inputStyle} onChange={handleChange} />
                            </div>
                            <div className="col-md-3 mb-3">
                                <label htmlFor="addressLine3">Address Line 3</label>
                                <input type="text" className="form-control" id="addressLine3" name="addressLine3" required style={inputStyle} onChange={handleChange} />
                            </div>
                            <div className="col-md-3 mb-3">
                                <label htmlFor="addressLine4">Address Line 4</label>
                                <input type="text" className="form-control" id="addressLine4" name="addressLine4" required style={inputStyle} onChange={handleChange} />
                            </div>
                            <div className="col-md-3 mb-3">
                                <label htmlFor="addressLine5">Address Line 5</label>
                                <input type="text" className="form-control" id="addressLine5" name="addressLine5" required style={inputStyle} onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                    <div className="form-section">
                        <div className="row">
                            <div className="col-md-3 mb-3">
                                <label htmlFor="contactNo">Contact No</label>
                                <input type="text" className="form-control" id="contactNo" name="contactNo" required style={inputStyle} onChange={handleChange} />
                            </div>
                            <div className="col-md-3 mb-3">
                                <label htmlFor="email1">Email</label>
                                <input type="email" className="form-control" id="email1" name="email" required style={inputStyle} onChange={handleChange} />
                            </div>
                            <div className="col-md-3 mb-3">
                                <label htmlFor="fieldCode1">Field Code</label>
                                <select className="form-control" id="fieldCode1" name="fieldCode" style={inputStyle} onChange={handleChange}>
                                    {fieldCodeOptions.map(option => (
                                        <option key={option.value} value={option.value}>{option.label}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-md-3 mb-3">
                                <label htmlFor="vCode">Vehicle Code</label>
                                <select className="form-control" id="vCode" name="vcode" style={inputStyle} onChange={handleChange}>
                                    {vehicleCodeOptions.map(option => (
                                        <option key={option.value} value={option.value}>{option.label}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2 mb-3">
                                <label htmlFor="members">Members</label>
                                <input type="number" className="form-control" id="members" name="members" style={inputStyle} onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3 mb-4">
                        <div className="col-md-12 d-flex justify-content-start gap-3">
                            <ActionButton id="saveStaffBtn" label="SAVE" style={buttonStyle} onClick={handleSave} />
                            <ActionButton id="updateStaffBtn" label="UPDATE" style={buttonStyle} onClick={handleUpdate} />
                            <ActionButton id="deleteStaffBtn" label="DELETE" style={buttonStyle} onClick={handleDelete} />
                        </div>
                    </div>
                </form>
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
                            <tbody id="staffTboady">
                            {Array.isArray(staffList) && staffList.map((s) => (
                                <tr key={s.staffId}>
                                    <td>{s.staffId}</td>
                                    <td>{s.firstName}</td>
                                    <td>{s.lastName}</td>
                                    <td>{s.designation}</td>
                                    <td>{s.gender}</td>
                                    <td>{s.joinedDate}</td>
                                    <td>{s.dob}</td>
                                    <td>{s.addressLine1}</td>
                                    <td>{s.addressLine2}</td>
                                    <td>{s.addressLine3}</td>
                                    <td>{s.addressLine4}</td>
                                    <td>{s.addressLine5}</td>
                                    <td>{s.contactNo}</td>
                                    <td>{s.email}</td>
                                    <td>{s.members}</td>
                                    <td>{s.fieldCode}</td>
                                    <td>{s.vcode}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}