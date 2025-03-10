import { configureStore } from "@reduxjs/toolkit";
import VehicleSlice from "../reducers/VehicleSlice.ts";
import StaffSlice from "../reducers/StaffSlice.ts";
import CropSlice from "../reducers/CropSlice.ts";
import EquipmentSlice from "../reducers/EquipmentSlice.ts";
import FieldSlice from "../reducers/FieldSlice.ts";
import LogSlice from "../reducers/LogSlice.ts";

export const store = configureStore({
    reducer: {
        crop: CropSlice,
        vehicle: VehicleSlice,
        staff: StaffSlice,
        equipment: EquipmentSlice,
        field: FieldSlice,
        log: LogSlice,
    }
});

// Define RootState type
export type RootState = ReturnType<typeof store.getState>;