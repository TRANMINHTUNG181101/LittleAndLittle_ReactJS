import "./EventPage.css";
import Flag1 from "../../images/Frame (5).png";
import Flag2 from "../../images/Group (5).png";
import EventItem from "../../components/EventItem/EventItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageTitle from "../../images/Sự kiện nổi bật.png";
import ImageEvent from "../../images/Rectangle 1.png";
import ImageEvent1 from "../../images/Rectangle 1 (1).png";
import ImageEvent2 from "../../images/Rectangle 1 (2).png";

const items = [
  {
    name: "Sự kiện 1",
    price: "25.000 VNĐ",
    img: ImageEvent2,
    time: "30/05/2021 - 01/06/2021",
  },
  {
    name: "Sự kiện 2",
    price: "30.000 VNĐ",
    img: ImageEvent,
    time: "30/05/2021 - 01/06/2021",
  },
  {
    name: "Sự kiện 3",
    price: "50.000 VNĐ",
    img: ImageEvent1,
    time: "30/05/2021 - 01/06/2021",
  },
  {
    name: "Sự kiện 4",
    price: "55.000 VNĐ",
    img: ImageEvent2,
    time: "30/05/2021 - 01/06/2021",
  },
  {
    name: "Sự kiện 5",
    price: "75.000 VNĐ",
    img: ImageEvent,
    time: "30/05/2021 - 01/06/2021",
  },
  {
    name: "Sự kiện 6",
    price: "100.000 VNĐ",
    img: ImageEvent1,
    time: "30/05/2021 - 01/06/2021",
  },
];

function EventPage() {
  const settings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="event-page">
      <img src={ImageTitle} alt="" className="title__event" />
      <img src={Flag1} alt="" className="flag1" />
      <img src={Flag2} alt="" className="flag2" />
      <div className="bg"></div>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index}>
            <EventItem
              name={item.name}
              price={item.price}
              img={item.img}
              time={item.time}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default EventPage;
