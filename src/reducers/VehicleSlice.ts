import { Vehicle } from "../models/Vehicle.ts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Vehicle[] = [];

const vehicleSlice = createSlice({
    name: 'vehicle',
    initialState,
    reducers: {
        addVehicle: (state, action: PayloadAction<Vehicle>) => {
            state.push(action.payload);
        },
        updateVehicle: (state, action: PayloadAction<Vehicle>) => {
            return state.map((vehicle) => vehicle.vehicleCode === action.payload.vehicleCode
                ? action.payload
                : vehicle
            );
        },
        deleteVehicle: (state, action: PayloadAction<Vehicle>) => {
            return state.filter((vehicle) => vehicle.vehicleCode !== action.payload.vehicleCode);
        }
    }
});

export const { addVehicle, updateVehicle, deleteVehicle } = vehicleSlice.actions;
export default vehicleSlice.reducer;