import "./PaymentForm.css";
import ImageCenter from "../../images/Vector (11).png";
import ImageTag2 from "../../images/Group 2.png";
import ImageTag1 from "../../images/Group 1 (3).png";
import ImageIconCalendar from "../../images/Frame (2).png";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { submitPaymentAction } from "../../store/payment/paymentThunks";
import { AnyAction } from "redux";
import { useDispatch } from "react-redux";
import ModalWarning from "../ModalWarning/ModalWarning";

interface PaymentFormState {
  paymentAmount: string;
  ticketQuantity: number;
  selectedDate: string | null;
  fullName: string;
  phone: string;
  email: string;
  cardNumber: string;
  cardHolderName: string;
  expirationDate: string | null;
  cvv: string;
}

const initialPaymentFormState: PaymentFormState = {
  paymentAmount: "50.000",
  ticketQuantity: 1,
  selectedDate: null,
  fullName: "",
  phone: "",
  email: "",
  cardNumber: "",
  cardHolderName: "",
  expirationDate: null,
  cvv: "",
};

function PaymentForm() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  let navigate = useNavigate();
  const {
    package: selectedPackage,
    quantity = 1,
    date = "",
    name = "",
    email = "",
    phone = "",
  } = location.state || {};

  if (selectedPackage == "package1") {
    initialPaymentFormState.paymentAmount = (quantity * 25000).toString();
  }
  if (selectedPackage == "package2") {
    initialPaymentFormState.paymentAmount = (quantity * 50000).toString();
  }
  if (selectedPackage == "package3") {
    initialPaymentFormState.paymentAmount = (quantity * 75000).toString();
  }
  if (selectedPackage == "package4") {
    initialPaymentFormState.paymentAmount = (quantity * 100000).toString();
  }

  const [paymentFormState, setPaymentFormState] = useState<PaymentFormState>({
    ...initialPaymentFormState,
    fullName: name,
    email,
    ticketQuantity: quantity,
    selectedDate: date,
    phone,
  });

  const dispatch = useDispatch();

  const calculatePaymentAmount = (ticketQuantity: number) => {
    let newTicketQuantity = "";
    if (selectedPackage == "package1") {
      newTicketQuantity = (ticketQuantity * 25000).toString();
    }
    if (selectedPackage == "package2") {
      newTicketQuantity = (ticketQuantity * 50000).toString();
    }
    if (selectedPackage == "package3") {
      newTicketQuantity = (ticketQuantity * 75000).toString();
    }
    if (selectedPackage == "package4") {
      newTicketQuantity = (ticketQuantity * 100000).toString();
    }
    return newTicketQuantity;
  };

  const handlePaymentAmountChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPaymentFormState((prevState) => ({
      ...prevState,
      paymentAmount: e.target.value,
    }));
  };

  const handleTicketQuantityChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newTicketQuantity = Number(e.target.value);
    const newPaymentAmount = calculatePaymentAmount(newTicketQuantity);

    setPaymentFormState((prevState) => ({
      ...prevState,
      ticketQuantity: newTicketQuantity,
      paymentAmount: newPaymentAmount,
    }));
  };

  const handleDateChange = (date: Date | null) => {
    const formattedDate = date ? date.toISOString() : "";

    setPaymentFormState((prevState) => ({
      ...prevState,
      selectedDate: formattedDate,
    }));
  };

  const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentFormState((prevState) => ({
      ...prevState,
      fullName: e.target.value,
    }));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentFormState((prevState) => ({
      ...prevState,
      phone: e.target.value,
    }));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentFormState((prevState) => ({
      ...prevState,
      email: e.target.value,
    }));
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentFormState((prevState) => ({
      ...prevState,
      cardNumber: e.target.value,
    }));
  };

  const handleCardHolderNameChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPaymentFormState((prevState) => ({
      ...prevState,
      cardHolderName: e.target.value,
    }));
  };

  const handleExpirationDateChange = (date: Date | null) => {
    const formattedDate = date ? date.toISOString() : "";
    setPaymentFormState((prevState) => ({
      ...prevState,
      expirationDate: formattedDate,
    }));
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentFormState((prevState) => ({
      ...prevState,
      cvv: e.target.value,
    }));
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let isEmptyField = false;
    if (
      selectedPackage === "" ||
      paymentFormState.paymentAmount === "" ||
      paymentFormState.ticketQuantity.toString() === "" ||
      paymentFormState.selectedDate === "" ||
      paymentFormState.fullName === "" ||
      paymentFormState.phone === "" ||
      paymentFormState.email === "" ||
      paymentFormState.cardNumber === "" ||
      paymentFormState.cardHolderName === "" ||
      paymentFormState.expirationDate === "" ||
      paymentFormState.cvv === ""
    ) {
      isEmptyField = true;
    }
    if (isEmptyField) {
      handleOpenModal();
      return;
    }
    dispatch(
      submitPaymentAction({
        packageName: selectedPackage,
        price: paymentFormState.paymentAmount,
        quantity: paymentFormState.ticketQuantity,
        date: paymentFormState.selectedDate,
        name: paymentFormState.fullName,
        phone: paymentFormState.phone,
        email: paymentFormState.email,
        amount: parseFloat(paymentFormState.paymentAmount),
        cardNumber: paymentFormState.cardNumber,
        cardHolderName: paymentFormState.cardHolderName,
        expirationDate: paymentFormState.expirationDate,
        cvv: paymentFormState.cvv,
      }) as unknown as AnyAction
    )
      .then(() => {
        navigate("/success", {
          state: {
            quality: paymentFormState.ticketQuantity,
            date: paymentFormState.selectedDate,
          },
        });
      })
      .catch(() => {
        console.log("Lỗi");
      });
  };

  return (
    <div className="payment-form">
      <div className="payment-form__left">
        <div className="payment-form__left__content">
          <img src={ImageTag1} alt="" className="tag1" />
          <form action="#">
            <div className="form__group" style={{ gap: "30px" }}>
              <div className="form__group__item">
                <label htmlFor="#">Số tiền thanh toán</label>
                <input
                  type="text"
                  required
                  value={paymentFormState.paymentAmount + "đ"}
                  onChange={handlePaymentAmountChange}
                  readOnly
                />
              </div>
              <div className="form__group__item">
                <label htmlFor="">Số lượng vé</label>
                <div className="form__group__item__wrap">
                  <input
                    type="number"
                    style={{ width: "90px" }}
                    required
                    value={paymentFormState.ticketQuantity}
                    onChange={handleTicketQuantityChange}
                    min="1"
                    inputMode="numeric"
                  />
                  <span>vé</span>
                </div>
              </div>
              <div className="form__group__item">
                <label htmlFor="">Ngày sử dụng</label>
                <DatePicker
                  selected={
                    paymentFormState.selectedDate
                      ? new Date(paymentFormState.selectedDate)
                      : null
                  }
                  onChange={handleDateChange}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Ngày sử dụng"
                />
              </div>
            </div>
            <div className="form__group">
              <div className="form__group__item">
                <label htmlFor="">Thông tin liên hệ</label>
                <input
                  type="text"
                  required
                  value={paymentFormState.fullName}
                  onChange={handleFullNameChange}
                />
              </div>
            </div>
            <div className="form__group">
              <div className="form__group__item">
                <label htmlFor="">Điện thoại</label>
                <input
                  type="tel"
                  pattern="^0[0-9]{9}$"
                  required
                  value={paymentFormState.phone}
                  onChange={handlePhoneChange}
                />
              </div>
            </div>
            <div className="form__group">
              <div className="form__group__item">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  required
                  value={paymentFormState.email}
                  onChange={handleEmailChange}
                />
              </div>
            </div>
            <br></br>
            <br></br>
          </form>
        </div>
      </div>
      <div className="payment-form__center">
        <img src={ImageCenter} alt="" />
      </div>
      <div className="payment-form__right">
        <div className="payment-form__right__content">
          <img src={ImageTag2} alt="" />
          <form onSubmit={handleSubmit}>
            <div className="form__group">
              <div className="form__group__item">
                <label htmlFor="">Số thẻ</label>
                <input
                  type="text"
                  required
                  pattern="[0-9]*"
                  value={paymentFormState.cardNumber}
                  onChange={handleCardNumberChange}
                  placeholder="Số thẻ"
                />
              </div>
            </div>
            <div className="form__group">
              <div className="form__group__item">
                <label htmlFor="">Họ tên chủ thẻ</label>
                <input
                  type="text"
                  pattern="[A-Za-z\s]*"
                  required
                  value={paymentFormState.cardHolderName}
                  onChange={handleCardHolderNameChange}
                  placeholder="Họ tên chủ thẻ"
                />
              </div>
            </div>
            <div className="form__group">
              <div className="form__group__item">
                <label htmlFor="">Ngày hết hạn</label>
                <div className="form__group__item__wrap">
                  <DatePicker
                    selected={
                      paymentFormState.expirationDate
                        ? new Date(paymentFormState.expirationDate)
                        : null
                    }
                    onChange={handleExpirationDateChange}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Ngày hết hạn"
                  />
                  <img src={ImageIconCalendar} alt="" />
                </div>
              </div>
            </div>
            <div className="form__group">
              <div className="form__group__item">
                <label htmlFor="">CVV/CVC</label>
                <input
                  type="text"
                  required
                  pattern="[0-9]*"
                  maxLength={3}
                  value={paymentFormState.cvv}
                  onChange={handleCvvChange}
                  placeholder="***"
                />
              </div>
            </div>
            <button></button>
          </form>
        </div>
      </div>
      <ModalWarning isOpen={isOpen} onClose={handleCloseModal}>
        <p>
          Hình như đã có lỗi xảy ra khi thanh toán...
          <br /> Vui lòng kiểm tra lại thông tin liên hệ, thông tin thẻ và thử
          lại.
        </p>
      </ModalWarning>
    </div>
  );
}

export default PaymentForm;
