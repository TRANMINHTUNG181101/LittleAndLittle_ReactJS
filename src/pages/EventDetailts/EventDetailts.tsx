import "./EventDetailts.css";
import ImageDetailts from "../../images/Rectangle 1 (2).png";
import ImageCalendar from "../../images/Vector.png";
import { useLocation } from "react-router-dom";
import Flag1 from "../../images/Frame (5).png";
import Flag2 from "../../images/Group (5).png";

function EventDetailts() {
  const location = useLocation();
  const { img, name, price, time } = location.state;
  return (
    <div className="event-detailts">
      <img src={Flag1} alt="" className="flag1" />
      <img src={Flag2} alt="" className="flag2" />
      <div className="event-detailts__content">
        <div className="event-detailts__info">
          <div className="event-detailts__desc">
            <div className="event-detailts__info__item1">
              <img
                src={img}
                alt=""
                className="event-detailts__info__item1__img"
              />
              <div className="event-detailts__info__item1__info">
                <div className="time">
                  <img src={ImageCalendar} alt="" />
                  <span>{time}</span>
                </div>
                <h3>Đầm sen Park</h3>
                <h4>{price}</h4>
              </div>
            </div>
            <div className="event-detailts__info__item2">
              <p>
                <span>Lorem Ipsum</span> is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic sdsd typesetting, remaining cssa
                essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, of
                Lorem Ipsum.
              </p>
            </div>
            <div className="event-detailts__info__item3">
              <img src={ImageDetailts} alt="" />
              <div className="event-detailts__info__item1__info">
                <p>
                  Lorem Ipsum is not simply random text. It has roots in a piece
                  of classical Latin literature from 45 BC, making it over 2000
                  years old. words, consectetur, from a Lorem Ipsum passage, and
                  going through the cites of the word in classical literature,{" "}
                </p>
              </div>
            </div>
            <div className="event-detailts__info__item4">
              <div className="event-detailts__info__item1__info">
                <p>
                  Lorem Ipsum is not simply random text. It has roots in a piece
                  of classical Latin literature from 45 BC, making it over 2000
                  years old. words, consectetur, from a Lorem Ipsum passage, and
                  going through the cites of the word in classical literature,{" "}
                </p>
              </div>
              <img src={ImageDetailts} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetailts;
