
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PaymentState {
  loading: boolean;
  error: string | null;
  paymentSuccess: boolean;
}

const initialState: PaymentState = {
  loading: false,
  error: null,
 paymentSuccess: false,
};

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    paymentStart: (state) => {
      state.loading = true;
      state.error = null;
      state.paymentSuccess = false;
    },
    paymentSuccess: (state) => {
      state.loading = false;
      state.error = null;
      state.paymentSuccess = true;
    },
    paymentFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
      state.paymentSuccess = false;
    },
  },
});

export const { paymentStart, paymentSuccess, paymentFailure } = paymentSlice.actions;

export default paymentSlice.reducer;