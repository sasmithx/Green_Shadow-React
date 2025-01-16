import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Staff } from "../models/Staff";

const initialState: Staff[] = [];

const staffSlice = createSlice({
    name: 'staff',
    initialState,
    reducers: {
        addStaff: (state, action: PayloadAction<Staff>) => {
            state.push(action.payload);
        },
        updateStaff: (state, action: PayloadAction<Staff>) => {
            return state.map((staff) => staff.staffId === action.payload.staffId
                ? action.payload
                : staff
            );
        },
        deleteStaff: (state, action: PayloadAction<string>) => {
            return state.filter((staff) => staff.staffId !== action.payload);
        }
    }
});

export const { addStaff, updateStaff, deleteStaff } = staffSlice.actions;
export default staffSlice.reducer;
