import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type loginState = {
  value: any;
};

const initialState: loginState = {
  value: [],
};

export const EmployeeSlice = createSlice({
  name: 'employeeList',
  initialState,
  reducers: {
    addEmployee: (state, action: PayloadAction<any>) => {
      state.value = action.payload;
    },
  },
});

export const {addEmployee} = EmployeeSlice.actions;
export default EmployeeSlice.reducer;
