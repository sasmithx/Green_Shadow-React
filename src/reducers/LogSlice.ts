import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Log } from "../models/Log";

interface LogState {
    logs: Log[];
}

const initialState: LogState = {
    logs: [
        new Log("LOG001", "2024-01-01", "System initialization", "ADMINISTRATIVE", "FI001"),
        new Log("LOG002", "2024-01-02", "Data migration completed", "MANAGER", "FI002"),
        new Log("LOG003", "2024-01-03", "User login issue resolved", "SCIENTIST", "FI003"),
        new Log("LOG004", "2024-01-04", "Database backup", "ADMINISTRATIVE", "FI004"),
        new Log("LOG005", "2024-01-05", "New feature deployment", "MANAGER", "FI005")
    ],
};

const logSlice = createSlice({
    name: "log",
    initialState,
    reducers: {
        addLog: (state, action: PayloadAction<Log>) => {
            state.logs.push(action.payload);
        },
        updateLog: (state, action: PayloadAction<Log>) => {
            const index = state.logs.findIndex(log => log.logCode === action.payload.logCode);
            if (index !== -1) {
                state.logs[index] = action.payload;
            }
        },
        deleteLog: (state, action: PayloadAction<string>) => {
            state.logs = state.logs.filter(log => log.logCode !== action.payload);
        },
    },
});

export const { addLog, updateLog, deleteLog } = logSlice.actions;
export default logSlice.reducer;