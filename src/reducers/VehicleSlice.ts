import { Vehicle } from "../models/Vehicle.ts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Vehicle[] = [
    new Vehicle("VE001", "ABC123", "CAR", "PETROL", "AVAILABLE", "ST001", "No remarks"),
    new Vehicle("VE002", "DEF456", "TRUCK", "DIESEL", "NOT", "ST002", "Needs maintenance"),
    new Vehicle("VE003", "GHI789", "TRACTOR", "DIESEL", "AVAILABLE", "ST003", "Newly acquired"),
    new Vehicle("VE004", "JKL012", "VAN", "PETROL", "AVAILABLE", "ST004", "In good condition"),
    new Vehicle("VE005", "MNO345", "SUV", "PETROL", "NOT", "ST005", "Under repair")
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