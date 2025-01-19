import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Crop } from "../models/Crop";

const initialState: Crop[] = [
    new Crop("CR001", "Wheat", "Triticum aestivum", "wheat.jpg", "Grain", 100, "Winter", "F001", "Field 1"),
    new Crop("CR002", "Corn", "Zea mays", "corn.jpg", "Grain", 200, "Summer", "F002", "Field 2"),
    new Crop("CR003", "Rice", "Oryza sativa", "rice.jpg", "Grain", 150, "Monsoon", "F003", "Field 3"),
    new Crop("CR004", "Soybean", "Glycine max", "soybean.jpg", "Legume", 120, "Summer", "F004", "Field 4"),
    new Crop("CR005", "Barley", "Hordeum vulgare", "barley.jpg", "Grain", 180, "Spring", "F005", "Field 5")
];

const cropSlice = createSlice({
    name: 'crop',
    initialState,
    reducers: {
        addCrop: (state, action: PayloadAction<Crop>) => {
            state.push(action.payload);
        },
        updateCrop: (state, action: PayloadAction<Crop>) => {
            return state.map((crop) => crop.cropCode === action.payload.cropCode
                ? action.payload
                : crop
            );
        },
        deleteCrop: (state, action: PayloadAction<Crop>) => {
            return state.filter((crop) => crop.cropCode !== action.payload.cropCode);
        }
    }
});

export const { addCrop, updateCrop, deleteCrop } = cropSlice.actions;
export default cropSlice.reducer;