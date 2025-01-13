// import { Key } from "react";
// import { Crop } from "../../models/Crop.ts";
// import { Vehicle } from "../../models/Vehicle.ts";
// import { Equipment } from "../../models/Equipment.ts";
// import { User } from "../../models/User.ts";
// import { Staff } from "../../models/Staff.ts";
// import { HeadingModel } from "../../components/HeadingModel.tsx";
// import { DashboardStats } from "./DashboardStats.tsx";
// import { DashboardOrDeleteSection } from "../DashboardOrDeleteSection.tsx";
// import { useSelector } from "react-redux";
import "./Dashboard.css"

export function Dashboard() {
    // const crops = useSelector((state: { crops: Crop[] }) => state.crops);
    // const vehicles = useSelector((state: { vehicles: Vehicle[] }) => state.vehicles);
    // const equipments = useSelector((state: { equipments: Equipment[] }) => state.equipments);
    // const users = useSelector((state: { users: User[] }) => state.users);
    // const staff = useSelector((state: { staff: Staff[] }) => state.staff);

    return (
        // <div className="page-container space-y-8">
        //     <div className="flex items-center justify-between">
        //         <HeadingModel>Dashboard</HeadingModel>
        //         <div className="flex gap-4">
        //             <DashboardStats label="Total Crops" value={crops.length} />
        //             <DashboardStats label="Total Vehicles" value={vehicles.length} />
        //             <DashboardStats label="Total Equipments" value={equipments.length} />
        //             <DashboardStats label="Total Users" value={users.length} />
        //             <DashboardStats label="Total Staff" value={staff.length} />
        //         </div>
        //     </div>
        //     <div className="section-grid">
        //         <DashboardOrDeleteSection title="Crops">
        //             {crops.map((crop: Crop, index: Key) => (
        //                 <div key={index} className="card">
        //                     <p className="card-title">{crop.cropCode}</p>
        //                 </div>
        //             ))}
        //         </DashboardOrDeleteSection>
        //         <DashboardOrDeleteSection title="Vehicles">
        //             {vehicles.map((vehicle: Vehicle, index: Key) => (
        //                 <div key={index} className="card">
        //                     <p className="card-title">{vehicle.vehicleCode}</p>
        //                 </div>
        //             ))}
        //         </DashboardOrDeleteSection>
        //         <DashboardOrDeleteSection title="Equipments">
        //             {equipments.map((equipment: Equipment, index: Key) => (
        //                 <div key={index} className="card">
        //                     <p className="card-title">{equipment.type}</p>
        //                 </div>
        //             ))}
        //         </DashboardOrDeleteSection>
        //         <DashboardOrDeleteSection title="Users">
        //             {users.map((user: User, index: Key) => (
        //                 <div key={index} className="card">
        //                     <p className="card-title">{user.id}</p>
        //                 </div>
        //             ))}
        //         </DashboardOrDeleteSection>
        //         <DashboardOrDeleteSection title="Staff">
        //             {staff.map((staffMember: Staff, index: Key) => (
        //                 <div key={index} className="card">
        //                     <p className="card-title">{staffMember.staffId}</p>
        //                 </div>
        //             ))}
        //         </DashboardOrDeleteSection>
        //     </div>
        // </div>
        <>
        </>
    );
}
