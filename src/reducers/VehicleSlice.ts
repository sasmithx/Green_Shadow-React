import { Vehicle } from "../models/Vehicle.ts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Vehicle[] = [
    new Vehicle("V001", "ABC123", "CAR", "PETROL", "AVAILABLE", "S001", "No remarks"),
    new Vehicle("V002", "DEF456", "TRUCK", "DIESEL", "NOT", "S002", "Needs maintenance"),
    new Vehicle("V003", "GHI789", "TRACTOR", "DIESEL", "AVAILABLE", "S003", "Newly acquired"),
    new Vehicle("V004", "JKL012", "VAN", "PETROL", "AVAILABLE", "S004", "In good condition"),
    new Vehicle("V005", "MNO345", "SUV", "PETROL", "NOT", "S005", "Under repair")
];

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