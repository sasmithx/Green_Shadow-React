// src/reducers/FieldSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Field } from "../models/Field";

interface FieldState {
    fields: Field[];
}

const initialState: FieldState = {
    fields: [],
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