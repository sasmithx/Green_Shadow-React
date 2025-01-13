import {Vehicle} from "../models/Vehicle.ts";
import {createSlice} from "@reduxjs/toolkit";

const initialState : Vehicle[] = [];

const vehicleSlice = createSlice({
    name: 'vehicle',
    initialState,
    reducers: {
        addVehicle: (state, action) => {
            state.push(action.payload);
        },
        updateVehicle: (state, action) => {
            return state.map((vehicle: Vehicle) => vehicle.vehicleCode === action.payload.vehicleCode
                ? action.payload
                : vehicle
            );
        },
        deleteVehicle: (state, action) => {
            return state.filter((vehicle: Vehicle) => vehicle.vehicleCode !== action.payload.vehicleCode);
        }
    }
});

export const {addVehicle, updateVehicle, deleteVehicle} = vehicleSlice.actions;
export default vehicleSlice.reducer;