import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/t0Do/todoSlice';

export const store = configureStore({
    reducer: todoReducer
});