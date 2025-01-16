// import {configureStore} from "@reduxjs/toolkit";
//
// // import EquipmentSlice from "../reducers/EquipmentSlice.ts";
// // import FieldSlice from "../reducers/FieldSlice.ts";
// import VehicleSlice from "../reducers/VehicleSlice.ts";
// import StaffSlice from "../reducers/StaffSlice.ts";
// import CropSlice from "../reducers/CropSlice.ts";
//
// export const store = configureStore({
//     reducer: {
//         // crop: CropSlice,
//         // equipment: EquipmentSlice,
//         // field: FieldSlice,
//         crop: CropSlice,
//         vehicle: VehicleSlice,
//         staff: StaffSlice,
//     }
// });

import { configureStore } from "@reduxjs/toolkit";
import VehicleSlice from "../reducers/VehicleSlice.ts";
import StaffSlice from "../reducers/StaffSlice.ts";
import CropSlice from "../reducers/CropSlice.ts";
import EquipmentSlice from "../reducers/EquipmentSlice.ts";

export const store = configureStore({
    reducer: {
        crop: CropSlice,
        vehicle: VehicleSlice,
        staff: StaffSlice,
        equipment: EquipmentSlice,
    }
});

// Define RootState type
export type RootState = ReturnType<typeof store.getState>;