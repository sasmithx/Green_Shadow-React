import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Equipment } from "../models/Equipment";

const initialState: Equipment[] = [];

const equipmentSlice = createSlice({
    name: 'equipment',
    initialState,
    reducers: {
        addEquipment: (state, action: PayloadAction<Equipment>) => {
            state.push(action.payload);
        },
        updateEquipment: (state, action: PayloadAction<Equipment>) => {
            return state.map((equipment) => equipment.equipmentId === action.payload.equipmentId
                ? action.payload
                : equipment
            );
        },
        deleteEquipment: (state, action: PayloadAction<Equipment>) => {
            return state.filter((equipment) => equipment.equipmentId !== action.payload.equipmentId);
        }
    }
});

export const { addEquipment, updateEquipment, deleteEquipment } = equipmentSlice.actions;
export default equipmentSlice.reducer;