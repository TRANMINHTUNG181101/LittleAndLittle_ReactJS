import "./Header.css";
import ImageLogo from "../../images/Little & Little Logo (ngang) 1.png";
import { NavLink } from "react-router-dom";
import ImagePhone from "../../images/Frame 21.png";
import { textAlign } from "html2canvas/dist/types/css/property-descriptors/text-align";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={ImageLogo} />
      </div>
      <div className="header__nav">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Trang chủ
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/envent"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Sự kiện
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Liên hệ
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="header__contact">
        <img src={ImagePhone} alt="" />
        <span>0123456789</span>
      </div>
    </div>
  );
}

export default Header;
