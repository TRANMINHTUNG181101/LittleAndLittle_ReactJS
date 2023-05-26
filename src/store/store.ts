import { configureStore, combineReducers } from '@reduxjs/toolkit';
import paymentReducer from './payment/paymentSlice';
import mailReducer from './mail/mailSlice';

const rootReducer = combineReducers({
  payment: paymentReducer,
  mail: mailReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;