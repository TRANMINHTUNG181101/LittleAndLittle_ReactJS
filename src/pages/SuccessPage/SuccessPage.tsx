import "./SuccessPage.css";
import Ticket from "../../components/Ticket/Ticket";
import ImagePerson from "../../images/Alvin_Arnold_Votay1 1.png";
import ImageTitle from "../../images/Thanh toán thành công.png";
import { useLocation, Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import html2canvas from "html2canvas";

interface SuccessPageState {
  quality: number;
  date: string;
}
function SuccessPage() {
  const location = useLocation();
  const { quality, date } = location.state as SuccessPageState;
  const quantity = quality || 1;
  const settings = {
    speed: 500,
    slidesToShow: quantity > 4 ? 4 : quantity,
    slidesToScroll: 1,
  };

  const handleDownload = () => {
    const ticketElements = document.getElementsByClassName(
      "ticket"
    ) as HTMLCollectionOf<HTMLElement>;

    Array.from(ticketElements).forEach((ticketElement, index) => {
      html2canvas(ticketElement).then((canvas) => {
        const imageData = canvas.toDataURL("image/png");

        const a = document.createElement("a");
        a.href = imageData;
        a.download = `ticket_${index + 1}.png`;
        a.click();
      });
    });
  };
  return (
    <div className="success">
      <img src={ImageTitle} alt="" className="title" />
      <Slider {...settings}>
        {Array.from({ length: quantity }).map((_, index) => (
          <Ticket key={index} date={date.toString()} />
        ))}
      </Slider>
      <div className="success__wrap">
        <div className="success__content">
          <p className="success__quantity">Số lượng: {quantity} vé</p>
          <p className="success__pagination">
            Trang 1/{Math.ceil(quality / 4)}
          </p>
        </div>
      </div>
      <div className="success__btn">
        <button className="success__btn__1" onClick={handleDownload}></button>
        <Link to="/contact">
          <button className="success__btn__2"></button>
        </Link>
      </div>
      <img src={ImagePerson} alt="" className="person" />
    </div>
  );
}

export default SuccessPage;
