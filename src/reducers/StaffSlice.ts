import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Staff } from "../models/Staff";

const initialState: Staff[] = [
    new Staff("ST001", "John", "Doe", "Manager", "MALE", "2020-01-15", "1985-05-20", "123 Main St", "Apt 1", "City", "State", "12345", "555-1234", "john.doe@example.com", 3, "F001", "V001"),
    new Staff("ST002", "Jane", "Smith", "Supervisor", "FEMALE", "2019-03-10", "1990-07-15", "456 Elm St", "Apt 2", "City", "State", "67890", "555-5678", "jane.smith@example.com", 2, "F002", "V002"),
    new Staff("ST003", "Alice", "Johnson", "Worker", "FEMALE", "2021-06-20", "1995-09-25", "789 Oak St", "Apt 3", "City", "State", "11223", "555-9101", "alice.johnson@example.com", 1, "F003", "V003"),
    new Staff("ST004", "Bob", "Brown", "Technician", "MALE", "2018-11-05", "1988-11-30", "101 Pine St", "Apt 4", "City", "State", "44556", "555-1122", "bob.brown@example.com", 4, "F004", "V004"),
    new Staff("ST005", "Charlie", "Davis", "Engineer", "MALE", "2022-02-15", "1992-03-10", "202 Maple St", "Apt 5", "City", "State", "77889", "555-3344", "charlie.davis@example.com", 5, "F005", "V005")
];

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
