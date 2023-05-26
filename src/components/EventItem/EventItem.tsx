import "./EventItem.css";
import ImageCalendar from "../../images/Vector.png";
import { Link, useNavigate } from "react-router-dom";

interface EventItemProps {
  name: string;
  price: string;
  img: string;
  time: string;
}

const EventItem: React.FC<EventItemProps> = ({ name, price, img, time }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/event-detailts", {
      state: {
        name: name,
        price: price,
        img: img,
        time: time,
      },
    });
  };
  return (
    <div className="event-item">
      <img src={img} alt="" />
      <div className="event-item__info">
        <h3>{name}</h3>
        <span>Đầm sen Park</span>
        <div className="time">
          <img src={ImageCalendar} alt="" />
          <span>{time}</span>
        </div>
        <h4>{price}</h4>
        <button onClick={handleClick}></button>
      </div>
    </div>
  );
};

export default EventItem;
