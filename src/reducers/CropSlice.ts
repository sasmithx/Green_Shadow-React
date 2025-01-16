import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Crop } from "../models/Crop";

const initialState: Crop[] = [];

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