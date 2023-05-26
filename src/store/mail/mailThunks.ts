import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';
import { sendMail } from '../../service/firebase';
import { sendMailStart, sendMailSuccess, sendMailFailure } from './mailSlice';
import { Action } from 'redux';

export const sendEmail = (
  name: string,
  email: string,
  phone: string,
  address: string,
  message: string
): ThunkAction<void, RootState, unknown, Action<string>> => async (dispatch) => {
  try {
    dispatch(sendMailStart());
    await sendMail({ name, email, phone, address, message });
    dispatch(sendMailSuccess());
  } catch (error) {
    dispatch(sendMailFailure("Lỗi khi gửi mail!!!"));
  }
};