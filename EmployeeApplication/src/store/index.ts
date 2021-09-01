import {combineReducers, configureStore} from '@reduxjs/toolkit';
import LoginReducer from './LoginSlice';
import EmployeeReducer from './EmployeeSlice';

const reducers = {
  loginData: LoginReducer,
  employeeData: EmployeeReducer,
};

const combineReducer = combineReducers(reducers);

export const store = configureStore({
  reducer: combineReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
