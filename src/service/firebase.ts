import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBtzsbi2ywtJGAfhnUN2QKRmInrN2JVePg",
  authDomain: "project-c653f.firebaseapp.com",
  databaseURL: "https://project-c653f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "project-c653f",
  storageBucket: "project-c653f.appspot.com",
  messagingSenderId: "1011946270236",
  appId: "1:1011946270236:web:53ee378cca6b4f829ff9d9",
  measurementId: "G-22HY6RBWM5"
};

interface MailData {
  name: string;
  email: string;
  phone: string;
  address: string;
  message: string;
}

interface PaymentData{
  packageName: string;
  price: String;
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

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export const sendMail = async (mailData: MailData): Promise<void> => {
  try {
    const mailRef = ref(database, "mails");
    await push(mailRef, mailData);
    console.log("Mail sent to Realtime Database");
  } catch (error) {
    console.error("Error sending mail to Realtime Database:", error);
  }
};
export const submitPayment = async (paymentData: PaymentData): Promise<void> => {
  try {
    console.log(paymentData)
    const paymentRef = ref(database, "payments");
    await push(paymentRef, paymentData);
    console.log("Payment sent to Realtime Database");
  } catch (error) {
    console.error("Error sending payment to Realtime Database:", error);
  }
};