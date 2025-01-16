import { useSelector } from "react-redux";
import { RootState } from "../../store/Store";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import "./Dashboard.css";

export function Dashboard() {
    const crops = useSelector((state: RootState) => state.crop.length);
    const vehicles = useSelector((state: RootState) => state.vehicle.length);
    const equipments = useSelector((state: RootState) => state.equipment.length);
    const staff = useSelector((state: RootState) => state.staff.length);

    const data = [
        { name: "Crops", value: crops },
        { name: "Vehicles", value: vehicles },
        { name: "Equipments", value: equipments },
        { name: "Staff", value: staff },
    ];

    return (
        <div className="container-fluid py-2">
            <div className="row" style={{ paddingLeft: "100px" }}>
                <div className="ms-3">
                    <h3 className="mb-0 h4 font-weight-bolder">Welcome to Green Shadow PVT-LTD.</h3>
                    <p className="mb-4">
                        Offers real-time insights to streamline sustainability management.
                    </p>
                </div>
                <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                    <div className="card">
                        <div className="card-header p-2 ps-3">
                            <div className="d-flex justify-content-between">
                                <div>
                                    <p className="text-sm mb-0 text-capitalize">Total Crops</p>
                                    <h4 className="mb-0">{crops}</h4>
                                </div>
                            </div>
                        </div>
                        <hr className="dark horizontal my-0" />
                        <div className="card-footer p-2 ps-3">
                            <p className="mb-0 text-sm"><span className="text-success font-weight-bolder">Healthy </span>crops Available</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                    <div className="card">
                        <div className="card-header p-2 ps-3">
                            <div className="d-flex justify-content-between">
                                <div>
                                    <p className="text-sm mb-0 text-capitalize">Total Vehicles</p>
                                    <h4 className="mb-0">{vehicles}</h4>
                                </div>
                            </div>
                        </div>
                        <hr className="dark horizontal my-0" />
                        <div className="card-footer p-2 ps-3">
                            <p className="mb-0 text-sm"><span className="text-success font-weight-bolder">Active </span>vehicles available</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                    <div className="card">
                        <div className="card-header p-2 ps-3">
                            <div className="d-flex justify-content-between">
                                <div>
                                    <p className="text-sm mb-0 text-capitalize">Total Equipments</p>
                                    <h4 className="mb-0">{equipments}</h4>
                                </div>
                            </div>
                        </div>
                        <hr className="dark horizontal my-0" />
                        <div className="card-footer p-2 ps-3">
                            <p className="mb-0 text-sm"><span className="text-success font-weight-bolder">Strong </span>equipments available</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6">
                    <div className="card">
                        <div className="card-header p-2 ps-3">
                            <div className="d-flex justify-content-between">
                                <div>
                                    <p className="text-sm mb-0 text-capitalize">Total Staff</p>
                                    <h4 className="mb-0">{staff}</h4>
                                </div>
                            </div>
                        </div>
                        <hr className="dark horizontal my-0" />
                        <div className="card-footer p-2 ps-3">
                            <p className="mb-0 text-sm"><span className="text-success font-weight-bolder">Active </span>staff in this system</p>
                        </div>
                    </div>
                </div>
            </div>

            <section className="bar-chart">
                <BarChart
                    width={600}
                    height={414}
                    data={data}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip />
                    <Legend />
                    <Bar
                        dataKey="value"
                        fill={({ name }: { name: string }) => {
                            switch (name) {
                                case 'Crops':
                                    return '#e4b1b1';
                                case 'Vehicles':
                                    return '#b4dc99';
                                case 'Equipments':
                                    return '#81c5dd';
                                case 'Staff':
                                    return 'black';
                                default:
                                    return '#8884d8';
                            }
                        }}
                    />
                </BarChart>
            </section>
        </div>
    );
}