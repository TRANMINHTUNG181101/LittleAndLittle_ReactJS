import "./ContactPage.css";
import ContactForm from "../../components/ContactForm/ContactForm";
import ImagePersion from "../../images/Alex_AR_Lay_Do shadow 1.png";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import ImageTitle from "../../images/Liên hệ.png";

function ContactPage() {
  return (
    <div className="ContactPage">
      <img src={ImageTitle} alt="" className="title__contact" />
      <ContactForm />
      <ContactInfo />
      <img src={ImagePersion} alt="" className="contact-person" />
    </div>
  );
}

export default ContactPage;
