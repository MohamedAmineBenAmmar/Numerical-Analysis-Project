import { createSlice } from "@reduxjs/toolkit";

export const successSlice = createSlice({
  name: "success",
  initialState: {
    msg: null,
    id: null,
    status: null, 
  },
  reducers: {
    setSuccess: (state, action) => {
      state.msg = action.payload.msg;
      state.id = action.payload.id;
      state.status = action.payload.status;
    },
    clearSuccess: (state) => {
        state.msg = null;
        state.id = null;
        state.status = null;
    },
  },
});

// ACTIONS exports
export const { setSuccess, clearSuccess } = successSlice.actions;

export default successSlice.reducer;
