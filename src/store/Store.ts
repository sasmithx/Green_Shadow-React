import {configureStore} from "@reduxjs/toolkit";
// import CropSlice from "../reducers/CropSlice.ts";
// import EquipmentSlice from "../reducers/EquipmentSlice.ts";
// import FieldSlice from "../reducers/FieldSlice.ts";
import VehicleSlice from "../reducers/VehicleSlice.ts";
import StaffSlice from "../reducers/StaffSlice.ts";

export const store = configureStore({
    reducer: {
        // crop: CropSlice,
        // equipment: EquipmentSlice,
        // field: FieldSlice,
        vehicle: VehicleSlice,
        staff: StaffSlice,
    }
});