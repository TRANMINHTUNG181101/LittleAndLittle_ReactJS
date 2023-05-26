import "./ContactInfo.css";
import ImageAddress from "../../images/address 1.png";
import ImagePhone from "../../images/telephone 2.png";
import ImageMail from "../../images/mail-inbox-app 1.png";

function ContactInfo() {
  return (
    <div className="contact-info">
      <ul>
        <li>
          <div className="contact-info__item">
            <div className="contact-info__item__content">
              <img src={ImageAddress} alt="" />
              <div className="contact-info__item__desc">
                <h3>Địa chỉ:</h3>
                <p>86/33 Âu Cơ, Phường 9, Quận Tân Bình, TP. Hồ Chí Minh</p>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="contact-info__item">
            <div className="contact-info__item__content">
              <img src={ImageMail} alt="" />
              <div className="contact-info__item__desc">
                <h3>Email:</h3>
                <p>investigate@your-site.com</p>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div className="contact-info__item">
            <div className="contact-info__item__content">
              <img src={ImagePhone} alt="" />
              <div className="contact-info__item__desc">
                <h3>Điện thoại</h3>
                <p>+84 145 689 798</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default ContactInfo;
