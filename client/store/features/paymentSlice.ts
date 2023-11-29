import { createSlice } from "@reduxjs/toolkit";

export type PaymentStateType = {
  visible: boolean;
};

const initialState: PaymentStateType = {
  visible: false,
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    showPayment: (state) => {
      state.visible = true;
    },
    hidePayment: (state) => {
      state.visible = false;
    },
  },
});

export const { showPayment, hidePayment } = paymentSlice.actions;
export default paymentSlice.reducer;