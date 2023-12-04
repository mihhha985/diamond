import { createSlice } from '@reduxjs/toolkit';

export interface ProductsState {
  visible?: boolean;
  isLogin?: boolean;
}

const initialState: ProductsState = {
  visible: false,
  isLogin: true,
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    showProfile: (state) => {
      state.visible = true;
    }, 
    hideProfile: (state) => {
      state.visible = false;
    },
    setLogin: (state) => {
      state.isLogin = true;
    },
    setRegister: (state) => {
      state.isLogin = false;
    }
  }
});

export const { showProfile, hideProfile, setLogin, setRegister } = profileSlice.actions;
export default profileSlice.reducer;
