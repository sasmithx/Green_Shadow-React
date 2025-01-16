import {configureStore} from "@reduxjs/toolkit";

// import EquipmentSlice from "../reducers/EquipmentSlice.ts";
// import FieldSlice from "../reducers/FieldSlice.ts";
import VehicleSlice from "../reducers/VehicleSlice.ts";
import StaffSlice from "../reducers/StaffSlice.ts";
import CropSlice from "../reducers/CropSlice.ts";

export const store = configureStore({
    reducer: {
        // crop: CropSlice,
        // equipment: EquipmentSlice,
        // field: FieldSlice,
        crop: CropSlice,
        vehicle: VehicleSlice,
        staff: StaffSlice,
    }
});