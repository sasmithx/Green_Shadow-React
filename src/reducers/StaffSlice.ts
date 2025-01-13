import {Staff} from "../models/Staff.ts";
import {createSlice} from "@reduxjs/toolkit";

const initialState: Staff[] = [];

const staffSlice = createSlice({
    name: 'staff',
    initialState,
    reducers: {
        addStaff: (state, action) => {
            state.push(action.payload);
        },
        updateStaff: (state, action) => {
            return state.map((staff: Staff) => staff.staffId === action.payload.staffId
                ? action.payload
                : staff
            );
        },
        deleteStaff: (state, action) => {
            return state.filter((staff: Staff) => staff.staffId !== action.payload.staffId);
        }
    }
});

export const {addStaff, updateStaff, deleteStaff} = staffSlice.actions;
export default staffSlice.reducer;