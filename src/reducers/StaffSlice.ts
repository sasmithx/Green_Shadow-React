// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { Staff } from "../../models/Staff";
//
// interface StaffState {
//     staffList: Staff[];
// }
//
// const initialState: StaffState = {
//     staffList: [],
// };
//
// const staffSlice = createSlice({
//     name: "staff",
//     initialState,
//     reducers: {
//         addStaff: (state, action: PayloadAction<Staff>) => {
//             state.staffList.push(action.payload);
//         },
//         updateStaff: (state, action: PayloadAction<Staff>) => {
//             const index = state.staffList.findIndex(staff => staff.staffId === action.payload.staffId);
//             if (index !== -1) {
//                 state.staffList[index] = action.payload;
//             }
//         },
//         deleteStaff: (state, action: PayloadAction<string>) => {
//             state.staffList = state.staffList.filter(staff => staff.staffId !== action.payload);
//         },
//     },
// });
//
// export const { addStaff, updateStaff, deleteStaff } = staffSlice.actions;
// export default staffSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Staff } from "../../models/Staff";

interface StaffState {
    staffList: Staff[];
}

const initialState: StaffState = {
    staffList: [
        {
            staffId: "1",
            firstName: "John",
            lastName: "Doe",
            designation: "Manager",
            gender: "MALE",
            joinedDate: "2022-01-01",
            dob: "1990-01-01",
            addressLine1: "123 Main St",
            addressLine2: "Apt 4B",
            addressLine3: "",
            addressLine4: "",
            addressLine5: "",
            contactNo: "1234567890",
            email: "john.doe@example.com",
            members: 5,
            fieldCode: "FC001",
            vcode: "VC001"
        },
        {
            staffId: "2",
            firstName: "Jane",
            lastName: "Smith",
            designation: "Developer",
            gender: "FEMALE",
            joinedDate: "2021-06-15",
            dob: "1992-05-20",
            addressLine1: "456 Elm St",
            addressLine2: "",
            addressLine3: "",
            addressLine4: "",
            addressLine5: "",
            contactNo: "0987654321",
            email: "jane.smith@example.com",
            members: 3,
            fieldCode: "FC002",
            vcode: "VC002"
        }
    ],
};

const staffSlice = createSlice({
    name: "staff",
    initialState,
    reducers: {
        addStaff: (state, action: PayloadAction<Staff>) => {
            state.staffList.push(action.payload);
        },
        updateStaff: (state, action: PayloadAction<Staff>) => {
            const index = state.staffList.findIndex(staff => staff.staffId === action.payload.staffId);
            if (index !== -1) {
                state.staffList[index] = action.payload;
            }
        },
        deleteStaff: (state, action: PayloadAction<string>) => {
            state.staffList = state.staffList.filter(staff => staff.staffId !== action.payload);
        },
    },
});

export const { addStaff, updateStaff, deleteStaff } = staffSlice.actions;
export default staffSlice.reducer;