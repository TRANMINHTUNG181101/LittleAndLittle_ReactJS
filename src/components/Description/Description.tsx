import "./Description.css";
import React, { useState } from "react";
import ImageCenter from "../../images/Vector (11).png";
import ImageStar from "../../images/Group (4).png";
import ImageTag from "../../images/Group 1 (2).png";
import ImageIconSelect from "../../images/Frame (1).png";
import ImageIconCalendar from "../../images/Frame (2).png";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Description() {
  const [selectedPackage, setSelectedPackage] = useState("");
  let navigate = useNavigate();
  const handlePackageSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPackage(e.target.value);
  };

  const [ticketQuantity, setTicketQuantity] = useState(1);
  const handleTicketQuantityChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTicketQuantity(parseInt(e.target.value));
  };

  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const [fullName, setFullName] = useState("");
  const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
  };

  const [phone, setPhone] = useState("");
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const [email, setEmail] = useState("");
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let obj = {
      package: selectedPackage,
      quantity: ticketQuantity,
      date: selectedDate,
      name: fullName,
      phone: phone,
      email: email,
    };
    navigate("/payment", { state: obj });
  };
  return (
    <div className="desc">
      <div className="desc__left">
        <div className="desc__left__content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            ac mollis justo. Etiam volutpat tellus quis risus volutpat, ut
            posuere ex facilisis
          </p>
          <p>
            Suspendisse iaculis libero lobortis condimentum gravida. Aenean
            auctor iaculis risus, lobortis molestie lectus consequat a.
          </p>
          <div className="desc__list">
            <ul>
              <li>
                <img src={ImageStar} />
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </span>
              </li>
              <li>
                <img src={ImageStar} />
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </span>
              </li>
              <li>
                <img src={ImageStar} />
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </span>
              </li>
              <li>
                <img src={ImageStar} />
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="desc__center">
        <img src={ImageCenter} alt="" />
      </div>
      <div className="desc__right">
        <div className="desc__right__content">
          <img src={ImageTag} alt="" />
          <form onSubmit={handleFormSubmit}>
            <div className="form__group">
              <select
                value={selectedPackage}
                onChange={handlePackageSelect}
                required
              >
                <option value="">--- Vui lòng chọn vé ----</option>
                <option value="package1">Vé thường</option>
                <option value="package2">Vé gia đình</option>
                <option value="package3">Vé cặp đôi</option>
                <option value="package4">Vé VIP</option>
              </select>
              <img src={ImageIconSelect} />
            </div>
            <div className="form__group">
              <input
                type="number"
                required
                placeholder="Số lượng vé"
                value={ticketQuantity}
                onChange={handleTicketQuantityChange}
                min="1"
                inputMode="numeric"
              />
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="dd/MM/yyyy"
                placeholderText="Ngày sử dụng"
              />
              <img src={ImageIconCalendar} />
            </div>
            <div className="form__group">
              <input
                type="text"
                pattern="[A-Za-zÀ-ÿ ]+"
                required
                placeholder="Họ và tên"
                value={fullName}
                onChange={handleFullNameChange}
              />
            </div>
            <div className="form__group">
              <input
                type="tel"
                pattern="^0[0-9]{9}$"
                required
                placeholder="Số điện thoại"
                value={phone}
                onChange={handlePhoneChange}
              />
            </div>
            <div className="form__group">
              <input
                type="email"
                required
                placeholder="Địa chỉ email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <button></button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Description;
