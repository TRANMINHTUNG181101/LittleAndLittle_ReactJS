import "./ContactForm.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendEmail } from "../../store/mail/mailThunks";
import { RootState } from "../../store/store";
import { AnyAction } from "redux";
import Modal from "../Modal/Modal";

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const isSending = useSelector((state: RootState) => state.mail.isSending);
  const error = useSelector((state: RootState) => state.mail.error);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(
      sendEmail(name, email, phone, address, message) as unknown as AnyAction
    )
      .then(() => {
        handleOpenModal();
        resetForm();
      })
      .catch(() => {
        console.log("Lỗi");
      });
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setMessage("");
  };

  return (
    <div className="contact_form">
      <div className="contact_form__content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          ac mollis justo. Etiam volutpat tellus quis risus volutpat, ut posuere
          ex facilisis.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Tên"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              pattern="^0[0-9]{9}$"
              placeholder="Số điện thoại"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="text"
              placeholder="Địa chỉ"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="form-group">
            <textarea
              placeholder="Lời nhắn"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button disabled={isSending}></button>
        </form>
      </div>
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <p>
          Gửi liên hệ thành công.
          <br /> Vui lòng kiên nhẫn đợi phản hồi từ chúng tôi, bạn nhé!.
        </p>
      </Modal>
    </div>
  );
}

export default ContactForm;
