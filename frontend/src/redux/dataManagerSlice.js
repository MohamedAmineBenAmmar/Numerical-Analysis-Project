import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setError } from "./errorSlice";

import { setSuccess } from "./successSlice";

export const dataMangerSlice = createSlice({
  name: "dataManager",
  initialState: {
    data: null,
  },
  reducers: {
    getData: (state, action) => {
      state.data = action.payload;
    },
  },
});

// ACTIONS exports
export const { getData } = dataMangerSlice.actions;

export const gramSchmidtProcess = (data) => async (dispach) => {
  axios
    .post("/gram_schmidt_process/system_resolution", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      dispach(getData(res.data));
      dispach(setSuccess({ id: 'GRAM_SCHMIDT_PROCESS_SUCESS', status: 200, msg: null }))
    })
    .catch((err) => {
      console.log("error")
      console.log(err.response.data)
      dispach(setError({id: 'DETERMINANT_CALCULATION_ERROR', msg: err.response.data.detail, status: err.response.status}))
    });
};

export default dataMangerSlice.reducer;
