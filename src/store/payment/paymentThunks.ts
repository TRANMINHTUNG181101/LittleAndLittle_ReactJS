import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';
import { submitPayment } from '../../service/firebase';
import { paymentStart, paymentSuccess, paymentFailure } from './paymentSlice';
import { Action } from 'redux';


interface PaymentInfo {
  packageName: string;
  price: string;
  quantity: number;
  date: string | null;
  name: string;
  phone: string;
  email: string;
  amount: number;
  cardNumber: string;
  cardHolderName: string;
  expirationDate: string | null;
  cvv: string;
}

export const submitPaymentAction = (
  paymentInfo: PaymentInfo
): ThunkAction<void, RootState, unknown, Action<string>> => async (dispatch) => {
  try {
    const { packageName, price, quantity, date, name, phone, email, amount, cardNumber, cardHolderName, expirationDate, cvv } = paymentInfo;
    dispatch(paymentStart());
    await submitPayment({ packageName, price, quantity, date, name, phone, email, amount, cardNumber, cardHolderName, expirationDate, cvv });
    dispatch(paymentSuccess());
  } catch (error) {
    dispatch(paymentFailure("Lỗi khi gửi mail"));
  }
};
