import { configureStore } from '@reduxjs/toolkit'
import  dataMangerReducer  from './dataManagerSlice';
import successReducer from './successSlice';
import errorReducer from './errorSlice'

export default configureStore({
    reducer: {
        dataManager: dataMangerReducer,
        success: successReducer,
        error: errorReducer
    },
});