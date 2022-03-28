import { createSlice } from "@reduxjs/toolkit";

export const errorSlice = createSlice({
  name: "error",
  initialState: {
    msg: null,
    id: null,
    status: null, 
  },
  reducers: {
    setError: (state, action) => {
      state.msg = action.payload.msg;
      state.id = action.payload.id;
      state.status = action.payload.status;
    },
    clearError: (state) => {
        state.msg = null;
        state.id = null;
        state.status = null;
    },
  },
});

// ACTIONS exports
export const { setError, clearError } = errorSlice.actions;

export default errorSlice.reducer;
