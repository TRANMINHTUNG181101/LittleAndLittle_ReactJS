import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MailState {
  isSending: boolean;
  error: string | null;
}

const initialState: MailState = {
  isSending: false,
  error: null,
};

const mailSlice = createSlice({
  name: 'mail',
  initialState,
  reducers: {
    sendMailStart(state) {
      state.isSending = true;
      state.error = null;
    },
    sendMailSuccess(state) {
      state.isSending = false;
      state.error = null;
    },
    sendMailFailure(state, action: PayloadAction<string>) {
      state.isSending = false;
      state.error = action.payload;
      console.log(action.payload)
    },
  },
});

export const { sendMailStart, sendMailSuccess, sendMailFailure } = mailSlice.actions;

export default mailSlice.reducer;