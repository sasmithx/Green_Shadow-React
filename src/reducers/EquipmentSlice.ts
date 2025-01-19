import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Equipment } from "../models/Equipment";

const initialState: Equipment[] = [
    new Equipment("EQ001", "Tractor", "MECHANICAL", "AVAILABLE", 5, "ST001", "FI001"),
    new Equipment("EQ002", "Harvester", "MECHANICAL", "NOT", 2, "ST002", "FI002"),
    new Equipment("EQ003", "Sprayer", "ELECTRICAL", "AVAILABLE", 10, "ST003", "FI003"),
    new Equipment("EQ004", "Plow", "MECHANICAL", "AVAILABLE", 7, "ST004", "FI004"),
    new Equipment("EQ005", "Seeder", "MECHANICAL", "NOT", 3, "ST005", "FI005")
];

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