import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type loginState = {
  value: {
    username: string;
    password: string;
  };
};

const initialState: loginState = {
  value: {
    username: '',
    password: '',
  },
};

export const LoginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    addLogin: (state, action: PayloadAction<any>) => {
      state.value = action.payload;
    },
  },
});

export const {addLogin} = LoginSlice.actions;
export default LoginSlice.reducer;
