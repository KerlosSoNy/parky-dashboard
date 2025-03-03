import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  userData: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    mobile: string;
    type: string | null;
    image: string;
    status: string;
  };
}

const initialState: UserState = {
  userData: {
    id: 0,
    first_name: '',
    last_name: '',
    email: '',
    mobile: '',
    type: null,
    image: '',
    status: '',
  },
};

const Login = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setUserData(state, action: PayloadAction<any>) {
      const user = action.payload.user;
      state.userData = {
        id: user.id || 0,
        first_name: user.first_name || '',
        last_name: user.last_name || '',
        email: user.email || '',
        mobile: user.mobile || '',
        type: user.type || null,
        image: user.image || '',
        status: user.status || '',
      };
    },
  },
});

export const { setUserData } = Login.actions;
export default Login.reducer;
