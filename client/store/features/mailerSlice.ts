import { createSlice } from "@reduxjs/toolkit";

export type MailerStateType = {
  visible: boolean;
}

const initialState: MailerStateType = {
  visible: false,
};

const mailerSlice = createSlice({
  name: "mailer",
  initialState,
  reducers: {
    showMailer: (state) => {
      state.visible = true;
    },
    hideMailer: (state) => {
      state.visible = false;
    },
  },
});

export const { showMailer, hideMailer } = mailerSlice.actions;
export default mailerSlice.reducer;