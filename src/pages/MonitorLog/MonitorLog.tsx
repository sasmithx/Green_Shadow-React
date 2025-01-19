import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/Store";
import { addLog } from "../../reducers/LogSlice";
import { Log } from "../../models/Log";

export function MonitorLog() {
    const dispatch = useDispatch();
    const logList = useSelector((state: RootState) => state.log.logs);
    const fieldList = useSelector((state: RootState) => state.field.fields);
    const [log, setLog] = useState<Log | null>(null);

    const handleSave = () => {
        if (log) {
            dispatch(addLog(log));
            setLog(null);
            const form = document.getElementById("logForm") as HTMLFormElement;
            if (form) {
                form.reset();
            }
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setLog(prev => ({ ...prev, [name]: value } as Log));
    };

    const handleRowDoubleClick = (lg: Log) => {
        setLog(lg);
    };

    return (
        <div className="container">
            <h2 className="text-center mb-4 mt-3" style={{ backgroundColor: "#5d755d", color: "white" }}>Monitor Log</h2>

            <button type="button" className="btn btn-dark w-25" style={{ backgroundColor: "#5d755d" }} id="navLog">Logs</button>
            <button type="button" className="btn btn-dark w-25" style={{ backgroundColor: "#5d755d" }} id="navCrop">Crop Details</button>

            <section id="log-page" className="container-fluid mt-3">
                <form id="logForm">
                    <div className="row justify-content-around">
                        <div className="form-group row">
                            <div className="col-md-4 w-25">
                                <label htmlFor="logCode">Log Code</label>
                                <input type="text" className="form-control" style={{ backgroundColor: "#558e55" }} id="logCode" name="logCode" required value={log?.logCode || ""} onChange={handleChange} />
                            </div>
                            <div className="col-md-3 mb-3">
                                <label htmlFor="logDate">Log Date</label>
                                <input type="date" className="form-control" style={{ backgroundColor: "#558e55" }} id="logDate" name="logDate" required value={log?.logDate || ""} onChange={handleChange} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <div className="col-md-4" style={{ width: 500 }}>
                                <label htmlFor="logDetail">Log Details</label>
                                <input type="text" className="form-control" style={{ backgroundColor: "#558e55" }} id="logDetail" name="logDetails" required value={log?.logDetails || ""} onChange={handleChange} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <div className="col-md-4 w-25">
                                <label htmlFor="role">Role</label>
                                <select className="form-control" style={{ backgroundColor: "#558e55" }} id="role" name="UserRole" value={log?.UserRole || ""} onChange={handleChange}>
                                    <option value="ADMINISTRATIVE">ADMINISTRATIVE</option>
                                    <option value="MANAGER">MANAGER</option>
                                    <option value="SCIENTIST">SCIENTIST</option>
                                </select>
                            </div>
                            <div className="col-md-4 w-25">
                                <label htmlFor="fieldCode">Field Code</label>
                                <select className="form-control" style={{ backgroundColor: "#558e55" }} id="fieldCode" name="Field" value={log?.Field || ""} onChange={handleChange}>
                                    <option>Select Field</option>
                                    {fieldList.map(field => (
                                        <option key={field.fieldCode} value={field.fieldCode}>{field.fieldCode}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="p-lg-3 mt-3 mb-3 col-md-12 d-flex justify-content-start gap-3">
                        <button type="button" className="btn btn-dark" style={{ backgroundColor: "#5d755d" }} id="saveLog" onClick={handleSave}>SAVE</button>
                    </div>
                </form>

                <table className="table table-bordered table-striped table-hover" id="logTable" style={{ marginTop: 20 }}>
                    <thead className="table-header">
                    <tr>
                        <th scope="col">Log Code</th>
                        <th scope="col">Log Date</th>
                        <th scope="col">Log Details</th>
                        <th scope="col">Role</th>
                        <th scope="col">Field Code</th>
                    </tr>
                    </thead>
                    <tbody id="tblLog">
                    {logList.map((lg) => (
                        <tr key={lg.logCode} onDoubleClick={() => handleRowDoubleClick(lg)}>
                            <td>{lg.logCode}</td>
                            <td>{lg.logDate}</td>
                            <td>{lg.logDetails}</td>
                            <td>{lg.UserRole}</td>
                            <td>{lg.Field}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
}
