import "./Ticket.css";
import ImageQR from "../../images/image 3.png";
import ImageTick from "../../images/tick 1.png";

interface TicketProps {
  date: string;
}
function Ticket({ date }: TicketProps) {
  const formattedDate = new Date(date);

  const day = formattedDate.getDate();
  const month = formattedDate.getMonth() + 1;
  const year = formattedDate.getFullYear();

  const formattedDateString = `${day}/${month}/${year}`;

  return (
    <div className="ticket" id="ticket">
      <img src={ImageQR} alt="" />
      <h3>ALT20210501</h3>
      <h4>VÉ CỔNG</h4>
      <span>---</span>
      <p>Ngày sử dụng: {formattedDateString}</p>
      <img src={ImageTick} alt="" />
    </div>
  );
}

export default Ticket;
