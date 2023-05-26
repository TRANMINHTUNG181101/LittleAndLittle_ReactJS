import "./PaymentPage.css";
import PaymentForm from "../../components/PaymentForm/PaymentForm";
import ImagePerson from "../../images/Trini_Arnold_Votay1 2.png";
import ImageTitle from "../../images/Thanh toán.png";

function PaymentPage() {
  return (
    <div className="payment-page">
      <img src={ImageTitle} alt="" className="title-payment" />
      <PaymentForm />
      <img src={ImagePerson} className="person" />
    </div>
  );
}

export default PaymentPage;
