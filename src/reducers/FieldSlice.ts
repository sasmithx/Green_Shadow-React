// src/reducers/FieldSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Field } from "../models/Field";

interface FieldState {
    fields: Field[];
}

const initialState: FieldState = {
    fields: [
        new Field("FI002", "Field 2", "Location 2", 20, "CR002", "Corn", "S002", "field2.jpg"),
        new Field("FI003", "Field 3", "Location 3", 15, "CR003", "Rice", "S003", "field3.jpg"),
        new Field("FI004", "Field 4", "Location 4", 25, "CR004", "Soybean", "S004", "field4.jpg"),
        new Field("FI005", "Field 5", "Location 5", 30, "CR005", "Barley", "S005", "field5.jpg")
    ],
};

const fieldSlice = createSlice({
    name: "field",
    initialState,
    reducers: {
        addField: (state, action: PayloadAction<Field>) => {
            state.fields.push(action.payload);
        },
        updateField: (state, action: PayloadAction<Field>) => {
            const index = state.fields.findIndex(field => field.fieldCode === action.payload.fieldCode);
            if (index !== -1) {
                state.fields[index] = action.payload;
            }
        },
        deleteField: (state, action: PayloadAction<Field>) => {
            state.fields = state.fields.filter(field => field.fieldCode !== action.payload.fieldCode);
        },
    },
});

export const { addField, updateField, deleteField } = fieldSlice.actions;
export default fieldSlice.reducer;